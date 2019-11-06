/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { IReadModel, Artifact } from "./internal";

/**
 * Represents the base implementation of {IReadModel}
 *
 * @export
 * @abstract
 * @class ReadModel
 * @implements {IReadModel}
 */
export abstract class ReadModel implements IReadModel {
    artifact: Artifact;

    /**
     * Instantiates an instance of {ReadModel}.
     * @param {Artifact} artifact
     */
    constructor(artifact: Artifact) {
        this.artifact = artifact;
    }

}