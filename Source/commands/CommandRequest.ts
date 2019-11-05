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
    private _correlationId: string = Guid.empty;
    private _type: string = Guid.empty;
    private _content: any = {};

    /**
     * Initializes a new instance of {CommandRequest}
     * @param {string} type The 
     * @param {ICommand} command 
     */
    constructor(type: string, command: ICommand) {
        this._correlationId = Guid.create();
        this._type = type;
        this._content = command;
    }

    /**
     * The correlation id of the transaction
     *
     * @readonly
     */
    get correlationId() {
        return this._correlationId;
    }

    /**
     * The artifact id of the command
     *
     * @readonly
     */
    get type() {
        return this._type;
    }

    /**
     * The actual command content
     *
     * @readonly
     */
    get content() {
        return this._content;
    }

    /**
     * Creates a {CommandRequest} from a {Command}
     * @param {ICommand} command 
     */
    static createFrom(command: ICommand) {
        return new CommandRequest(command.type, command);
    }
}