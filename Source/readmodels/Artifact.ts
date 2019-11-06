/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Represents an Artifact
 */
export type Artifact = {
    /**
     * The artifact id
     *
     * @type {string}
     */
    id: string;
    /**
     * The generation number of the artifact
     *
     * @type {number}
     */
    generation: number
}