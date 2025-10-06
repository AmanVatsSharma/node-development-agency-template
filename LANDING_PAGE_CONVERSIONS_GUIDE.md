# Landing Page Conversions Configuration Guide

## Overview

This system allows you to manage Google Ads conversion tracking on a per-landing-page basis. Each landing page can have different conversion labels for different types of user actions (form submissions, call clicks, WhatsApp clicks, newsletter signups).

## Features

✅ **Per-Landing-Page Configuration**: Each landing page can have its own set of conversion labels  
✅ **Multiple Event Types**: Track different events with different labels  
✅ **Admin Dashboard Management**: Easy-to-use interface for configuring conversion labels  
✅ **Automatic Integration**: Landing pages automatically use their configured labels  
✅ **Fallback Support**: Falls back to global configuration if page-specific config not found  

## How It Works

### 1. Database Schema

A new `LandingPageConfig` model has been added to track conversion labels per landing page:

```prisma
model LandingPageConfig {
  id                String    @id @default(cuid())
  slug              String    @unique
  name              String
  description       String?
  leadSubmitLabel   String?
  callClickLabel    String?
  whatsappLabel     String?
  newsletterLabel   String?
  active            Boolean   @default(true)
  notes             String?   @db.Text
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
}
```

### 2. Admin Dashboard

Access the admin dashboard at: `/pages/admin/integrations`

Navigate to the **Landing Pages** tab to:
- View all configured landing pages
- Add new landing page configurations
- Edit existing configurations
- Configure conversion labels for each event type
- Enable/disable tracking per landing page

### 3. Event Types

Each landing page can track 4 types of conversions:

1. **Form Submit** (`lead_submit`) - User submits a contact/lead form
2. **Call Click** (`call_click`) - User clicks a phone number to call
3. **WhatsApp Click** (`whatsapp_click`) - User clicks WhatsApp link
4. **Newsletter Signup** (`newsletter_signup`) - User subscribes to newsletter

### 4. Setting Up Conversion Labels

#### Step 1: Get Your Google Ads Conversion ID
1. Go to Google Ads > Tools & Settings > Conversions
2. Find your Conversion ID (format: `AW-XXXXXXXXXX`)
3. Configure it in the **Google Ads** tab in admin dashboard

#### Step 2: Create Conversion Actions in Google Ads
1. For each landing page and event type, create a conversion action
2. Copy the conversion label (the part after the `/` in the conversion tag)
3. Example: If your conversion tag is `AW-123456789/AbCdEfGhIj`, the label is `AbCdEfGhIj`

#### Step 3: Configure in Admin Dashboard
1. Go to **Landing Pages** tab
2. Click **+ Add Landing Page** or edit an existing one
3. Fill in:
   - **Slug**: URL identifier (e.g., `business-website`)
   - **Display Name**: Human-readable name (e.g., `Business Website`)
   - **Description**: Optional description
   - **Conversion Labels**: Enter the label part for each event type
   - **Active**: Check to enable tracking
   - **Notes**: Internal notes for testing

#### Step 4: Landing Page Integration
Your landing pages should call the conversion tracking function with the landing page slug:

```typescript
import { fireConversion } from '@/utils/conversions';

// On form submit
fireConversion('lead_submit', 'business-website');

// On call click
fireConversion('call_click', 'business-website');

// On WhatsApp click
fireConversion('whatsapp_click', 'business-website');

// On newsletter signup
fireConversion('newsletter_signup', 'business-website');
```

## Current Configuration

### Business Website Landing Page

The `business-website` landing page has been configured to fire conversions:

**File**: `app/pages/business-website/_components/lead-form-section.tsx`
- Form submit: `fireConversion('lead_submit', 'business-website')`
- Call click: `fireConversion('call_click', 'business-website')`
- WhatsApp click: `fireConversion('whatsapp_click', 'business-website')`

**File**: `app/pages/business-website/_components/mobile-floating-cta.tsx`
- Call click: `fireConversion('call_click', 'business-website')`
- WhatsApp click: `fireConversion('whatsapp_click', 'business-website')`

