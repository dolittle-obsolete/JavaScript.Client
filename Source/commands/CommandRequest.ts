// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid } from '@dolittle/rudiments';
import { ICommand } from '@dolittle/sdk.commands';

/**
 * Represents a request for issuing a {Command}
 */
export class CommandRequest {

    /**
     * The correlation id of the transaction
     *
     * @readonly
     */
    readonly correlationId: string;

    /**
     * The artifact id of the command
     *
     * @readonly
     */
    readonly type: string;

    /**
     * The actual command content
     *
     * @readonly
     */
    readonly content: any;

    /**
     * Initializes a new instance of {CommandRequest}
     * @param {string} type The
     * @param {ICommand} command
     */
    constructor(type: string, command: ICommand) {
        this.correlationId = Guid.create().toString();
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
