/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { QueryCoordinator } from '../QueryCoordinator';

const firstHeaderKey: string = 'fourty-two';
const firstHeaderValue: string = '42';
const secondHeaderKey: string = 'fourty-three';
const secondHeaderValue: string = '43';

describe('when executing with before execute handle callbacks', () => {
    let queryResult: any = { 'something': 'result' };
    let requestUsed: Request = null;
    let fetchOptions: any = null;
    global.fetch = (request, options) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback) => {
                let result = callback({
                    json: () => {
                        return queryResult;
                    }
                });

                return {
                    then: (callback) => {
                        callback(result);
                    }
                }
            }
        }
    };

    let queryCoordinator: QueryCoordinator = new QueryCoordinator();
    let result: any = null;
    let query: Query = {};

    let first_callback: function = null;
    let second_callback: function = null;
    


    (beforeEach => {
        first_callback = sinon.spy(options => {
            options.headers[firstHeaderKey] = firstHeaderValue;
        });
        second_callback = sinon.spy(options => {
            options.headers[secondHeaderKey] = secondHeaderValue;
        });
        QueryCoordinator.beforeExecute(first_callback);
        QueryCoordinator.beforeExecute(second_callback);

        queryCoordinator.execute(query).then(r => result = r);
    })();

    it('should call the first callback', () => first_callback.called.should.be.true);
    it('should call the second callback', () => second_callback.called.should.be.true);
    it('should contain the first callbacks header value in fetch options', () => fetchOptions.headers[firstHeaderKey].should.equal(firstHeaderValue));
    it('should contain the second callbacks header value in fetch options', () => fetchOptions.headers[secondHeaderKey].should.equal(secondHeaderValue));
})
