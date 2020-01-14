// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReadModel } from '@dolittle/readmodels';
import { IQuery } from './index';

/**
 * Defines the base of a query for a specific read model
 *
 * @export
 * @interface IQueryFor
 * @extends {IQuery<T>}
 * @template T The IReadModel this is a query for
 */
export interface IQueryFor<T extends IReadModel> extends IQuery<T> {

    /**
     * The {IReadModel} type that this is a a query for.
     *
     * @type {T}
     */
    readonly readModel: T;
}
