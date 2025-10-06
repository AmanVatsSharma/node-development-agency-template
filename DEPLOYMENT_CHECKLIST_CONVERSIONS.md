# 🚀 Landing Page Conversions - Deployment Checklist

## Pre-Deployment Checklist

### 1. Code Review ✅
- [x] All files committed to git
- [x] No TypeScript errors
- [x] All components updated with landing page slugs
- [x] API endpoints created
- [x] Admin UI complete

### 2. Database Preparation
- [ ] Review database migration file
- [ ] Backup current database (recommended)
- [ ] Verify DATABASE_URL is set

### 3. Documentation Review
- [ ] Read `QUICK_START_CONVERSIONS.md`
- [ ] Review `LANDING_PAGE_CONVERSIONS_GUIDE.md`
- [ ] Understand conversion tracking flow

---

## Deployment Steps

### Step 1: Database Migration (5 min)

**Choose one method:**

#### Option A: Prisma Migrate (Recommended)
```bash
cd /workspace
npx prisma migrate dev --name add_landing_page_config
npx prisma generate
```

#### Option B: Manual SQL
```bash
cd /workspace
# Connect to your database and run:
psql $DATABASE_URL -f prisma/migrations/MANUAL_add_landing_page_config.sql
npx prisma generate
```

**Verify:**
```bash
# Check table was created
psql $DATABASE_URL -c "SELECT COUNT(*) FROM \"LandingPageConfig\";"
```

**Expected output:** Should return 0 or 4 (if seed data was inserted)

---

### Step 2: Seed Initial Data (Optional, 2 min)

**Option A: Run seed script**
```bash
npx ts-node scripts/seed-business-website-config.ts
```

**Option B: Add manually later through admin dashboard**

---

### Step 3: Build & Deploy (10 min)

```bash
# Build the application
npm run build

# Deploy to your hosting platform
# (Vercel, Netlify, etc.)
```

---

### Step 4: Configure Google Ads (5 min)

1. **Get Google Ads Conversion ID**
   - Go to Google Ads
   - Navigate to: Tools & Settings > Conversions
   - Find your Conversion ID (format: `AW-XXXXXXXXXX`)

2. **Create Conversion Actions**
   
   For business-website, create 3 conversion actions:
   
   - **Form Submission**
     - Name: "Business Website - Form Submit"
     - Category: Submit lead form
     - Value: Set based on your business
     - Copy the label (part after `/`)
   
   - **Call Button Click**
     - Name: "Business Website - Call Click"
     - Category: Phone calls
     - Value: Set based on your business
     - Copy the label
   
   - **WhatsApp Click**
     - Name: "Business Website - WhatsApp"
     - Category: Contact
     - Value: Set based on your business
     - Copy the label

3. **Repeat for other landing pages** (next-js-development, seo-audit)

---

### Step 5: Admin Dashboard Configuration (10 min)

1. **Access Admin Dashboard**
   ```
   https://your-domain.com/pages/admin/integrations
   ```

2. **Configure Google Ads Tab**
   - Click **Google Ads** tab
   - Enter Conversion ID: `AW-XXXXXXXXXX`
   - Click **Save Settings**

3. **Configure Landing Pages Tab**
   - Click **Landing Pages** tab
   - For "Business Website":
     - Click **Edit**
     - Enter Form Submit Label: `AbCdEfGhIj` (from step 4)
     - Enter Call Click Label: `XyZ123aBcD` (from step 4)
     - Enter WhatsApp Label: `MnOpQrStUv` (from step 4)
     - Check **Active** ✅
     - Add notes (optional)
     - Click **Save Landing Page**
   
   - Repeat for "Next.js Development" and "SEO Audit"

---

### Step 6: Testing (15 min)

#### Test 1: Business Website Landing Page
1. Visit `/pages/business-website`
2. Open browser console (F12)
3. Click call button
4. **Expected console output:**
   ```javascript
   [Conversions] Fired {
     eventType: 'call_click',
     landingPageSlug: 'business-website',
     params: { send_to: 'AW-XXXXXXXXXX/XyZ123aBcD' }
   }
   ```

5. Click WhatsApp button
6. **Expected console output:**
   ```javascript
   [Conversions] Fired {
     eventType: 'whatsapp_click',
     landingPageSlug: 'business-website',
     params: { send_to: 'AW-XXXXXXXXXX/MnOpQrStUv' }
   }
   ```

7. Submit contact form
8. **Expected console output:**
   ```javascript
   [Conversions] Fired {
     eventType: 'lead_submit',
     landingPageSlug: 'business-website',
     params: { send_to: 'AW-XXXXXXXXXX/AbCdEfGhIj' }
   }
   ```

#### Test 2: Next.js Development Landing Page
1. Visit `/pages/next-js-development`
2. Test call, WhatsApp, and form submissions
3. Verify console logs

#### Test 3: SEO Audit Landing Page
1. Visit `/pages/seo-audit`
2. Submit audit form
3. Verify console logs

#### Test 4: Admin Dashboard
1. Visit `/pages/admin/integrations`
2. Go to **Landing Pages** tab
3. Verify all landing pages are listed
4. Try editing a landing page
5. Verify changes are saved

---

