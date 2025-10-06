# Quick Start: Landing Page Conversions

## 🚀 Get Started in 5 Minutes

This guide will help you set up conversion tracking for your business-website landing page.

## Prerequisites

- Admin access to `/pages/admin/integrations`
- Google Ads account with conversion actions set up
- Database migration completed

## Step-by-Step Setup

### 1️⃣ Run Database Migration (One-time)

Choose one option:

**Option A: Automatic (Prisma)**
```bash
npx prisma migrate dev --name add_landing_page_config
npx prisma generate
```

**Option B: Manual SQL**
```bash
# If you have direct database access
psql $DATABASE_URL -f prisma/migrations/MANUAL_add_landing_page_config.sql
npx prisma generate
```

### 2️⃣ Configure Google Ads Conversion ID

1. Go to `http://your-domain.com/pages/admin/integrations`
2. Click the **Google Ads** tab
3. Enter your Google Ads Conversion ID
   - Example: `AW-123456789`
   - Find this in Google Ads > Tools & Settings > Conversions
4. Click **Save Settings**

### 3️⃣ Set Up Conversion Labels

1. In Google Ads, create conversion actions for:
   - Form submission
   - Call button click
   - WhatsApp button click
   
2. Copy the conversion labels (the part after `/`)
   - Full tag: `AW-123456789/AbCdEfGhIj`
   - Label to copy: `AbCdEfGhIj`

3. In admin dashboard:
   - Go to **Landing Pages** tab
   - Find "Business Website" or click **+ Add Landing Page**
   - Fill in:
     - **Slug**: `business-website`
     - **Name**: `Business Website`
     - **Form Submit Label**: `AbCdEfGhIj` (your actual label)
     - **Call Click Label**: `XyZ123aBcD` (your actual label)
     - **WhatsApp Label**: `MnOpQrStUv` (your actual label)
   - Make sure **Active** is checked ✅
   - Click **Save Landing Page**

### 4️⃣ Test It!

1. Visit `/pages/business-website`
2. Open browser console (F12)
3. Click a call button or submit the form
4. Look for this in console:
   ```
   [Conversions] Fired {
     eventType: 'call_click',
     landingPageSlug: 'business-website',
     params: { send_to: 'AW-123456789/XyZ123aBcD' }
   }
   ```

### 5️⃣ Verify in Google Ads

1. Go to Google Ads > Tools & Settings > Conversions
2. Click on your conversion action
3. Check for recent conversions (may take 1-24 hours to appear)

## 🎯 What Gets Tracked

On the business-website landing page:

| Action | Event Type | Where |
|--------|-----------|-------|
| Submit contact form | `lead_submit` | Lead form section |
| Click phone number | `call_click` | Lead form + Mobile CTA |
| Click WhatsApp | `whatsapp_click` | Lead form + Mobile CTA |

## 📝 Example Configuration

Here's what your landing page config should look like:

```
Slug: business-website
Name: Business Website
Description: Main landing page for business website services

Conversion Labels:
├─ Form Submit:  AbCdEfGhIj
├─ Call Click:   XyZ123aBcD
├─ WhatsApp:     MnOpQrStUv
└─ Newsletter:   WxYz456EfG

Active: ✅ Yes
```

## 🔧 Troubleshooting

### Problem: Conversions not showing in console

**Solution:**
1. Check that gtag script is loaded (view page source)
2. Verify landing page is marked as **Active**
3. Check browser console for errors

### Problem: Conversions firing but not in Google Ads

**Solution:**
1. Wait 24-48 hours for data to sync
2. Verify conversion labels are correct (case-sensitive!)
3. Check that Conversion ID is correct
4. Ensure conversion actions are active in Google Ads

### Problem: "Landing page not found" error

**Solution:**
1. Verify database migration completed
2. Check landing page exists in admin dashboard
3. Ensure slug is exactly `business-website` (no spaces, hyphens matter)

## 🎨 Admin Dashboard Screenshots

### Landing Pages Tab
```
┌──────────────────────────────────────────────────┐
│  Landing Page Conversion Tracking                │
│  Configure Google Ads conversion labels...        │
│                                   [+ Add Landing] │
├──────────────────────────────────────────────────┤
│  📄 Business Website        [Active]  /business-w│
│     Main landing page for business websites...   │
│     Form Submit: AbCdEfGhIj  Call: XyZ123aBcD   │
│     WhatsApp: MnOpQrStUv     Newsletter: (not set)│
│                               [Edit]    [Delete] │
└──────────────────────────────────────────────────┘
```

## 🚦 Status Check

After setup, verify:

- [ ] Database has `LandingPageConfig` table
- [ ] Google Conversion ID configured
- [ ] Business Website landing page added
- [ ] Conversion labels configured
- [ ] Landing page marked as Active
- [ ] Console shows conversion logs
- [ ] Google Ads shows conversions (after 24h)

## 📞 Quick Help

**Can't access admin?**
- Default URL: `/pages/admin/integrations`
- Requires authentication (check your auth system)

**Need more landing pages?**
- Click **+ Add Landing Page**
- Enter slug (e.g., `seo-audit`)
- Configure labels
- Update that landing page's code to call `fireConversion('event', 'slug')`

## 🎯 Done!

You're all set! Your business-website landing page is now tracking conversions to Google Ads.

**Next Steps:**
1. Monitor conversions in Google Ads
2. Configure other landing pages (seo-audit, reactjs-development, etc.)
3. Optimize based on conversion data

---

**Need detailed docs?** See `LANDING_PAGE_CONVERSIONS_GUIDE.md`  
**Implementation details?** See `IMPLEMENTATION_SUMMARY_LANDING_PAGE_CONVERSIONS.md`
