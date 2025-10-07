# 📚 Google Ads Conversion Tracking - Complete Documentation

**Version:** 2.0.0 - Scalable Multi-Page Architecture  
**Campaign:** Google Search Ads - Business Website Landing Page  
**Contact:** +91 9963730111 | WhatsApp: https://wa.me/919963730111  
**Last Updated:** 2025-10-07

---

## 🎯 Quick Start

**What you have:**
- ✅ Landing page: `/pages/business-website`
- ✅ Google Ads Conversion ID: `AW-17606401808`
- ✅ Form Submit Label: `Y3bsCKXpn6gbEJC-sctB`
- ✅ WhatsApp Label: `XO54CKjpn6gbEJC-sctB`
- ⚠️ **Phone Call Label: [TO BE CREATED]**

**What you need to do:**
1. ✅ Create Phone Call conversion action in Google Ads → Get label
2. ✅ Set up Zoho CRM credentials
3. ✅ Configure Vercel environment variables
4. ✅ Initialize database settings
5. ✅ Test everything
6. 🚀 Launch campaign!

---

## 📖 Documentation Index

### 🔧 Setup Guides (Step-by-Step)

1. **[Zoho CRM Setup Guide](./ZOHO_CRM_SETUP_GUIDE.md)**
   - Create Zoho account
   - Generate API credentials (Client ID, Client Secret, Refresh Token)
   - Configure OAuth flow
   - Test connection
   - **Estimated time:** 30 minutes
   - **Difficulty:** Medium

2. **[Google Ads Conversion Tracking Setup](./GOOGLE_ADS_CONVERSION_TRACKING_SETUP.md)**
   - Create 3 conversion actions
   - Get conversion labels
   - Configure environment variables
   - Verify implementation
   - Test with Google Tag Assistant
   - **Estimated time:** 45 minutes
   - **Difficulty:** Easy

3. **[Vercel Deployment & Environment Variables](./VERCEL_DEPLOYMENT_ENVIRONMENT_SETUP.md)**
   - Set up PostgreSQL database (Vercel Postgres)
   - Configure all environment variables
   - Deploy to production
   - Initialize database schema
   - **Estimated time:** 30 minutes
   - **Difficulty:** Easy

### 📊 Reference Documents

4. **[Campaign Launch Checklist](./CAMPAIGN_LAUNCH_CHECKLIST.md)**
   - Pre-launch checklist (10 phases)
   - Testing guide (8 comprehensive tests)
   - Post-launch monitoring
   - Success metrics
   - Emergency contacts
   - **Use this:** Before launching campaign

5. **[Conversion Flow Diagram](./GOOGLE_ADS_CONVERSION_FLOW_DIAGRAM.txt)**
   - Visual flowchart of entire system
   - Page load to conversion recording
   - Database integration flow
   - Debugging guide
   - **Use this:** For understanding architecture

---

## 🚀 Getting Started (5 Steps)

### Step 1: Complete Zoho CRM Setup (30 min)

📖 **Guide:** [ZOHO_CRM_SETUP_GUIDE.md](./ZOHO_CRM_SETUP_GUIDE.md)

**What you'll get:**
- `ZOHO_CLIENT_ID`
- `ZOHO_CLIENT_SECRET`
- `ZOHO_REFRESH_TOKEN`

**Quick actions:**
1. Create Zoho account at https://www.zoho.com/crm/
2. Create API client at https://api-console.zoho.in
3. Generate refresh token (expires in 10 min, use immediately!)
4. Note down all 3 credentials

---

### Step 2: Create Phone Call Conversion Action (10 min)

📖 **Guide:** [GOOGLE_ADS_CONVERSION_TRACKING_SETUP.md](./GOOGLE_ADS_CONVERSION_TRACKING_SETUP.md) (Section: Step 1.4)

**You already have:**
- ✅ Form Submit: `Y3bsCKXpn6gbEJC-sctB`
- ✅ WhatsApp: `XO54CKjpn6gbEJC-sctB`

**You need to create:**
- ⚠️ Phone Call: `[NEW_LABEL]`

