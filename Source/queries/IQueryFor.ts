/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IReadModel } from "@dolittle/readmodels";
import { IQuery } from "./internal";

/**
 * Defines the base of a query for a specific read model
 *
 * @export
 * @interface IQueryFor
 * @extends {IQuery<T>}
 * @template T The IReadModel this is a query for
 */
export interface IQueryFor<T extends IReadModel> extends IQuery<T>{
    readonly readModel: T;
}
