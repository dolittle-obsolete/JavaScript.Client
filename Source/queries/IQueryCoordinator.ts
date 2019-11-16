/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IReadModel } from '@dolittle/readmodels';
import { IQuery, QueryResponse } from './internal';

/**
 * Defines a coordinator of queries
 */
export interface IQueryCoordinator {

    /**
     * Execute a query
     * @param {Query} query 
     * @returns {Promise<QueryResponse<T>>}
     */
    execute<T extends IReadModel>(query: IQuery<T>): Promise<QueryResponse<T>>
}