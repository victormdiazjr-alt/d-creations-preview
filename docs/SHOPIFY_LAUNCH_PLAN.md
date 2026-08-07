# D Creations — Shopify V1 Launch Plan

## Current release status

- Visual storefront V1: approved by the owner.
- Static preview: complete and externally viewable.
- Shopify commerce layer: not implemented yet.
- Production sales: not enabled.

The recovered site is a static HTML build. It is not currently a Shopify theme and it does not yet submit customer requests, add products to a cart, create orders, or process payments.

## Phase 1 — Build the Shopify test theme

- Reconstruct the approved storefront as an Online Store 2.0 theme.
- Create editable Liquid sections, snippets, JSON templates, and theme settings.
- Preserve the approved desktop and mobile design.
- Import the product catalog with real titles, prices, variants, SKUs, images, and inventory rules.
- Decide which products use direct checkout and which use a quote/proof workflow.
- Convert personalization fields to Shopify line-item properties.
- Add a supported file-upload workflow for artwork and theme references.
- Connect product forms, cart, checkout, customer notifications, and order data.

## Phase 2 — Owner configuration in Shopify Admin

These settings require the store owner and must not be guessed or completed with placeholder financial information.

### Business and payments

- Confirm legal business name, business type, address, owner identity, and tax information.
- Select the Shopify plan for the test store.
- Confirm USD as the selling currency.
- Add and verify the payout bank account.
- Confirm Shopify Payments eligibility in the store admin.
- Decide whether to enable PayPal, Shop Pay, Apple Pay, Google Pay, and any alternative provider offered to the store.
- Keep payments in test mode until the full checkout audit passes.

### Email

- Create or confirm the mailbox `info@dcreationspr.com` with the domain's email provider. Shopify does not host the mailbox.
- Use `info@dcreationspr.com` as the Shopify Store email and Sender email.
- Authenticate the domain with every CNAME record supplied by Shopify.
- Confirm that the domain has exactly one valid DMARC record.
- Verify MX, SPF/DKIM, DMARC, inbound delivery, order notifications, and contact-form delivery.

### Domain

- Confirm who manages DNS for `dcreationspr.com`.
- Connect the domain to Shopify.
- Verify SSL.
- Set the official primary domain and redirect alternate domains.
- Preserve email DNS records while changing website DNS records.

### Shipping, taxes, and policies

- Define selling zones: Puerto Rico, United States, and any international markets.
- Define production times, shipping rates, packages, weights, local pickup, and local delivery.
- Confirm Puerto Rico and other tax obligations with the owner's accountant or tax adviser before setting rates.
- Approve and publish privacy, terms, shipping, refund/return, cancellation, and custom-product/proof policies.

## Phase 3 — Required test orders

- Test desktop, Android, iPhone, and tablet.
- Test every product, variant, personalization field, and file upload.
- Test shipping, taxes, discounts, successful and failed payments, notifications, fulfillment, cancellation, and refund.
- Use Shopify Payments test mode or Shopify's Bogus Gateway for simulated orders.
- Disable test mode only after the owner approves the complete checkout flow.
- Make one owner-approved low-value live transaction and refund it before public launch.

## Owner decisions required

1. Shopify store/admin access and the store's `.myshopify.com` URL.
2. Legal business identity and payout bank account owner.
3. Product catalog, final prices, variants, SKUs, quantities, and production times.
4. Direct-purchase products versus quote/proof products.
5. Shipping zones and rates.
6. Tax treatment approved by the owner's accountant or tax adviser.
7. Payment methods to offer.
8. Email provider and DNS provider access for `dcreationspr.com`.
9. Final approval of store policies.

## Official Shopify references

- Email setup and domain authentication: https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-your-email
- Shopify Payments eligibility: https://help.shopify.com/en/manual/payments/shopify-payments/onboarding/eligibility
- Supported Shopify Payments countries: https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries
- Test orders: https://help.shopify.com/en/manual/checkout-settings/test-orders
