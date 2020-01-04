// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IReadModel, Artifact } from './index';

/**
 * Represents the base implementation of {IReadModel}
 *
 * @export
 * @class ReadModel
 * @implements {IReadModel}
 */
export class ReadModel implements IReadModel {

    readonly artifact: Artifact;

    /**
     * Instantiates an instance of {ReadModel}.
     * @param {Artifact} artifact
     * @param {{[key: string]: any}} [defaultValues={}]
     */
    constructor(artifact: Artifact, defaultValues: {[key: string]: any} = {}) {
        this.artifact = artifact;
        this.setInitialValues(defaultValues);
    }

    /**
     * Set initial values used as basis for typically dirty checking
     * @param {*} values
     */
    setInitialValues(values: any) {
        for (const property in values) {
            (this as any)[property] = values[property];
        }
    }

}