### Step 7: Verify in Google Ads (24-48 hours)

1. Go to Google Ads > Tools & Settings > Conversions
2. Click on each conversion action
3. Check "Recent conversions" section
4. Conversions may take 24-48 hours to appear

---

## Post-Deployment Verification

### Immediate Checks (Day 1)

- [ ] Database migration successful
- [ ] Landing pages configured in admin dashboard
- [ ] Console logs show conversions firing
- [ ] No JavaScript errors in browser console
- [ ] Admin dashboard accessible
- [ ] Landing Pages tab visible and functional

### Within 24 Hours (Day 2)

- [ ] Google Ads showing conversion data
- [ ] Conversion counts match expected traffic
- [ ] No errors in admin dashboard logs
- [ ] All landing pages tracking properly

### Within 1 Week

- [ ] Conversion data trending as expected
- [ ] ROI tracking working
- [ ] No anomalies in conversion data
- [ ] Team trained on admin dashboard usage

---

## Troubleshooting Guide

### Issue 1: Conversions not showing in console

**Diagnosis:**
```javascript
// Check browser console for errors
// Look for gtag loading errors
```

**Solutions:**
1. Verify gtag script is loaded (view page source)
2. Check that Google Conversion ID is configured
3. Ensure landing page is marked as Active
4. Clear browser cache and reload

---

### Issue 2: Conversions firing but not in Google Ads

**Diagnosis:**
```javascript
// Console shows: [Conversions] Fired {...}
// But Google Ads shows no conversions
```

**Solutions:**
1. Wait 24-48 hours for data sync
2. Verify conversion labels match exactly (case-sensitive)
3. Check Google Ads conversion actions are active
4. Verify Conversion ID is correct
5. Test with Google Tag Assistant

---

### Issue 3: Admin dashboard not loading landing pages

**Diagnosis:**
```javascript
// API endpoint returns error
// or landing pages list is empty
```

**Solutions:**
1. Check database migration completed
2. Verify API endpoint accessible
3. Check browser console for API errors
4. Review server logs

---

### Issue 4: "Landing page not found" error

**Diagnosis:**
```javascript
// Console: [Conversions] Landing page 'business-website' not found
```

**Solutions:**
1. Verify slug matches exactly (`business-website` not `business_website`)
2. Check landing page exists in database
3. Ensure landing page is marked as Active
4. Re-run seed script if needed

---

## Rollback Plan

If issues occur:

### Step 1: Disable Tracking
1. Go to admin dashboard
2. Mark all landing pages as Inactive
3. This stops conversion tracking without code changes

### Step 2: Revert Code (if needed)
```bash
git revert <commit-hash>
git push
```

### Step 3: Restore Database (if needed)
```bash
# Restore from backup
# Or manually remove landing page configs
psql $DATABASE_URL -c "DELETE FROM \"LandingPageConfig\";"
```

---

## Success Metrics

### Week 1
- [ ] All landing pages firing conversions
- [ ] Google Ads showing conversion data
- [ ] No errors in logs
- [ ] Team comfortable with admin dashboard

### Week 2
- [ ] Baseline conversion rates established
- [ ] Data-driven optimizations started
- [ ] Additional landing pages configured

### Month 1
- [ ] ROI tracking validated
- [ ] Campaign optimization based on data
- [ ] Team fully trained

---

## Support Contacts

### Technical Issues
- Check browser console for detailed logs
- Review admin dashboard logs section
- Check documentation files

### Google Ads Setup
- Google Ads support: https://support.google.com/google-ads
- Tag Manager documentation: https://support.google.com/tagmanager

---

## Quick Reference

### Admin Dashboard URLs
```
Production: https://your-domain.com/pages/admin/integrations
Staging: https://staging.your-domain.com/pages/admin/integrations
```

### Key Configuration Values

**Google Conversion ID Format:**
```
AW-XXXXXXXXXX
```

**Conversion Label Format:**
```
AbCdEfGhIj (usually 10 characters, alphanumeric)
```

**Landing Page Slugs:**
```
business-website
next-js-development
seo-audit
reactjs-development
website-services
web-development
```

---

## Documentation Files

1. **QUICK_START_CONVERSIONS.md** - Quick 5-minute setup
2. **LANDING_PAGE_CONVERSIONS_GUIDE.md** - Complete guide
3. **IMPLEMENTATION_SUMMARY_LANDING_PAGE_CONVERSIONS.md** - Technical details
4. **LANDING_PAGE_CONVERSIONS_COMPLETE.md** - Full summary
5. **DEPLOYMENT_CHECKLIST_CONVERSIONS.md** - This file

---

## Final Checklist

Before considering deployment complete:

- [ ] Database migration successful
- [ ] Code deployed to production
- [ ] Google Conversion ID configured
- [ ] At least 3 landing pages configured with labels
- [ ] Test conversions firing in console
- [ ] Admin dashboard accessible and functional
- [ ] Team trained on admin dashboard
- [ ] Documentation reviewed
- [ ] Rollback plan understood
- [ ] Success metrics defined

---

**Estimated Total Deployment Time:** 45-60 minutes

**Ready to deploy?** Follow the steps above in order!

🚀 **Good luck with your deployment!** 🚀
