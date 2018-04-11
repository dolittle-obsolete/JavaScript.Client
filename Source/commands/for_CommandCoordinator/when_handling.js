import { CommandCoordinator } from '../CommandCoordinator';

describe('when handling', () => {
    let commandResult = {'something': 'result'};
    let httpClient = {
        createRequest: () => {
            return {
                asPost: sinon.stub(),
                withContent: sinon.stub(),
                send: (callback) => {
                    callback(commandResult);
                }
            }
        }
    }
    let commandCoordinator = new CommandCoordinator(httpClient);
    let command = {};
    let result = null;


    (beforeEach => {
        commandCoordinator.handle(command).then(r => result = r);
    })();

    it("should pass along the result", () => result.should.equal(commandResult));

});