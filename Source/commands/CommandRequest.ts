/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Command } from './Command';
import { Guid } from '@dolittle/core';

/**
 * Represents a request for issuing a {Command}
 */
export class CommandRequest {
    correlationId: string = '';
    type: string = '';
    content: any = {};

    /**
     * Initializes a new instance of {CommandRequest}
     * @param {string} type 
     * @param {*} content 
     */
    constructor(type: string, content:any) {
        this.correlationId = Guid.create();
        this.type = type;
        this.content = content;
    }

    /**
     * Creates a {CommandRequest} from a {Command}
     * @param {Command} command 
     */
    static createFrom(command: Command) {
        var request: CommandRequest = new CommandRequest(command.type, command);
        return request;
    }
}