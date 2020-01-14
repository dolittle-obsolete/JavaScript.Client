/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IReadModel } from '@dolittle/readmodels';

/**
 * Represents a request for issuing a {Query}
 */
export type QueryResponse<T extends IReadModel> = {

    /**
     * The name of query
     *
     * @type {string}
     */
    readonly queryName: string

    /**
     * Gets or sets the count of total items from a query
     *
     * @type {number}
     */
    readonly totalItems: number

    /**
     * The exception that occurred during execution
     *
     * @type {*}
     */
    readonly exception: any

    /**
     * The messages that are related to broken security rules
     *
     * @type {string[]}
     */
    readonly securityMessages: string[]

    /**
     * All the broken rules
     *
     * @type {any[]}
     */
    readonly brokenRules: any[]

    /**
     * Whether or not query passed security
     *
     * @type {boolean}
     */
    readonly passedSecurity: boolean

    /**
     * Whether or not the query was successful or not
     *
     * @type {boolean}
     */
    readonly success: boolean

    /**
     * Whether or not the query is considered invalid in validation terms
     *
     * @type {boolean}
     */
    invalid: boolean

    /**
     * The result of the query
     *
     * @type {T[]}
     */
    items: T[]
};
