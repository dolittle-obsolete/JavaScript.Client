// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { CommandRequest, CommandResponse, CommandResult, ICommand, ICommandInputValidators, ICommandCoordinator, CommandInputValidators } from './index';

const beforeHandleCallbacks: ((options: RequestInit) => void)[] = [];

/**
 * Represents an implementation of {ICommandCoordinator}
 *
 * @export
 * @class CommandCoordinator
 * @implements {ICommandCoordinator}
 */
export class CommandCoordinator implements ICommandCoordinator {
    static apiBaseUrl: string = '/api';

    /**
     * Initializes a new instance of the {CommandCoordinator} class.
     * @param {ICommandInputValidators} _commandInputValidators - The system for working with input validators.
     */
    constructor(private _commandInputValidators: ICommandInputValidators = new CommandInputValidators()) {
    }

    /**
     * Add a callback that gets called before handling a command with the fetch API option object
     * @param {(options: RequestInit) => void} callback
     */
    static beforeHandle(callback: (options: RequestInit) => void) {
        beforeHandleCallbacks.push(callback);
    }

    /** @inheritdoc */
    async handle(command: ICommand) {
        const validationResult = this._commandInputValidators.validate(command);
        if (!validationResult.isSuccess) {
            return new CommandResult(validationResult.brokenRules.filter(_ => true));
        }

        const options: RequestInit = {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(CommandRequest.createFrom(command)),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        beforeHandleCallbacks.forEach(callBack => callBack(options));
        const response = await fetch(`${CommandCoordinator.apiBaseUrl}/Dolittle/Commands`, options)
            .then(response => response.json());

        return CommandResult.fromResponse(response);
    }
}
