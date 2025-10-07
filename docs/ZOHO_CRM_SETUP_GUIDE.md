# 🔧 Zoho CRM Integration Setup Guide

**Version:** 2.0.0  
**Landing Page:** Business Website (Scalable for all pages)  
**Author:** Development Team  
**Last Updated:** 2025-10-07

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Create Zoho CRM Account](#step-1-create-zoho-crm-account)
4. [Step 2: Create Zoho API Client](#step-2-create-zoho-api-client)
5. [Step 3: Generate Refresh Token](#step-3-generate-refresh-token)
6. [Step 4: Configure Environment Variables](#step-4-configure-environment-variables)
7. [Step 5: Initialize Database Settings](#step-5-initialize-database-settings)
8. [Step 6: Test Integration](#step-6-test-integration)
9. [Step 7: Configure Webhooks (Optional)](#step-7-configure-webhooks-optional)
10. [Troubleshooting](#troubleshooting)
11. [Flowchart](#flowchart)

---

## Overview

This guide will help you set up Zoho CRM integration for your landing pages. The integration automatically:
- ✅ Saves all leads to local database (PostgreSQL)
- ✅ Syncs leads to Zoho CRM automatically
- ✅ Handles token refresh automatically
- ✅ Provides retry mechanism for failed submissions
- ✅ Logs all activities for debugging

**🔄 Lead Flow:**
```
User submits form → Save to DB → Send to Zoho → Update status → Retry if failed
```

---

## Prerequisites

- [ ] Zoho CRM account (Free or Paid)
- [ ] Admin access to Zoho account
- [ ] Access to Vercel dashboard (for environment variables)
- [ ] Access to database (PostgreSQL)

---

## Step 1: Create Zoho CRM Account

### 1.1 Sign Up for Zoho CRM

1. Go to [Zoho CRM](https://www.zoho.com/crm/)
2. Click **"Sign Up Free"**
3. Choose your region:
   - **India:** Use `.in` domain (https://accounts.zoho.in)
   - **US:** Use `.com` domain (https://accounts.zoho.com)
   - **EU:** Use `.eu` domain (https://accounts.zoho.eu)
   
   ⚠️ **IMPORTANT:** Remember your region, you'll need it later!

4. Complete registration with your email
5. Verify your email address
6. Complete the setup wizard

### 1.2 Access Your CRM Dashboard

1. Login to Zoho CRM
2. Navigate to **Leads** module
3. Verify you can create a test lead manually

---

## Step 2: Create Zoho API Client

### 2.1 Access Zoho API Console

1. Open [Zoho API Console](https://api-console.zoho.in) (use `.in` for India, `.com` for US)
2. Login with your Zoho credentials
3. Click **"Get Started"** or **"Add Client"**

### 2.2 Create Server-based Application

1. Select **"Server-based Applications"**
2. Fill in the details:
   - **Client Name:** `Business Website Lead Integration`
   - **Homepage URL:** `https://your-domain.com`
   - **Authorized Redirect URIs:** `https://your-domain.com/api/zoho/callback`
   
3. Click **"Create"**

### 2.3 Note Down Credentials

After creation, you'll see:
- ✅ **Client ID** (looks like: `1000.XXXXXXXXXXXXXXXXXXXX`)
- ✅ **Client Secret** (looks like: `abcdef1234567890abcdef1234567890`)

📝 **Save these securely! You'll need them for environment variables.**

---

## Step 3: Generate Refresh Token

### 3.1 Get Authorization Code

1. In Zoho API Console, click on your client
2. Click **"Generate Code"** tab
3. Select **Scope:**
   ```
   ZohoCRM.modules.leads.ALL
   ZohoCRM.modules.ALL
   ZohoCRM.settings.ALL
   ```
4. Set **Time Duration:** 10 minutes (maximum)
5. Click **"Create"**

### 3.2 Copy Authorization Code

You'll receive a code like:
```
1000.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

⚠️ **IMPORTANT:** This code expires in 10 minutes! Use it immediately.

### 3.3 Generate Refresh Token

Use this `curl` command in your terminal (replace placeholders):

```bash
curl -X POST https://accounts.zoho.in/oauth/v2/token \
  -d "code=YOUR_AUTHORIZATION_CODE" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=https://your-domain.com/api/zoho/callback" \
  -d "grant_type=authorization_code"
```

**Example Response:**
```json
{
  "access_token": "1000.xxxxx.xxxxx",
  "refresh_token": "1000.xxxxx.xxxxx",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

📝 **Save the `refresh_token`! This never expires and is used to get new access tokens.**

---

## Step 4: Configure Environment Variables

### 4.1 Vercel Dashboard Method

1. Login to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `ZOHO_CLIENT_ID` | `1000.XXXXXXXXXXXXXXXXXXXX` | Production, Preview, Development |
| `ZOHO_CLIENT_SECRET` | `abcdef1234567890abcdef1234567890` | Production, Preview, Development |
| `ZOHO_REFRESH_TOKEN` | `1000.xxxxx.xxxxx` | Production, Preview, Development |
| `DATABASE_URL` | `postgresql://user:pass@host:5432/db` | Production, Preview, Development |
| `ADMIN_PASSWORD` | `your-secure-password` | Production, Preview, Development |

5. Click **"Save"** for each variable

### 4.2 Local Development (.env.local)

Create `.env.local` in your project root:

```bash
# ============================================
# Database Configuration
# ============================================
DATABASE_URL="postgresql://user:password@localhost:5432/agency_db"

# ============================================
# Simple Admin Authentication
# ============================================
ADMIN_PASSWORD="your-secure-admin-password-here"

# ============================================
# Zoho CRM Integration
# ============================================
ZOHO_CLIENT_ID="1000.XXXXXXXXXXXXXXXXXXXX"
ZOHO_CLIENT_SECRET="abcdef1234567890abcdef1234567890"
ZOHO_REFRESH_TOKEN="1000.xxxxx.xxxxx"

# ============================================
# Google Ads Integration
# ============================================
GOOGLE_CONVERSION_ID="AW-17606401808"
GOOGLE_LEAD_SUBMIT_LABEL="Y3bsCKXpn6gbEJC-sctB"
GOOGLE_WHATSAPP_CLICK_LABEL="XO54CKjpn6gbEJC-sctB"
GOOGLE_CALL_CLICK_LABEL="[TO BE CREATED]"
```

---

## Step 5: Initialize Database Settings

### 5.1 Run Database Migration

```bash
# Push schema to database
npx prisma db push

# Generate Prisma Client
npx prisma generate
```

### 5.2 Initialize Integration Settings

The settings will be automatically initialized from environment variables on first run. You can also manually initialize via admin panel:

1. Navigate to `/admin/integrations`
2. Enter your Zoho credentials
3. Click **"Test Connection"**
4. If successful, settings are saved to database

---

## Step 6: Test Integration

### 6.1 Test via Admin Panel

1. Login to admin panel: `/login`
2. Navigate to **Integrations** section
3. Click **"Test Zoho Connection"**
4. You should see: ✅ **Connection successful**

### 6.2 Test Lead Submission

1. Go to your business-website page: `/pages/business-website`
2. Fill out the lead form
3. Submit the form
4. Check console logs for:
   ```
   [Business-Website] Lead API response: { success: true, ... }
   [Business-Website] ✅ Lead saved to database, Zoho CRM updated, Google Ads conversion fired
   ```

### 6.3 Verify in Zoho CRM

1. Login to Zoho CRM
2. Navigate to **Leads** module
3. You should see your test lead with:
   - Last Name: (your name)
   - Phone: (your phone)
   - Email: (your email)
   - Lead Source: Website

---

## Step 7: Configure Webhooks (Optional)

Zoho can send webhooks back to your application when leads are updated.

### 7.1 Create Webhook Endpoint

Your webhook endpoint is already set up at:
```
https://your-domain.com/api/zoho/webhook
```

### 7.2 Configure in Zoho CRM

1. Login to Zoho CRM
2. Go to **Setup** → **Automation** → **Workflows**
3. Click **"Create Rule"**
4. Select Module: **Leads**
5. Rule Name: `Lead Update Notification`
6. Trigger: **On Create** or **On Update**
7. Add Action: **Webhook**
8. Configure:
   - URL: `https://your-domain.com/api/zoho/webhook`
   - Method: `POST`
   - Content Type: `application/json`
9. Click **"Save"**

### 7.3 Webhook Payload Example

Zoho will send data like:
```json
{
  "id": "4948484000000256029",
  "Last_Name": "Sharma",
  "Email": "sharma@example.com",
  "Phone": "+91 9963730111",
  "Lead_Source": "Website"
}
```

---

## Troubleshooting

### ❌ Error: "IntegrationSettings not found"

**Solution:**
```bash
# Reset database and reinitialize
npx prisma db push --force-reset
# Restart your application
```

### ❌ Error: "Zoho token refresh failed: 401"

**Possible causes:**
1. Wrong Client ID or Client Secret
2. Wrong Refresh Token
3. Wrong Zoho region (`.in` vs `.com`)

**Solution:**
1. Regenerate refresh token (Step 3)
2. Update environment variables
3. Check Zoho region in `app/lib/zohoService.ts`:
   ```typescript
   const ZOHO_TOKEN_URL = 'https://accounts.zoho.in/oauth/v2/token'; // Change .in to .com if needed
   const ZOHO_LEADS_URL = 'https://www.zohoapis.in/crm/v2/Leads'; // Change .in to .com if needed
   ```

### ❌ Error: "Invalid grant"

**Solution:**
1. Authorization code expired (10 min limit)
2. Generate new authorization code
3. Regenerate refresh token immediately

### ❌ Lead saved to DB but not in Zoho

**Solution:**
1. Check `IntegrationLog` table for errors:
   ```sql
   SELECT * FROM "IntegrationLog" 
   WHERE provider = 'zoho' 
   AND level = 'error' 
   ORDER BY "createdAt" DESC 
   LIMIT 10;
   ```
2. Check `IntegrationRetry` table for queued retries:
   ```sql
   SELECT * FROM "IntegrationRetry" 
   WHERE type = 'zoho_lead' 
   AND status = 'queued';
   ```
3. The system will auto-retry failed submissions

---

## Flowchart

```
┌─────────────────────────────────────────────────────────────┐
│                    ZOHO CRM INTEGRATION FLOW                 │
└─────────────────────────────────────────────────────────────┘

┌──────────────┐
│ User submits │
│  lead form   │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│ POST /api/lead       │
│ - Validate input     │
│ - Generate correlationId │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Save to Database     │
│ (PostgreSQL)         │
│ - Lead table         │
│ - status: pending    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│ Get Zoho Access Token│
│ - Check if expired   │
│ - Refresh if needed  │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────────────┐
│ Send to Zoho CRM API         │
│ POST /crm/v2/Leads           │
│ - Map fields                 │
│ - Include auth token         │
└──────┬───────────────────────┘
       │
       ├─── ✅ Success
       │    │
       │    ▼
       │    ┌────────────────────────┐
       │    │ Update Database        │
       │    │ - status: pushed       │
       │    │ - zohoLeadId: XXX      │
       │    └────────────────────────┘
       │
       └─── ❌ Failed
            │
            ▼
            ┌────────────────────────┐
            │ Update Database        │
            │ - status: failed       │
            └────────┬───────────────┘
                     │
                     ▼
            ┌────────────────────────┐
            │ Create Retry Entry     │
            │ - IntegrationRetry table│
            │ - nextRunAt: +1 min    │
            │ - maxAttempts: 5       │
            └────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                      AUTO-RETRY SYSTEM                        │
└──────────────────────────────────────────────────────────────┘

Cron Job (runs every minute):
1. Find queued retries with nextRunAt < now
2. For each retry:
   - Attempt Zoho submission
   - If success: Mark as succeeded
   - If failed: Increment attempts, schedule next retry
   - If attempts >= maxAttempts: Mark as failed
3. Exponential backoff: 1min → 5min → 15min → 1hr → 6hr
```

---

## Need Help?

- 📧 Email: support@enterprisehero.com
- 📱 Phone: +91 99637 30111
- 💬 WhatsApp: +91 99637 30111
- 📖 Zoho Docs: https://www.zoho.com/crm/developer/docs/

---

**✅ Setup Complete!** Your Zoho CRM integration is now ready to capture and sync leads automatically.