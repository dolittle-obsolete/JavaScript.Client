/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Query } from './Query';
import { QueryRequest } from './QueryRequest';

/**
 * Represents the coordinator of queries
 */
export class QueryCoordinator {
    /**
     * Execute a query
     * @param {Query} query 
     */
    execute(query) {
        let promise = new Promise((resolve, reject) => {
            fetch('/api/Dolittle/Queries', {
                method: 'POST',
                body: JSON.stringify(QueryRequest.createFrom(query)),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                let queryResult = response.json();
                resolve(queryResult);
            });
        });
        return promise;
    }
}