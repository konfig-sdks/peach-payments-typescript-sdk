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
 * @interface CheckoutV2Billing
 */
export interface CheckoutV2Billing {
    /**
     * The door number, floor, building number, building name, and/or street name of the billing address.
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'street1'?: string;
    /**
     * The adjoining road or locality, if required, of the billing address.
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'street2'?: string;
    /**
     * The town, district, or city of the billing address.
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'city'?: string;
    /**
     * The company of the billing address.
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'company'?: string;
    /**
     * The country of the billing address (ISO 3166-1).
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'country'?: string;
    /**
     * The county, state, or region of the billing address.
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'state'?: string;
    /**
     * The postal code or ZIP code of the billing address.
     * @type {string}
     * @memberof CheckoutV2Billing
     */
    'postcode'?: string;
}

