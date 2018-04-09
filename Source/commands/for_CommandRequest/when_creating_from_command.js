import { Command } from '../Command';
import { CommandRequest } from '../CommandRequest';

describe('when creating from command', () => {
    let command = new Command();
    command.someInteger = 42;
    command.someString = 'fourty two';

    let result = null;
    (beforeEach => {
        result = CommandRequest.createFrom(command)
    })();

    it('should return an instance', () => result.should.not.be.null);
    it('should set a correlation id', () => result.correlationId.should.not.equal(''));
});