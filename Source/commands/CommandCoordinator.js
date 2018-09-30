/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandRequest } from './CommandRequest'; 
import { Command } from './Command';

/**
 * Represents the coordinator of a {Command}
 */
export class CommandCoordinator {
    static apiBaseUrl = '';

    /**
     * Handle a {Command}
     * @param {Command} command 
     */
    handle(command) {
        return fetch(`${CommandCoordinator.apiBaseUrl}/api/Dolittle/Commands`, {
            method: 'POST',
            body: JSON.stringify(CommandRequest.createFrom(command)),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}