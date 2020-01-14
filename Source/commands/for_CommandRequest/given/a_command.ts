// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Command } from '../../index';
import { Guid } from '@dolittle/core';

export class a_command extends Command {

    someInteger: number | undefined;
    someString: string | undefined;

    constructor() {
        super(Guid.create(), {});
    }
}
