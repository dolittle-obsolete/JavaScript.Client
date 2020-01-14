// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Command } from '../index';
import { Guid } from '@dolittle/core';

describe('when constructing derivative with default values', () => {
    const defaultValues = {
        someInt: 42,
        someString: 'Fourty two'
    };

    class MyCommand extends Command {
        constructor() {
            super(Guid.create(), defaultValues);
        }
    }

    const command: Command = new MyCommand();

    it('should set the integer default value', () => (command as any).someInt.should.equal(defaultValues.someInt));
    it('should set the string default value', () => (command as any).someString.should.equal(defaultValues.someString));
});
