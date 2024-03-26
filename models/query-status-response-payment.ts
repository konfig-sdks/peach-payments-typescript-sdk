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
 * @interface QueryStatusResponsePayment
 */
export interface QueryStatusResponsePayment {
    /**
     * Payment link ID.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'linkId'?: string;
    /**
     * Payment link URL.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'linkUrl'?: string;
    /**
     * Payment amount.
     * @type {number}
     * @memberof QueryStatusResponsePayment
     */
    'amount'?: number;
    /**
     * Payment link status.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'status'?: QueryStatusResponsePaymentStatusEnum;
    /**
     * Currency code for the payment.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'currency'?: QueryStatusResponsePaymentCurrencyEnum;
    /**
     * Payment order number provided by merchant.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'merchantInvoiceId'?: string;
    /**
     * Merchant channel ID that the payment link was created in.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'entityId'?: string;
    /**
     * A note to include with the payment link.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'notes'?: string;
    /**
     * Timestamp when the payment link expires.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'expiryTime'?: string;
    /**
     * Batch ID for the payment link.
     * @type {string}
     * @memberof QueryStatusResponsePayment
     */
    'batchId'?: string;
}

type QueryStatusResponsePaymentStatusEnum = 'initiated' | 'processing' | 'expired' | 'cancelled' | 'completed'
type QueryStatusResponsePaymentCurrencyEnum = 'ZAR' | 'KES' | 'USD'


