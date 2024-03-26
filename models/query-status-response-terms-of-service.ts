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
 * @interface QueryStatusResponseTermsOfService
 */
export interface QueryStatusResponseTermsOfService {
    /**
     * The id of the terms of service that was agreed to.
     * @type {string}
     * @memberof QueryStatusResponseTermsOfService
     */
    'id'?: string;
    /**
     * Whether the user agreed to the terms of service.
     * @type {boolean}
     * @memberof QueryStatusResponseTermsOfService
     */
    'accepted'?: boolean;
}

