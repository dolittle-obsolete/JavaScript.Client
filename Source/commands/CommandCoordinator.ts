/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandRequest, ICommand, ICommandCoordinator } from './internal';

const beforeHandleCallbacks: Function[] = [];

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
     * @param {function} callback 
     */
    static beforeHandle(callback: Function) {
        beforeHandleCallbacks.push(callback);
    }

    /**
     * Handle a {Command}
     * @param {ICommand} command 
     */
    handle(command: ICommand) {
        let options = {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(CommandRequest.createFrom(command)),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        beforeHandleCallbacks.forEach(_ => _(options));
        return fetch(`${CommandCoordinator.apiBaseUrl}/api/Dolittle/Commands`, options as any)
            .then((response: Response) => response.json());
    }
}