/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { Artifact } from "./internal";

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