/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { QueryCoordinator, IQuery } from '../internal';
import { expect } from 'chai';

describe('when_executing', () => {
    let queryResult:any = { 'something': 'result' };
    let requestUsed: Request;
    let fetchOptions: any;
    (global as any).fetch = (request: Request, options: RequestInit) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback: any) => {
                let result = callback({
                    json: () => {
                        return queryResult;
                    }
                });

                return {
                    then: (callback: any) => {
                        callback(result);
                    }
                }
            }
        }
    };

    let queryCoordinator: QueryCoordinator = new QueryCoordinator();
    let result: any = null;
    let query: IQuery = {} as IQuery;

    (beforeEach => {
        queryCoordinator.execute(query).then(r => result = r);
    })();

    it('should pass an options object', () => expect(fetchOptions).to.not.be.undefined);
    it('should continue with the result coming back', () => result.should.equal(queryResult));
})