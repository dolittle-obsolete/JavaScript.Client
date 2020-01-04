// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { CommandRequest } from './index';

/**
 * Represents a command response
 *
 * @export
 */
export type CommandResponse = {

    /**
     * The command request that is related to this response
     *
     * @type {CommandRequest}
     */
    readonly command: CommandRequest;

    /**
     * The validation results
     *
     * @type {any[]}
     */
    readonly validationResults: any[];

    /**
     * The error messages that are related to command during validation
     *
     * @type {string[]}
     */
    readonly commandValidationMessages: string[]

    /**
     * The messages that are related to broken security rules
     *
     * @type {string[]}
     */
    readonly securityMessages: string[]

    /**
     * All the validation messages
     * @type {string[]}
     */
    readonly allValidationMessages: string[]

    /**
     * The exception, if any
     */
    readonly exception?: any

    /**
     * The exception message, if any
     *
     * @type {string}
     */
    readonly exceptionMessage: string

    /**
     * The success state of the request
     *
     * @type {boolean}
     */
    readonly success: boolean

    /**
     * The validation state of the request
     *
     * @type {boolean}
     */
    readonly invalid: boolean

    /**
     * Whether or not the command passed security
     *
     * @type {boolean}
     */
    readonly passedSecurity: boolean
};
