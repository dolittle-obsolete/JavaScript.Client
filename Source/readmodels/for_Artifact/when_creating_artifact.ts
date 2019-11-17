/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Artifact } from '../index';
import { Guid } from '@dolittle/core';
import { expect } from 'chai';
describe('when creating artifact', () => {
    let guid = Guid.create();
    let generation = 3;
    let artifact = new Artifact(guid, generation);

    it('should not be undefined', () => expect(artifact).to.not.be.undefined);
    it('should have the correct id', () => artifact.id.should.be.equal(guid));
    it('should have the correct generation', () => artifact.generation.should.be.equal(generation));
});