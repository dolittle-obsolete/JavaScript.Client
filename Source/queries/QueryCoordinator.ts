/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Query } from './Query';
import { QueryRequest } from './QueryRequest';

const beforeExecuteCallbacks = [];

/**
 * Represents the coordinator of queries
 */
export class QueryCoordinator {
    static apiBaseUrl: string = '';

    /**
     * Add a callback that gets called before handling a command with the fetch API option object
     * @param {function} callback 
     */
    static beforeExecute(callback: function) {
        beforeExecuteCallbacks.push(callback);
    }

    /**
     * Execute a query
     * @param {Query} query 
     */
    execute(query: Query) {
        let options = {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(QueryRequest.createFrom(query)),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        beforeExecuteCallbacks.forEach(_ => _(options));

        return fetch(`${QueryCoordinator.apiBaseUrl}/api/Dolittle/Queries`, options).then(response => response.json());
    }
}