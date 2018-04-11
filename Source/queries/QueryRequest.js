/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Query } from './Query';
import { Guid } from '@dolittle/core';

 /**
  * Represents a request for issuing a {Query}
  */
export class QueryRequest {

    /**
     * Initializes a new instance of {QueryRequest}
     * @param {string} name 
     * @param {string} generatedFrom 
     * @param {*} content 
     */
    constructor(name, generatedFrom, content) {
        this.correlationId = Guid.create();
        this.nameOfQuery = name;
        this.generatedFrom = generatedFrom;
        this.content = content;
    }

    /**
     * Creates a {QueryRequest} from a {Query}
     * @param {Query} query 
     */
    static createFrom(query) {
        var request = new QueryRequest(query.nameOfQuery, query.generatedFrom, content);
        return request;
    }

}