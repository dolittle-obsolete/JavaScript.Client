/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCoordinator } from '../CommandCoordinator';

describe('when handling', () => {
    let commandResult: any = {'something': 'result'};
    let requestUsed: Request = null;
    let fetchOptions: any = null;
    global.fetch = (request: Request, options) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback) => {
                let result = callback({
                    json: () => {
                        return commandResult;
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
    let commandCoordinator: CommandCoordinator = new CommandCoordinator();
    let command: Command = {};
    let result: any = null;

    (beforeEach => {
        commandCoordinator.handle(command).then(r => result = r);
    })();

    it("should pass along the result", () => result.should.equal(commandResult));
});