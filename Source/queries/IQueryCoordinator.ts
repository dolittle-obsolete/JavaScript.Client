// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReadModel } from '@dolittle/readmodels';
import { IQuery, QueryResponse } from './index';

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
