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
 * @interface CheckoutGenerationInitiateRedirectCheckoutResponse
 */
export interface CheckoutGenerationInitiateRedirectCheckoutResponse {
    /**
     * Redirect the user to this URL to complete their payment.
     * @type {string}
     * @memberof CheckoutGenerationInitiateRedirectCheckoutResponse
     */
    'redirectUrl'?: string;
}

