/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IReadModel } from '@dolittle/readmodels';
import { QueryRequest, IQuery, QueryResponse, IQueryCoordinator } from './internal';

const beforeExecuteCallbacks: ((options: RequestInit) => void)[] = [];

/**
 * Represents the coordinator of queries
 */
export class QueryCoordinator implements IQueryCoordinator {
    static apiBaseUrl: string = '';

    /**
     * Add a callback that gets called before handling a command with the fetch API option object
     * @param {function} callback 
     */
    static beforeExecute(callback: (options: RequestInit) => void) {
        beforeExecuteCallbacks.push(callback);
    }

    /**
     * Execute a query
     * @param {Query} query 
     */
    async execute<T extends IReadModel>(query: IQuery<T>) {
        let options: RequestInit = {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(QueryRequest.createFrom(query)),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        beforeExecuteCallbacks.forEach(_ => _(options));
        let response = await fetch(`${QueryCoordinator.apiBaseUrl}/api/Dolittle/Queries`, options).then(response => response.json() as Promise<QueryResponse<T>>); 
        return response;
    }
}
