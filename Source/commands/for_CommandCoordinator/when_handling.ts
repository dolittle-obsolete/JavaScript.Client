/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { assert } from 'chai';
import { CommandCoordinator, ICommand } from '../index';

describe('when handling', () => {
    let commandResult: any = {something: 'result'};
    let requestUsed: Request;
    let fetchOptions: RequestInit;
    (global as any).fetch = (request: Request, options: RequestInit) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback: Function) => {
                let result = callback({
                    json: () => {
                        return commandResult;
                    }
                });

                return {
                    then: (callback: Function) => {
                        callback(result);
                    }
                }
            }
        }
    };
    let commandCoordinator: CommandCoordinator = new CommandCoordinator();
    let command: ICommand = {} as ICommand;
    let result: any;

    beforeEach(async () => {
        result = await commandCoordinator.handle(command);
    });

    it("should pass along the result", () => assert.deepEqual(result, commandResult));
});