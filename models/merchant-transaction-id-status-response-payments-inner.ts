/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentBrand } from './payment-brand';
import { PaymentType } from './payment-type';
import { Recon } from './recon';
import { ResponseCard } from './response-card';
import { Result } from './result';
import { ResultDetails } from './result-details';

/**
 * 
 * @export
 * @interface MerchantTransactionIdStatusResponsePaymentsInner
 */
export interface MerchantTransactionIdStatusResponsePaymentsInner {
    /**
     * The unique transaction ID provided by Peach Payments.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'id': string;
    /**
     * Payment type of the transaction.
     * @type {PaymentType}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'paymentType': PaymentType;
    /**
     * The payment brand specifies the method of payment for the request.
     * @type {PaymentBrand}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'paymentBrand': PaymentBrand;
    /**
     * The payment request amount.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'amount': string;
    /**
     * The currency code of the payment request amount as defined by ISO-4217.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'currency': string;
    /**
     * Merchant-provided reference number, often used for reconciliation.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'merchantTransactionId': string;
    /**
     * 
     * @type {Result}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'result': Result;
    /**
     * 
     * @type {ResultDetails}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'resultDetails': ResultDetails;
    /**
     * The unique transaction identifier provided by the payment service provider.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'connectorTxID1': string;
    /**
     * The timestamp of the transaction.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'timestamp': string;
    /**
     * A JSON object depicting custom information sent by the merchant. Echoed back in the response.
     * @type {object}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'customParameters': object;
    /**
     * 
     * @type {ResponseCard}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'card'?: ResponseCard;
    /**
     * The merchant\'s invoice ID.
     * @type {string}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'merchantInvoiceId'?: string;
    /**
     * 
     * @type {Recon}
     * @memberof MerchantTransactionIdStatusResponsePaymentsInner
     */
    'recon'?: Recon;
}

