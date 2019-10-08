/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Defines the base of a query
 */
 export class Query {
     nameOfQuery: string="";
     generatedFrom: string="";
     readModel=null;
}