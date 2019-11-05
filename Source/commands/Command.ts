/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Guid } from '@dolittle/core';
import { ICommand } from "./internal";

/**
 * Represents a base implementation of {ICommand}
 *
 * @export
 * @abstract
 * @class Command
 * @implements {ICommand}
 */
export abstract class Command implements ICommand {

    private _type = Guid.empty;

    defaultValues: any = {};
    /**
     * Creates an instance of Command.
     * @param {string} _type The artifact id of the {Command}
     * @param {any} defaultValues
     */
    constructor(type: string, defaultValues: any) {
        this._type = type;
        this.defaultValues = defaultValues || {};
        this.setInitialValues(this.defaultValues);
    }

    get type() {
        return this._type;
    }

    /**
     * Set initial values used as basis for typically dirty checking
     * @param {*} values 
     */
    setInitialValues(values: any) {
        for (let property in values) {
            (this as any)[property] = values[property];
        }
    }
}


// https://github.com/jdanyow/aurelia-async
// https://stackoverflow.com/questions/37089977/how-to-get-current-value-of-rxjs-subject-or-observable