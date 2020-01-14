// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Artifact } from '../index';
import { Guid } from '@dolittle/core';
import { expect } from 'chai';

describe('when getting empty artifact', () => {
    const artifact = Artifact.empty;

    it('should not be undefined', () => expect(artifact).to.not.be.undefined);
    it('should have an id that represents an empty guid', () => artifact.id.should.be.equal(Guid.empty));
    it('should have a generation equal 1', () => artifact.generation.should.be.equal(1));
});
