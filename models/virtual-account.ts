/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The virtual account object.
 * @export
 * @interface VirtualAccount
 */
export interface VirtualAccount {
    /**
     * The account ID.
     * @type {string}
     * @memberof VirtualAccount
     */
    'accountId'?: string;
    /**
     * The virtual account password.
     * @type {string}
     * @memberof VirtualAccount
     */
    'password'?: string;
    /**
     * The virtual account token.
     * @type {string}
     * @memberof VirtualAccount
     */
    'token'?: string;
    /**
     * The virtual account type.
     * @type {string}
     * @memberof VirtualAccount
     */
    'type'?: VirtualAccountTypeEnum;
}

type VirtualAccountTypeEnum = 'CELLPHONE' | 'IDNUMBER' | 'ACCOUNTNUMBER'