**Quick actions:**
1. Login to Google Ads: https://ads.google.com
2. Go to Tools & Settings → Conversions
3. Click "+ New conversion action"
4. Select "Website" → "Contact"
5. Name: `Contact - Phone Call - Business-Website`
6. **Copy the conversion label!**

---

### Step 3: Configure Vercel Environment Variables (15 min)

📖 **Guide:** [VERCEL_DEPLOYMENT_ENVIRONMENT_SETUP.md](./VERCEL_DEPLOYMENT_ENVIRONMENT_SETUP.md)

**Quick actions:**
1. Login to Vercel: https://vercel.com
2. Go to Settings → Environment Variables
3. Add these variables (for Production, Preview, Development):

```bash
# Zoho CRM (from Step 1)
ZOHO_CLIENT_ID="1000.XXXXXXXXXXXXXXXXXXXX"
ZOHO_CLIENT_SECRET="abcdef1234567890abcdef1234567890"
ZOHO_REFRESH_TOKEN="1000.xxxxx.xxxxx"

# Google Ads (from Step 2)
GOOGLE_CONVERSION_ID="AW-17606401808"
GOOGLE_LEAD_SUBMIT_LABEL="Y3bsCKXpn6gbEJC-sctB"
GOOGLE_WHATSAPP_CLICK_LABEL="XO54CKjpn6gbEJC-sctB"
GOOGLE_CALL_CLICK_LABEL="[NEW_LABEL_FROM_STEP_2]"

# Database (should be auto-set if using Vercel Postgres)
DATABASE_URL="postgresql://..."

# Admin (set a strong password)
ADMIN_PASSWORD="MyS3cure!Adm1nP@ss2025"
```

4. Click "Save" for each variable
5. **Redeploy** your application

---

### Step 4: Initialize Database Settings (10 min)

**Option A: Via Admin Panel (Easiest)**

1. Navigate to: `https://your-domain.com/login`
2. Login with your `ADMIN_PASSWORD`
3. Go to **Integrations** section
4. Fill in:
   - **Google Conversion ID:** `AW-17606401808`
   - **Event Labels (JSON):**
     ```json
     {
       "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
       "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
       "business_website_call_click": "[NEW_LABEL_FROM_STEP_2]"
     }
     ```
5. Click **"Save"**
6. Click **"Test Google Config"** → Should show ✅
7. Click **"Test Zoho Connection"** → Should show ✅

**Option B: Via Database (Advanced)**

Run this SQL in your PostgreSQL:

```sql
INSERT INTO "IntegrationSettings" (
  id,
  "googleConversionId",
  "googleEventLabels",
  "zohoClientId",
  "zohoClientSecret",
  "zohoRefreshToken",
  "createdAt",
  "updatedAt"
) VALUES (
  gen_random_uuid(),
  'AW-17606401808',
  '{
    "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
    "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
    "business_website_call_click": "[NEW_LABEL]"
  }'::jsonb,
  '[ZOHO_CLIENT_ID]',
  '[ZOHO_CLIENT_SECRET]',
  '[ZOHO_REFRESH_TOKEN]',
  NOW(),
  NOW()
);
```

---

### Step 5: Test Everything (30 min)

📖 **Guide:** [CAMPAIGN_LAUNCH_CHECKLIST.md](./CAMPAIGN_LAUNCH_CHECKLIST.md)

**Critical Tests:**

✅ **Test 1: Lead Form Submission**
1. Open: `https://your-domain.com/pages/business-website`
2. Press F12 → Console tab
3. Fill form with test data
4. Submit
5. Check console logs:
   ```
   [Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
   ```
6. Verify lead in database
7. Verify lead in Zoho CRM

✅ **Test 2: WhatsApp Button**
1. Click "WhatsApp us"
2. Check console logs
3. Verify WhatsApp opens with +91 9963730111
4. Verify conversion fires

✅ **Test 3: Phone Call Button**
1. Click "Call now"
2. Check console logs
3. Verify phone dialer opens
4. Verify conversion fires

