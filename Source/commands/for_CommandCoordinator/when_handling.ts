/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCoordinator, ICommand } from '../internal';

describe('when handling', () => {
    let commandResult: any = {'something': 'result'};
    let requestUsed: Request;
    let fetchOptions: any;
    (global as any).fetch = (request: Request, options: any) => {
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

    beforeEach(() => {
        commandCoordinator.handle(command).then(r => result = r);
    });

    it("should pass along the result", () => result.should.equal(commandResult));
});