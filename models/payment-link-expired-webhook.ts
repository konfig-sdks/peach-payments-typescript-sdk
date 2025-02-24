/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentLinkBaseWebhook } from './payment-link-base-webhook';
import { PaymentLinkExpiredWebhookAllOf } from './payment-link-expired-webhook-all-of';

/**
 * @type PaymentLinkExpiredWebhook
 * Payment link expired.
 * @export
 */
export type PaymentLinkExpiredWebhook = PaymentLinkBaseWebhook & PaymentLinkExpiredWebhookAllOf;


