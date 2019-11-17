/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IQuery } from './index';
import { Guid } from '@dolittle/core';

/**
 * Represents a request for issuing a {Query}
 */
export class QueryRequest {

    /**
     * The correlation id of the request
     *
     * @type {string}
     */
    readonly correlationId: string
    readonly nameOfQuery: string;
    readonly generatedFrom: string;
    readonly parameters: string;
    
    /**
     * Initializes a new instance of {QueryRequest}
     * @param {string} nameOfQuery 
     * @param {string} generatedFrom 
     * @param {*} parameters 
     */
    constructor(nameOfQuery: string, generatedFrom: string, parameters: any) {
        this.correlationId = Guid.create();
        this.nameOfQuery = nameOfQuery;
        this.generatedFrom = generatedFrom;
        this.parameters = parameters;
    }

    /**
     * Creates a {QueryRequest} from a {Query}
     * @param {Query} query 
     */
    static createFrom(query: IQuery) {
        let nameOfQuery: string = query.nameOfQuery;
        let generatedFrom: string = query.generatedFrom;
        delete (query as any).nameOfQuery;
        delete (query as any).generatedFrom;
        if ((query as any).readModel !== undefined) delete (query as any).readModel;
        return new QueryRequest(nameOfQuery, generatedFrom, query);;
    }

}