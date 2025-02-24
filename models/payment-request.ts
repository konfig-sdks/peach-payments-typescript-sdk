/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { Authentication } from './authentication';
import { Cart } from './cart';
import { Customer } from './customer';
import { PaymentBrand } from './payment-brand';
import { PaymentType } from './payment-type';
import { Shopify } from './shopify';
import { VirtualAccount } from './virtual-account';

/**
 * Initiate a debit transaction.
 * @export
 * @interface PaymentRequest
 */
export interface PaymentRequest {
    /**
     * 
     * @type {Authentication}
     * @memberof PaymentRequest
     */
    'authentication': Authentication;
    /**
     * Merchant-provided reference number, often used for reconciliation.
     * @type {string}
     * @memberof PaymentRequest
     */
    'merchantTransactionId': string;
    /**
     * The payment request amount.
     * @type {string}
     * @memberof PaymentRequest
     */
    'amount': string;
    /**
     * The currency code of the payment request amount as defined by ISO-4217.
     * @type {string}
     * @memberof PaymentRequest
     */
    'currency': string;
    /**
     * The payment brand specifies the method of payment for the request.
     * @type {PaymentBrand}
     * @memberof PaymentRequest
     */
    'paymentBrand': PaymentBrand;
    /**
     * Payment type of the transaction.
     * @type {PaymentType}
     * @memberof PaymentRequest
     */
    'paymentType': PaymentType;
    /**
     * 
     * @type {VirtualAccount}
     * @memberof PaymentRequest
     */
    'virtualAccount'?: VirtualAccount;
    /**
     * 
     * @type {Address}
     * @memberof PaymentRequest
     */
    'shipping'?: Address;
    /**
     * 
     * @type {Address}
     * @memberof PaymentRequest
     */
    'billing'?: Address;
    /**
     * 
     * @type {Shopify}
     * @memberof PaymentRequest
     */
    'shopify'?: Shopify;
    /**
     * 
     * @type {Customer}
     * @memberof PaymentRequest
     */
    'customer'?: Customer;
    /**
     * 
     * @type {Cart}
     * @memberof PaymentRequest
     */
    'cart'?: Cart;
    /**
     * The merchant\'s invoice ID.
     * @type {string}
     * @memberof PaymentRequest
     */
    'merchantInvoiceId'?: string;
    /**
     * The Payments API redirects the user to this URL after processing the payment request.
     * @type {string}
     * @memberof PaymentRequest
     */
    'shopperResultUrl'?: string;
}

