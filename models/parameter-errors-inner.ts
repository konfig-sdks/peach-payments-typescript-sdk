/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ParameterErrorsInner
 */
export interface ParameterErrorsInner {
    /**
     * The value of the parameter which failed validation. Can be any value - string, number, boolean, array, or object.
     * @type {any}
     * @memberof ParameterErrorsInner
     */
    'value': any | null;
    /**
     * The name of the parameter.
     * @type {string}
     * @memberof ParameterErrorsInner
     */
    'name': string;
    /**
     * A message describing the error.
     * @type {string}
     * @memberof ParameterErrorsInner
     */
    'message': string;
}

