// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReadModel } from '@dolittle/readmodels';

/**
 * Defines the base of a query
 *
 * @export
 * @interface IQuery
 * @template T IReadModel. Should be 'any' for IQuery
 */
export interface IQuery<T extends IReadModel = any> {

    /**
     * The name of the query
     *
     * @type {string}
     */
    readonly nameOfQuery: string;

    /**
     * The 'generated from' string
     *
     * @type {string}
     */
    readonly generatedFrom: string;
}
