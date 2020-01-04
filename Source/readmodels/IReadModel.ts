// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Artifact } from './index';

/**
 * Defines the read model
 *
 * @export
 * @interface IReadModel
 */
export interface IReadModel {
    /**
     * The artifact
     *
     * @type {Artifact}
     */
    readonly artifact: Artifact
}
