// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_command_coordinator } from '../given/a_command_coordinator';
import { CommandResult } from '../../index';
import { ICommand } from '@dolittle/sdk.commands';
import sinon from 'sinon';

describe('and we continue to server', async () => {
    const context = new a_command_coordinator();

    const commandResponseLiteral = {
        json: sinon.stub()
    };
    (global as any).fetch = (request: Request, options: RequestInit) => {
        console.log('Hello world');
        return {
            then: (callback: Function) => {
                const result = callback(commandResponseLiteral);

                return {
                    then: (callback: Function) => {
                        callback(result);
                    }
                };
            }
        };
    };
    const command: ICommand = {} as ICommand;
    let result: CommandResult;

    beforeEach(async () => {
        commandResponseLiteral.json.reset();
        context.beforeEach();
        result = await context.commandCoordinator.handle(command);
    });

    it('should convert from result', () => commandResponseLiteral.json.calledOnce);
    it('should validate command', () => context.commandInputValidators.validate.should.be.calledOnce);
});
