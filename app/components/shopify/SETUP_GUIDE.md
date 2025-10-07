# Setup Guide - Shopify Landing Page

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Git
- Text editor (VS Code recommended)

### Installation

The landing page components are already created in your Next.js project. Here's how to verify and use them:

#### 1. Verify Installation
```bash
# Check if all files exist
ls app/components/shopify/
ls app/pages/shopify-store-setup/

# Should see:
# - All component files (HeroSection.tsx, etc.)
# - page.tsx
# - Documentation files
```

#### 2. Test the Page Locally
```bash
# Navigate to project root
cd /workspace

# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Open browser to:
# http://localhost:3000/pages/shopify-store-setup
```

## 📁 File Structure Overview

```
workspace/
├── app/
│   ├── components/
│   │   ├── shopify/              ← New Shopify components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── WhyChooseSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── WhyUsSection.tsx
│   │   │   ├── ResultsSection.tsx
│   │   │   ├── FinalCTASection.tsx
│   │   │   ├── ContactFormSection.tsx
│   │   │   ├── README.md
│   │   │   ├── COMPONENTS.md
│   │   │   ├── ARCHITECTURE.md
│   │   │   ├── FLOWCHART.md
│   │   │   └── SETUP_GUIDE.md
│   │   └── ui/                   ← Existing Shadcn components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ...
│   └── pages/
│       └── shopify-store-setup/  ← New landing page
│           └── page.tsx
├── package.json
└── ...
```

## ⚙️ Configuration

### 1. Environment Variables

Create or update `.env.local` file in the root directory:

```bash
# .env.local

# WhatsApp Business Number (replace with your number)
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

# Contact Form API Endpoint (optional, for backend integration)
NEXT_PUBLIC_CONTACT_API=/api/contact

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Ads Conversion ID (optional)
NEXT_PUBLIC_GADS_CONVERSION_ID=AW-XXXXXXXXX
```

### 2. Update WhatsApp Number

Edit `app/components/shopify/FinalCTASection.tsx`:

```typescript
// Line ~48
const phoneNumber = '919876543210'; // Replace with your WhatsApp Business number
```

### 3. Update Contact Form API (Optional)

If you want to connect the contact form to a backend API:

Edit `app/components/shopify/ContactFormSection.tsx`:

```typescript
// Line ~96 (inside handleSubmit function)
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

Create API route at `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // TODO: Send email, save to database, integrate with CRM, etc.
    console.log('Contact form submission:', data);
    
    // Example: Send email via SendGrid, Resend, or Nodemailer
    // await sendEmail(data);
    
    // Example: Save to database
    // await prisma.lead.create({ data });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

## 🎨 Customization

### 1. Update Brand Colors

The landing page uses your brand colors. To customize further:

**Option A: Tailwind Config (Recommended)**

Edit `tailwind.config.js` or `tailwind.config.ts`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#1C4E80',   // Current: Trust blue
        'brand-accent': '#00B894',    // Current: Growth green
        // Add more custom colors
      },
    },
  },
};
```

**Option B: Direct in Components**

Search and replace color values in component files:
- `#1C4E80` → Your primary color
- `#00B894` → Your accent color

### 2. Update Content

#### Pricing
Edit `app/components/shopify/PricingSection.tsx`:

```typescript
// Line ~26
const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: 'Starter Launch',
    price: '₹35,000',  // Update prices here
    timeline: '7 days', // Update timelines
    features: [
      // Update features list
    ],
  },
  // ... more tiers
];
```

#### Testimonials
Edit `app/components/shopify/ResultsSection.tsx`:

```typescript
// Line ~53
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Client Name',
    company: 'Company Name',
    quote: 'Update testimonial text here',
    // ...
  },
  // ... more testimonials
];
```

#### Stats
Edit `app/components/shopify/StatsSection.tsx`:

```typescript
// Line ~23
const stats: Stat[] = [
  {
    id: 1,
    value: 10,      // Update value
    suffix: '+',
    label: 'Years Experience', // Update label
    // ...
  },
  // ... more stats
];
```

### 3. Add Your Logo

**Option A: Update Header Component**

If you have a global header, add your logo there.

**Option B: Add to Hero Section**

Edit `app/components/shopify/HeroSection.tsx`:

```typescript
// Add after line ~66 (inside the badge)
<Image
  src="/logo.png"
  alt="Your Company Logo"
  width={120}
  height={40}
  className="mb-4"
/>
```

