/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandRequest, ICommand, ICommandCoordinator, CommandResponse } from './internal';

const beforeHandleCallbacks: ((options: any) => void)[] = [];

/**
 * Represents an implementation of {ICommandCoordinator}
 *
 * @export
 * @class CommandCoordinator
 * @implements {ICommandCoordinator}
 */
export class CommandCoordinator implements ICommandCoordinator {
    static apiBaseUrl: string = '';

    /**
     * Add a callback that gets called before handling a command with the fetch API option object
     * @param {(options: any) => void} callback 
     */
    static beforeHandle(callback: (options: any) => void) {
        beforeHandleCallbacks.push(callback);
    }

    /**
     * Handle a {Command}
     * @param {ICommand} command 
     */
    async handle(command: ICommand) {
        let options = {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(CommandRequest.createFrom(command)),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        beforeHandleCallbacks.forEach(callBack => callBack(options));
        let response = await fetch(`${CommandCoordinator.apiBaseUrl}/api/Dolittle/Commands`, options as any)
            .then(response => response.json());

        return response as CommandResponse; 
    }
}