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
 * @interface HelpersGetPaymentMethodsRequest
 */
export interface HelpersGetPaymentMethodsRequest {
    /**
     * 
     * @type {string}
     * @memberof HelpersGetPaymentMethodsRequest
     */
    'authentication.entityId': string;
    /**
     * Token to verify the integrity of the request, ensuring that only the merchant sending the request is accepted.
     * @type {string}
     * @memberof HelpersGetPaymentMethodsRequest
     */
    'signature': string;
    /**
     * Three-letter ISO 4217 currency code.
     * @type {string}
     * @memberof HelpersGetPaymentMethodsRequest
     */
    'currency': string;
}