### 4. Customize Animations

Each component has animation settings. To adjust:

```typescript
// Example in any component
<motion.div
  initial={{ opacity: 0, y: 50 }}     // Starting state
  animate={{ opacity: 1, y: 0 }}      // End state
  transition={{ 
    duration: 0.6,    // Change animation speed (seconds)
    delay: 0.2        // Change delay before starting (seconds)
  }}
>
```

**Make animations faster:**
- Reduce `duration` (e.g., 0.3s instead of 0.6s)
- Reduce `delay` values

**Make animations slower/dramatic:**
- Increase `duration` (e.g., 1.0s instead of 0.6s)
- Add more delay for suspense

## 🔗 Navigation Setup

### Option 1: Direct Link in Header/Menu

Add to your main navigation:

```tsx
<Link href="/pages/shopify-store-setup">
  Shopify Services
</Link>
```

### Option 2: Add to Homepage

Link from your homepage:

```tsx
<Link href="/pages/shopify-store-setup">
  <Button>Get a Shopify Store</Button>
</Link>
```

### Option 3: Landing Page Campaigns

Use this page for:
- Google Ads campaigns
- Facebook Ads
- Email marketing campaigns
- Social media links

Direct URL: `https://yourdomain.com/pages/shopify-store-setup`

## 📊 Analytics Setup

### Google Analytics 4

**1. Install GA4 Script**

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**2. Track Custom Events**

Events are ready to be tracked. Add to component functions:

```typescript
// Example: Track CTA clicks
const handleCTAClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: 'Free Consultation'
    });
  }
  // ... rest of function
};
```

### Google Ads Conversion Tracking

Add conversion tracking to form submission:

```typescript
// In ContactFormSection.tsx, after successful submission
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'conversion', {
    'send_to': process.env.NEXT_PUBLIC_GADS_CONVERSION_ID,
    'value': 1.0,
    'currency': 'INR'
  });
}
```

### Facebook Pixel (Optional)

Add to `app/layout.tsx`:

```tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## 🧪 Testing

### 1. Visual Testing

Test on multiple devices:

```bash
# Desktop
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

# Mobile
- iPhone Safari
- Android Chrome
- Tablet views
```

Use browser DevTools:
```
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes
4. Test touch interactions
```

### 2. Functionality Testing

**Test Checklist:**

- [ ] All section scroll animations work
- [ ] CTA buttons scroll/navigate correctly
- [ ] Contact form validation works
- [ ] Form submission succeeds
- [ ] Success message displays
- [ ] WhatsApp button opens correctly
- [ ] Pricing "Get Started" buttons work
- [ ] All hover effects work
- [ ] Mobile menu works (if applicable)
- [ ] Page loads within 3 seconds
- [ ] No console errors
- [ ] Images load properly

### 3. Performance Testing

**Lighthouse Audit:**

```bash
1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Select "Performance" + "SEO" + "Accessibility"
4. Click "Generate report"
5. Aim for scores 90+
```

**Key Metrics to Check:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

### 4. SEO Testing

**Verify:**
- [ ] Page title is correct
- [ ] Meta description is compelling
- [ ] Open Graph tags are set
- [ ] Images have alt text
- [ ] Headings are hierarchical (H1 → H2 → H3)
- [ ] Internal links work
- [ ] Mobile-friendly (Google test)

## 🐛 Troubleshooting

### Issue: Components not rendering

**Solution:**
```bash
# Check if components are properly imported
# Verify file paths in page.tsx
# Check for typos in import statements
```

### Issue: Animations not working

**Solution:**
```bash
# Verify Framer Motion is installed
npm list framer-motion

# If not installed:
npm install framer-motion

# Check browser console for errors
```

### Issue: Styling looks wrong

**Solution:**
```bash
# Rebuild Tailwind CSS
npm run dev

# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

### Issue: Form not submitting

**Solution:**
```typescript
// Check console for errors
// Verify API endpoint exists
// Test validation by filling all fields
// Check network tab in DevTools
```

### Issue: WhatsApp not opening

**Solution:**
```typescript
// Verify phone number format: 919876543210
// Test on actual mobile device
// Check browser console for errors
```

### Issue: Page loads slowly

