# 🚀 Campaign Launch Checklist & Testing Guide

**Campaign:** Google Search Ads - Business Website Landing Page  
**Target:** Indian Market (Mumbai, Delhi, Bangalore, etc.)  
**Phone:** +91 9963730111  
**Version:** 2.0.0  
**Last Updated:** 2025-10-07

---

## 📋 Pre-Launch Checklist

Complete ALL items before launching your Google Ads campaign.

---

### ✅ Phase 1: Google Ads Setup

- [ ] **Google Ads account created** and billing configured
- [ ] **Conversion ID obtained:** `AW-17606401808`
- [ ] **3 conversion actions created:**
  - [ ] Submit Lead Form - Business-Website (Label: `Y3bsCKXpn6gbEJC-sctB`)
  - [ ] Contact - WhatsApp - Business-Website (Label: `XO54CKjpn6gbEJC-sctB`)
  - [ ] Contact - Phone Call - Business-Website (Label: `[NEW_LABEL]` ⚠️ **Create this!**)
- [ ] **Conversion Linker tag** configured (auto-installed via GoogleAdsTracking component)
- [ ] **Conversion windows** set appropriately:
  - Lead Submit: 30 days
  - WhatsApp: 1 day
  - Call: 1 day

---

### ✅ Phase 2: Landing Page Setup

- [ ] **Landing page live** at: `https://your-domain.com/pages/business-website`
- [ ] **Mobile responsive** verified on:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad (Safari)
- [ ] **Page load speed** < 3 seconds (test with Google PageSpeed Insights)
- [ ] **No console errors** in production
- [ ] **All images loading** correctly
- [ ] **All sections visible:**
  - [ ] Hero with CTA buttons
  - [ ] Client logos
  - [ ] Trust signals
  - [ ] Services
  - [ ] Pricing
  - [ ] Lead form
  - [ ] FAQ
  - [ ] Mobile floating CTA

---

### ✅ Phase 3: Contact Information

- [ ] **Phone number correct everywhere:** `+91 99637 30111`
  - [ ] Hero section call button
  - [ ] Lead form quick contact
  - [ ] Mobile floating CTA
  - [ ] Final CTA section
- [ ] **WhatsApp link correct:** `https://wa.me/919963730111`
  - [ ] Lead form WhatsApp button
  - [ ] Mobile floating WhatsApp
- [ ] **Phone calls working:**
  - [ ] Test call from mobile
  - [ ] Verify number reachable
  - [ ] Voicemail set up (if applicable)
- [ ] **WhatsApp active:**
  - [ ] Business account verified
  - [ ] Auto-reply message configured
  - [ ] Quick replies set up

---

### ✅ Phase 4: Database & Integrations

- [ ] **PostgreSQL database** set up and accessible
- [ ] **Prisma schema** deployed (`npx prisma db push`)
- [ ] **Environment variables** configured in Vercel:
  - [ ] `DATABASE_URL`
  - [ ] `ADMIN_PASSWORD`
  - [ ] `ZOHO_CLIENT_ID`
  - [ ] `ZOHO_CLIENT_SECRET`
  - [ ] `ZOHO_REFRESH_TOKEN`
  - [ ] `GOOGLE_CONVERSION_ID`
  - [ ] `GOOGLE_LEAD_SUBMIT_LABEL`
  - [ ] `GOOGLE_WHATSAPP_CLICK_LABEL`
  - [ ] `GOOGLE_CALL_CLICK_LABEL`
- [ ] **Database tables created:**
  - [ ] IntegrationSettings
  - [ ] Lead
  - [ ] IntegrationLog
  - [ ] IntegrationRetry
- [ ] **IntegrationSettings initialized** with Google Ads labels
- [ ] **Zoho CRM connected:**
  - [ ] Token refresh working
  - [ ] Test lead created successfully
  - [ ] Lead appears in Zoho Leads module
- [ ] **Retry mechanism working:**
  - [ ] Test failed submission
  - [ ] Verify retry entry created
  - [ ] Verify auto-retry on next attempt

---

### ✅ Phase 5: Conversion Tracking

