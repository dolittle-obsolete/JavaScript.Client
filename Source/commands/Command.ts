/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { ICommand } from './index';

/**
 * Represents a base implementation of {ICommand}
 *
 * @export
 * @class Command
 * @implements {ICommand}
 */
export class Command implements ICommand {

    readonly type: string;

    /**
     * Instantiates an instance of {Command}.
     * @param {string} type
     * @param {{[key: string]: any}} [defaultValues={}]
     */
    constructor(type: string, defaultValues: {[key: string]: any} = {}) {
        this.type = type;
        this.setInitialValues(defaultValues);
    }

    /**
     * Set initial values used as basis for typically dirty checking
     * @param {*} values
     */
    setInitialValues(values: any) {
        for (const property in values) {
            (this as any)[property] = values[property];
        }
    }
}
