# Karen Phytoplankton Subscription Setup Guide

This guide provides detailed instructions for setting up and managing subscription options for Karen Phytoplankton products using Shopify and ReCharge Subscriptions.

## Overview

Offering subscription options for Karen Phytoplankton provides several benefits:
- Consistent revenue stream
- Higher customer lifetime value
- Improved customer retention
- Convenience for customers

The subscription model offers a 3-month supply at $180 (compared to $195 for a one-time purchase), providing customers with a 7.7% discount for subscribing.

## Implementation Steps

### 1. Choose a Subscription App

#### Option 1: Shopify Subscriptions (Native)

If you're using Shopify Plus or have access to Shopify Subscriptions:

1. Go to **Settings > Billing**
2. Enable Shopify Subscriptions
3. Follow the setup wizard to configure subscription settings

#### Option 2: ReCharge Subscriptions (Recommended)

For most merchants, ReCharge provides more robust subscription management:

1. Go to **Apps > App Store**
2. Search for "ReCharge Subscriptions"
3. Click **Add app**
4. Follow the installation process
5. Complete the onboarding wizard

### 2. Configure Subscription Settings

#### In ReCharge Admin:

1. Go to **Settings > Store Settings**
2. Configure general settings:
   - Customer Portal (enable and customize)
   - Checkout Settings
   - Email Notifications

3. Go to **Settings > Subscription Settings**
4. Configure subscription rules:
   - Order Cutoff Time: 12:00 AM
   - Processing Days: 0 (same day)
   - Subscription Billing Cycle: Every 3 months
   - Failed Payment Handling: 3 retry attempts

### 3. Set Up Subscription Products

#### Method 1: Convert Existing Products

1. Go to **Products > All Products** in ReCharge
2. Find "Karen Phytoplankton - 3 Month Supply"
3. Click **Edit**
4. Enable **Subscription**
5. Configure subscription options:
   - Subscription Price: $180.00
   - Frequency Options: Every 3 months
   - Discount: 7.7% (calculated automatically)
   - Subscription Details: "Save $15 with auto-delivery every 3 months. Cancel anytime."

#### Method 2: Create Dedicated Subscription Product

1. Go to **Products > Add Product** in Shopify
2. Create a new product:
   - Title: "Karen Phytoplankton - 3 Month Subscription"
   - Description: Include subscription benefits and terms
   - Price: $180.00
   - Compare-at price: $195.00
   - SKU: KAREN-SUB-3M
   - Inventory tracking: Enabled

3. In ReCharge, go to **Products > All Products**
4. Find the new product and enable subscription settings
5. Configure as subscription-only product

### 4. Customize the Subscription Widget

#### Using ReCharge's Widget:

