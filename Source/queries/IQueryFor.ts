/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IReadModel } from "@dolittle/readmodels";
import { IQuery } from "./internal";
/**
 * Defines the base of a query
 */
export interface IQueryFor<T extends IReadModel> extends IQuery{
    /**
     * The {IReadModel} it's a query for 
     *
     * @type {T}
     */
    readModel: T;
}