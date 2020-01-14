// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { CommandResult } from './index';
import { ICommand } from '@dolittle/sdk.commands';

/**
 * Defines the coordinator of a {Command}
 */
export interface ICommandCoordinator {

    /**
     * Handle an {ICommand} and returns the response as json
     * @param {Command} command
     */
    handle(command: ICommand): Promise<CommandResult>
}
