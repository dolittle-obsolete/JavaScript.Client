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

    readonly type: string;

    /**
     * Instantiates an instance of {Command}.
     * @param {string} type
     * @param {*} [_defaultValues={}]
     */
    constructor(type: string, private _defaultValues: any = {}) {
        this.type = type;
        _defaultValues = _defaultValues || {};
        this.setInitialValues(this._defaultValues);
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