✅ **Test 4: Google Tag Assistant**
1. Install Chrome extension
2. Enable on your page
3. Trigger conversions
4. Verify tags fire correctly

---

## 🏗️ Architecture Overview

### Tech Stack

- **Frontend:** Next.js 14 (App Router)
- **Database:** PostgreSQL (Vercel Postgres)
- **ORM:** Prisma
- **CRM:** Zoho CRM (OAuth 2.0)
- **Ads Platform:** Google Ads (gtag.js)
- **Hosting:** Vercel
- **Analytics:** Google Analytics (optional)

### Key Components

```
app/
├── layout.tsx                          # GoogleAdsTracking component loaded here
├── pages/
│   └── business-website/
│       ├── page.tsx                    # Main landing page
│       └── _components/
│           ├── lead-form-section.tsx   # Form with conversion tracking
│           └── mobile-floating-cta.tsx # Mobile CTA with conversions
├── api/
│   ├── lead/route.ts                   # Lead submission + Zoho sync
│   ├── track/route.ts                  # Server-side conversion logging
│   └── google-config/route.ts          # Conversion mapping API
├── components/
│   └── Analytics/
│       └── GoogleAdsTracking.tsx       # gtag.js loader
├── lib/
│   ├── googleAds.ts                    # Google Ads integration
│   └── zohoService.ts                  # Zoho CRM integration
└── utils/
    └── conversions.ts                  # Conversion tracking utility

prisma/
└── schema.prisma                       # Database schema
    ├── IntegrationSettings             # Stores conversion labels
    ├── Lead                            # Stores all leads
    ├── IntegrationLog                  # Logs all API calls
    └── IntegrationRetry                # Retry queue for failures
```

### Conversion Flow (Simplified)

```
User Action
    │
    ├─── Lead Form Submit
    │    ├── Save to PostgreSQL ✅
    │    ├── Send to Zoho CRM ✅
    │    └── Fire Google Ads conversion ✅
    │
    ├─── WhatsApp Click
    │    ├── Open WhatsApp ✅
    │    └── Fire Google Ads conversion ✅
    │
    └─── Call Button Click
         ├── Open phone dialer ✅
         └── Fire Google Ads conversion ✅
```

---

## 📊 Database Schema

### IntegrationSettings Table

Stores all integration credentials and conversion labels:

```typescript
{
  id: string
  googleConversionId: "AW-17606401808"
  googleEventLabels: {
    "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
    "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
    "business_website_call_click": "[LABEL]"
  }
  zohoClientId: "1000.XXX..."
  zohoClientSecret: "abcd..."
  zohoRefreshToken: "1000.XXX..."
  zohoAccessToken: "1000.XXX..." (auto-refreshed)
  zohoTokenExpiresAt: DateTime (auto-updated)
}
```

### Lead Table

Stores all lead submissions:

```typescript
{
  id: string
  name: string
  email: string
  phone: string
  message: string
  source: "business-website"
  status: "pending" | "pushed" | "failed"
  zohoLeadId: string (from Zoho)
  createdAt: DateTime
}
```

### IntegrationLog Table

Audit trail for all API calls:

```typescript
{
  id: string
  type: "business_website_lead_submit" | "business_website_whatsapp_click" | ...
  provider: "google_ads" | "zoho"
  level: "info" | "error"
  message: string
  request: JSON
  response: JSON
  createdAt: DateTime
}
```

---

## 🎨 Scalability: Adding New Landing Pages

### Example: Add AI Voice Agents Page

**1. Create Google Ads Conversion Actions**

Create 3 new conversions:
- Submit Lead Form - AI-Voice-Agents
- Contact - WhatsApp - AI-Voice-Agents
- Contact - Phone Call - AI-Voice-Agents

Get 3 new labels: `xxx`, `yyy`, `zzz`

**2. Update Environment Variables**

```bash
GOOGLE_AI_AGENTS_LEAD_SUBMIT_LABEL="xxx"
GOOGLE_AI_AGENTS_WHATSAPP_CLICK_LABEL="yyy"
GOOGLE_AI_AGENTS_CALL_CLICK_LABEL="zzz"
```

