/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IReadModel } from '@dolittle/readmodels';

/**
 * Represents a request for issuing a {Query}
 */
export type QueryResponse<T extends IReadModel> = {
    
    items: T[]
}