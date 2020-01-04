/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { QueryCoordinator, IQuery } from '../index';
import sinon from 'sinon';

const firstHeaderKey: string = 'fourty-two';
const firstHeaderValue: string = '42';
const secondHeaderKey: string = 'fourty-three';
const secondHeaderValue: string = '43';

describe('when executing with before execute handle callbacks', () => {
    const queryResult: any = { 'something': 'result' };
    let requestUsed: Request;
    let fetchOptions: RequestInit;
    (global as any).fetch = (request: Request, options: RequestInit) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback: any) => {
                const result = callback({
                    json: () => {
                        return queryResult;
                    }
                });

                return {
                    then: (callback: any) => {
                        callback(result);
                    }
                };
            }
        };
    };

    const queryCoordinator: QueryCoordinator = new QueryCoordinator();
    let result: any = null;
    const query: IQuery = {} as IQuery;

    let first_callback: any;
    let second_callback: any;



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
    it('should contain the first callbacks header value in fetch options', () => (fetchOptions.headers as any)[firstHeaderKey].should.equal(firstHeaderValue));
    it('should contain the second callbacks header value in fetch options', () => (fetchOptions.headers as any)[secondHeaderKey].should.equal(secondHeaderValue));
});
