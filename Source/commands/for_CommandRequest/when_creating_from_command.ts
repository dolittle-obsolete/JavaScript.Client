/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Command } from '../Command';
import { CommandRequest } from '../CommandRequest';

describe('when creating from command', () => {
    let command: Command = new Command();
    command.someInteger = 42;
    command.someString = 'fourty two';

    let result: any = null;
    (beforeEach => {
        result = CommandRequest.createFrom(command)
    })();

    it('should return an instance', () => result.should.not.be.null);
    it('should set a correlation id', () => result.correlationId.should.not.equal(''));
});