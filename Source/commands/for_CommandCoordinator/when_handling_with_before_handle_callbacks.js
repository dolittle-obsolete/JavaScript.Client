/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCoordinator } from '../CommandCoordinator';

describe('when handling with before handle callbacks', () => {
    let commandResult = { 'something': 'result' };
    let requestUsed = null;
    let fetchOptions = null;
    global.fetch = (request, options) => {
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
    let commandCoordinator = new CommandCoordinator();
    let command = {};
    let result = null;

    let first_callback = null;
    let second_callback = null;



    (beforeEach => {
        first_callback = sinon.stub();
        second_callback = sinon.stub();
        CommandCoordinator.beforeHandle(first_callback);
        CommandCoordinator.beforeHandle(second_callback);
        commandCoordinator.handle(command).then(r => result = r);
    })();

    it('call the first callback', () => first_callback.called.should.be.true);
    it('call the second callback', () => second_callback.called.should.be.true);
});