/*
Payments API inbound

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

The version of the OpenAPI document: 2.0.0
Contact: support@peachpayments.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BatchResponse } from './batch-response';
import { PaymentGetAllPaymentLinksResponseMeta } from './payment-get-all-payment-links-response-meta';

/**
 * 
 * @export
 * @interface BatchGetBatchStatusesResponse
 */
export interface BatchGetBatchStatusesResponse {
    /**
     * 
     * @type {Array<BatchResponse>}
     * @memberof BatchGetBatchStatusesResponse
     */
    'batches'?: Array<BatchResponse>;
    /**
     * 
     * @type {PaymentGetAllPaymentLinksResponseMeta}
     * @memberof BatchGetBatchStatusesResponse
     */
    'meta'?: PaymentGetAllPaymentLinksResponseMeta;
}