- [ ] **GoogleAdsTracking component** loaded in `app/layout.tsx`
- [ ] **gtag script loading** successfully (check Network tab)
- [ ] **Conversion labels** configured in database
- [ ] **fireConversion() function** implemented for:
  - [ ] Lead form submit
  - [ ] WhatsApp clicks
  - [ ] Phone call clicks
- [ ] **Server-side backup tracking** working (`/api/track`)
- [ ] **Console logs** showing conversion fires:
  ```
  [Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
  ```
- [ ] **Google Tag Assistant** verified (Chrome extension)
- [ ] **Test conversions appear** in Google Ads dashboard (wait 24 hours)

---

### ✅ Phase 6: Lead Flow Testing

- [ ] **Test lead submission:**
  - [ ] Fill form with test data
  - [ ] Submit form
  - [ ] Verify success message appears
  - [ ] Check console logs for success
- [ ] **Verify lead in database:**
  ```sql
  SELECT * FROM "Lead" ORDER BY "createdAt" DESC LIMIT 1;
  ```
- [ ] **Verify lead in Zoho CRM:**
  - [ ] Login to Zoho
  - [ ] Check Leads module
  - [ ] Verify test lead details correct
- [ ] **Verify Google Ads conversion:**
  - [ ] Check console for conversion fire
  - [ ] Check IntegrationLog table
  - [ ] Wait 24 hours and check Google Ads dashboard
- [ ] **Test error handling:**
  - [ ] Submit invalid data (empty form)
  - [ ] Verify validation errors show
  - [ ] Submit with database offline
  - [ ] Verify retry entry created

---

### ✅ Phase 7: Admin Panel

- [ ] **Admin login working:** `/login`
- [ ] **Admin password correct** (from environment variable)
- [ ] **Integrations page accessible:** `/admin/integrations`
- [ ] **Zoho connection test** passes: ✅ Connected
- [ ] **Google config test** passes: ✅ Configured
- [ ] **Lead management** accessible: `/admin/contacts`
- [ ] **Integration logs** visible: `/admin/integrations` (logs section)

---

### ✅ Phase 8: Performance & SEO

- [ ] **Google PageSpeed Insights** score:
  - [ ] Mobile: > 80
  - [ ] Desktop: > 90
- [ ] **Core Web Vitals** passing:
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] **Meta tags** configured:
  - [ ] Title tag
  - [ ] Meta description
  - [ ] Open Graph tags
- [ ] **Structured data** (if applicable)
- [ ] **Sitemap** includes landing page
- [ ] **robots.txt** allows crawling

---

### ✅ Phase 9: Security

- [ ] **HTTPS enabled** (SSL certificate)
- [ ] **Environment variables** encrypted in Vercel
- [ ] **Admin panel** password-protected
- [ ] **No sensitive data** in client-side code
- [ ] **API routes** have proper validation
- [ ] **CORS** configured correctly
- [ ] **Rate limiting** considered (optional)

---

### ✅ Phase 10: Monitoring & Analytics

- [ ] **Google Analytics** configured (optional but recommended)
- [ ] **Error tracking** set up (Sentry, optional)
- [ ] **Uptime monitoring** configured (UptimeRobot, optional)
- [ ] **Database monitoring** enabled (Vercel Postgres dashboard)
- [ ] **Alerts set up** for:
  - [ ] Website downtime
  - [ ] Failed lead submissions
  - [ ] Zoho API errors
  - [ ] Database errors

---

## 🧪 Testing Guide

### Test 1: Lead Form Submission (Critical)

**Steps:**
1. Open: `https://your-domain.com/pages/business-website`
2. Press **F12** → **Console** tab
3. Fill form:
   - Name: Test User
   - Phone: +91 9999999999
   - Email: test@test.com
   - City: Mumbai
   - Business Type: Technology
   - Message: This is a test lead
4. Click **"Get My Free Quote Now"**

**Expected Results:**
```
✅ Success message appears
✅ Form clears
✅ Console logs:
   [Business-Website] Lead form submitted: {...}
   [Business-Website] Lead API response: { success: true, leadId: "...", zohoLeadId: "..." }
   [Conversions] 🎯 CONVERSION EVENT TRIGGERED
   [Conversions] Event Type: business_website_lead_submit
   [Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
   [Business-Website] ✅ Lead saved to database, Zoho CRM updated, Google Ads conversion fired
```

