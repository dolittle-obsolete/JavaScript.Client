/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Query, IQueryFor, QueryRequest, IQuery } from './internal';
import { IReadModel } from '@dolittle/readmodels';
import { QueryResponse } from './internal';

const beforeExecuteCallbacks: Function[] = [];

/**
 * Represents the coordinator of queries
 */
export class QueryCoordinator {
    static apiBaseUrl: string = '';

    /**
     * Add a callback that gets called before handling a command with the fetch API option object
     * @param {function} callback 
     */
    static beforeExecute(callback: Function) {
        beforeExecuteCallbacks.push(callback);
    }

    /**
     * Execute a query
     * @param {Query} query 
     */
    async execute<T extends IReadModel>(query: IQuery | IQueryFor<T>) {
        let options = {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(QueryRequest.createFrom(query)),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        this.execute({} as IQuery);
        beforeExecuteCallbacks.forEach(_ => _(options));
        let response = await fetch(`${QueryCoordinator.apiBaseUrl}/api/Dolittle/Queries`, options as any).then(response => response.json()) as QueryResponse<any>; 
        if ((query as any).readModel !== undefined) response = response as QueryResponse<T>
        return response;
    }
}