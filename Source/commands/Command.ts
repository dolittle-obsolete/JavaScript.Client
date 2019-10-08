/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Defines the base of a command
 */
 export class Command {
    type: string='';
    defaultValues : any ={};

    /**
     * Initializes a new instance of {Command}
     */
    constructor(defaultValues) {
        this.defaultValues = defaultValues || {};
        this.setInitialValues(this.defaultValues);
    }

    /**
     * Set initial values used as basis for typically dirty checking
     * @param {*} values 
     */
    setInitialValues(values) {
        for( var property in values ) {
            this[property] = values[property];
        }
    }
}


// https://github.com/jdanyow/aurelia-async
// https://stackoverflow.com/questions/37089977/how-to-get-current-value-of-rxjs-subject-or-observable