## Database Migration

To apply the database changes, run:

```bash
# Generate and apply migration
npx prisma migrate dev --name add_landing_page_config

# Or if you prefer to push schema changes directly
npx prisma db push

# Generate Prisma client
npx prisma generate
```

## Seeding Initial Data

Run the seed script to create initial landing page configurations:

```bash
npx ts-node scripts/seed-business-website-config.ts
```

This will create configurations for:
- business-website
- seo-audit
- reactjs-development
- next-js-development

## Testing Conversions

### 1. Set Up Google Ads Conversion ID
1. Go to `/pages/admin/integrations`
2. Navigate to **Google Ads** tab
3. Enter your Conversion ID (e.g., `AW-123456789`)
4. Save settings

### 2. Configure Landing Page Labels
1. Navigate to **Landing Pages** tab
2. Click **Edit** on the business-website entry
3. Enter conversion labels for each event type:
   - **Form Submit Label**: e.g., `AbCdEfGhIj`
   - **Call Click Label**: e.g., `XyZ123aBcD`
   - **WhatsApp Click Label**: e.g., `MnOpQrStUv`
   - **Newsletter Signup Label**: e.g., `WxYz456EfG`
4. Make sure **Active** is checked
5. Click **Save Landing Page**

### 3. Test Conversions
1. Visit `/pages/business-website`
2. Open browser console
3. Perform actions:
   - Click call button
   - Click WhatsApp button
   - Submit the lead form
4. Check console for conversion logs:
   ```
   [Conversions] Fired { eventType: 'call_click', landingPageSlug: 'business-website', params: {...} }
   ```

### 4. Verify in Google Ads
1. Go to Google Ads > Tools & Settings > Conversions
2. Click on the conversion action you configured
3. Check recent conversions (may take a few hours to appear)

## Troubleshooting

### Conversions not firing?

1. **Check console for errors**: Look for `[Conversions]` logs
2. **Verify gtag is loaded**: Check that Google Analytics/Ads script is loaded
3. **Check configuration**: Ensure landing page config is active and labels are set
4. **Verify Conversion ID**: Make sure Google Conversion ID is configured correctly

### Landing page not found?

If a landing page slug doesn't have a configuration, the system will:
1. Log a warning in console
2. Fall back to global configuration (if available)
3. Still attempt to fire the conversion

### Labels not working?

1. **Format check**: Labels should be just the label part, not the full send_to
   - ✅ Correct: `AbCdEfGhIj`
   - ❌ Wrong: `AW-123456789/AbCdEfGhIj`
2. **Case sensitivity**: Labels are case-sensitive
3. **Whitespace**: Remove any leading/trailing spaces

## API Endpoints

### Public API (used by landing pages)
- `GET /api/landing-page-config?slug=business-website` - Get landing page conversion config

### Admin API (requires authentication)
- `GET /api/admin/landing-pages` - List all landing page configs
- `POST /api/admin/landing-pages` - Create or update landing page config
- `DELETE /api/admin/landing-pages?id=xxx` - Delete landing page config

## Benefits

1. **Granular Tracking**: Track conversions separately for each landing page
2. **A/B Testing**: Test different landing pages with separate conversion tracking
3. **Campaign Optimization**: Measure performance of individual landing pages
4. **Easy Management**: Configure everything from one admin dashboard
5. **Scalability**: Add new landing pages without code changes

## Next Steps

1. ✅ Run database migration
2. ✅ Seed initial landing page configurations
3. ✅ Configure Google Ads Conversion ID in admin dashboard
4. ✅ Set up conversion labels for business-website landing page
5. ✅ Test conversions on production/staging
6. 📝 Configure other landing pages (seo-audit, reactjs-development, etc.)
7. 📝 Monitor conversion data in Google Ads
8. 📝 Optimize landing pages based on conversion data

## Support

For questions or issues:
1. Check browser console for error logs
2. Review admin dashboard logs section
3. Verify database configurations
4. Check Google Ads conversion settings

---

**Last Updated**: 2025-10-06  
**Version**: 1.0.0
