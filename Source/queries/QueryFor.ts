/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { IReadModel } from "@dolittle/readmodels";
import { IQueryFor } from "./index";

/**
 * Represents the base of a query for a specific read model
 *
 * @export
 * @class QueryFor
 * @implements {IQueryFor<T>}
 * @template T
 */
export abstract class QueryFor<T extends IReadModel> implements IQueryFor<T> {

    readonly nameOfQuery: string = "";
    readonly generatedFrom: string = "";
    readonly readModel: T

    /**
     * Instantiates an instance of {QueryFor}.
     * @param {string} nameOfQuery
     * @param {string} generatedFrom
     * @param {T} readModel
     */
    constructor(nameOfQuery: string, generatedFrom: string, readModel: T) {
        this.nameOfQuery = nameOfQuery; 
        this.generatedFrom = generatedFrom;
        this.readModel = readModel;
    }

}