**Verify:**
- [ ] Lead in database (SQL query)
- [ ] Lead in Zoho CRM
- [ ] Conversion in IntegrationLog table
- [ ] No errors in console

---

### Test 2: WhatsApp Button Click (Critical)

**Steps:**
1. Open: `https://your-domain.com/pages/business-website`
2. Press **F12** → **Console** tab
3. Scroll to lead form section
4. Click **"WhatsApp us"** button

**Expected Results:**
```
✅ WhatsApp opens (web.whatsapp.com or WhatsApp app)
✅ Number: +91 99637 30111
✅ Console logs:
   [Business-Website] WhatsApp clicked - Opening WhatsApp chat
   [Business-Website] Firing whatsapp_click conversion to Google Ads
   [Conversions] 🎯 CONVERSION EVENT TRIGGERED
   [Conversions] Event Type: business_website_whatsapp_click
   [Conversions] Label for event type: XO54CKjpn6gbEJC-sctB
   [Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
```

**Verify:**
- [ ] WhatsApp opens correctly
- [ ] Phone number correct: +91 99637 30111
- [ ] Conversion logged in IntegrationLog
- [ ] No errors in console

---

### Test 3: Phone Call Button Click (Critical)

**Steps:**
1. Open: `https://your-domain.com/pages/business-website` (on mobile or desktop)
2. Press **F12** → **Console** tab
3. Scroll to lead form section
4. Click **"Call us now"** button (or phone icon in hero)

**Expected Results:**
```
✅ Phone dialer opens (mobile) or tel: link triggered (desktop)
✅ Number: +91 99637 30111
✅ Console logs:
   [Business-Website] Quick call clicked - Phone: +91 99637 30111
   [Business-Website] Firing call_click conversion to Google Ads
   [Conversions] 🎯 CONVERSION EVENT TRIGGERED
   [Conversions] Event Type: business_website_call_click
   [Conversions] Label for event type: [YOUR_CALL_LABEL]
   [Conversions] ✅ CONVERSION FIRED SUCCESSFULLY
```

**Verify:**
- [ ] Phone dialer opens with correct number
- [ ] Conversion logged in IntegrationLog
- [ ] No errors in console

---

### Test 4: Mobile Floating CTA (Mobile Only)

**Steps:**
1. Open on mobile: `https://your-domain.com/pages/business-website`
2. Scroll down 300px
3. Observe bottom-right floating button appears
4. Click the floating button
5. Click **"Call Now"** or **"WhatsApp"**

**Expected Results:**
```
✅ Floating button appears after scroll
✅ Button expands on click
✅ Call and WhatsApp options visible
✅ Message bubble shows (first 10 seconds)
✅ Conversions fire on click
```

---

### Test 5: Error Handling

**Test 5.1: Empty Form Submission**

**Steps:**
1. Open lead form
2. Click submit without filling any fields

**Expected:**
- [ ] Validation errors appear
- [ ] Form doesn't submit
- [ ] Required field indicators show

**Test 5.2: Invalid Email**

**Steps:**
1. Fill form with invalid email: `test@test`
2. Submit

**Expected:**
- [ ] Email validation error
- [ ] Form doesn't submit

**Test 5.3: Database Offline (Simulated)**

**Steps:**
1. Temporarily break DATABASE_URL in Vercel
2. Try submitting lead

**Expected:**
- [ ] Error message to user
- [ ] Error logged in IntegrationLog (if possible)
- [ ] No data loss

---

### Test 6: Google Tag Assistant Verification

**Steps:**
1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Open: `https://your-domain.com/pages/business-website`
3. Enable Tag Assistant (click extension icon)
4. Refresh page
5. Trigger conversion (form submit, WhatsApp, or call)
6. Check Tag Assistant report

**Expected Tags Fired:**
- [ ] Google Ads Global Site Tag (gtag.js)
- [ ] Google Ads Conversion (with correct label)
- [ ] No tag errors

---

### Test 7: Cross-Browser Testing

Test on all major browsers:

