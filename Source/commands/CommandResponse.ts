/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { CommandRequest } from "./internal"

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
    command: CommandRequest;

    /**
     * The validation results
     *
     * @type {any[]}
     */
    validationResults: any[];

    /**
     * The error messages that are related to command during validation
     *
     * @type {string[]}
     */
    commandValidationMessages: string[]

    /**
     * The messages that are related to broken security rules
     *
     * @type {string[]}
     */
    securityMessages: string[]
    
    /**
     * All the validation messages
     * @type {string[]}
     */
    allValidationMessages: string[]

    /**
     * The exception, if any
     */
    exception?: any

    /**
     * The exception message, if any
     *
     * @type {string}
     */
    exceptionMessage: string

    /**
     * The success state of the request
     *
     * @type {boolean}
     */
    success: boolean

    /**
     * The validation state of the request
     *
     * @type {boolean}
     */
    invalid: boolean

    /**
     * Whether or not the command passed security
     *
     * @type {boolean}
     */
    passedSecurity: boolean


}
