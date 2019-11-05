/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Guid } from '@dolittle/core';
import { ICommand } from './internal';

/**
 * Represents a request for issuing a {Command}
 */
export class CommandRequest {
    /**
     * The correlation id of the transaction
     *
     * @readonly
     */
    correlationId = Guid.empty;

    /**
     * The artifact id of the command
     *
     * @readonly
     */
    type = Guid.empty;
    /**
     * The actual command content
     *
     * @readonly
     */
    content: any = {};

    /**
     * Initializes a new instance of {CommandRequest}
     * @param {string} type The 
     * @param {ICommand} command 
     */
    constructor(type: string, command: ICommand) {
        this.correlationId = Guid.create();
        this.type = type;
        this.content = command;
    }

    /**
     * Creates a {CommandRequest} from a {Command}
     * @param {ICommand} command 
     */
    static createFrom(command: ICommand) {
        return new CommandRequest(command.type, command);
    }
}
