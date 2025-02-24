/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CheckoutBaseWebhook } from './checkout-base-webhook';
import { CheckoutUncertainWebhookAllOf } from './checkout-uncertain-webhook-all-of';

/**
 * @type CheckoutUncertainWebhook
 * Webhook sent when a checkout instance is potentially cancelled by a user.
 * @export
 */
export type CheckoutUncertainWebhook = CheckoutBaseWebhook & CheckoutUncertainWebhookAllOf;


