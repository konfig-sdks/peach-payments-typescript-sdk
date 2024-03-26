<div align="left">

[![Visit Peach payments](./header.png)](https://www.peachpayments.com&#x2F;)

# [Peach payments](https://www.peachpayments.com&#x2F;)<a id="peach-payments"></a>

The Payments API enables you to do a custom integration with Peach Payments and thereby support multiple payment methods.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`peachpayments.batch.generateLink`](#peachpaymentsbatchgeneratelink)
  * [`peachpayments.batch.getBatchStatuses`](#peachpaymentsbatchgetbatchstatuses)
  * [`peachpayments.batch.getErrorFiles`](#peachpaymentsbatchgeterrorfiles)
  * [`peachpayments.batch.linkStatusGet`](#peachpaymentsbatchlinkstatusget)
  * [`peachpayments.checkoutV2Generation.initiateCheckoutInstance`](#peachpaymentscheckoutv2generationinitiatecheckoutinstance)
  * [`peachpayments.checkoutGeneration.initiatePayment`](#peachpaymentscheckoutgenerationinitiatepayment)
  * [`peachpayments.checkoutGeneration.initiateRedirectCheckout`](#peachpaymentscheckoutgenerationinitiateredirectcheckout)
  * [`peachpayments.checkoutGeneration.validateRequest`](#peachpaymentscheckoutgenerationvalidaterequest)
  * [`peachpayments.files.downloadFile`](#peachpaymentsfilesdownloadfile)
  * [`peachpayments.files.uploadFile`](#peachpaymentsfilesuploadfile)
  * [`peachpayments.helpers.getPaymentMethods`](#peachpaymentshelpersgetpaymentmethods)
  * [`peachpayments.payment.cancelLink`](#peachpaymentspaymentcancellink)
  * [`peachpayments.payment.generateLink`](#peachpaymentspaymentgeneratelink)
  * [`peachpayments.payment.getAllPaymentLinks`](#peachpaymentspaymentgetallpaymentlinks)
  * [`peachpayments.paymentsApiInbound.initiateDebitTransaction`](#peachpaymentspaymentsapiinboundinitiatedebittransaction)
  * [`peachpayments.paymentsApiInbound.queryTransactionById`](#peachpaymentspaymentsapiinboundquerytransactionbyid)
  * [`peachpayments.paymentsApiInbound.refundTransaction`](#peachpaymentspaymentsapiinboundrefundtransaction)
  * [`peachpayments.paymentsApiInbound.status`](#peachpaymentspaymentsapiinboundstatus)
  * [`peachpayments.paymentsApiOutbound.webhook`](#peachpaymentspaymentsapioutboundwebhook)
  * [`peachpayments.status.checkoutStatusGet`](#peachpaymentsstatuscheckoutstatusget)
  * [`peachpayments.status.queryPaymentStatus`](#peachpaymentsstatusquerypaymentstatus)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Peach%20Payments&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { PeachPayments } from "peach-payments-typescript-sdk";

const peachpayments = new PeachPayments({
  // Defining the base path is optional and defaults to https://testapi-v2.peachpayments.com
  // basePath: "https://testapi-v2.peachpayments.com",
  accessToken: "ACCESS_TOKEN",
});

const generateLinkResponse = await peachpayments.batch.generateLink({
  entityId: "8ac7a4ca694cec2601694cf5f9360026",
  filename: "test.csv",
  notificationUrl: "https://webhook.site/",
});

console.log(generateLinkResponse);
```

## Reference<a id="reference"></a>


### `peachpayments.batch.generateLink`<a id="peachpaymentsbatchgeneratelink"></a>

Returns a URL to which the batch file must be uploaded.

For more information, see the [documentation](https://developer.peachpayments.com/docs/generate-bulk-payment-links).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateLinkResponse = await peachpayments.batch.generateLink({
  entityId: "8ac7a4ca694cec2601694cf5f9360026",
  filename: "test.csv",
  notificationUrl: "https://webhook.site/",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filename: `string`<a id="filename-string"></a>

The name of the CSV to be uploaded.

##### entityId: `string`<a id="entityid-string"></a>

The entity for the request.

##### notificationUrl: `string`<a id="notificationurl-string"></a>

Webhooks are sent to this URL. It overrides the generic merchant webhook URL.

#### 🔄 Return<a id="🔄-return"></a>

[BatchGenerateLinkResponse](./models/batch-generate-link-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/channels/{entityId}/payments/batches` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.batch.getBatchStatuses`<a id="peachpaymentsbatchgetbatchstatuses"></a>

Query all batch statuses of a batch for a channel.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBatchStatusesResponse = await peachpayments.batch.getBatchStatuses({
  entityId: "8ac7a4ca694cec2601694cf5f9360026",
  offset: 0,
  perPage: 50,
  filtersStartDate: "2018-03-20T09:12:28Z",
  filtersEndDate: "2018-03-20T09:12:28Z",
  filtersStatus: "initiated",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### entityId: `string`<a id="entityid-string"></a>

The entity for the request.

##### offset: `number`<a id="offset-number"></a>

The offset from which to read data.

##### perPage: `number`<a id="perpage-number"></a>

The amount of items to retrieve.

##### filtersStartDate: `string`<a id="filtersstartdate-string"></a>

Retrieve all batches from the start date onwards.

##### filtersEndDate: `string`<a id="filtersenddate-string"></a>

Retrieve all batches until the end date.

##### filtersStatus: `'initiated' | 'processing' | 'expired' | 'error' | 'completed'`<a id="filtersstatus-initiated--processing--expired--error--completed"></a>

The payment link status to filter on.

#### 🔄 Return<a id="🔄-return"></a>

[BatchGetBatchStatusesResponse](./models/batch-get-batch-statuses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/channels/{entityId}/payments/batches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.batch.getErrorFiles`<a id="peachpaymentsbatchgeterrorfiles"></a>

Returns a set of URLs that can be accessed to retrieve the batch error files.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getErrorFilesResponse = await peachpayments.batch.getErrorFiles({
  batchId: "421e1e63-ddd5-46ec-8812-74eda861259b",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchId: `string`<a id="batchid-string"></a>

The batch for the request.

#### 🔄 Return<a id="🔄-return"></a>

[BatchGetErrorFilesResponse](./models/batch-get-error-files-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/batches/{batchId}/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.batch.linkStatusGet`<a id="peachpaymentsbatchlinkstatusget"></a>

Returns the status of the batch.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const linkStatusGetResponse = await peachpayments.batch.linkStatusGet({
  batchId: "421e1e63-ddd5-46ec-8812-74eda861259b",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### batchId: `string`<a id="batchid-string"></a>

The batch ID for the request.

#### 🔄 Return<a id="🔄-return"></a>

[BatchResponse](./models/batch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/batches/{batchId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.checkoutV2Generation.initiateCheckoutInstance`<a id="peachpaymentscheckoutv2generationinitiatecheckoutinstance"></a>

Create a checkout instance for use from Embedded Checkout.

For more information, see the [documentation](https://developer.peachpayments.com/docs/checkout-embedded-tutorial#tutorial). 


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateCheckoutInstanceResponse =
  await peachpayments.checkoutV2Generation.initiateCheckoutInstance({
    referer: "referer_example",
    authentication_entityId: "8ac7a4ca68c22c4d0168c2caab2e0025",
    merchantTransactionId: "OrderNo453432",
    amount: 1010.22,
    currency: "ZAR",
    nonce: "UNQ00012345678",
    shopperResultUrl: "https://mydemostore.com/OrderNo453432",
    defaultPaymentMethod: "CARD",
    forceDefaultMethod: true,
    merchantInvoiceId: "INV-00001",
    cancelUrl: "https://mydemostore.com/OrderNo453432/cancelled",
    notificationUrl: "https://mydemostore.com/OrderNo453432/webhook",
    createRegistration: true,
    originator: "Webstore",
    returnTo: "STORE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication.entityId: `string`<a id="authenticationentityid-string"></a>

The entity for the request. By default, this is the channel ID.

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

Merchant-provided reference number unique for your transactions.

##### amount: `number`<a id="amount-number"></a>

The amount of the payment request. The period is used as the decimal separator.  M-PESA does not support decimal amounts, so Checkout automatically rounds them up. 

##### currency: `string`<a id="currency-string"></a>

The currency code of the payment request amount.

##### nonce: `string`<a id="nonce-string"></a>

Unique value to represent each request.

##### shopperResultUrl: `string`<a id="shopperresulturl-string"></a>

Checkout uses a POST request to redirect the customer to this URL after the customer completes checkout. Must be a valid URL that can be accessed through a browser.

##### referer: `string`<a id="referer-string"></a>

An allowlisted domain for the merchant.

##### defaultPaymentMethod: `string`<a id="defaultpaymentmethod-string"></a>

The preferred payment method which is active in the checkout page at the point of redirecting.

##### forceDefaultMethod: `boolean`<a id="forcedefaultmethod-boolean"></a>

Force the default payment method to be the only payment method.

##### merchantInvoiceId: `string`<a id="merchantinvoiceid-string"></a>

Merchant-provided invoice number unique for your transactions. This identifier is not sent onwards.

##### cancelUrl: `string`<a id="cancelurl-string"></a>

The customer is redirected to this URL if they cancel checkout. It must be a valid URL that can be reached through a browser.

##### notificationUrl: `string`<a id="notificationurl-string"></a>

Override the preconfigured webhook URL for this checkout instance, any changes to checkout send a webhook to this URL.

##### customParameters: Record<string, `string`><a id="customparameters-record"></a>

A name value pair used for sending custom information.

##### customer: [`CheckoutV2Customer`](./models/checkout-v2-customer.ts)<a id="customer-checkoutv2customermodelscheckout-v2-customerts"></a>

##### billing: [`CheckoutV2Billing`](./models/checkout-v2-billing.ts)<a id="billing-checkoutv2billingmodelscheckout-v2-billingts"></a>

##### shipping: [`CheckoutV2Shipping`](./models/checkout-v2-shipping.ts)<a id="shipping-checkoutv2shippingmodelscheckout-v2-shippingts"></a>

##### createRegistration: `boolean`<a id="createregistration-boolean"></a>

Used to enable card tokenisation with COPYandPAY.

##### originator: `string`<a id="originator-string"></a>

Used to provide a name for the application that is creating the checkout instance.

##### returnTo: `string`<a id="returnto-string"></a>

Text to display on \\\"Return to Store\\\" button on completing checkout.

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutV2GenerationInitiateCheckoutInstanceResponse](./models/checkout-v2-generation-initiate-checkout-instance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/checkout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.checkoutGeneration.initiatePayment`<a id="peachpaymentscheckoutgenerationinitiatepayment"></a>

Load the Checkout frontend to complete a payment. The POST request contains the entityId, signature, purchase parameters, and any custom parameters that a merchant optionally sends.

Sign the data on the backend and execute the POST from the browser.

For more information, see the [documentation](https://developer.peachpayments.com/docs/checkout-payment#form-post-checkout).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiatePaymentResponse =
  await peachpayments.checkoutGeneration.initiatePayment({
    referer: "referer_example",
    authentication_entityId: "8ac7a4ca68c22c4d0168c2caab2e0025",
    signature:
      "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4",
    merchantTransactionId: "OrderNo453432",
    amount: "1010.22",
    paymentType: "DB",
    currency: "ZAR",
    nonce: "UNQ00012345678",
    shopperResultUrl: "https://mydemostore.com/OrderNo453432",
    defaultPaymentMethod: "CARD",
    forceDefaultMethod: "false",
    merchantInvoiceId: "INV-0001",
    cancelUrl: "https://mydemostore.com/OrderNo453432/cancelled",
    notificationUrl: "https://mydemostore.com/OrderNo453432/webhook",
    customParameters_name: "name: Name1 value: Value1",
    customer_merchantCustomerId: "971020",
    customer_givenName: "John",
    customer_surname: "Smith",
    customer_mobile: "27123456789",
    customer_email: "johnsmith@mail.com",
    customer_status: "EXISTING",
    customer_birthDate: "1970-02-17",
    customer_ip: "192.168.1.1",
    customer_phone: "27123456789",
    customer_idNumber: "9001010000084",
    billing_street1: "1 Example Road",
    billing_street2: "LocalityA",
    billing_city: "Cape Town",
    billing_company: "CompanyA",
    billing_country: "ZA",
    billing_state: "Western Cape",
    billing_postcode: "1234",
    shipping_street1: "1 Example Road",
    shipping_street2: "LocalityA",
    shipping_city: "Cape Town",
    shipping_company: "CompanyA",
    shipping_postcode: "1234",
    shipping_country: "ZA",
    shipping_state: "Western Cape",
    cart_tax: "15.00",
    cart_shippingAmount: "12.25",
    cart_discount: "02.25",
    createRegistration: "false",
    originator: "Webstore",
    returnTo: "STORE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### referer: `string`<a id="referer-string"></a>

An allowlisted domain for the merchant.

##### authenticationEntityId: `string`<a id="authenticationentityid-string"></a>

The entity for the request. By default, this is the channel ID.

##### signature: `string`<a id="signature-string"></a>

Token to verify the integrity of the payment, ensuring that only the merchant sending the request is accepted.

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

Merchant-provided reference number unique for your transactions.

##### amount: `string`<a id="amount-string"></a>

The amount of the payment request. The period is used as the decimal separator. M-PESA does not support decimal amounts, so Checkout automatically rounds them up.

##### paymentType: `string`<a id="paymenttype-string"></a>

The payment type for the request. Accepts `DB`.  Does not accept `RG`, but you can tokenise a card by performing a DB with `createRegistration`.  Refund transactions through the Dashboard or as described in the <a href=\\\"https://developer.peachpayments.com/docs/checkout-refund\\\" target=\\\"_blank\\\">documentation</a>. 

##### currency: `string`<a id="currency-string"></a>

The currency code of the payment request amount.

##### nonce: `string`<a id="nonce-string"></a>

Unique value to represent each request.

##### shopperResultUrl: `string`<a id="shopperresulturl-string"></a>

Checkout uses a POST request to redirect the customer to this URL after the customer completes checkout. Must be a valid URL that can be accessed through a browser.

##### defaultPaymentMethod: `string`<a id="defaultpaymentmethod-string"></a>

The preferred payment method which is active in the checkout page at the point of redirecting.

##### forceDefaultMethod: `string`<a id="forcedefaultmethod-string"></a>

Force the default payment method to be the only payment method.

##### merchantInvoiceId: `string`<a id="merchantinvoiceid-string"></a>

Merchant-provided invoice number unique for your transactions. This identifier is not sent onwards.

##### cancelUrl: `string`<a id="cancelurl-string"></a>

The customer is redirected to this URL if they cancel checkout. It must be a valid URL that can be reached through a browser.

##### notificationUrl: `string`<a id="notificationurl-string"></a>

Override the preconfigured webhook URL for this checkout instance, any changes to checkout will send a webhook to this url.

##### customParametersName: `string`<a id="customparametersname-string"></a>

A name value pair used for sending custom information.

##### customerMerchantCustomerId: `string`<a id="customermerchantcustomerid-string"></a>

An identifier for this customer. Typically this is the ID that identifies the shopper in the shop\\\'s system.

##### customerGivenName: `string`<a id="customergivenname-string"></a>

The customer\\\'s first name or given name.  Required if you send in any other customer parameters, and for some risk checks and payment providers.  Peach Payments recommends including the name so that it displays in the Peach Dashboard and is available for subsequent queries.  Truncated after 48 characters. 

##### customerSurname: `string`<a id="customersurname-string"></a>

The customer\\\'s last name or surname.  Required if you send in any other customer parameters, and for some risk checks and payment providers.  Peach Payments recommends including the surname so that it displays in the Peach Dashboard and is available for subsequent queries.  Truncated after 48 characters. 

##### customerMobile: `string`<a id="customermobile-string"></a>

The customer\\\'s mobile number.

##### customerEmail: `string`<a id="customeremail-string"></a>

The customer\\\'s email address.

##### customerStatus: `string`<a id="customerstatus-string"></a>

The customer\\\'s status. Accepts `NEW` or `EXISTING`.

##### customerBirthDate: `string`<a id="customerbirthdate-string"></a>

The customer\\\'s birth date in the yyyy-MM-dd format.

##### customerIp: `string`<a id="customerip-string"></a>

The customer\\\'s IP address.

##### customerPhone: `string`<a id="customerphone-string"></a>

The customer\\\'s phone number.

##### customerIdNumber: `string`<a id="customeridnumber-string"></a>

The customer\\\'s ID number, required for high-risk merchants supporting Capitec Pay.

##### billingStreet1: `string`<a id="billingstreet1-string"></a>

The door number, floor, building number, building name, and/or street name of the billing address.

##### billingStreet2: `string`<a id="billingstreet2-string"></a>

The adjoining road or locality, if required, of the billing address.

##### billingCity: `string`<a id="billingcity-string"></a>

The town, district, or city of the billing address.

##### billingCompany: `string`<a id="billingcompany-string"></a>

The company of the billing address.

##### billingCountry: `string`<a id="billingcountry-string"></a>

The country of the billing address (ISO 3166-1).

##### billingState: `string`<a id="billingstate-string"></a>

The county, state, or region of the billing address.

##### billingPostcode: `string`<a id="billingpostcode-string"></a>

The postal code or ZIP code of the billing address.

##### shippingStreet1: `string`<a id="shippingstreet1-string"></a>

The door number, floor, building number, building name, and/or street name of the shipping address.

##### shippingStreet2: `string`<a id="shippingstreet2-string"></a>

The adjoining road or locality, if required, of the shipping address.

##### shippingCity: `string`<a id="shippingcity-string"></a>

The town, district, or city of the shipping address.

##### shippingCompany: `string`<a id="shippingcompany-string"></a>

The company of the shipping address.

##### shippingPostcode: `string`<a id="shippingpostcode-string"></a>

The postal code or ZIP code of the shipping address.

##### shippingCountry: `string`<a id="shippingcountry-string"></a>

The country of the shipping address (ISO 3166-1).

##### shippingState: `string`<a id="shippingstate-string"></a>

The county, state, or region of the shipping address.

##### cartTax: `string`<a id="carttax-string"></a>

The tax percentage applied to the price of the item in the shopping cart.

##### cartShippingAmount: `string`<a id="cartshippingamount-string"></a>

The total amount of the cart item including quantity.

##### cartDiscount: `string`<a id="cartdiscount-string"></a>

Discount amount applied on order amount.

##### createRegistration: `string`<a id="createregistration-string"></a>

Used to enable card tokenisation with COPYandPAY.

##### originator: `string`<a id="originator-string"></a>

Used to provide a name for the application that is creating the checkout instance.

##### returnTo: `string`<a id="returnto-string"></a>

Text to display on \\\"Return to Store\\\" button on completing checkout.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checkout` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.checkoutGeneration.initiateRedirectCheckout`<a id="peachpaymentscheckoutgenerationinitiateredirectcheckout"></a>

Provide a redirect URL to the caller to redirect the user into the Checkout experience. The POST request contains the entityId, signature, purchase parameters, and any custom parameters that a merchant optionally sends. This allows the checkout instance to be created from a backend without requiring a "form post", or other similar method, from the frontend.

For more information, see the [documentation](https://developer.peachpayments.com/docs/checkout-payment#redirect-based-checkout).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateRedirectCheckoutResponse =
  await peachpayments.checkoutGeneration.initiateRedirectCheckout({
    referer: "referer_example",
    authentication_entityId: "8ac7a4ca68c22c4d0168c2caab2e0025",
    signature:
      "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4",
    merchantTransactionId: "OrderNo453432",
    amount: "1010.22",
    paymentType: "DB",
    currency: "ZAR",
    nonce: "UNQ00012345678",
    shopperResultUrl: "https://mydemostore.com/OrderNo453432",
    defaultPaymentMethod: "CARD",
    forceDefaultMethod: "false",
    merchantInvoiceId: "INV-0001",
    cancelUrl: "https://mydemostore.com/OrderNo453432/cancelled",
    notificationUrl: "https://mydemostore.com/OrderNo453432/webhook",
    customParameters_name: "name: Name1 value: Value1",
    customer_merchantCustomerId: "971020",
    customer_givenName: "John",
    customer_surname: "Smith",
    customer_mobile: "27123456789",
    customer_email: "johnsmith@mail.com",
    customer_status: "EXISTING",
    customer_birthDate: "1970-02-17",
    customer_ip: "192.168.1.1",
    customer_phone: "27123456789",
    customer_idNumber: "9001010000084",
    billing_street1: "1 Example Road",
    billing_street2: "LocalityA",
    billing_city: "Cape Town",
    billing_company: "CompanyA",
    billing_country: "ZA",
    billing_state: "Western Cape",
    billing_postcode: "1234",
    shipping_street1: "1 Example Road",
    shipping_street2: "LocalityA",
    shipping_city: "Cape Town",
    shipping_company: "CompanyA",
    shipping_postcode: "1234",
    shipping_country: "ZA",
    shipping_state: "Western Cape",
    cart_tax: "15.00",
    cart_shippingAmount: "12.25",
    cart_discount: "02.25",
    createRegistration: "false",
    originator: "Webstore",
    returnTo: "STORE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication.entityId: `string`<a id="authenticationentityid-string"></a>

The entity for the request. By default, this is the channel ID.

##### signature: `string`<a id="signature-string"></a>

Token to verify the integrity of the payment, ensuring that only the merchant sending the request is accepted.

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

Merchant-provided reference number unique for your transactions.

##### amount: `string`<a id="amount-string"></a>

The amount of the payment request. The period is used as the decimal separator. M-PESA does not support decimal amounts, so Checkout automatically rounds them up.

##### paymentType: `string`<a id="paymenttype-string"></a>

The payment type for the request. Accepts `DB`.  Does not accept `RG`, but you can tokenise a card by performing a DB with `createRegistration`.  Refund transactions through the Dashboard or as described in the <a href=\\\"https://developer.peachpayments.com/docs/checkout-refund\\\" target=\\\"_blank\\\">documentation</a>. 

##### currency: `string`<a id="currency-string"></a>

The currency code of the payment request amount.

##### nonce: `string`<a id="nonce-string"></a>

Unique value to represent each request.

##### shopperResultUrl: `string`<a id="shopperresulturl-string"></a>

Checkout uses a POST request to redirect the customer to this URL after the customer completes checkout. Must be a valid URL that can be accessed through a browser.

##### referer: `string`<a id="referer-string"></a>

An allowlisted domain for the merchant.

##### defaultPaymentMethod: `string`<a id="defaultpaymentmethod-string"></a>

The preferred payment method which is active in the checkout page at the point of redirecting.

##### forceDefaultMethod: `string`<a id="forcedefaultmethod-string"></a>

Force the default payment method to be the only payment method.

##### merchantInvoiceId: `string`<a id="merchantinvoiceid-string"></a>

Merchant-provided invoice number unique for your transactions. This identifier is not sent onwards.

##### cancelUrl: `string`<a id="cancelurl-string"></a>

The customer is redirected to this URL if they cancel checkout. It must be a valid URL that can be reached through a browser.

##### notificationUrl: `string`<a id="notificationurl-string"></a>

Override the preconfigured webhook URL for this checkout instance, any changes to checkout will send a webhook to this url.

##### customParameters[name]: `string`<a id="customparametersname-string"></a>

A name value pair used for sending custom information.

##### customer.merchantCustomerId: `string`<a id="customermerchantcustomerid-string"></a>

An identifier for this customer. Typically this is the ID that identifies the shopper in the shop\\\'s system.

##### customer.givenName: `string`<a id="customergivenname-string"></a>

The customer\\\'s first name or given name.  Required if you send in any other customer parameters, and for some risk checks and payment providers.  Peach Payments recommends including the name so that it displays in the Peach Dashboard and is available for subsequent queries.  Truncated after 48 characters. 

##### customer.surname: `string`<a id="customersurname-string"></a>

The customer\\\'s last name or surname.  Required if you send in any other customer parameters, and for some risk checks and payment providers.  Peach Payments recommends including the surname so that it displays in the Peach Dashboard and is available for subsequent queries.  Truncated after 48 characters. 

##### customer.mobile: `string`<a id="customermobile-string"></a>

The customer\\\'s mobile number.

##### customer.email: `string`<a id="customeremail-string"></a>

The customer\\\'s email address.

##### customer.status: `string`<a id="customerstatus-string"></a>

The customer\\\'s status. Accepts `NEW` or `EXISTING`.

##### customer.birthDate: `string`<a id="customerbirthdate-string"></a>

The customer\\\'s birth date in the yyyy-MM-dd format.

##### customer.ip: `string`<a id="customerip-string"></a>

The customer\\\'s IP address.

##### customer.phone: `string`<a id="customerphone-string"></a>

The customer\\\'s phone number.

##### customer.idNumber: `string`<a id="customeridnumber-string"></a>

The customer\\\'s ID number, required for high-risk merchants supporting Capitec Pay.

##### billing.street1: `string`<a id="billingstreet1-string"></a>

The door number, floor, building number, building name, and/or street name of the billing address.

##### billing.street2: `string`<a id="billingstreet2-string"></a>

The adjoining road or locality, if required, of the billing address.

##### billing.city: `string`<a id="billingcity-string"></a>

The town, district, or city of the billing address.

##### billing.company: `string`<a id="billingcompany-string"></a>

The company of the billing address.

##### billing.country: `string`<a id="billingcountry-string"></a>

The country of the billing address (ISO 3166-1).

##### billing.state: `string`<a id="billingstate-string"></a>

The county, state, or region of the billing address.

##### billing.postcode: `string`<a id="billingpostcode-string"></a>

The postal code or ZIP code of the billing address.

##### shipping.street1: `string`<a id="shippingstreet1-string"></a>

The door number, floor, building number, building name, and/or street name of the shipping address.

##### shipping.street2: `string`<a id="shippingstreet2-string"></a>

The adjoining road or locality, if required, of the shipping address.

##### shipping.city: `string`<a id="shippingcity-string"></a>

The town, district, or city of the shipping address.

##### shipping.company: `string`<a id="shippingcompany-string"></a>

The company of the shipping address.

##### shipping.postcode: `string`<a id="shippingpostcode-string"></a>

The postal code or ZIP code of the shipping address.

##### shipping.country: `string`<a id="shippingcountry-string"></a>

The country of the shipping address (ISO 3166-1).

##### shipping.state: `string`<a id="shippingstate-string"></a>

The county, state, or region of the shipping address.

##### cart.tax: `string`<a id="carttax-string"></a>

The tax percentage applied to the price of the item in the shopping cart.

##### cart.shippingAmount: `string`<a id="cartshippingamount-string"></a>

The total amount of the cart item including quantity.

##### cart.discount: `string`<a id="cartdiscount-string"></a>

Discount amount applied on order amount.

##### createRegistration: `string`<a id="createregistration-string"></a>

Used to enable card tokenisation with COPYandPAY.

##### originator: `string`<a id="originator-string"></a>

Used to provide a name for the application that is creating the checkout instance.

##### returnTo: `string`<a id="returnto-string"></a>

Text to display on \\\"Return to Store\\\" button on completing checkout.

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutGenerationInitiateRedirectCheckoutResponse](./models/checkout-generation-initiate-redirect-checkout-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checkout/initiate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.checkoutGeneration.validateRequest`<a id="peachpaymentscheckoutgenerationvalidaterequest"></a>

Validate a request before trying to initiate a checkout session.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateRequestResponse =
  await peachpayments.checkoutGeneration.validateRequest({
    referer: "referer_example",
    authentication_entityId: "8ac7a4ca68c22c4d0168c2caab2e0025",
    signature:
      "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4",
    merchantTransactionId: "OrderNo453432",
    amount: "1010.22",
    paymentType: "DB",
    currency: "ZAR",
    nonce: "UNQ00012345678",
    shopperResultUrl: "https://mydemostore.com/OrderNo453432",
    defaultPaymentMethod: "CARD",
    forceDefaultMethod: "false",
    merchantInvoiceId: "INV-0001",
    cancelUrl: "https://mydemostore.com/OrderNo453432/cancelled",
    notificationUrl: "https://mydemostore.com/OrderNo453432/webhook",
    customParameters_name: "name: Name1 value: Value1",
    customer_merchantCustomerId: "971020",
    customer_givenName: "John",
    customer_surname: "Smith",
    customer_mobile: "27123456789",
    customer_email: "johnsmith@mail.com",
    customer_status: "EXISTING",
    customer_birthDate: "1970-02-17",
    customer_ip: "192.168.1.1",
    customer_phone: "27123456789",
    customer_idNumber: "9001010000084",
    billing_street1: "1 Example Road",
    billing_street2: "LocalityA",
    billing_city: "Cape Town",
    billing_company: "CompanyA",
    billing_country: "ZA",
    billing_state: "Western Cape",
    billing_postcode: "1234",
    shipping_street1: "1 Example Road",
    shipping_street2: "LocalityA",
    shipping_city: "Cape Town",
    shipping_company: "CompanyA",
    shipping_postcode: "1234",
    shipping_country: "ZA",
    shipping_state: "Western Cape",
    cart_tax: "15.00",
    cart_shippingAmount: "12.25",
    cart_discount: "02.25",
    createRegistration: "false",
    originator: "Webstore",
    returnTo: "STORE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication.entityId: `string`<a id="authenticationentityid-string"></a>

The entity for the request. By default, this is the channel ID.

##### signature: `string`<a id="signature-string"></a>

Token to verify the integrity of the payment, ensuring that only the merchant sending the request is accepted.

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

Merchant-provided reference number unique for your transactions.

##### amount: `string`<a id="amount-string"></a>

The amount of the payment request. The period is used as the decimal separator. M-PESA does not support decimal amounts, so Checkout automatically rounds them up.

##### paymentType: `string`<a id="paymenttype-string"></a>

The payment type for the request. Accepts `DB`.  Does not accept `RG`, but you can tokenise a card by performing a DB with `createRegistration`.  Refund transactions through the Dashboard or as described in the <a href=\\\"https://developer.peachpayments.com/docs/checkout-refund\\\" target=\\\"_blank\\\">documentation</a>. 

##### currency: `string`<a id="currency-string"></a>

The currency code of the payment request amount.

##### nonce: `string`<a id="nonce-string"></a>

Unique value to represent each request.

##### shopperResultUrl: `string`<a id="shopperresulturl-string"></a>

Checkout uses a POST request to redirect the customer to this URL after the customer completes checkout. Must be a valid URL that can be accessed through a browser.

##### referer: `string`<a id="referer-string"></a>

An allowlisted domain for the merchant.

##### defaultPaymentMethod: `string`<a id="defaultpaymentmethod-string"></a>

The preferred payment method which is active in the checkout page at the point of redirecting.

##### forceDefaultMethod: `string`<a id="forcedefaultmethod-string"></a>

Force the default payment method to be the only payment method.

##### merchantInvoiceId: `string`<a id="merchantinvoiceid-string"></a>

Merchant-provided invoice number unique for your transactions. This identifier is not sent onwards.

##### cancelUrl: `string`<a id="cancelurl-string"></a>

The customer is redirected to this URL if they cancel checkout. It must be a valid URL that can be reached through a browser.

##### notificationUrl: `string`<a id="notificationurl-string"></a>

Override the preconfigured webhook URL for this checkout instance, any changes to checkout will send a webhook to this url.

##### customParameters[name]: `string`<a id="customparametersname-string"></a>

A name value pair used for sending custom information.

##### customer.merchantCustomerId: `string`<a id="customermerchantcustomerid-string"></a>

An identifier for this customer. Typically this is the ID that identifies the shopper in the shop\\\'s system.

##### customer.givenName: `string`<a id="customergivenname-string"></a>

The customer\\\'s first name or given name.  Required if you send in any other customer parameters, and for some risk checks and payment providers.  Peach Payments recommends including the name so that it displays in the Peach Dashboard and is available for subsequent queries.  Truncated after 48 characters. 

##### customer.surname: `string`<a id="customersurname-string"></a>

The customer\\\'s last name or surname.  Required if you send in any other customer parameters, and for some risk checks and payment providers.  Peach Payments recommends including the surname so that it displays in the Peach Dashboard and is available for subsequent queries.  Truncated after 48 characters. 

##### customer.mobile: `string`<a id="customermobile-string"></a>

The customer\\\'s mobile number.

##### customer.email: `string`<a id="customeremail-string"></a>

The customer\\\'s email address.

##### customer.status: `string`<a id="customerstatus-string"></a>

The customer\\\'s status. Accepts `NEW` or `EXISTING`.

##### customer.birthDate: `string`<a id="customerbirthdate-string"></a>

The customer\\\'s birth date in the yyyy-MM-dd format.

##### customer.ip: `string`<a id="customerip-string"></a>

The customer\\\'s IP address.

##### customer.phone: `string`<a id="customerphone-string"></a>

The customer\\\'s phone number.

##### customer.idNumber: `string`<a id="customeridnumber-string"></a>

The customer\\\'s ID number, required for high-risk merchants supporting Capitec Pay.

##### billing.street1: `string`<a id="billingstreet1-string"></a>

The door number, floor, building number, building name, and/or street name of the billing address.

##### billing.street2: `string`<a id="billingstreet2-string"></a>

The adjoining road or locality, if required, of the billing address.

##### billing.city: `string`<a id="billingcity-string"></a>

The town, district, or city of the billing address.

##### billing.company: `string`<a id="billingcompany-string"></a>

The company of the billing address.

##### billing.country: `string`<a id="billingcountry-string"></a>

The country of the billing address (ISO 3166-1).

##### billing.state: `string`<a id="billingstate-string"></a>

The county, state, or region of the billing address.

##### billing.postcode: `string`<a id="billingpostcode-string"></a>

The postal code or ZIP code of the billing address.

##### shipping.street1: `string`<a id="shippingstreet1-string"></a>

The door number, floor, building number, building name, and/or street name of the shipping address.

##### shipping.street2: `string`<a id="shippingstreet2-string"></a>

The adjoining road or locality, if required, of the shipping address.

##### shipping.city: `string`<a id="shippingcity-string"></a>

The town, district, or city of the shipping address.

##### shipping.company: `string`<a id="shippingcompany-string"></a>

The company of the shipping address.

##### shipping.postcode: `string`<a id="shippingpostcode-string"></a>

The postal code or ZIP code of the shipping address.

##### shipping.country: `string`<a id="shippingcountry-string"></a>

The country of the shipping address (ISO 3166-1).

##### shipping.state: `string`<a id="shippingstate-string"></a>

The county, state, or region of the shipping address.

##### cart.tax: `string`<a id="carttax-string"></a>

The tax percentage applied to the price of the item in the shopping cart.

##### cart.shippingAmount: `string`<a id="cartshippingamount-string"></a>

The total amount of the cart item including quantity.

##### cart.discount: `string`<a id="cartdiscount-string"></a>

Discount amount applied on order amount.

##### createRegistration: `string`<a id="createregistration-string"></a>

Used to enable card tokenisation with COPYandPAY.

##### originator: `string`<a id="originator-string"></a>

Used to provide a name for the application that is creating the checkout instance.

##### returnTo: `string`<a id="returnto-string"></a>

Text to display on \\\"Return to Store\\\" button on completing checkout.

#### 🔄 Return<a id="🔄-return"></a>

[MessageResponse](./models/message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checkout/validate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.files.downloadFile`<a id="peachpaymentsfilesdownloadfile"></a>

Downloads a file that was attached to a payment link.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadFileResponse = await peachpayments.files.downloadFile({
  paymentId: "paymentId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentId: `string`<a id="paymentid-string"></a>

Payment ID.

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/payments/{paymentId}/files/{fileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.files.uploadFile`<a id="peachpaymentsfilesuploadfile"></a>

Upload a file so that it can be attached to a payment link. Only PDFs smaller than 5 MB are supported.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadFileResponse = await peachpayments.files.uploadFile({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

File content to be uploaded.

#### 🔄 Return<a id="🔄-return"></a>

[FilesUploadFileResponse](./models/files-upload-file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/attachments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.helpers.getPaymentMethods`<a id="peachpaymentshelpersgetpaymentmethods"></a>

Retrieve a list of enabled payment methods for a channel given a particular currency.

For more information, see the [documentation](https://developer.peachpayments.com/docs/checkout-merchant-specs). 


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPaymentMethodsResponse = await peachpayments.helpers.getPaymentMethods(
  {
    authentication_entityId: "8ac7a4ca68c22c4d0168c2caab2e0025",
    signature:
      "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4",
    currency: "ZAR",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication.entityId: `string`<a id="authenticationentityid-string"></a>

##### signature: `string`<a id="signature-string"></a>

Token to verify the integrity of the request, ensuring that only the merchant sending the request is accepted.

##### currency: `string`<a id="currency-string"></a>

Three-letter ISO 4217 currency code.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/merchant_specs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.payment.cancelLink`<a id="peachpaymentspaymentcancellink"></a>

Cancel a previously-generated link by supplying the unique paymentId which is returned to you in the payment response.

For more information, see the [documentation](https://developer.peachpayments.com/docs/cancel-link).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelLinkResponse = await peachpayments.payment.cancelLink({
  paymentId: "paymentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentId: `string`<a id="paymentid-string"></a>

The ID of the payment. Returned when creating a new payment.

#### 🔄 Return<a id="🔄-return"></a>

[MessageResponse](./models/message-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/payments/{paymentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.payment.generateLink`<a id="peachpaymentspaymentgeneratelink"></a>

Generate a unique payment link for a transaction and optionally send this link to the recipient via email, SMS, WhatsApp, or a combination of the three.

For more information, see the [documentation](https://developer.peachpayments.com/docs/generate-link-1).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateLinkResponse = await peachpayments.payment.generateLink({
  entityId: "8ac7a4ca694cec2601694cf5f9360026",
  payment: {
    merchantInvoiceId: "INV-9001",
    amount: 10,
    currency: "ZAR",
    notes: "Please pay this at your earliest convenience.",
  },
  customer: {
    givenName: "Jane",
    surname: "Doe",
    email: "name@example.com",
    mobile: "27610107822",
    whatsapp: "+27123456789",
    fax: "2919392022",
    phone: "27210030000",
    ip: "0.0.0.0",
    merchantCustomerLanguage: "EN",
    status: "NEW",
    merchantCustomerId: "sxxopjqy",
    taxId: "4550045030303",
    taxType: "tax type",
    birthDate: "1996-08-07",
  },
  options: {
    sendEmail: false,
    sendSms: false,
    sendWhatsapp: false,
    emailCc: "ccexample@mail.com",
    emailBcc: "bccexample@mail.com",
    expiryTime: 5,
    notificationUrl: "https://webhook.site/",
  },
  checkout: {
    defaultPaymentMethod: "CARD",
    forceDefaultMethod: false,
    tokeniseCard: false,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payment: [`GenerateLinkPaymentPayment`](./models/generate-link-payment-payment.ts)<a id="payment-generatelinkpaymentpaymentmodelsgenerate-link-payment-paymentts"></a>

##### customer: [`Customer`](./models/customer.ts)<a id="customer-customermodelscustomerts"></a>

##### options: [`PaymentOptions`](./models/payment-options.ts)<a id="options-paymentoptionsmodelspayment-optionsts"></a>

##### checkout: [`CheckoutOptions`](./models/checkout-options.ts)<a id="checkout-checkoutoptionsmodelscheckout-optionsts"></a>

##### entityId: `string`<a id="entityid-string"></a>

The entity for the request.

#### 🔄 Return<a id="🔄-return"></a>

[GenerateLinkResponse](./models/generate-link-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/channels/{entityId}/payments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.payment.getAllPaymentLinks`<a id="peachpaymentspaymentgetallpaymentlinks"></a>

Retrieve a paginated list or export a CSV of all payment links. To export to CSV, change the request header's `Accept` value to `text/csv`. For more information, see the [documentation](https://developer.peachpayments.com/docs/retrieve-all-payment-links), or to try it out, see our [Postman collection](https://www.postman.com/peachpayments/workspace/peach-payments-public-workspace/request/13324425-265d80b0-5baa-478b-be10-debc942ca8f3).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPaymentLinksResponse =
  await peachpayments.payment.getAllPaymentLinks({
    merchant: "9f6ea39b121d11e89d9774d4352a31dz",
    offset: 0,
    perPage: 50,
    filtersStartDate: "2018-03-20T09:12:28Z",
    filtersEndDate: "2018-03-20T09:12:28Z",
    filtersStatus: "initiated",
    filtersAmountValue: 100,
    filtersAmountOperator: "lt",
    filtersSendingOptions: "sendEmail",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### merchant: `string`<a id="merchant-string"></a>

The unique merchant ID to scope the list to. Required if you\'re exporting payment links to CSV.

##### offset: `number`<a id="offset-number"></a>

The offset from which to read data.

##### perPage: `number`<a id="perpage-number"></a>

The amount of items to retrieve.

##### filtersStartDate: `string`<a id="filtersstartdate-string"></a>

Retrieve all payment links from the start date onwards.

##### filtersEndDate: `string`<a id="filtersenddate-string"></a>

Retrieve all payment links until the end date.

##### filtersStatus: `'initiated' | 'processing' | 'expired' | 'cancelled' | 'completed'`<a id="filtersstatus-initiated--processing--expired--cancelled--completed"></a>

The payment link status to filter on.

##### filtersAmountValue: `number`<a id="filtersamountvalue-number"></a>

The amount to filter by.

##### filtersAmountOperator: `'lt' | 'lte' | 'gt' | 'gte' | 'eq'`<a id="filtersamountoperator-lt--lte--gt--gte--eq"></a>

How to use the amountValue for filtering.

##### filtersSendingOptions: `'sendEmail' | 'sendSms' | 'sendWhatsapp' | 'emailCc' | 'emailBcc'`<a id="filterssendingoptions-sendemail--sendsms--sendwhatsapp--emailcc--emailbcc"></a>

The sending option to filter on.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentGetAllPaymentLinksResponse](./models/payment-get-all-payment-links-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.paymentsApiInbound.initiateDebitTransaction`<a id="peachpaymentspaymentsapiinboundinitiatedebittransaction"></a>

Initiate a debit transaction.

Certain parameters are mandatory for specific payment methods and certain parameters act differently depending on the payment method. 

- For 1Voucher, `customer.mobile` (the customer's phone number for receiving change vouchers and refunds) and `virtualAccount.password` (the voucher PIN) are mandatory.
- For M-PESA, `virtualAccount.accountId` (the customer's 12-digit phone number) is mandatory. M-PESA only accepts integer amounts, not decimals, so round up your amount.
- For blink by Emtel and MCB Juice, `virtualAccount.accountId` (the customer's 8-digit phone number) is mandatory.
- For Mobicred, `virtualAccount.accountId` (the customer's Mobicred email address) and `virtualAccount.password` (the customer's Mobicred password) are mandatory.
- For Capitec Pay, `virtualAccount.type` (the customer's identifier type; `IDNUMBER`, `CELLPHONE`, or `ACCOUNTNUMBER`) and `virtualAccount.accountId` (the customer's 13-digit ID number, 10-digit phone number starting with `0`, or up-to 64-digit, alphanumeric bank account number) are mandatory. High-risk merchants must provide the verified `IDNUMBER` and cannot use the `CELLPHONE` or `ACCOUNTNUMBER` account types.
- For EFTsecure, Payflex, ZeroPay, FinChoicePay, Scan to Pay, M-PESA, blink by Emtel, Mobicred, Capitec Pay, Nebank Direct EFT, and MCB Juice, the `shopperResultUrl` is mandatory.

For more information, see the [documentation](https://developer.peachpayments.com/docs/payments-api-flows#payment-flow) and for sample calls, see our [public Postman collection](https://www.postman.com/peachpayments/workspace/peach-payments-public-workspace/request/13324425-693c4b18-dad5-4b6f-aeb0-99bc28b94812).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateDebitTransactionResponse =
  await peachpayments.paymentsApiInbound.initiateDebitTransaction({
    authentication: {
      userId: "80d41ee71ee011e98e81067b75644abf",
      password: "xDZWEIefSkyibutsU3",
      entityId: "80d41ee71ee011e98e81067b75644abf",
    },
    merchantTransactionId: "test12345",
    amount: "22.50",
    currency: "ZAR",
    paymentBrand: "EFTSECURE",
    paymentType: "DB",
    merchantInvoiceId: "20170630407200",
    shopperResultUrl: "https://example.com/redirect",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication: [`Authentication`](./models/authentication.ts)<a id="authentication-authenticationmodelsauthenticationts"></a>

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

Merchant-provided reference number, often used for reconciliation.

##### amount: `string`<a id="amount-string"></a>

The payment request amount.

##### currency: `string`<a id="currency-string"></a>

The currency code of the payment request amount as defined by ISO-4217.

##### paymentBrand: [`PaymentBrand`](./models/payment-brand.ts)<a id="paymentbrand-paymentbrandmodelspayment-brandts"></a>

The payment brand specifies the method of payment for the request.

##### paymentType: [`PaymentType`](./models/payment-type.ts)<a id="paymenttype-paymenttypemodelspayment-typets"></a>

Payment type of the transaction.

##### virtualAccount: [`VirtualAccount`](./models/virtual-account.ts)<a id="virtualaccount-virtualaccountmodelsvirtual-accountts"></a>

##### shipping: [`Address`](./models/address.ts)<a id="shipping-addressmodelsaddressts"></a>

##### billing: [`Address`](./models/address.ts)<a id="billing-addressmodelsaddressts"></a>

##### shopify: [`Shopify`](./models/shopify.ts)<a id="shopify-shopifymodelsshopifyts"></a>

##### customer: [`Customer`](./models/customer.ts)<a id="customer-customermodelscustomerts"></a>

##### cart: [`Cart`](./models/cart.ts)<a id="cart-cartmodelscartts"></a>

##### merchantInvoiceId: `string`<a id="merchantinvoiceid-string"></a>

The merchant\\\'s invoice ID.

##### shopperResultUrl: `string`<a id="shopperresulturl-string"></a>

The Payments API redirects the user to this URL after processing the payment request.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentsApiInboundInitiateDebitTransactionResponse](./models/payments-api-inbound-initiate-debit-transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.paymentsApiInbound.queryTransactionById`<a id="peachpaymentspaymentsapiinboundquerytransactionbyid"></a>

Query the status of a transaction using the Peach Payments unique ID.

For more information, see the [documentation](https://developer.peachpayments.com/docs/payments-api-flows#transaction-status-flow).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryTransactionByIdResponse =
  await peachpayments.paymentsApiInbound.queryTransactionById({
    uniqueId: "b4508276b8d146728dac871d6f68b45d",
    authenticationEntityId: "80d41ee71ee011e98e81067b75644abf",
    authenticationUserId: "80d41ee71ee011e98e81067b75644abf",
    authenticationPassword: "xDZWEIefSkyibutsU3",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uniqueId: `string`<a id="uniqueid-string"></a>

The Peach Payments unique ID for the transaction.

##### authenticationEntityId: `string`<a id="authenticationentityid-string"></a>

Authentication entityId.

##### authenticationUserId: `string`<a id="authenticationuserid-string"></a>

Authentication userId.

##### authenticationPassword: `string`<a id="authenticationpassword-string"></a>

Authentication password.

#### 🔄 Return<a id="🔄-return"></a>

[TransactionIdStatusResponse](./models/transaction-id-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/{uniqueId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.paymentsApiInbound.refundTransaction`<a id="peachpaymentspaymentsapiinboundrefundtransaction"></a>

Refund a successful debit transaction. You can only refund [certain payment methods](https://developer.peachpayments.com/docs/pp-payment-methods).

For more information, see the [documentation](https://developer.peachpayments.com/docs/payments-api-flows#refund-flow).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refundTransactionResponse =
  await peachpayments.paymentsApiInbound.refundTransaction({
    uniqueId: "b4508276b8d146728dac871d6f68b45d",
    authentication: {
      userId: "80d41ee71ee011e98e81067b75644abf",
      password: "xDZWEIefSkyibutsU3",
      entityId: "80d41ee71ee011e98e81067b75644abf",
    },
    amount: "22.50",
    currency: "ZAR",
    paymentType: "RF",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication: [`Authentication`](./models/authentication.ts)<a id="authentication-authenticationmodelsauthenticationts"></a>

##### amount: `string`<a id="amount-string"></a>

The payment request amount.

##### currency: `string`<a id="currency-string"></a>

The currency code of the payment request amount as defined by ISO-4217.

##### paymentType: [`RefundPaymentType`](./models/refund-payment-type.ts)<a id="paymenttype-refundpaymenttypemodelsrefund-payment-typets"></a>

Refund type of the transaction.

##### uniqueId: `string`<a id="uniqueid-string"></a>

The Peach Payments unique ID of the original debit transaction.

#### 🔄 Return<a id="🔄-return"></a>

[PaymentsApiInboundRefundTransactionResponse](./models/payments-api-inbound-refund-transaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments/{uniqueId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.paymentsApiInbound.status`<a id="peachpaymentspaymentsapiinboundstatus"></a>

Query the status of a transaction using the merchantTransactionId. Could return multiple results.

For more information, see the [documentation](https://developer.peachpayments.com/docs/payments-api-flows#transaction-status-flow).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const statusResponse = await peachpayments.paymentsApiInbound.status({
  authenticationUserId: "80d41ee71ee011e98e81067b75644abf",
  authenticationPassword: "xDZWEIefSkyibutsU3",
  authenticationEntityId: "80d41ee71ee011e98e81067b75644abf",
  merchantTransactionId: "test12345",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authenticationUserId: `string`<a id="authenticationuserid-string"></a>

##### authenticationPassword: `string`<a id="authenticationpassword-string"></a>

##### authenticationEntityId: `string`<a id="authenticationentityid-string"></a>

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MerchantTransactionIdStatusResponse](./models/merchant-transaction-id-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.paymentsApiOutbound.webhook`<a id="peachpaymentspaymentsapioutboundwebhook"></a>

Encrypted and decrypted webhook sent to merchant - retries if response HTTP status code is not 200.

For more information, see the [documentation](https://developer.peachpayments.com/docs/payments-api-flows#webhook-flow).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webhookResponse = await peachpayments.paymentsApiOutbound.webhook({
  xInitializationVector: "34ba8cf802216b4fab4c3f1z",
  xAuthenticationTag: "50d697553c37c1f9865acc3dc0f8b5az",
  encryptedData:
    "48d33e173781de4ebfe247593240fee492aad55bc140bd1157b62da5747d74bf349d1c5035ab40bb62ba7ee3eafa7e8f8cf5e3af2cdea0c915eed159d0efa12ccd3c6a4ded4182e26687180a73f1d1ed7ab6415be9f0100a3803d19f1cf90402211185c4fc764be11a1b8d7c5434150db5d74c70e309a701d670c3beef47ea53726c5b7d677e13a0ca4b05a1b4fd7ca4218a3922b45271904f17a8a5c4cbe2b4571928a089610ccf37d14c98ccc51085f0897d22cead18f13504fa2b9182389ed77323ed2c8cacb18f0b1fd8cf0599bfabaac27e0d926d60af3f41f47bf0607c6df031de8973da17fac8ca6eb04c2b6491fa5e73e29cd4f9c3c4fce1c397b729ed6132c7a5fc812dc4bb7173354e7f13f9e80407c9b3c6e5dc82edabbf160097b82438874eb79edd7540ed963c5eb268a74cbbefce1661b388c0e442b4a90a954932e19f49aef5c10c9ac2639085049a2fe3c903aaafed326a2b81e2dcd4e32ac16c72218067c623cd5d20f98ee2594c8557a704c1e7b2a7ac2c7bf8ce52d91e0816081dd88697b0c9ea1b07adaf9a39948f88d02aec37103e52675a394d324db7cab951284f08da17306a1b4107a2b6b5aeead6bdb087fbe927eaf03d9b8e0a4a9683a0966e8d1d8e8ea1069e3870275317d3bc676a697fe4d4b6c0bbabc806ae6ff0d7cec926bfce10eca2f07ac832d6a9984d19b121d99f2db4b33ed6b8ecbf25687c34d8e48ffc1f438a4524c3f9657140102cc55ec0c48d37cb42424e8e622da6fc3f60bd969791b21b6360e25a2bcf956f2cdc1bbf049f173ac0b0558c34f89964cb8aced7bf2b532910d98f83760d529a2e67af7f9a7cd2739b871e7f914a99061623990a64a854560a860c1b5eff565b2de2be64d68be5de3d3a061aabb3ead5039d49d976ea9b094752d1a55851d33be6c1eab4197f1f409150eae8e6fca14ad757bf9c7451a795ab04763b8f1c1d4b3416e055f074aa51c6c5477eb0c219dd9b4bb26926e6490061284e14fa8c6969aba4a8036d685be81de9ad8c834217e456ed0be40e0b2331db8f0240135ac4ae066fe7596c28e949f20af760e6d0836e7ab218ca1092c4d45b64856f286f69d8754622a5a45c1865454c78f6df271481b692f2b5481d09c1d2eba226f40ec1ce008186d286aab4d4e091623e78147b1cbbd4a2c671beca4402565b0d663fc11776085bb5288396cb770bf43281ca14212abc057206684e40181d3e0498eda17e9c5dce344b16dc2853fc6cb3d6e5e86891c8573fb537701a01431cb5d1fe74ef565de48286db8bf17912dc6a46e7413115091d1cb7535e0d08685d57f5a18990cabdd5c73cd193147703f2221c0c2adf1e0bb1d4a170bc38b7082490464cbffcab72ffad243401645e23df324d072bad90200bab1ae40a272bcbd0bf1ccc9595498f0416ec10eb73b7a9024cc9082693c97d98908bc2b34724865dc08f88fbf09ed984b4987c3abf01a30f1d91919f29eecf5849b337512591c1f110de3ea17e0048ff4521820f33adcbb11c1e70b6c7ae646a7e9d024356cf34a5e2ccdbf30c3825e41bdb000d04bd5bda835eb52fd301dece1b11c45d97d03d5048c1a154c0e84e21b066790261632e487ec3c35d877ba79590bac13ea679772d8b2e4821ae3204c34475a2871039835817d10c8db9f3ec241532099dc8d0b4891b23fb12ad173a7be287afe31f3e6e29266c213430b4a749b92bbcfe8ad7ef4281ca7b71502de99adf574f81c5605c70a76295ce51f1f0ce6e475c98c1dc4dfcb3492494cbda9038e8193d072be09f9cf8103d67f79effe972c710accd94a6c5ee0c3e1bf8facb7fee1499a4cbeb5f444de1f85f998698bacbd2b0a8f6f2010bff95d8e75800ff39ea75f18bd0f3729bd24408e464e44d2fb2e62ec6ef06c349b8f1f83cd43bbad21657bece4fb6e115ab12e7a28458b5c8e9ebf5a06dbdd6e459105cab7c69f2792fb21a8b8c05a6498f4b20f42975cedb784ed45898fe3be750af3a23769e5cb7407219044aa4736bffcf66d76459b0c9cb0d7fb91575949beb0b28add0b8f5bb88c63b23643f20954074a561db01dc1fd5fbe0efa0e6e09e0de5fddc84fa12fadf236b9160f7b9a3408919af1e27d81a80f87a65f7038a703f8526d7f85c916223306ee2ba38bba1d3ff01a3c97806ed78fabd5ec298a2716292b852e7d3f7e6575b77457e44b6d22f57f0ae756c2c1c71de0d5278bac29334467949b7fddf6cb4e7d3c5b5b841335a80f9e3c8ed86fe4d0e77d4804418273d6f580f781475ec43edbeb378c172",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### encryptedData: `string`<a id="encrypteddata-string"></a>

Encrypted webhook data ciphertext.

##### xInitializationVector: `string`<a id="xinitializationvector-string"></a>

##### xAuthenticationTag: `string`<a id="xauthenticationtag-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.status.checkoutStatusGet`<a id="peachpaymentsstatuscheckoutstatusget"></a>

Get the status of a checkout instance.

For more information, see the [documentation](https://developer.peachpayments.com/docs/checkout-payment-status).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkoutStatusGetResponse = await peachpayments.status.checkoutStatusGet({
  authenticationEntityId: "8ac7a4ca68c22c4d0168c2caab2e0025",
  checkoutId: "948cc8dec52a11eb85290242ac130003",
  merchantTransactionId: "OrderNo453432",
  signature: "a668342244a9c77b08a2f9090d033d6e2610b431a5c0ca975f32035ed06164f4",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authenticationEntityId: `string`<a id="authenticationentityid-string"></a>

Merchant\'s entity ID.

##### signature: `string`<a id="signature-string"></a>

Signature of data signed with secret key of merchant.

##### checkoutId: `string`<a id="checkoutid-string"></a>

Checkout ID.

##### merchantTransactionId: `string`<a id="merchanttransactionid-string"></a>

Merchant transaction ID.

#### 🔄 Return<a id="🔄-return"></a>

[CheckoutStatus](./models/checkout-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `peachpayments.status.queryPaymentStatus`<a id="peachpaymentsstatusquerypaymentstatus"></a>

Query the status of a payment.

For more information, see the [documentation](https://developer.peachpayments.com/docs/query-payment).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryPaymentStatusResponse =
  await peachpayments.status.queryPaymentStatus({
    paymentId: "paymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### paymentId: `string`<a id="paymentid-string"></a>

Payment ID. Returned when creating a new payment.

#### 🔄 Return<a id="🔄-return"></a>

[StatusQueryPaymentStatusResponse](./models/status-query-payment-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/payments/{paymentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
