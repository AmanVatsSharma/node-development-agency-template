# 🎯 Google Ads Conversion Tracking Setup Guide

**Version:** 2.0.0 - Scalable Multi-Page Architecture  
**Landing Page:** Business Website (Template for all pages)  
**Author:** Development Team  
**Last Updated:** 2025-10-07

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Conversion Actions to Create](#conversion-actions-to-create)
3. [Step 1: Create Conversion Actions in Google Ads](#step-1-create-conversion-actions-in-google-ads)
4. [Step 2: Configure Environment Variables](#step-2-configure-environment-variables)
5. [Step 3: Initialize Database Configuration](#step-3-initialize-database-configuration)
6. [Step 4: Verify Implementation](#step-4-verify-implementation)
7. [Step 5: Test Conversion Tracking](#step-5-test-conversion-tracking)
8. [How to Scale to Other Landing Pages](#how-to-scale-to-other-landing-pages)
9. [Troubleshooting](#troubleshooting)
10. [Conversion Flow Diagram](#conversion-flow-diagram)

---

## Overview

This guide sets up **scalable Google Ads conversion tracking** for your landing pages. The system supports:

✅ **Multi-landing-page tracking** (business-website, ai-voice-agents, seo-audit, etc.)  
✅ **Page-specific conversion actions** (unique labels per page)  
✅ **3 conversion types per page:**
   - Lead form submissions
   - WhatsApp button clicks
   - Phone call button clicks

✅ **Comprehensive logging** (console + database)  
✅ **Server-side backup tracking** (reliability layer)  
✅ **No code changes** needed for new pages (database-driven configuration)

---

## Conversion Actions to Create

### For Business-Website Landing Page

Create **3 conversion actions** in Google Ads:

| # | Conversion Action Name | Type | Purpose | Status |
|---|------------------------|------|---------|--------|
| 1️⃣ | **Submit Lead Form - Business-Website** | Website | Track form submissions | ✅ You provided label |
| 2️⃣ | **Contact - WhatsApp - Business-Website** | Website | Track WhatsApp clicks | ✅ You provided label |
| 3️⃣ | **Contact - Phone Call - Business-Website** | Website | Track phone call clicks | ⚠️ **Need to create** |

### Your Current Conversion Labels

From Google Ads console, you have:

```
Conversion ID: AW-17606401808

Conversion Labels:
1. Form Submit: Y3bsCKXpn6gbEJC-sctB
2. WhatsApp:    XO54CKjpn6gbEJC-sctB
3. Phone Call:  [TO BE CREATED - Follow Step 1 below]
```

---

## Step 1: Create Conversion Actions in Google Ads

### 1.1 Access Google Ads Console

1. Login to [Google Ads](https://ads.google.com)
2. Click **Tools & Settings** (wrench icon)
3. Under **Measurement**, click **Conversions**

### 1.2 Create Conversion Action #1: Lead Form Submit

**✅ Already Created! You have:**
- **Conversion Label:** `Y3bsCKXpn6gbEJC-sctB`

If you need to create it again:

1. Click **"+ New conversion action"**
2. Select **"Website"**
3. Configure:
   - **Goal:** Submit lead form
   - **Conversion action name:** `Submit Lead Form - Business-Website`
   - **Category:** Lead
   - **Value:** Don't use a value (or set to 1000 INR if you want to track value)
   - **Count:** One (count only unique conversions)
   - **Conversion window:** 30 days
   - **View-through conversion window:** 1 day
4. Click **"Create and continue"**
5. **Note down the Conversion Label** (e.g., `Y3bsCKXpn6gbEJC-sctB`)

### 1.3 Create Conversion Action #2: WhatsApp Contact

**✅ Already Created! You have:**
- **Conversion Label:** `XO54CKjpn6gbEJC-sctB`

If you need to create it again:

1. Click **"+ New conversion action"**
2. Select **"Website"**
3. Configure:
   - **Goal:** Contact
   - **Conversion action name:** `Contact - WhatsApp - Business-Website`
   - **Category:** Contact
   - **Value:** Don't use a value
   - **Count:** Every (count all WhatsApp clicks)
   - **Conversion window:** 1 day (short window for immediate intent)
4. Click **"Create and continue"**
5. **Note down the Conversion Label** (e.g., `XO54CKjpn6gbEJC-sctB`)

### 1.4 Create Conversion Action #3: Phone Call Contact ⚠️ **ACTION REQUIRED**

1. Click **"+ New conversion action"**
2. Select **"Website"**
3. Configure:
   - **Goal:** Contact
   - **Conversion action name:** `Contact - Phone Call - Business-Website`
   - **Category:** Contact
   - **Value:** Don't use a value
   - **Count:** Every (count all call clicks)
   - **Conversion window:** 1 day
4. Click **"Create and continue"**
5. **📝 IMPORTANT: Note down the Conversion Label!** (looks like `XO54CKjpn6gbEJC-sctB`)

**Update your configuration with this new label!**

### 1.5 Set Up Conversion Linker Tag

Google Ads requires a **Conversion Linker tag** on all pages:

1. In Google Ads, go to **Tag setup**
2. Select **"Use Google Tag Manager"** (if you use GTM) **OR** **"Install the tag yourself"**
3. For manual installation:
   - The tag is already installed via `GoogleAdsTracking` component in `app/layout.tsx`
   - Conversion ID: `AW-17606401808` is already configured
   - ✅ No action needed - already implemented!

---

## Step 2: Configure Environment Variables

### 2.1 Vercel Production Environment

1. Login to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables for **Production, Preview, and Development**:

| Variable Name | Value | Example |
|---------------|-------|---------|
| `GOOGLE_CONVERSION_ID` | `AW-17606401808` | Your conversion ID |
| `GOOGLE_LEAD_SUBMIT_LABEL` | `Y3bsCKXpn6gbEJC-sctB` | From Step 1.2 |
| `GOOGLE_WHATSAPP_CLICK_LABEL` | `XO54CKjpn6gbEJC-sctB` | From Step 1.3 |
| `GOOGLE_CALL_CLICK_LABEL` | `[NEW_LABEL_HERE]` | From Step 1.4 ⚠️ |

5. Click **"Save"** for each variable
6. **Redeploy** your application for changes to take effect

### 2.2 Local Development (.env.local)

Add to your `.env.local` file:

```bash
# ============================================
# Google Ads Conversion Tracking
# ============================================
GOOGLE_CONVERSION_ID="AW-17606401808"

# Business-Website Landing Page Labels
GOOGLE_LEAD_SUBMIT_LABEL="Y3bsCKXpn6gbEJC-sctB"
GOOGLE_WHATSAPP_CLICK_LABEL="XO54CKjpn6gbEJC-sctB"
GOOGLE_CALL_CLICK_LABEL="[NEW_LABEL_FROM_STEP_1.4]"

# Future: AI Voice Agents Landing Page Labels (example)
# GOOGLE_AI_AGENTS_LEAD_SUBMIT_LABEL="xxxxx"
# GOOGLE_AI_AGENTS_WHATSAPP_CLICK_LABEL="xxxxx"
# GOOGLE_AI_AGENTS_CALL_CLICK_LABEL="xxxxx"
```

---

## Step 3: Initialize Database Configuration

### 3.1 Option A: Via Admin Panel (Recommended)

1. Navigate to `/login`
2. Login with your admin password
3. Go to **Integrations** section
4. Fill in Google Ads configuration:
   - Conversion ID: `AW-17606401808`
   - Event Labels (JSON):
     ```json
     {
       "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
       "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
       "business_website_call_click": "[NEW_LABEL]"
     }
     ```
5. Click **"Save"**
6. Click **"Test Google Config"** to verify

### 3.2 Option B: Manual Database Update

Run this SQL in your PostgreSQL database:

```sql
-- Update or insert IntegrationSettings
INSERT INTO "IntegrationSettings" (
  id,
  "googleConversionId",
  "googleEventLabels",
  "createdAt",
  "updatedAt"
) VALUES (
  gen_random_uuid(),
  'AW-17606401808',
  '{
    "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
    "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
    "business_website_call_click": "[NEW_LABEL_FROM_STEP_1.4]"
  }'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  "googleConversionId" = EXCLUDED."googleConversionId",
  "googleEventLabels" = EXCLUDED."googleEventLabels",
  "updatedAt" = NOW();
```

---

## Step 4: Verify Implementation

### 4.1 Check Root Layout

Verify `app/layout.tsx` has Google Ads tracking:

```typescript
import GoogleAdsTracking from './components/Analytics/GoogleAdsTracking';

// In <head>:
<GoogleAdsTracking conversionId="AW-17606401808" />
```

✅ **Already implemented!**

### 4.2 Check Business-Website Page

The page should import and use `fireConversion`:

```typescript
import { fireConversion } from '@/utils/conversions';

// On form submit:
void fireConversion('business_website_lead_submit');

// On WhatsApp click:
void fireConversion('business_website_whatsapp_click');

// On call click:
void fireConversion('business_website_call_click');
```

✅ **Already implemented!**

---

## Step 5: Test Conversion Tracking

### 5.1 Enable Chrome DevTools

1. Open your business-website page: `https://your-domain.com/pages/business-website`
2. Press **F12** to open Chrome DevTools
3. Go to **Console** tab
4. Go to **Network** tab

### 5.2 Test Lead Form Submission

1. Fill out the lead form with test data:
   - Name: Test User
   - Phone: +91 9999999999
   - Email: test@test.com
   - City: Mumbai
2. Click **"Get My Free Quote Now"**
3. Watch console logs:

**Expected Console Output:**
```
[Business-Website] Lead form submitted: {...}
[Business-Website] Firing lead_submit conversion to Google Ads
[Conversions] ================================================================================
[Conversions] 🎯 CONVERSION EVENT TRIGGERED
[Conversions] ================================================================================
[Conversions] Event Type: business_website_lead_submit
[Conversions] Timestamp: 2025-10-07T...
[Conversions] Step 1: Sending server-side backup log to /api/track
[Conversions] ✅ Server-side backup log dispatched
[Conversions] Step 2: Fetching conversion mapping
[Conversions] ✅ Mapping retrieved: { conversionId: "AW-17606401808", labels: {...} }
[Conversions] Step 3: Building conversion payload
[Conversions] Label for event type: Y3bsCKXpn6gbEJC-sctB
[Conversions] Send To: AW-17606401808/Y3bsCKXpn6gbEJC-sctB
[Conversions] Step 4: Firing client-side gtag conversion
[Conversions] ✅ gtag function is available
[Conversions] Conversion parameters: { send_to: "AW-17606401808/Y3bsCKXpn6gbEJC-sctB" }
[Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
[Business-Website] ✅ Lead saved to database, Zoho CRM updated, Google Ads conversion fired
```

4. Check **Network** tab for:
   - Request to `/api/lead` with status **200**
   - Request to `/api/track` with status **200**
   - Request to `google-analytics.com/collect` or `/g/collect` (Google Ads tracking pixel)

### 5.3 Test WhatsApp Button

1. Click **"WhatsApp us"** button
2. Watch console logs:

**Expected Console Output:**
```
[Business-Website] WhatsApp clicked - Opening WhatsApp chat
[Business-Website] Firing whatsapp_click conversion to Google Ads
[Conversions] 🎯 CONVERSION EVENT TRIGGERED
[Conversions] Event Type: business_website_whatsapp_click
[Conversions] Label for event type: XO54CKjpn6gbEJC-sctB
[Conversions] Send To: AW-17606401808/XO54CKjpn6gbEJC-sctB
[Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
```

### 5.4 Test Call Button

1. Click **"Call Now"** button or phone icon
2. Watch console logs:

**Expected Console Output:**
```
[Business-Website] Quick call clicked - Phone: +91 99637 30111
[Business-Website] Firing call_click conversion to Google Ads
[Conversions] 🎯 CONVERSION EVENT TRIGGERED
[Conversions] Event Type: business_website_call_click
[Conversions] Label for event type: [NEW_LABEL]
[Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
```

### 5.5 Verify in Google Ads Dashboard

⚠️ **Note:** Conversions may take **3-24 hours** to appear in Google Ads dashboard.

1. Login to [Google Ads](https://ads.google.com)
2. Go to **Tools & Settings** → **Conversions**
3. Check your conversion actions:
   - Submit Lead Form - Business-Website
   - Contact - WhatsApp - Business-Website
   - Contact - Phone Call - Business-Website
4. Click on each conversion action to see recent conversions

**Debug with Google Tag Assistant:**
1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your business-website page
3. Enable Tag Assistant
4. Trigger a conversion (form submit, WhatsApp, or call)
5. Check Tag Assistant report for fired tags

---

## How to Scale to Other Landing Pages

### Example: Add AI Voice Agents Landing Page

#### 1. Create New Conversion Actions in Google Ads

Follow Step 1 to create 3 new conversion actions:
- Submit Lead Form - AI-Voice-Agents
- Contact - WhatsApp - AI-Voice-Agents
- Contact - Phone Call - AI-Voice-Agents

Get the 3 new conversion labels.

#### 2. Update Environment Variables

Add to Vercel and `.env.local`:

```bash
GOOGLE_AI_AGENTS_LEAD_SUBMIT_LABEL="xxxxx"
GOOGLE_AI_AGENTS_WHATSAPP_CLICK_LABEL="xxxxx"
GOOGLE_AI_AGENTS_CALL_CLICK_LABEL="xxxxx"
```

#### 3. Update Database Configuration

Add to `IntegrationSettings.googleEventLabels` JSON:

```json
{
  "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
  "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
  "business_website_call_click": "[NEW_LABEL]",
  "ai_voice_agents_lead_submit": "xxxxx",
  "ai_voice_agents_whatsapp_click": "xxxxx",
  "ai_voice_agents_call_click": "xxxxx"
}
```

#### 4. Update Landing Page Code

In `app/pages/ai-voice-agents/_components/lead-form-section.tsx`:

```typescript
import { fireConversion } from '@/utils/conversions';

// On form submit:
void fireConversion('ai_voice_agents_lead_submit');

// On WhatsApp click:
void fireConversion('ai_voice_agents_whatsapp_click');

// On call click:
void fireConversion('ai_voice_agents_call_click');
```

✅ **That's it! No other code changes needed.**

---

## Troubleshooting

### ❌ "gtag is not available on window object"

**Cause:** GoogleAdsTracking component not loaded or blocked by ad blocker

**Solution:**
1. Verify `app/layout.tsx` has `<GoogleAdsTracking conversionId="AW-17606401808" />`
2. Disable ad blocker
3. Check browser console for script loading errors
4. Test in incognito mode

### ❌ "No conversion label configured for: business_website_lead_submit"

**Cause:** Database not initialized with conversion labels

**Solution:**
1. Check `IntegrationSettings` table:
   ```sql
   SELECT "googleConversionId", "googleEventLabels" 
   FROM "IntegrationSettings" 
   LIMIT 1;
   ```
2. If empty, initialize via admin panel or SQL (Step 3)
3. Restart application

### ❌ Conversions not showing in Google Ads dashboard

**Possible causes:**
1. Conversions take 3-24 hours to appear
2. Wrong conversion ID or labels
3. Ad blocker blocking gtag
4. Conversion window expired

**Solution:**
1. Wait 24 hours
2. Verify conversion ID and labels match Google Ads exactly
3. Use Google Tag Assistant to debug
4. Check Google Ads **Diagnostics** for each conversion action

### ❌ "Failed to fetch google-config"

**Cause:** API route not working or database connection issue

**Solution:**
1. Check `/api/google-config` is accessible:
   ```bash
   curl https://your-domain.com/api/google-config
   ```
2. Verify database connection (DATABASE_URL)
3. Check server logs for errors

---

## Conversion Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│           GOOGLE ADS CONVERSION TRACKING FLOW                    │
│                  (Business-Website Example)                      │
└─────────────────────────────────────────────────────────────────┘

USER ACTION                    CODE                    GOOGLE ADS
─────────────────────────────────────────────────────────────────

1. User clicks "Get Quote"
       │
       ▼
2. Form validation passes
       │
       ▼
3. fireConversion(                    ┌──────────────────┐
   'business_website_lead_submit'     │ utils/           │
   )                          ───────▶│ conversions.ts   │
       │                               └────────┬─────────┘
       │                                        │
       ▼                                        │
4. Server-side backup                          │
   POST /api/track                             │
   {                                           │
     eventType: 'business_website_lead_submit',│
     ts: 1234567890                            │
   }                                           │
       │                                        │
       ▼                                        │
5. Fetch conversion mapping    ◀───────────────┘
   GET /api/google-config
   {
     conversionId: "AW-17606401808",
     labels: {
       business_website_lead_submit: "Y3bsCKXpn6gbEJC-sctB"
     }
   }
       │
       ▼
6. Build conversion payload
   sendTo = "AW-17606401808/Y3bsCKXpn6gbEJC-sctB"
       │
       ▼
7. Fire gtag conversion       ────────────────────────────▶  ┌──────────────┐
   window.gtag('event',                                      │  Google Ads  │
   'conversion', {                                           │   Servers    │
     send_to: "AW-17606401808/Y3bsCKXpn6gbEJC-sctB"         │              │
   })                                                        │  Conversion  │
       │                                                     │  recorded!   │
       ▼                                                     └──────────────┘
8. Console log success
   "✅ CONVERSION FIRED SUCCESSFULLY"


┌─────────────────────────────────────────────────────────────────┐
│                    DATABASE TRACKING FLOW                        │
└─────────────────────────────────────────────────────────────────┘

POST /api/track
       │
       ▼
┌──────────────────────────┐
│ IntegrationLog table     │
│ ─────────────────────    │
│ type: business_website_  │
│       lead_submit        │
│ provider: google_ads     │
│ level: info              │
│ message: "Conversion     │
│          event logged"   │
│ createdAt: 2025-10-07... │
└──────────────────────────┘

This provides:
✅ Server-side audit trail
✅ Debugging information
✅ Analytics for conversion funnel
✅ Backup if client-side gtag fails
```

---

## Campaign Launch Checklist

Before launching your Google Ads campaign:

- [ ] All 3 conversion actions created in Google Ads
- [ ] Conversion labels noted down
- [ ] Environment variables set in Vercel
- [ ] Database initialized with labels
- [ ] Lead form tested and working
- [ ] WhatsApp button tested and firing conversions
- [ ] Call button tested and firing conversions
- [ ] Console logs show successful conversions
- [ ] Google Tag Assistant shows tags firing
- [ ] Test lead appears in database
- [ ] Test lead appears in Zoho CRM
- [ ] Phone number correct: +91 99637 30111
- [ ] WhatsApp link correct: https://wa.me/919963730111
- [ ] Admin panel accessible and configured
- [ ] 24-hour wait to verify conversions in Google Ads dashboard

**✅ All checked? You're ready to launch your campaign!**

---

## Support

- 📧 Email: support@enterprisehero.com
- 📱 Phone: +91 99637 30111
- 💬 WhatsApp: +91 99637 30111
- 📖 Google Ads Help: https://support.google.com/google-ads

---

**🎯 Conversion Tracking Setup Complete!**