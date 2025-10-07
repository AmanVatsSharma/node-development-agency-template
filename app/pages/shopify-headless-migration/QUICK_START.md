# Quick Start Guide
## Shopify Headless Migration Landing Page

---

## 🚀 5-Minute Setup

### 1. Access the Page

**Local Development:**
```bash
# Start the dev server
npm run dev

# Open in browser
http://localhost:3000/pages/shopify-headless-migration
```

**Production:**
```
https://yourdomain.com/pages/shopify-headless-migration
```

---

## 🔧 Essential Customizations

### Update Contact Information

**WhatsApp Number (3 locations):**

1. **Final CTA Section** (`_components/final-cta-section.tsx:18`)
   ```typescript
   const phoneNumber = '919876543210'; // ← Change this
   ```

2. **Mobile Floating CTA** (`_components/mobile-floating-cta.tsx:28`)
   ```typescript
   const phoneNumber = '919876543210'; // ← Change this
   ```

3. **Also update Call number** (`_components/mobile-floating-cta.tsx:42`)
   ```typescript
   window.location.href = 'tel:+919876543210'; // ← Change this
   ```

### Update Company Name

Search and replace across all files:
```
Find: "Vedpragya Bharat"
Replace: "Your Company Name"
```

**Files to update:**
- All component files in `_components/`
- README.md
- ARCHITECTURE.md
- FLOWCHART.md

---

## 📊 Setup Analytics

### Google Analytics

The page already has tracking code. Just ensure your GA4 is set up in the main layout:

```typescript
// In: /app/layout.tsx or similar
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
  strategy="afterInteractive"
/>
```

### Events Being Tracked

All events automatically tracked:
- ✅ Page views
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ CTA clicks
- ✅ Plan selections
- ✅ WhatsApp clicks
- ✅ Call clicks

---

## 🎨 Customize Branding

### Colors

**Current brand colors:**
```css
Primary: #0F172A (Deep Navy)
Accent: #00E0B8 (Futuristic Mint)
Background: #F9FAFB
```

**To change:**

1. Search for `#0F172A` and replace with your dark color
2. Search for `#00E0B8` and replace with your accent color
3. Update gradient classes:
   ```
   from-[#00E0B8] to-cyan-400
   ↓ Change to
   from-[#YOUR_COLOR] to-[#YOUR_COLOR_VARIANT]
   ```

### Typography

Currently uses system fonts. To add custom fonts:

```typescript
// In: /app/layout.tsx
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-poppins'
});
```

---

## 💰 Update Pricing

**File:** `_components/pricing-section.tsx`

Find the `plans` array (line ~20) and update:

```typescript
const plans = [
  {
    name: 'Starter Headless',
    price: '₹1L – ₹1.5L',  // ← Change pricing
    delivery: '2 weeks',    // ← Change timeline
    ideal: 'Small brands',  // ← Change target
    // ...
  },
  // ... update other plans
];
```

---

## 📝 Update Content

### Case Studies

**File:** `_components/case-studies-section.tsx`

Replace with your real projects (line ~15):

```typescript
const caseStudies = [
  {
    title: 'Your Client Name',
    industry: 'Industry',
    location: '🇺🇸 Country',
    results: [
      { metric: '+67%', label: 'Your Metric' },
      // ...
    ],
    description: 'Your project description',
  },
  // ...
];
```

### Service Modules

**File:** `_components/what-you-get-section.tsx`

Update features (line ~20):

```typescript
const modules = [
  {
    title: '🧠 Your Service Name',
    features: [
      'Your feature 1',
      'Your feature 2',
      // ...
    ]
  },
  // ...
];
```

---

## 🧪 Test the Page

### Local Testing Checklist

```bash
# 1. Start dev server
npm run dev

# 2. Open page
# http://localhost:3000/pages/shopify-headless-migration

# 3. Check console for logs
# Filter by: [Shopify-Headless]

# 4. Test mobile view
# DevTools → Toggle device toolbar (Cmd/Ctrl + Shift + M)

# 5. Test all CTAs
- [ ] Hero: Request Demo
- [ ] Hero: Get Quote
- [ ] Pricing: Get Started (all 3)
- [ ] Final CTA: Book Consultation
- [ ] Final CTA: WhatsApp
- [ ] Mobile Floating: WhatsApp
- [ ] Mobile Floating: Call Now

# 6. Test animations
- [ ] Scroll through page slowly
- [ ] Check all sections animate
- [ ] Check speed meter in hero

# 7. Test responsiveness
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1280px)
- [ ] Large Desktop (1920px)
```

---

## 🚀 Deploy to Production

### Pre-Deployment Checklist

```bash
✅ Updated WhatsApp number
✅ Updated phone number
✅ Updated company name
✅ Updated pricing
✅ Updated case studies
✅ Tested all CTAs
✅ Tested mobile view
✅ Google Analytics configured
✅ SEO metadata updated
```

### Build & Deploy

```bash
# 1. Build production version
npm run build

# 2. Test production build locally
npm run start

# 3. Deploy to Vercel (recommended)
vercel --prod

# Or deploy to your hosting platform
```

---

## 📱 Mobile Testing

### Test on Real Devices

**iOS:**
```bash
# On Mac with iPhone connected
npm run dev -- --hostname 0.0.0.0
# Open: http://YOUR_LOCAL_IP:3000/pages/shopify-headless-migration
```

**Android:**
```bash
# Same as iOS
npm run dev -- --hostname 0.0.0.0
# Open in Chrome on Android
```

### Test Floating CTAs

