/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CheckoutPendingWebhook } from './checkout-pending-webhook';
import { CheckoutSuccessfulWebhookAllOf } from './checkout-successful-webhook-all-of';

/**
 * @type CheckoutSuccessfulWebhook
 * Webhook sent when a checkout instance is successfully completed.
 * @export
 */
export type CheckoutSuccessfulWebhook = CheckoutPendingWebhook & CheckoutSuccessfulWebhookAllOf;


