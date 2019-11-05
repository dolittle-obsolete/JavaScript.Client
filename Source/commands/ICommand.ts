/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Defines the base structure of a Command
 */
export interface ICommand {
    
    /**
     * The Artifact Id that represents the type of the Command.
     *
     * @type {string}
     */
    readonly type: string;

    /**
     * The default values
     *
     * @type {*}
     */
    defaultValues: any;
}