1. Open page on mobile
2. Scroll down 300px
3. Check if bottom bar appears
4. Test WhatsApp button
5. Test Call button

---

## 🔍 SEO Setup

### Google Search Console

1. Add your site to Search Console
2. Submit sitemap: `/sitemap.xml`
3. Request indexing for: `/pages/shopify-headless-migration`

### Meta Tags (Already Configured)

- ✅ Title tag
- ✅ Description tag
- ✅ Keywords
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Robots meta

### Structured Data (Optional Enhancement)

Add to page for rich snippets:

```typescript
// In page.tsx, add:
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shopify Headless Migration",
  "provider": {
    "@type": "Organization",
    "name": "Vedpragya Bharat"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "100000"
  }
};

// Add to page:
<script type="application/ld+json">
  {JSON.stringify(structuredData)}
</script>
```

---

## 🎯 Google Ads Setup

### Campaign Structure

```
Campaign: Shopify Headless Migration
├─► Ad Group 1: Headless Shopify
│   ├─► Keywords: headless shopify, shopify headless migration
│   └─► Landing Page: /pages/shopify-headless-migration
│
├─► Ad Group 2: Next.js Shopify
│   ├─► Keywords: nextjs shopify, shopify nextjs
│   └─► Landing Page: /pages/shopify-headless-migration
│
└─► Ad Group 3: Shopify Performance
    ├─► Keywords: shopify slow, improve shopify speed
    └─► Landing Page: /pages/shopify-headless-migration
```

### Conversion Tracking

Already set up in code:
- Page view
- CTA clicks
- WhatsApp clicks
- Form submissions (when added)

Just ensure your Google Ads conversion tracking is configured.

---

## 🐛 Troubleshooting

### Issue: Page not loading

**Check:**
```bash
# 1. Is dev server running?
npm run dev

# 2. Check for build errors
npm run build

# 3. Check console for errors
# Open DevTools → Console
```

### Issue: CTAs not working

**Check:**
1. Open DevTools → Console
2. Look for click event logs
3. Check if hash navigation works
4. Test WhatsApp link manually

### Issue: Animations not playing

**Check:**
1. Scroll slowly to trigger Intersection Observer
2. Check console for `[Shopify-Headless] ... in view` logs
3. Try hard refresh (Cmd/Ctrl + Shift + R)

### Issue: Mobile floating CTA not appearing

**Check:**
1. Are you on mobile view? (< 768px)
2. Have you scrolled past 300px?
3. Check console for mount logs
4. Try resizing browser window

---

## 📊 Performance Optimization

### Run Lighthouse Audit

```bash
# 1. Build production version
npm run build
npm run start

# 2. Open Chrome DevTools
# Navigate to page
# DevTools → Lighthouse → Generate Report

# 3. Target scores:
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 100
```

### Common Optimizations

1. **Images:**
   - Use Next.js Image component
   - Use WebP format
   - Add lazy loading

2. **Fonts:**
   - Use `next/font/google`
   - Subset fonts
   - Preload critical fonts

3. **Third-party scripts:**
   - Use `next/script` with strategy
   - Lazy load non-critical scripts

---

## 📈 Monitor Performance

### Key Metrics to Track

**Traffic:**
- Page views per day/week/month
- Unique visitors
- Traffic sources (Google Ads, Organic, Direct)

**Engagement:**
- Average time on page (target: > 3 minutes)
- Scroll depth distribution
- Bounce rate (target: < 40%)

**Conversions:**
- CTA click rate (target: 15-20%)
- WhatsApp click rate
- Form submission rate (when added)
- Overall conversion rate (target: 8-15%)

**Technical:**
- Page load time (target: < 2s)
- Lighthouse scores
- Core Web Vitals

---

## 🆘 Get Help

### Resources

- **README.md** - Complete feature documentation
- **ARCHITECTURE.md** - Technical deep dive
- **FLOWCHART.md** - User journey & conversion flow
- **Next.js Docs** - https://nextjs.org/docs
- **Framer Motion** - https://www.framer.com/motion/

### Support

For issues with this template:
1. Check console logs ([Shopify-Headless])
2. Review documentation files
3. Check Next.js documentation
4. Search for error messages

---

## ✅ Launch Checklist

```
Pre-Launch:
[ ] Updated all contact information
[ ] Updated company name everywhere
[ ] Updated pricing and plans
[ ] Added real case studies
[ ] Tested all CTAs
[ ] Tested on mobile devices
[ ] Tested on multiple browsers
[ ] Google Analytics configured
[ ] Lighthouse audit passed (90+)

Launch:
[ ] Deploy to production
[ ] Submit sitemap to Search Console
[ ] Set up Google Ads campaigns
[ ] Monitor analytics for first 24h
[ ] Check error logs

Post-Launch (Week 1):
[ ] Review conversion rate
[ ] Analyze user behavior (heatmaps)
[ ] A/B test CTA copy
[ ] Gather user feedback
[ ] Optimize based on data
```

---

## 🎉 You're Ready!

Your Shopify Headless Migration landing page is now ready to convert high-ticket clients!

**Expected Results:**
- 8-15% conversion rate
- $10k+ average project value
- High-quality lead generation

**Next Steps:**
1. Drive traffic (Google Ads, SEO, LinkedIn)
2. Monitor analytics daily
3. Iterate based on data
4. Add testimonials as you get them

**Good luck! 🚀**

---

**Version:** 1.0.0  
**Last Updated:** 2025-10-07  
**Need Help?** Contact: support@vedpragyabharat.com
