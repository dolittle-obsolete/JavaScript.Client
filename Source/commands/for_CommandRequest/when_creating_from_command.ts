/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandRequest } from '../internal';
import { a_command } from './given/a_command';
import { Guid } from '@dolittle/core';
import { expect } from 'chai';

describe('when creating from command', () => {
    let command = new a_command();
    command.someInteger = 42;
    command.someString = 'fourty two';
    
    let command_request = CommandRequest.createFrom(command)

    beforeEach(() => {
        
    });

    it('should return an instance', () => expect(command_request).to.not.be.null);
    it('should set a correlation id', () => command_request.correlationId.should.not.equal(''));
    it('should have a non-empty correlation id', () => command_request.correlationId.should.not.equal(Guid.empty));
});