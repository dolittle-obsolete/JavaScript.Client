// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule } from '@dolittle/rules';
import { CommandResponse } from './index';

/**
 * Represents the result after handling a command
 */
export class CommandResult {

    /**
     * Initializes a new instance of the {CommandInputValidationResult} class.
     * @param {Array<BrokenRule>} _brokenRules - Any broken rules after evaluation.
     */
    constructor(private _brokenRules: Array<BrokenRule>) {
    }

    /**
     * Gets a value indicating whether or not the evaluation is successful.
     * @returns {boolean}
     */
    get isSuccess(): boolean {
        return this._brokenRules.length === 0;
    }

    /**
     * Gets any broken rules.
     * @returns {ReadonlyArray<BrokenRule>}
     */
    get brokenRules(): ReadonlyArray<BrokenRule> {
        return this._brokenRules;
    }

    /**
     * Create a {CommandResult} from a {CommandResponse}.
     * @param {CommandResponse} response - Response to create from.
     * @returns {CommandResult}
     */
    static fromResponse(response: CommandResponse): CommandResult {
        return new CommandResult([]);
    }
}
