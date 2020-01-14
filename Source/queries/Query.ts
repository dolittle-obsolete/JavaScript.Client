/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { IQuery } from './index';

/**
 * Defines the base of a query
 *
 * @export
 * @class Query
 * @implements {IQuery}
 */
export class Query implements IQuery {

    readonly nameOfQuery: string;
    readonly generatedFrom: string;

    /**
     * Instantiates an instance of {Query}.
     * @param {string} nameOfQuery
     * @param {string} generatedFrom
     */
    constructor(nameOfQuery: string, generatedFrom: string) {
        this.nameOfQuery = nameOfQuery;
        this.generatedFrom = generatedFrom;
    }

}
