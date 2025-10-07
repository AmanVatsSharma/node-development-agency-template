# ☁️ Vercel Deployment & Environment Variables Setup

**Version:** 2.0.0  
**Platform:** Vercel  
**Landing Page:** Business Website (Scalable for all pages)  
**Last Updated:** 2025-10-07

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Set Up Database (PostgreSQL)](#step-1-set-up-database-postgresql)
4. [Step 2: Configure Vercel Environment Variables](#step-2-configure-vercel-environment-variables)
5. [Step 3: Deploy to Vercel](#step-3-deploy-to-vercel)
6. [Step 4: Initialize Database](#step-4-initialize-database)
7. [Step 5: Verify Deployment](#step-5-verify-deployment)
8. [Environment Variables Reference](#environment-variables-reference)
9. [Troubleshooting](#troubleshooting)

---

## Overview

This guide helps you deploy your landing pages to Vercel with proper environment configuration for:
- ✅ PostgreSQL Database
- ✅ Zoho CRM Integration
- ✅ Google Ads Conversion Tracking
- ✅ Admin Panel Access
- ✅ Multi-landing-page support

**Deployment Flow:**
```
Local Development → Git Push → Vercel Build → Production
```

---

## Prerequisites

- [ ] Vercel account (free tier works)
- [ ] GitHub/GitLab repository with your code
- [ ] PostgreSQL database (we'll use Vercel Postgres)
- [ ] Zoho CRM credentials (see [Zoho Setup Guide](./ZOHO_CRM_SETUP_GUIDE.md))
- [ ] Google Ads conversion labels (see [Google Ads Setup Guide](./GOOGLE_ADS_CONVERSION_TRACKING_SETUP.md))

---

## Step 1: Set Up Database (PostgreSQL)

### Option A: Vercel Postgres (Recommended)

1. Login to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Storage** tab
4. Click **"Create Database"**
5. Select **"Postgres"**
6. Choose a database name: `agency-db-production`
7. Select region: **Choose closest to your users** (India: Mumbai/Singapore, US: Virginia)
8. Click **"Create"**

**Vercel will automatically:**
- ✅ Create PostgreSQL database
- ✅ Set `DATABASE_URL` environment variable
- ✅ Set `POSTGRES_*` environment variables

### Option B: External PostgreSQL (Supabase, Railway, etc.)

If using external PostgreSQL:

1. Get your connection string (format: `postgresql://user:password@host:5432/database`)
2. Add it manually in Step 2

---

## Step 2: Configure Vercel Environment Variables

### 2.1 Access Environment Variables

1. Login to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**

### 2.2 Add Required Variables

Click **"Add New"** for each variable below:

#### 🔐 Admin Authentication

| Variable | Value | Environment | Required |
|----------|-------|-------------|----------|
| `ADMIN_PASSWORD` | `your-secure-password-123` | Production, Preview, Development | ✅ Yes |

**Security Tips:**
- Use a strong password (min 12 characters)
- Include uppercase, lowercase, numbers, special chars
- Don't use common words
- Example: `MyS3cure!Adm1nP@ss2025`

---

#### 🗄️ Database Configuration

| Variable | Value | Environment | Required |
|----------|-------|-------------|----------|
| `DATABASE_URL` | `postgresql://user:pass@host:5432/db` | Production, Preview, Development | ✅ Yes |

**Note:** If using Vercel Postgres, this is automatically set. Skip if you see it already configured.

---

#### 🔗 Zoho CRM Integration

| Variable | Value | Environment | Required |
|----------|-------|-------------|----------|
| `ZOHO_CLIENT_ID` | `1000.XXXXXXXXXXXXXXXXXXXX` | Production, Preview, Development | ✅ Yes |
| `ZOHO_CLIENT_SECRET` | `abcdef1234567890abcdef1234567890` | Production, Preview, Development | ✅ Yes |
| `ZOHO_REFRESH_TOKEN` | `1000.xxxxx.xxxxx` | Production, Preview, Development | ✅ Yes |

**Get these from:** [Zoho CRM Setup Guide](./ZOHO_CRM_SETUP_GUIDE.md)

---

#### 🎯 Google Ads Conversion Tracking

| Variable | Value | Environment | Required |
|----------|-------|-------------|----------|
| `GOOGLE_CONVERSION_ID` | `AW-17606401808` | Production, Preview, Development | ✅ Yes |
| `GOOGLE_LEAD_SUBMIT_LABEL` | `Y3bsCKXpn6gbEJC-sctB` | Production, Preview, Development | ✅ Yes |
| `GOOGLE_WHATSAPP_CLICK_LABEL` | `XO54CKjpn6gbEJC-sctB` | Production, Preview, Development | ✅ Yes |
| `GOOGLE_CALL_CLICK_LABEL` | `[YOUR_CALL_LABEL]` | Production, Preview, Development | ✅ Yes |

**Get these from:** [Google Ads Setup Guide](./GOOGLE_ADS_CONVERSION_TRACKING_SETUP.md)

⚠️ **IMPORTANT:** Create the Phone Call conversion action in Google Ads first, then add the label here.

---

#### 📊 Google Analytics (Optional)

| Variable | Value | Environment | Required |
|----------|-------|-------------|----------|
| `GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Production, Preview, Development | ⚪ Optional |

**Get from:** Google Analytics → Admin → Data Streams

---

### 2.3 Environment Selection Tips

For each variable, select environments:

- **Production:** Live site (your-domain.com)
- **Preview:** Git branches (for testing)
- **Development:** Local development

**Recommended:**
- ✅ Check all three for consistent behavior
- ⚠️ Use different databases for Production vs Preview/Dev (prevents data pollution)
- 🔒 Always encrypt sensitive values (Vercel does this automatically)

### 2.4 Save All Variables

After adding each variable:
1. Click **"Save"**
2. Verify it appears in the list
3. ✅ Should show as "Encrypted" for sensitive values

---

## Step 3: Deploy to Vercel

### 3.1 First-Time Deployment

1. Login to [Vercel Dashboard](https://vercel.com)
2. Click **"Add New Project"**
3. Import your Git repository:
   - Select **GitHub/GitLab**
   - Authorize Vercel
   - Select your repository
4. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave as root)
   - **Build Command:** `npm run build` or `pnpm build`
   - **Output Directory:** `.next`
5. Click **"Deploy"**

### 3.2 Subsequent Deployments

After initial setup:
1. Push code to your Git repository:
   ```bash
   git add .
   git commit -m "Update landing page configuration"
   git push origin main
   ```
2. Vercel automatically deploys on push to main branch
3. Preview deployments created for other branches

### 3.3 Monitor Deployment

1. Watch deployment progress in Vercel dashboard
2. Check build logs for errors
3. Wait for "✅ Deployment ready"
4. Click **"Visit"** to view your site

---

## Step 4: Initialize Database

### 4.1 Run Prisma Migrations (First Deploy Only)

After first deployment, initialize database schema:

**Option A: Via Vercel CLI (Local)**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Link project
vercel link

# Pull environment variables
vercel env pull .env.local

# Run Prisma migration
npx prisma db push

# Generate Prisma Client
npx prisma generate
```

**Option B: Via Vercel Dashboard**

1. Go to your project in Vercel
2. Open **Deployments** tab
3. Click on latest deployment
4. Scroll to **Build Logs**
5. Verify you see: `✓ Compiled successfully`
6. No manual migration needed if build succeeded

### 4.2 Seed Database (Optional)

To add sample data or initialize settings:

```bash
# Create seed script: prisma/seed.ts
npx prisma db seed
```

See `prisma/seed.ts` for initialization logic.

### 4.3 Verify Database Tables

Check that tables were created:

```bash
# Using Vercel Postgres Dashboard
1. Go to Vercel → Storage → Your Database
2. Click "Data" tab
3. Should see tables:
   - IntegrationSettings
   - Lead
   - IntegrationLog
   - IntegrationRetry
   - BlogPost
   - Author
   - (etc.)
```

---

## Step 5: Verify Deployment

### 5.1 Check Homepage

1. Visit your production URL: `https://your-domain.vercel.app`
2. Verify homepage loads correctly
3. Check for any console errors (F12 → Console)

### 5.2 Check Business-Website Landing Page

1. Visit: `https://your-domain.vercel.app/pages/business-website`
2. Verify page loads
3. Check console logs:
   ```
   [Business-Website] Main page component loaded
   [Business-Website] CONVERSION OPTIMIZED Page mounted
   [GoogleAdsTracking] Google Ads script loaded successfully
   ```

### 5.3 Test Lead Form Submission

1. Fill out the lead form
2. Submit
3. Check console logs for:
   ```
   [Business-Website] Lead API response: { success: true, ... }
   [Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
   ```
4. Verify lead saved to database
5. Verify lead sent to Zoho CRM

### 5.4 Test Admin Panel

1. Visit: `https://your-domain.vercel.app/login`
2. Enter admin password (from environment variables)
3. Verify you can access admin dashboard
4. Check integrations status:
   - Zoho: ✅ Connected
   - Google Ads: ✅ Configured

### 5.5 Check Environment Variables

In your app, verify environment variables are loaded:

```typescript
// Add temporary debug endpoint: app/api/debug/route.ts
export async function GET() {
  return Response.json({
    hasDatabase: !!process.env.DATABASE_URL,
    hasZoho: !!process.env.ZOHO_CLIENT_ID,
    hasGoogleAds: !!process.env.GOOGLE_CONVERSION_ID,
    hasAdmin: !!process.env.ADMIN_PASSWORD,
  });
}
```

Visit: `https://your-domain.vercel.app/api/debug`

Expected response:
```json
{
  "hasDatabase": true,
  "hasZoho": true,
  "hasGoogleAds": true,
  "hasAdmin": true
}
```

⚠️ **Delete this debug endpoint after verification!**

---

## Environment Variables Reference

### Complete List for Production

```bash
# ============================================
# DATABASE (Auto-set by Vercel Postgres)
# ============================================
DATABASE_URL="postgresql://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_URL="postgresql://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_PRISMA_URL="postgresql://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgresql://default:xxx@xxx.postgres.vercel-storage.com:5432/verceldb"
POSTGRES_USER="default"
POSTGRES_HOST="xxx.postgres.vercel-storage.com"
POSTGRES_PASSWORD="xxx"
POSTGRES_DATABASE="verceldb"

# ============================================
# ADMIN AUTHENTICATION
# ============================================
ADMIN_PASSWORD="MyS3cure!Adm1nP@ss2025"

# ============================================
# ZOHO CRM INTEGRATION
# ============================================
ZOHO_CLIENT_ID="1000.XXXXXXXXXXXXXXXXXXXX"
ZOHO_CLIENT_SECRET="abcdef1234567890abcdef1234567890"
ZOHO_REFRESH_TOKEN="1000.xxxxx.xxxxx"

# ============================================
# GOOGLE ADS CONVERSION TRACKING
# ============================================
GOOGLE_CONVERSION_ID="AW-17606401808"
GOOGLE_LEAD_SUBMIT_LABEL="Y3bsCKXpn6gbEJC-sctB"
GOOGLE_WHATSAPP_CLICK_LABEL="XO54CKjpn6gbEJC-sctB"
GOOGLE_CALL_CLICK_LABEL="[YOUR_CALL_LABEL]"

# ============================================
# GOOGLE ANALYTICS (Optional)
# ============================================
GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# ============================================
# FUTURE: Additional Landing Pages
# ============================================
# Add labels for new landing pages as you create them
# GOOGLE_AI_AGENTS_LEAD_SUBMIT_LABEL="xxxxx"
# GOOGLE_AI_AGENTS_WHATSAPP_CLICK_LABEL="xxxxx"
# GOOGLE_AI_AGENTS_CALL_CLICK_LABEL="xxxxx"
```

---

## Troubleshooting

### ❌ Build Failed: "Prisma Client not found"

**Solution:**
```bash
# Add to package.json postinstall script
"scripts": {
  "postinstall": "prisma generate"
}
```

Redeploy.

### ❌ Runtime Error: "IntegrationSettings not found"

**Cause:** Database not initialized

**Solution:**
1. Check database tables exist
2. Run: `npx prisma db push`
3. Access `/admin/integrations` and save settings
4. Redeploy

### ❌ 500 Error: "Failed to connect to database"

**Cause:** Wrong DATABASE_URL or database not accessible

**Solution:**
1. Verify `DATABASE_URL` in Vercel environment variables
2. Test connection:
   ```bash
   # Local test
   psql $DATABASE_URL
   ```
3. Check Vercel Postgres is in same region as deployment
4. Verify IP allowlist (if using external database)

### ❌ "ADMIN_PASSWORD" not working

**Cause:** Environment variable not set or wrong value

**Solution:**
1. Check environment variable in Vercel dashboard
2. Verify it's set for "Production" environment
3. Redeploy after changing environment variables
4. Clear browser cache and try again

### ❌ Google Ads conversions not tracking

**Cause:** Environment variables not set or wrong labels

**Solution:**
1. Verify all Google Ads variables are set
2. Check labels match Google Ads exactly (case-sensitive)
3. Redeploy after changing variables
4. Test in browser console (see Google Ads Setup Guide)

---

## Best Practices

### 🔒 Security

- ✅ Never commit `.env.local` to Git
- ✅ Use strong passwords (12+ characters)
- ✅ Rotate credentials regularly
- ✅ Use different credentials for Production vs Preview/Dev
- ✅ Enable Vercel's "Secure" flag for sensitive variables

### 🚀 Performance

- ✅ Use Vercel Postgres for best performance
- ✅ Select database region close to users
- ✅ Enable connection pooling (Prisma Accelerate)
- ✅ Monitor deployment size (keep under 250MB)

### 📊 Monitoring

- ✅ Enable Vercel Analytics
- ✅ Set up error tracking (Sentry)
- ✅ Monitor database usage
- ✅ Set up uptime monitoring (UptimeRobot)

### 🔄 CI/CD

- ✅ Auto-deploy from `main` branch
- ✅ Preview deployments for PRs
- ✅ Run tests before deployment
- ✅ Use environment-specific branches (staging, production)

---

## Support

- 📧 Vercel Support: https://vercel.com/support
- 📖 Vercel Docs: https://vercel.com/docs
- 💬 Our Support: +91 99637 30111

---

**✅ Deployment Complete!** Your landing pages are live on Vercel with full integration support.