// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { assert } from 'chai';
import { CommandCoordinator, ICommand } from '../index';

describe('when handling', () => {
    const commandResult: any = {something: 'result'};
    let requestUsed: Request;
    let fetchOptions: RequestInit;
    (global as any).fetch = (request: Request, options: RequestInit) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback: Function) => {
                const result = callback({
                    json: () => {
                        return commandResult;
                    }
                });

                return {
                    then: (callback: Function) => {
                        callback(result);
                    }
                };
            }
        };
    };
    const commandCoordinator: CommandCoordinator = new CommandCoordinator();
    const command: ICommand = {} as ICommand;
    let result: any;

    beforeEach(async () => {
        result = await commandCoordinator.handle(command);
    });

    it('should pass along the result', () => assert.deepEqual(result, commandResult));
});
