/*---------------------------------------------------------------------------------------------
*  Copyright (c) Dolittle. All rights reserved.
*  Licensed under the MIT License. See LICENSE in the project root for license information.
*--------------------------------------------------------------------------------------------*/
import { IReadModel, Artifact } from "./internal";

/**
 * Represents the base implementation of {IReadModel}
 *
 * @export
 * @class ReadModel
 * @implements {IReadModel}
 */
export abstract class ReadModel implements IReadModel {

    readonly artifact: Artifact;

    /**
     * Instantiates an instance of {ReadModel}.
     * @param {Artifact} artifact
     */
    constructor(artifact: Artifact, private _defaultValues: any = {}) {
        this.artifact = artifact;
        this._defaultValues = _defaultValues || {};
        this.setInitialValues(_defaultValues);
    }

    /**
     * Set initial values used as basis for typically dirty checking
     * @param {*} values 
     */
    setInitialValues(values: any) {
        for (let property in values) {
            (this as any)[property] = values[property];
        }
    }

}
