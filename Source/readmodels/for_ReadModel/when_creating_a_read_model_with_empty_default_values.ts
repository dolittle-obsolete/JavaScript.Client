// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Artifact, ReadModel } from '../index';
import { Guid } from '@dolittle/rudiments';
import { expect } from 'chai';

class a_read_model extends ReadModel {
    some_string?: string;
    some_number?: number;

    constructor(artifact: Artifact) {
        super(artifact, {});
    }
}
describe('when creating a read model with empty default values', () => {

    const artifact = new Artifact(Guid.create().toString(), 1);
    const read_model = new a_read_model(artifact);

    it('should not be undefined', () => expect(read_model).to.not.be.undefined);
    it('should have the correct artifact id', () => read_model.artifact.id.should.be.equal(artifact.id));
    it('should have the correct artifact generation', () => read_model.artifact.generation.should.be.equal(artifact.generation));
    it('should not have some string property', () => expect(read_model.some_string).to.be.undefined);
    it('should note have some number property', () => expect(read_model.some_number).to.be.undefined);

});