**Solution:**
```bash
# Optimize images
# Check for large imports
# Use Next.js Image component
# Enable caching
# Use CDN for assets
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Push to GitHub
git add .
git commit -m "Add Shopify landing page"
git push origin main

# 2. Connect to Vercel
# - Go to vercel.com
# - Import your GitHub repository
# - Click "Deploy"

# 3. Set environment variables in Vercel dashboard
# Settings → Environment Variables
# Add all variables from .env.local
```

### Deploy to Other Platforms

**Netlify:**
```bash
# Build command
npm run build

# Publish directory
.next
```

**AWS / GCP / Azure:**
```bash
# Build and export
npm run build
npm start

# Or use Docker
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]
```

## 🔄 Post-Deployment

### 1. Verify Production Build

```bash
# Visit your deployed URL
https://yourdomain.com/pages/shopify-store-setup

# Test all functionality
# Check console for errors
# Test on mobile devices
```

### 2. Submit to Search Engines

```bash
# Google Search Console
- Add property
- Submit sitemap
- Request indexing

# Bing Webmaster Tools
- Add site
- Submit sitemap
```

### 3. Set Up Monitoring

**Options:**
- Google Analytics (traffic monitoring)
- Sentry (error tracking)
- Hotjar (heatmaps)
- Google Search Console (SEO monitoring)

### 4. Create Google Ads Campaign

```
1. Create new campaign
2. Set landing page URL
3. Add conversion tracking
4. Set up keywords
5. Create ad copy
6. Set budget and launch
```

## 📈 Optimization

### A/B Testing Ideas

1. **Test Headlines:**
   - "Launch a Shopify Store That Sells"
   - "Build Your Dream Shopify Store"
   - "Custom Shopify Stores That Convert"

2. **Test CTA Buttons:**
   - "Get Free Consultation" vs "Book a Call"
   - "View Recent Stores" vs "See Our Work"
   - Button colors: Green vs Blue

3. **Test Pricing Display:**
   - Monthly vs one-time
   - Different tier order
   - Different feature emphasis

### Conversion Rate Optimization

**Track These Metrics:**
- Page views
- Scroll depth (25%, 50%, 75%, 100%)
- CTA click rate
- Form submission rate
- Form completion rate
- Time on page
- Bounce rate

**Optimization Tactics:**
1. Add more social proof (testimonials)
2. Add video testimonials
3. Add live chat widget
4. Add "Limited slots" urgency
5. Add money-back guarantee
6. Simplify contact form
7. Add floating CTA button

## 🆘 Support

### Getting Help

**Check Documentation:**
1. README.md - Overview
2. COMPONENTS.md - Component details
3. ARCHITECTURE.md - Technical details
4. FLOWCHART.md - User journey
5. This file - Setup guide

**Debug with Console Logs:**
- Open browser console (F12)
- Look for [ComponentName] logs
- Follow the execution flow

**Community Resources:**
- Next.js documentation: nextjs.org/docs
- Framer Motion docs: framer.com/motion
- Tailwind CSS docs: tailwindcss.com/docs

## ✅ Launch Checklist

Before going live:

**Content:**
- [ ] Update WhatsApp number
- [ ] Update pricing
- [ ] Update testimonials
- [ ] Update stats/numbers
- [ ] Add real client logos (optional)
- [ ] Proofread all text

**Technical:**
- [ ] Set up Google Analytics
- [ ] Set up Google Ads tracking
- [ ] Configure contact form API
- [ ] Test form submissions
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check page speed (Lighthouse)
- [ ] Verify SEO tags
- [ ] Set up error monitoring

**Legal:**
- [ ] Add privacy policy link
- [ ] Add terms of service link
- [ ] GDPR compliance (if EU traffic)
- [ ] Cookie consent (if required)

**Marketing:**
- [ ] Create Google Ads campaign
- [ ] Set up Facebook Pixel (optional)
- [ ] Prepare social media posts
- [ ] Set up email follow-up sequence
- [ ] Create retargeting audience

## 🎉 You're Ready!

Your Shopify landing page is set up and ready to convert visitors into leads. Remember to:

1. **Monitor performance** - Check analytics weekly
2. **Test variations** - A/B test different elements
3. **Respond quickly** - Follow up with leads within 24 hours
4. **Update regularly** - Keep content fresh
5. **Optimize continuously** - Improve based on data

Good luck! 🚀

---

*For questions or issues, refer to the documentation files or check console logs for debugging information.*
