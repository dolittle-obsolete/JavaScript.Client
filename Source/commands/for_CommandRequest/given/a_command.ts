/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Command } from '../../index';
import { Guid } from '@dolittle/core';

export class a_command extends Command {

    someInteger: number | undefined 
    someString: string | undefined
    
    constructor() {
        super(Guid.create(), {});
    }
} 