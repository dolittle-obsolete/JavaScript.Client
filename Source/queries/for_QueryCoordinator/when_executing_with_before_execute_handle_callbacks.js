/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { QueryCoordinator } from '../QueryCoordinator';

describe('when executing with before execute handle callbacks', () => {
    let queryResult = { 'something': 'result' };
    let requestUsed = null;
    let fetchOptions = null;
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

    let queryCoordinator = new QueryCoordinator();
    let result = null;
    let query = {};

    let first_callback = null;
    let second_callback = null;


    (beforeEach => {
        first_callback = sinon.stub();
        second_callback = sinon.stub();

        QueryCoordinator.beforeExecute(first_callback);
        QueryCoordinator.beforeExecute(second_callback);

        queryCoordinator.execute(query).then(r => result = r);
    })();


    it('call the first callback', () => first_callback.called.should.be.true);
    it('call the second callback', () => second_callback.called.should.be.true);
})