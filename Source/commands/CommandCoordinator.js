/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { CommandRequest } from './CommandRequest';

@inject(HttpClient)
export class CommandCoordinator
{
    constructor(httpClient) {
        this._httpClient = httpClient;
    }

    handle(command) {
        this._httpClient.createRequest('/api/Dolittle/Commands')
            .asPost()
            .withContent(CommandRequest.createFrom(command))
            .send(data => {
                debugger;
            });
    }
}