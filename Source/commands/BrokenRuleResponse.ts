// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents the result of a broken rule
 */
export type BrokenRuleResponse = {

    /**
     * The rule that was broken
     *
     * @type {string}
     */
    readonly rule: string;

    /**
     * The target that was broken
     *
     * @type {string}
     */
    readonly target: string;

    /**
     * The instance that caused the broken rule
     *
     * @type {string}
     */
    readonly instance: string;

    /**
     * All the causes
     *
     * @type {string}
     */
    readonly causes: any[];
};
