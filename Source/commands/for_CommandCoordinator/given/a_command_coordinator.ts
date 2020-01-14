// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ICommandInputValidators, CommandCoordinator } from '../../index';
import sinon from 'sinon';

export class a_command_coordinator {
    commandInputValidators: ICommandInputValidators = {} as ICommandInputValidators;
    commandCoordinator: CommandCoordinator;

    constructor() {
        this.commandCoordinator = new CommandCoordinator(this.commandInputValidators);
    }

    beforeEach() {
        this.commandInputValidators.validate = sinon.stub().returns({isSuccess: true});
    }
}
