// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Guid } from '@dolittle/core';
/**
 * Represents an Artifact
 */
export class Artifact {

    /**
     * Gets a null implementation of {Artifact}
     *
     * @readonly
     * @static
     */
    static get empty() {
        return new Artifact(Guid.empty, 1);
    }

    /**
     * The artifact id
     *
     * @type {string}
     */
    readonly id: string;
    /**
     * The generation number of the artifact
     *
     * @type {number}
     */
    readonly generation: number;

    /**
     * Instantiates an instance of {Artifact}.
     * @param {string} id The artifact id
     * @param {number} generation The generation number
     */
    constructor(id: string, generation: number) {
        this.id = id;
        this.generation = generation;
    }
}
