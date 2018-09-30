/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Query } from './Query';
import { QueryRequest } from './QueryRequest';

/**
 * Represents the coordinator of queries
 */
export class QueryCoordinator {
    static apiBaseUrl = '';
    
    /**
     * Execute a query
     * @param {Query} query 
     */
    execute(query) {
        return fetch(`${QueryCoordinator.apiBaseUrl}/api/Dolittle/Queries`, {
            method: 'POST',
            body: JSON.stringify(QueryRequest.createFrom(query)),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }
}