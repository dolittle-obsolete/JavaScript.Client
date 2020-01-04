// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { QueryCoordinator, IQuery } from '../index';
import { expect } from 'chai';

describe('when_executing', () => {
    const queryResult: any = { 'something': 'result' };
    let requestUsed: Request;
    let fetchOptions: any;
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

    (beforeEach => {
        queryCoordinator.execute(query).then(r => result = r);
    })();

    it('should pass an options object', () => expect(fetchOptions).to.not.be.undefined);
    it('should continue with the result coming back', () => result.should.equal(queryResult));
});
