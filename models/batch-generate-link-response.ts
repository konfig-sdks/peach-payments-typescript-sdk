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
 * @interface BatchGenerateLinkResponse
 */
export interface BatchGenerateLinkResponse {
    /**
     * The created batch ID for the upload.
     * @type {string}
     * @memberof BatchGenerateLinkResponse
     */
    'id'?: string;
    /**
     * The created batch upload URL.
     * @type {string}
     * @memberof BatchGenerateLinkResponse
     */
    'url'?: string;
}

