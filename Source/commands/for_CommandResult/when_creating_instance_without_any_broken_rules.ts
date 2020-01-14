// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { CommandResult } from '../index';

describe('when creating instance without any broken rules', () => {
    const result = new CommandResult([]);

    it('should be considered successful', () => result.isSuccess.should.be.true);
});
