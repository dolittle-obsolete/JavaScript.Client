// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_command_coordinator } from '../given/a_command_coordinator';
import { CommandResult } from '../../index';
import { ICommand } from '@dolittle/sdk.commands';
import { CommandInputValidationResult } from '@dolittle/sdk.commands.validation';
import { BrokenRule } from '@dolittle/rules';
import sinon from 'sinon';

describe('and input validation fails', () => {
    const context = new a_command_coordinator();
    const command: ICommand = {} as ICommand;
    const brokenRule = {} as BrokenRule;
    const commandInputValidationResult = new CommandInputValidationResult([brokenRule]);

    let result: CommandResult;

    beforeEach(() => {
        context.beforeEach();
        context.commandInputValidators.validate = sinon.stub().returns(commandInputValidationResult);
        (global as any).fetch = sinon.stub();

        context.commandCoordinator.handle(command).then(r => result = r);
    });

    it('should not continue to server', () => (global as any).fetch.should.not.be.called);
    it('should return a non successful command result', () => result.isSuccess.should.be.false);
    it('should pass on the broken rule', () => result.brokenRules[0].should.equal(brokenRule));
});
