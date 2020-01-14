// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents a Guid
 *
 * @export
 * @class Guid
 */
export class Guid {
    /**
     * Create a new {Guid}
     * @returns {string}
     */
    static create() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    }

    /**
     * Gets an empty {Guid}
     */
    static get empty() {
        return '00000000-0000-0000-0000-000000000000';
    }
}
