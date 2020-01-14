/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommand, CommandResponse } from './index';

/**
 * Defines the coordinator of a {Command}
 */
export interface ICommandCoordinator {

    /**
     * Handle an {ICommand} and returns the response as json
     * @param {Command} command
     */
    handle(command: ICommand): Promise<CommandResponse>
}
