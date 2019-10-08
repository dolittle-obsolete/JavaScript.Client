/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCoordinator } from '../CommandCoordinator';

const firstHeaderKey : string = 'fourty-two';
const firstHeaderValue : string = '42';
const secondHeaderKey : string = 'fourty-three';
const secondHeaderValue : string = '43';

describe('when handling with before handle callbacks', () => {
    let commandResult :any = { 'something': 'result' };
    let requestUsed: Request = null;
    let fetchOptions: any = null;
    global.fetch = (request: Request, options:any) => {
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
    let result:any = null;

    let first_callback : function = null;
    let second_callback : function = null;



    (beforeEach => {
        first_callback = sinon.spy(options => {
            options.headers[firstHeaderKey] = firstHeaderValue;
        });
        second_callback = sinon.spy(options => {
            options.headers[secondHeaderKey] = secondHeaderValue;
        });
        CommandCoordinator.beforeHandle(first_callback);
        CommandCoordinator.beforeHandle(second_callback);
        commandCoordinator.handle(command).then(r => result = r);
    })();

    it('call the first callback', () => first_callback.called.should.be.true);
    it('call the second callback', () => second_callback.called.should.be.true);
    it('should contain the first callbacks header value in fetch options', () => fetchOptions.headers[firstHeaderKey].should.equal(firstHeaderValue));
    it('should contain the second callbacks header value in fetch options', () => fetchOptions.headers[secondHeaderKey].should.equal(secondHeaderValue));
});