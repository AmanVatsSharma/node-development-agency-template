# Google Ads Conversion Labels Configuration

## Overview

This directory contains the hardcoded Google Ads conversion tracking configuration. All conversion labels for all landing pages are stored in `conversion-labels.ts`.

## Quick Start

1. **Open** `config/conversion-labels.ts`
2. **Replace** `GOOGLE_CONVERSION_ID` with your actual Google Ads conversion ID (format: `AW-XXXXXXXXXX`)
3. **Replace** each `'LABEL_HERE'` with actual conversion labels from Google Ads
4. **Save** the file - changes take effect immediately

## How to Get Conversion Labels

### Step 1: Login to Google Ads
- Go to [Google Ads](https://ads.google.com)
- Login with your account

### Step 2: Create Conversion Actions
- Click **Tools & Settings** (top menu)
- Select **Conversions** under "Measurement"
- Click **+ New conversion action**

### Step 3: Choose Conversion Type
- Select **Website** as source
- Choose the conversion action category (e.g., "Submit lead form", "Make a phone call")
- Click **Continue**

### Step 4: Configure Conversion
- **Conversion name**: e.g., "Business Website - Form Submit"
- **Value**: Optional (can be 0)
- **Count**: Choose "One" or "Every"
- **Conversion window**: 30 days (recommended)
- Click **Create and continue**

### Step 5: Get the Conversion Label
- Scroll down to **Tag setup**
- Under **Add code manually**, you'll see code like:
  ```html
  <script>
    gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXXX/Y3bsCKXpn6gbEJC-sctB'
    });
  </script>
  ```
- Copy the part after the slash: `Y3bsCKXpn6gbEJC-sctB` (this is your conversion label)

### Step 6: Add to Config File
- Open `config/conversion-labels.ts`
- Find the corresponding event (e.g., `business_website_lead_submit`)
- Replace `'LABEL_HERE'` with your actual label

## Conversion ID vs Labels

- **Conversion ID**: Same for all events (`AW-XXXXXXXXXX`)
  - Located at the top of `conversion-labels.ts`
  - Set once for the entire website
  
- **Labels**: Unique for each event (e.g., `Y3bsCKXpn6gbEJC-sctB`)
  - Each event type has its own label
  - Different labels differentiate between conversion types

## Event Types

Each landing page has 3 conversion events:

1. **Lead Submit** (`*_lead_submit`): Form submission
2. **Call Click** (`*_call_click`): Phone button clicked
3. **WhatsApp Click** (`*_whatsapp_click`): WhatsApp button clicked

## Landing Pages

Currently configured for 13 landing pages + 2 global events = 41 total events:

1. Business Website (`business_website_*`)
2. AI Voice Agents (`ai_voice_agents_*`)
3. Next.js Development (`nextjs_development_*`)
4. React.js Development (`reactjs_development_*`)
5. WhatsApp Business API (`whatsapp_business_api_*`)
6. AI Chatbot Development (`ai_chatbot_development_*`)
7. Shopify Product Page (`shopify_product_page_*`)
8. Google Ads Management (`google_ads_management_*`)
9. CRM Solutions (`crm_solutions_*`)
10. Shopify Headless Migration (`shopify_headless_migration_*`)
11. SEO Audit (`seo_audit_*`)
12. NSE/MCX Live Market Data (`nse_mcx_live_market_data_*`)
13. Trading Software (`trading_software_*`)
14. Global Events (`newsletter_signup`, `contact_form_submit`)

## Testing Conversions

### Check Configuration
1. Visit any landing page
2. Open browser console (F12)
3. Type: `checkConfig()`
4. Verify conversion ID and labels are loaded

### Test a Conversion
1. Visit landing page
2. Open browser console
3. Submit form or click button
4. Look for conversion logs in console
5. Check Network tab for conversion event

### Verify in Google Ads
- Go to Google Ads → Tools & Settings → Conversions
- Check "Recent conversions" section
- Note: Conversions may take 3-24 hours to appear

## Troubleshooting

### Labels Not Working
- ✅ Check that labels are not `'LABEL_HERE'`
- ✅ Verify conversion ID is correct format (`AW-XXXXXXXXXX`)
- ✅ Ensure labels match Google Ads exactly (case-sensitive)
- ✅ Check browser console for errors

### Conversions Not Showing in Google Ads
- ✅ Wait 3-24 hours for first conversion
- ✅ Verify you're logged into correct Google Ads account
- ✅ Check that conversion actions are active in Google Ads
- ✅ Ensure `gtag` is loaded on page (check Network tab)

### Need Help?
- Check browser console for detailed logs
- Verify `/api/google-config` returns correct values
- Test with conversion helper: `monitorConversions()` in console

## Files Structure

```
config/
├── conversion-labels.ts       # Main configuration file
└── CONVERSION_LABELS_README.md # This file
```

## Benefits of Hardcoded Config

✅ **No Database Dependency**: Works immediately without DB setup  
✅ **Version Controlled**: All changes tracked in Git  
✅ **Type Safe**: TypeScript ensures correctness  
✅ **Easy Updates**: Edit one file to update all labels  
✅ **Fast Performance**: No database queries  
✅ **Easy Rollback**: Git history tracks all changes