| Browser | Version | Desktop | Mobile | Status |
|---------|---------|---------|--------|--------|
| Chrome | Latest | ✅ | ✅ | |
| Safari | Latest | ✅ | ✅ | |
| Firefox | Latest | ✅ | ✅ | |
| Edge | Latest | ✅ | ✅ | |

**For each browser:**
- [ ] Page loads correctly
- [ ] Forms work
- [ ] Conversions fire
- [ ] No console errors

---

### Test 8: Mobile Responsiveness

Test on different screen sizes:

| Device | Screen Size | Portrait | Landscape | Status |
|--------|-------------|----------|-----------|--------|
| iPhone 12 | 390x844 | ✅ | ✅ | |
| iPhone 14 Pro Max | 430x932 | ✅ | ✅ | |
| Samsung Galaxy S21 | 360x800 | ✅ | ✅ | |
| iPad Pro | 1024x1366 | ✅ | ✅ | |

**For each device:**
- [ ] All sections visible
- [ ] Text readable
- [ ] Buttons tappable (44x44px min)
- [ ] Forms usable
- [ ] No horizontal scroll

---

## 📊 Post-Launch Monitoring (First 24 Hours)

### Hour 1-3: Immediate Checks

- [ ] **Website up** and accessible
- [ ] **No 500 errors** in Vercel logs
- [ ] **Database connections** stable
- [ ] **Lead submissions** working
- [ ] **Zoho sync** working

### Hour 4-12: Short-term Checks

- [ ] **First real leads** received
- [ ] **Phone calls** received
- [ ] **WhatsApp messages** received
- [ ] **Google Ads** showing impressions
- [ ] **No errors** in logs

### Hour 13-24: Medium-term Checks

- [ ] **Conversions appearing** in Google Ads (may take up to 24 hours)
- [ ] **Lead quality** acceptable
- [ ] **No failed submissions** in IntegrationRetry table
- [ ] **Performance stable** (no slowdowns)

---

## 📈 Success Metrics

### Day 1 Goals

- [ ] **Website uptime:** 99.9%
- [ ] **Lead capture rate:** > 50% of form starts
- [ ] **Zero failed** lead submissions
- [ ] **Zoho sync rate:** 100%
- [ ] **Conversion tracking:** 100% accuracy

### Week 1 Goals

- [ ] **All conversions** visible in Google Ads
- [ ] **Cost per lead** within target
- [ ] **Lead quality** meets expectations
- [ ] **Phone response time** < 2 hours
- [ ] **No critical bugs** reported

---

## 🚨 Emergency Contacts

| Issue | Contact | Phone | Email |
|-------|---------|-------|-------|
| Website Down | Vercel Support | - | support@vercel.com |
| Zoho Issues | Zoho Support | - | support@zoho.com |
| Google Ads | Google Ads Support | - | ads-support@google.com |
| Development Team | Team Lead | +91 99637 30111 | dev@enterprisehero.com |

---

## 🎯 Final Pre-Launch Verification

**Right before launching campaign:**

1. **Open landing page** in incognito mode
2. **Complete ALL 8 tests** above
3. **Verify ALL checklists** ✅
4. **Confirm phone** reachable: +91 99637 30111
5. **Confirm WhatsApp** active
6. **Confirm budget** set in Google Ads
7. **Confirm targeting** correct (Mumbai, Delhi, Bangalore, etc.)
8. **Confirm ad copy** matches landing page messaging
9. **Confirm UTM parameters** (optional but recommended)
10. **LAUNCH CAMPAIGN** 🚀

---

## 📝 Post-Launch Reporting Template

### Daily Report (First Week)

```
Date: [DATE]

LEADS:
- Total: X
- Phone: X
- WhatsApp: X
- Form: X

GOOGLE ADS:
- Impressions: X
- Clicks: X
- CTR: X%
- Conversions: X
- Cost per Conversion: ₹X

ISSUES:
- [Any issues encountered]

ACTIONS TAKEN:
- [Actions taken to resolve issues]

NOTES:
- [Any observations]
```

---

**✅ ALL CHECKS PASSED? YOU'RE READY TO LAUNCH! 🚀**

**📞 Questions? Call +91 99637 30111 or WhatsApp: https://wa.me/919963730111**