1. Go to **Settings > Customer Portal > Widget Settings**
2. Customize the appearance:
   - Colors: Match your theme (Primary: #194819, Secondary: #e9c37a)
   - Font: Match your theme (Poppins)
   - Border radius: 9999px (for rounded buttons)
   - Button text: "Subscribe & Save"

3. Customize the widget text:
   - One-time purchase label: "One-time purchase"
   - Subscription label: "Subscribe & Save"
   - Subscription details: "Save $15 with auto-delivery every 3 months. Cancel anytime."

#### Custom Widget Implementation:

For a more integrated look, create a custom subscription selector:

1. Create a new snippet file `subscription-widget.liquid` in the `snippets` folder:

```liquid
<div class="subscription-options mt-6 mb-8">
  <h3 class="text-xl font-bold text-green-800 mb-3">Choose Your Plan:</h3>
  
  <div class="space-y-3">
    <div class="subscription-option {% if subscription_type == 'onetime' %}selected{% endif %}" data-value="onetime">
      <div class="flex items-center">
        <input type="radio" id="one-time" name="subscription_type" value="onetime" class="mr-3 h-5 w-5 text-green-800" {% if subscription_type == 'onetime' %}checked{% endif %}>
        <label for="one-time" class="flex-1">
          <div class="font-bold text-green-800">One-time purchase</div>
          <div class="text-sm">{{ product.price | money }}</div>
        </label>
      </div>
    </div>
    
    <div class="subscription-option {% if subscription_type == 'subscription' %}selected{% endif %}" data-value="subscription">
      <div class="flex items-center">
        <input type="radio" id="subscription" name="subscription_type" value="subscription" class="mr-3 h-5 w-5 text-green-800" {% if subscription_type == 'subscription' %}checked{% endif %}>
        <label for="subscription" class="flex-1">
          <div class="font-bold text-green-800">Subscribe & Save</div>
          <div class="text-sm">{{ subscription_price | money }} every 3 months</div>
          <div class="text-xs text-green-700 mt-1">Save {{ savings_amount | money }} ({{ savings_percent }}%) with auto-delivery. Cancel anytime.</div>
        </label>
      </div>
    </div>
  </div>
  
  <input type="hidden" id="subscription-input" name="subscription_type" value="{{ subscription_type | default: 'onetime' }}">
</div>
```

2. Include this snippet in your product template:

```liquid
{% assign subscription_price = 180.00 %}
{% assign regular_price = 195.00 %}
{% assign savings_amount = regular_price | minus: subscription_price %}
{% assign savings_percent = savings_amount | times: 100 | divided_by: regular_price | round %}

{% render 'subscription-widget', 
  product: product,
  subscription_price: subscription_price,
  savings_amount: savings_amount,
  savings_percent: savings_percent
%}
```

3. Add JavaScript to handle the selection:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const subscriptionOptions = document.querySelectorAll('.subscription-option');
  const subscriptionInput = document.getElementById('subscription-input');
  
  if (subscriptionOptions.length > 0 && subscriptionInput) {
    subscriptionOptions.forEach(option => {
      option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const radio = this.querySelector('input[type="radio"]');
        
        // Update hidden input
        subscriptionInput.value = value;
        
        // Update radio button
        radio.checked = true;
        
        // Update selected state
        subscriptionOptions.forEach(opt => {
          opt.classList.remove('selected');
        });
        this.classList.add('selected');
        
        // Update price display if needed
        updatePriceDisplay(value);
      });
    });
  }
  
  function updatePriceDisplay(subscriptionType) {
    const priceElement = document.querySelector('.product-price');
    const regularPrice = {{ regular_price | json }};
    const subscriptionPrice = {{ subscription_price | json }};
    
    if (priceElement) {
      if (subscriptionType === 'subscription') {
        priceElement.innerHTML = '$' + subscriptionPrice.toFixed(2);
      } else {
        priceElement.innerHTML = '$' + regularPrice.toFixed(2);
      }
    }
  }
});
```

### 5. Set Up Customer Portal

The customer portal allows subscribers to manage their subscriptions:

1. Go to **Settings > Customer Portal** in ReCharge
2. Enable the Customer Portal
3. Customize the appearance:
   - Colors: Match your theme
   - Logo: Upload your Karen logo
   - Font: Match your theme

4. Configure portal settings:
   - Allow customers to:
     - Skip deliveries
     - Change frequency
     - Swap products
     - Update shipping/billing info
     - Cancel subscriptions

5. Customize email templates:
   - Subscription confirmation
   - Order confirmation
   - Upcoming order reminder
   - Payment failure notification

### 6. Testing Subscriptions

Before launching, thoroughly test the subscription functionality:

1. **Test Purchase Flow**:
   - Add subscription product to cart
   - Complete checkout
   - Verify order confirmation
   - Check ReCharge admin for subscription creation

2. **Test Customer Portal**:
   - Access customer portal as a test customer
   - Test skipping a delivery
   - Test changing frequency
   - Test updating payment method
   - Test cancellation process

3. **Test Recurring Orders**:
   - Use ReCharge's test mode to simulate recurring orders
   - Verify order creation
   - Verify email notifications
   - Verify inventory updates

### 7. Launch and Promotion

Once testing is complete, promote your subscription offering:

1. **Homepage Promotion**:
   - Add subscription callout to homepage
   - Highlight savings and convenience

2. **Email Marketing**:
   - Send announcement to existing customers
   - Highlight benefits of subscribing

3. **Product Page Emphasis**:
   - Make subscription option prominent
   - Clearly communicate savings

4. **Incentives**:
   - Consider offering a one-time discount for first-time subscribers
   - Offer free shipping for subscription orders

## Subscription Management

### Customer Management

1. **Viewing Subscribers**:
   - Go to **Customers** in ReCharge
   - View all active subscribers
   - Filter by subscription status, product, etc.

2. **Managing Individual Subscriptions**:
   - Click on a customer to view their subscriptions
   - Make changes on behalf of customers if needed
   - Add notes to customer accounts

### Order Management

1. **Viewing Upcoming Orders**:
   - Go to **Orders > Upcoming** in ReCharge
   - View all scheduled subscription orders
   - Filter by date, product, etc.

2. **Managing Failed Payments**:
   - Go to **Orders > Failed** in ReCharge
   - View all failed payment attempts
   - Manually retry payments or contact customers

### Reporting and Analytics

1. **Subscription Metrics**:
   - Go to **Analytics** in ReCharge
   - View key metrics:
     - Active subscribers
     - Churn rate
     - Lifetime value
     - Recurring revenue

2. **Exporting Data**:
   - Export customer lists
   - Export order history
   - Create custom reports

## Best Practices

1. **Clear Communication**:
   - Clearly explain subscription terms
   - Make cancellation process transparent
   - Send reminder emails before charging

2. **Flexible Options**:
   - Allow customers to easily modify subscriptions
   - Provide skip-a-delivery option
   - Allow frequency changes

3. **Customer Retention**:
   - Send thank-you notes to long-term subscribers
   - Offer occasional perks or free samples
   - Request feedback to improve service

4. **Troubleshooting Common Issues**:
   - Payment failures: Implement dunning management
   - Delivery issues: Provide tracking and support
   - Cancellation requests: Offer alternatives (pause, skip)

## Legal Considerations

Ensure your subscription program complies with legal requirements:

1. **Terms and Conditions**:
   - Clearly state subscription terms
   - Explain billing frequency
   - Detail cancellation process

2. **Privacy Policy**:
   - Update to include subscription data handling
   - Explain payment information storage

3. **Consent Requirements**:
   - Obtain explicit consent for recurring billing
   - Provide clear opt-out instructions

## Support Resources

For assistance with subscription setup and management:

1. **ReCharge Support**:
   - Help Center: [help.rechargepayments.com](https://help.rechargepayments.com)
   - Support Email: support@rechargeapps.com

2. **Shopify Support**:
   - Help Center: [help.shopify.com](https://help.shopify.com)
   - Support: 24/7 chat and email support

3. **Karen Phytoplankton Support**:
   - Email: support@karenphytoplankton.com
   - Phone: 1-800-KAREN-PH
