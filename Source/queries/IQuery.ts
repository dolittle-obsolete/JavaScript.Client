/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Defines the base of a query
 */
export interface IQuery {
    /**
     * The name of the query
     *
     * @type {string}
     */
    nameOfQuery: string;
    /**
     * The 'generated from' string
     *
     * @type {string}
     */
    generatedFrom: string;
}