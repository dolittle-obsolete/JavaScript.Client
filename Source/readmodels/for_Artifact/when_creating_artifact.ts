// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Artifact } from '../index';
import { Guid } from '@dolittle/core';
import { expect } from 'chai';

describe('when creating artifact', () => {
    const guid = Guid.create();
    const generation = 3;
    const artifact = new Artifact(guid, generation);

    it('should not be undefined', () => expect(artifact).to.not.be.undefined);
    it('should have the correct id', () => artifact.id.should.be.equal(guid));
    it('should have the correct generation', () => artifact.generation.should.be.equal(generation));
});
