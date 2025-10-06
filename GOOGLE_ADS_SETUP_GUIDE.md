# 📊 Google Ads Dashboard Setup Guide

## Complete Step-by-Step Instructions

This guide walks you through everything you need to configure in your Google Ads dashboard to work with our conversion tracking system.

---

## 🎯 Part 1: Get Your Google Ads Conversion ID

### Step 1: Access Google Ads Dashboard
1. Go to https://ads.google.com
2. Log in with your Google account
3. Select your Ads account (or create one if you don't have it)

### Step 2: Navigate to Conversions
```
Click: Tools & Settings (wrench icon, top right)
→ Measurement
→ Conversions
```

### Step 3: Find Your Conversion ID
1. Look for any existing conversion action
2. Click on it
3. Look for the tag/code snippet
4. Find the ID in format: **`AW-XXXXXXXXXX`**

**Example:**
```javascript
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-123456789"></script>
                                                                    ^^^^^^^^^^
                                                            This is your Conversion ID
```

### Step 4: Copy Your Conversion ID
- Copy just the **`AW-XXXXXXXXXX`** part
- Example: `AW-123456789`

**✅ Save this - you'll need it for the admin dashboard!**

---

## 🎯 Part 2: Create Conversion Actions

You need to create separate conversion actions for each event type on each landing page.

### Recommended Structure:
```
business-website:
├─ Business Website - Form Submit
├─ Business Website - Call Click
└─ Business Website - WhatsApp Click

seo-audit:
├─ SEO Audit - Form Submit
└─ SEO Audit - Call Click

next-js-development:
├─ Next.js - Form Submit
├─ Next.js - Call Click
└─ Next.js - WhatsApp Click
```

---

## 📝 Creating a Conversion Action (Detailed Steps)

### For: Business Website - Form Submit

#### Step 1: Navigate to Conversions
```
Tools & Settings → Measurement → Conversions → Click "New conversion action"
```

#### Step 2: Choose Conversion Type
- Select: **"Website"**
- Click **"Next"**

#### Step 3: Configure Conversion Details

**Conversion Name:**
```
Business Website - Form Submit
```

**Category:**
```
Select: "Submit lead form"
```

**Value:**
```
• Select: "Use different values for each conversion"
• Default value: 15000
• Currency: INR - Indian Rupee
```

**Count:**
```
Select: "Every" (count every conversion)
```
*Why: Each form submission is valuable*

**Conversion window:**
```
Click-through: 30 days
View-through: 1 day
```

**Attribution model:**
```
Select: "Data-driven" (or "Last click" if data-driven not available)
```

#### Step 4: Tag Settings
```
Select: "Use Google tag manager or add the tag yourself"
```

#### Step 5: Create and Continue
Click **"Create and continue"**

#### Step 6: Copy the Conversion Label
You'll see a screen with code. Look for:

```javascript
gtag('event', 'conversion', {
    'send_to': 'AW-123456789/AbCdEfGhIjK',
                              ^^^^^^^^^^
                        This is your LABEL
});
```

**Copy just the label part:** `AbCdEfGhIjK`

**✅ Save this label - you'll configure it in the admin dashboard!**

---

## 🔄 Repeat for All Event Types

### For Business Website Landing Page:

#### 1. Business Website - Call Click
```
Name: Business Website - Call Click
Category: Phone calls
Value: Use different values (Default: 15000 INR)
Count: Every
Window: 30 days / 1 day
Tag: Use Google tag manager

→ Copy Label: XyZ123aBcD (example)
```

#### 2. Business Website - WhatsApp Click
```
Name: Business Website - WhatsApp Click
Category: Contact
Value: Use different values (Default: 15000 INR)
Count: Every
Window: 30 days / 1 day
Tag: Use Google tag manager

→ Copy Label: MnOpQrStUv (example)
```

---

## 📋 Quick Reference Sheet

After creating all conversion actions, fill this out:

### Business Website Landing Page
```
Google Conversion ID: AW-____________

Event: Form Submit
Label: _______________

Event: Call Click
Label: _______________

Event: WhatsApp Click
Label: _______________
```

### SEO Audit Landing Page
```
Event: Form Submit
Label: _______________
```

### Next.js Development Landing Page
```
Event: Form Submit
Label: _______________

Event: Call Click
Label: _______________

Event: WhatsApp Click
Label: _______________
```

---

## 🎯 Part 3: Configure in Admin Dashboard

### Step 1: Add Google Conversion ID
1. Go to your website: `/pages/admin/integrations`
2. Click **"Google Ads"** tab
3. Enter your Conversion ID: `AW-XXXXXXXXXX`
4. Click **"Save Settings"**

### Step 2: Configure Landing Pages
1. Click **"Landing Pages"** tab
2. Click **"Edit"** on "Business Website"
3. Fill in:
   ```
   Default Lead Value: 15000
   Enable Dynamic Values: ✅ Check
   
   Form Submit Label: AbCdEfGhIjK
   Call Click Label: XyZ123aBcD
   WhatsApp Label: MnOpQrStUv
   
   Active: ✅ Check
   ```
4. Click **"Save Landing Page"**

### Step 3: Repeat for Other Landing Pages
Do the same for:
- SEO Audit
- Next.js Development
- Any other landing pages

---

## 🧪 Part 4: Test Your Setup

### Option 1: Google Tag Assistant (Recommended)

#### Step 1: Install Extension
1. Go to Chrome Web Store
2. Search "Tag Assistant Legacy (by Google)"
3. Click "Add to Chrome"

#### Step 2: Enable Recording
1. Click the Tag Assistant icon
2. Click "Enable"
3. Visit your landing page: `/pages/business-website`
4. Refresh the page

#### Step 3: Trigger a Conversion
1. Fill out and submit the form (use test data)
2. Click Tag Assistant icon
3. Look for:
   ```
   ✅ Google Ads Conversion Tracking
      - Conversion ID: AW-123456789
      - Conversion Label: AbCdEfGhIjK
      - Value: 15000 (or dynamic value)
      - Currency: INR
   ```

#### Step 4: Verify
- If you see green checkmarks → Working! ✅
- If you see red X or warnings → Check configuration

### Option 2: Browser Console

1. Visit `/pages/business-website`
2. Open Console (F12)
3. Submit form
4. Look for:
   ```javascript
   [Conversions] Fired {
     eventType: 'lead_submit',
     landingPageSlug: 'business-website',
     value: 15000,
     params: {
       send_to: 'AW-123456789/AbCdEfGhIjK',
       value: 15000,
       currency: 'INR',
       email: '...',
       phone_number: '...'
     }
   }
   ```

### Option 3: Google Ads Dashboard

1. Go to Google Ads → Conversions
2. Click on "Business Website - Form Submit"
3. After 24-48 hours, you should see conversions appear

**Note:** Real conversions may take 24-48 hours to show up in Google Ads

---

## 🔍 Part 5: Verify Conversion Values

### Check if Values are Tracking

1. In Google Ads, go to: **Reports → Predefined Reports → Campaign → Conversions**
2. Add columns:
   - Click **"Columns"** → **"Modify columns"**
   - Search for: "Conv. value"
   - Add: "Conv. value" and "Conv. value/cost"
   - Click **"Apply"**

3. After getting conversions, you should see:
   ```
   Campaign Name        | Conversions | Conv. Value | Conv. Value/Cost
   Business Website Ads | 10          | ₹150,000    | 3.5x
   ```

**If values show ₹0:** Values aren't being passed. Check:
- Console logs show value in params
- Tag Assistant shows value
- Landing page configuration has default value set

---

## 🎯 Part 6: Enhanced Conversions Setup (Optional but Recommended)

Enhanced conversions improve matching accuracy by 20-30%.

### Step 1: Enable Enhanced Conversions
1. Go to: **Tools → Conversions**
2. Click on a conversion action
3. Click **"Edit settings"**
4. Scroll to **"Enhanced conversions"**
5. Toggle: **"Turn on enhanced conversions"**
6. Select: **"Google tag manager or gtag.js"**
7. Click **"Save"**

### Step 2: Verify
- Our system already passes email, phone, name, and city
- Google will automatically hash this data
- No additional setup needed on your side!

**Repeat for all conversion actions**

---

## 📊 Part 7: Set Up Conversion Goals for Smart Bidding

### Option A: Maximize Conversion Value (Recommended)
```
Campaign Settings:
→ Bidding
→ Select: "Maximize conversion value"
→ Optional: Set target ROAS (e.g., 300%)
```

**Why this works:**
- Google will prioritize high-value leads (₹60,000 vs ₹5,000)
- Better ROI automatically
- Works with our dynamic values

### Option B: Target CPA
```
Campaign Settings:
→ Bidding
→ Select: "Target CPA"
→ Set target: ₹500 (adjust based on your data)
```

**Note:** Wait for 30+ conversions before enabling Smart Bidding

---

## 🎯 Part 8: Campaign Structure Best Practices

### Recommended Structure:

```
Account
├─ Campaign: Business Website - Search
│  ├─ Ad Group: Business Website Design
│  ├─ Ad Group: Professional Website
│  └─ Ad Group: Company Website
│
├─ Campaign: SEO Audit - Search
│  ├─ Ad Group: SEO Audit Service
│  └─ Ad Group: Website SEO Check
│
└─ Campaign: Next.js Development - Search
   ├─ Ad Group: Next.js Developers
   └─ Ad Group: Next.js Website
```

### Landing Page URLs:
```
Business Website Campaign → https://yoursite.com/pages/business-website?utm_source=google&utm_medium=cpc&utm_campaign=business-website

SEO Audit Campaign → https://yoursite.com/pages/seo-audit?utm_source=google&utm_medium=cpc&utm_campaign=seo-audit
```

**Important:** Always add UTM parameters! Our system captures these.

---

## 📝 Part 9: Conversion Tracking Checklist

Before going live:

### Google Ads Setup
- [ ] Conversion ID copied and saved
- [ ] Conversion actions created for each event type
- [ ] Conversion labels copied and saved
- [ ] Values set to "Use different values"
- [ ] Currency set to INR
- [ ] Count set to "Every"
- [ ] Enhanced conversions enabled

### Admin Dashboard
- [ ] Conversion ID configured in Google Ads tab
- [ ] Landing pages configured with labels
- [ ] Default lead values set (e.g., 15000)
- [ ] Dynamic values enabled
- [ ] Landing pages marked as Active

### Testing
- [ ] Tag Assistant shows conversions firing
- [ ] Console logs show correct values
- [ ] GCLID being captured
- [ ] UTM parameters being captured
- [ ] Test conversions appear in Google Ads (within 24-48h)

### Optimization
- [ ] Smart Bidding enabled (after 30+ conversions)
- [ ] Conversion value reporting working
- [ ] Campaign structure uses UTM parameters
- [ ] Landing pages optimized for conversions

---

## 🚨 Common Issues & Solutions

### Issue 1: Conversions Not Showing
**Symptoms:** Form submits, but no conversions in Google Ads

**Solutions:**
1. Check Tag Assistant - is gtag firing?
2. Check console logs - any errors?
3. Verify Conversion ID and Labels match
4. Wait 24-48 hours (conversions have delay)
5. Check conversion action isn't paused

### Issue 2: Values Not Showing
**Symptoms:** Conversions show, but value is ₹0

**Solutions:**
1. Check console shows value in params
2. Verify conversion action set to "Use different values"
3. Check default value set in landing page config
4. Ensure dynamic values enabled if using budget/timeline

### Issue 3: GCLID Not Capturing
**Symptoms:** gclid column empty in database

**Solutions:**
1. Add `?gclid=test123` to URL and test
2. Check console for "[Attribution] GCLID captured"
3. Verify auto-tagging enabled in Google Ads:
   - Settings → Account settings
   - Auto-tagging: ON

### Issue 4: Enhanced Conversions Not Working
**Symptoms:** Warning in Tag Assistant

**Solutions:**
1. Verify enhanced conversions enabled in conversion action
2. Check email/phone being passed in console logs
3. Ensure proper format (no formatting issues)

---

## 📈 Monitoring & Optimization

### Week 1: Monitor Basics
- [ ] Conversions appearing in Google Ads
- [ ] Values showing correctly
- [ ] GCLID being captured
- [ ] No errors in Tag Assistant

### Week 2: Analyze Data
- [ ] Check conversion rates by campaign
- [ ] Review conversion values by budget/timeline
- [ ] Analyze lead scores
- [ ] Identify top-performing campaigns

### Week 3: Optimize
- [ ] Enable Smart Bidding (if 30+ conversions)
- [ ] Adjust bids based on conversion value
- [ ] Pause low-performing keywords
- [ ] Increase budget on high-value campaigns

### Month 2: Advanced
- [ ] A/B test landing pages
- [ ] Optimize for specific budgets/timelines
- [ ] Set up remarketing for high-value visitors
- [ ] Implement offline conversion import

---

## 🎓 Pro Tips

### 1. Use Conversion Action Sets
Group related conversions:
```
Tools → Conversion Action Sets → Create Set

Set Name: "All Business Website Conversions"
Include:
- Business Website - Form Submit
- Business Website - Call Click
- Business Website - WhatsApp Click
```

### 2. Set Up Conversion Tracking Template
For new campaigns, use:
```
Final URL: https://yoursite.com/pages/business-website
Tracking template: {lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&gclid={gclid}
```

### 3. Enable Auto-Tagging
```
Settings → Account settings
→ Auto-tagging: ON
```
This ensures GCLID is always added.

### 4. Use Value Rules (Advanced)
Create rules for different scenarios:
```
Tools → Conversions → Conversion action → Value rules

IF: URL contains "/thank-you-premium"
THEN: Use value 50000

IF: URL contains "/thank-you-basic"
THEN: Use value 10000
```

---

## 📞 Support Resources

### Google Ads Help
- **Conversion tracking:** https://support.google.com/google-ads/answer/1722022
- **Enhanced conversions:** https://support.google.com/google-ads/answer/9888656
- **Smart Bidding:** https://support.google.com/google-ads/answer/7065882

### Tag Assistant
- **Chrome Extension:** https://chrome.google.com/webstore (search "Tag Assistant Legacy")
- **Troubleshooting:** https://support.google.com/tagassistant

### Our System
- **Admin Dashboard:** `/pages/admin/integrations`
- **Quick Start:** See `QUICK_START_CONVERSIONS.md`
- **Full Guide:** See `LANDING_PAGE_CONVERSIONS_GUIDE.md`

---

## ✅ Quick Summary

### What You Need From Google Ads:
1. **Conversion ID** (AW-XXXXXXXXXX)
2. **Conversion Labels** (one for each event type per landing page)

### How to Get Them:
1. Google Ads → Tools → Conversions
2. Create conversion actions
3. Copy ID and labels
4. Configure in admin dashboard

### Expected Timeline:
- **Setup:** 30-45 minutes
- **First conversions show:** 24-48 hours
- **Enough data for Smart Bidding:** 30+ conversions (~2-4 weeks)
- **Full optimization:** 60-90 days

---

**Next:** Configure your Google Ads following this guide, then I'll help you set up Server-Side Conversion API! 🚀

**Questions?** Check the troubleshooting section or ask for help!