**3. Update Database**

Add to `IntegrationSettings.googleEventLabels`:

```json
{
  "business_website_lead_submit": "Y3bsCKXpn6gbEJC-sctB",
  "business_website_whatsapp_click": "XO54CKjpn6gbEJC-sctB",
  "business_website_call_click": "[LABEL]",
  "ai_voice_agents_lead_submit": "xxx",
  "ai_voice_agents_whatsapp_click": "yyy",
  "ai_voice_agents_call_click": "zzz"
}
```

**4. Use in Page Components**

```typescript
// In ai-voice-agents lead form
import { fireConversion } from '@/utils/conversions';

// On form submit
void fireConversion('ai_voice_agents_lead_submit');

// On WhatsApp click
void fireConversion('ai_voice_agents_whatsapp_click');

// On call click
void fireConversion('ai_voice_agents_call_click');
```

**✅ That's it! No other code changes needed.**

---

## 🐛 Troubleshooting Quick Reference

| Issue | Quick Fix | Full Guide |
|-------|-----------|------------|
| gtag not available | Check GoogleAdsTracking in layout.tsx, disable ad blocker | [Setup Guide](./GOOGLE_ADS_CONVERSION_TRACKING_SETUP.md) |
| No conversion label | Initialize IntegrationSettings table | [Vercel Guide](./VERCEL_DEPLOYMENT_ENVIRONMENT_SETUP.md) |
| Lead not in Zoho | Check IntegrationLog for errors, verify credentials | [Zoho Guide](./ZOHO_CRM_SETUP_GUIDE.md) |
| Conversions not showing | Wait 24 hours, verify labels match | [Testing Guide](./CAMPAIGN_LAUNCH_CHECKLIST.md) |
| Database errors | Verify DATABASE_URL, check Vercel Postgres | [Vercel Guide](./VERCEL_DEPLOYMENT_ENVIRONMENT_SETUP.md) |

---

## 📞 Support

### 🛠️ Technical Issues

- **Development Team:** +91 99637 30111
- **WhatsApp:** https://wa.me/919963730111
- **Email:** dev@enterprisehero.com

### 🌐 Platform Support

- **Vercel:** https://vercel.com/support
- **Zoho CRM:** https://www.zoho.com/crm/help/
- **Google Ads:** https://support.google.com/google-ads

---

## ✅ Pre-Launch Final Checklist

Before launching your campaign, verify:

- [ ] All 3 Google Ads conversion actions created
- [ ] All conversion labels noted and configured
- [ ] Vercel environment variables set
- [ ] Database initialized
- [ ] Zoho CRM connected and tested
- [ ] All 8 tests passed (see Campaign Launch Checklist)
- [ ] Phone number reachable: +91 99637 30111
- [ ] WhatsApp active
- [ ] Console logs show successful conversions
- [ ] Google Tag Assistant verified
- [ ] Admin panel accessible

**✅ All checked? Launch your campaign! 🚀**

---

## 📈 Next Steps After Launch

### Week 1

- [ ] Monitor conversions daily
- [ ] Check lead quality
- [ ] Verify all leads reaching you
- [ ] Optimize ad copy based on performance
- [ ] Adjust bids based on cost per lead

### Month 1

- [ ] Analyze conversion data
- [ ] A/B test landing page elements
- [ ] Expand to more keywords
- [ ] Consider additional landing pages
- [ ] Review and optimize Zoho workflow

---

## 🎯 Success Metrics to Track

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Lead Capture Rate | > 50% | Form starts vs completions |
| Google Ads Conversion Rate | > 5% | Clicks vs conversions |
| Cost Per Lead | < ₹500 | Campaign spend / leads |
| Lead Quality | > 80% qualified | Manual review |
| Phone Response Time | < 2 hours | Manual tracking |
| Zoho Sync Success | 100% | IntegrationLog table |

---

**🎉 You're all set! Good luck with your campaign!**

**Need help? Call +91 99637 30111 or WhatsApp us anytime.**