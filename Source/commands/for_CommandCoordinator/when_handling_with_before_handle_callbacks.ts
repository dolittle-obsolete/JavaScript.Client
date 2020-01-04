// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import sinon from 'sinon';
import { CommandCoordinator, ICommand } from '../index';

const firstHeaderKey = 'fourty-two';
const firstHeaderValue = '42';
const secondHeaderKey = 'fourty-three';
const secondHeaderValue = '43';

describe('when handling with before handle callbacks', () => {
    const commandResult: any = { 'something': 'result' };
    let requestUsed: Request;
    let fetchOptions: RequestInit;
    (global as any).fetch = (request: Request, options: RequestInit) => {
        requestUsed = request;
        fetchOptions = options;
        return {
            then: (callback: any) => {
                const result = callback({
                    json: () => {
                        return commandResult;
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
    const commandCoordinator: CommandCoordinator = new CommandCoordinator();
    const command: ICommand = {} as ICommand;
    let result: any;

    let first_callback: any;
    let second_callback: any;



    beforeEach(() => {
        first_callback = sinon.spy(options => {
            options.headers[firstHeaderKey] = firstHeaderValue;
        });
        second_callback = sinon.spy(options => {
            options.headers[secondHeaderKey] = secondHeaderValue;
        });
        CommandCoordinator.beforeHandle(first_callback);
        CommandCoordinator.beforeHandle(second_callback);
        commandCoordinator.handle(command).then(r => result = r);
    });

    it('call the first callback', () => first_callback.called.should.be.true);
    it('call the second callback', () => second_callback.called.should.be.true);
    it('should contain the first callbacks header value in fetch options', () => (fetchOptions.headers as any)[firstHeaderKey].should.equal(firstHeaderValue));
    it('should contain the second callbacks header value in fetch options', () => (fetchOptions.headers as any)[secondHeaderKey].should.equal(secondHeaderValue));
});
