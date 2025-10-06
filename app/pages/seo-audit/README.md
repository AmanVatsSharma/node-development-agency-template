# SEO Audit Landing Page

## Overview

A high-converting SEO audit landing page with instant audit widget and tiered pricing packages. Built with Next.js 15, Tailwind CSS v4, and shadcn/ui components.

## Features

### 🎯 Core Features

1. **Instant SEO Audit Widget**
   - 60-second quick scan
   - Real-time results with score (0-100) and grade (A-F)
   - Lead capture integrated with existing leads API
   - Mobile-responsive design

2. **Tiered Pricing Packages**
   - Starter: ₹6,999
   - Professional: ₹19,999 (Most Recommended)
   - Enterprise: ₹49,999
   - Clear feature comparison
   - Urgency indicators (limited slots)

3. **Complete Deliverables Transparency**
   - 15+ technical SEO checks
   - Prioritized issue list (P1/P2/P3)
   - Implementation roadmap
   - Strategy call included

4. **Social Proof & Trust Signals**
   - Client testimonials with results
   - Case study showcase
   - Stats (500+ audits, +38% avg traffic increase)
   - 7-day money-back guarantee

5. **SEO Optimized**
   - JSON-LD structured data (FAQPage, Service, BreadcrumbList)
   - Complete meta tags
   - OpenGraph and Twitter cards
   - Mobile-first responsive design

## File Structure

```
app/pages/seo-audit/
├── page.tsx                          # Main page component
├── layout.tsx                        # Layout with JSON-LD schema
├── metadata.ts                       # SEO metadata
├── README.md                         # This file
└── _components/
    ├── hero-section.tsx              # Hero with value proposition
    ├── instant-audit-widget.tsx      # Free scan widget with form
    ├── how-it-works-section.tsx      # 3-step process
    ├── trust-section.tsx             # Stats and trust badges
    ├── pricing-section.tsx           # Tiered packages
    ├── deliverables-section.tsx      # What clients receive
    ├── testimonials-section.tsx      # Social proof + case study
    ├── faq-section.tsx               # FAQ accordion
    └── final-cta-section.tsx         # Closing CTA with urgency
```

## API Integration

### SEO Scan API (`/api/seo-scan`)

**Endpoint:** `POST /api/seo-scan`

**Request:**
```json
{
  "url": "https://example.com",
  "email": "user@example.com",
  "goal": "lead-gen",
  "phone": "+91 99637 30111"
}
```

**Response:**
```json
{
  "score": 56,
  "grade": "D",
  "issues": [
    {
      "severity": "High",
      "title": "Missing meta description"
    }
  ],
  "quickFixes": [
    "Add meta descriptions",
    "Compress hero image"
  ],
  "metrics": {
    "lcp": "2.8s",
    "fcp": "1.6s"
  }
}
```

**Checks Performed:**
- HTTPS presence
- Meta description
- Title tag
- H1 heading
- Mobile viewport tag
- robots.txt
- sitemap.xml
- Canonical tags
- Page speed estimates

### Leads API Integration

The widget automatically submits leads to `/api/lead` with:
```json
{
  "email": "user@example.com",
  "phone": "+91 99637 30111",
  "message": "SEO Audit Request - URL: https://example.com, Goal: lead-gen",
  "source": "seo-audit",
  "leadSource": "SEO Audit Widget",
  "raw": {
    "url": "https://example.com",
    "goal": "lead-gen",
    "score": 56
  }
}
```

## Components Used

### shadcn/ui Components
- `Button` - Primary and outline variants
- `Input` - Form fields
- `Label` - Form labels
- `Card` - Content containers
- `Accordion` - FAQ section

### Custom Components
- All section components are custom-built
- Error boundaries from business-website
- Framer Motion for animations

## Design System

### Color Palette

```css
Primary: #0B5FFF (Blue)
Accent: #00C48C (Green)
Dark text: #0F172A
Muted gray: #F3F4F6 / #E5E7EB
```

### Typography

- **Headings:** Inter/Poppins - Bold
  - H1: 48-72px
  - H2: 36-60px
  - H3: 28-48px
- **Body:** Inter/Roboto - 16px base, 1.5 line-height

### Buttons

- **Primary:** Solid blue/green gradient, white text, rounded-2xl
- **Secondary:** Outline with border

## Conversion Optimization Features

1. **Trust Indicators**
   - "No credit card required"
   - "Results in 60s"
   - "100% secure & private"

2. **Urgency Elements**
   - "Only 10 Professional audits left this month"
   - Animated pulse indicators
   - Limited availability badges

3. **Multiple CTAs**
   - Hero: "Run Free Scan"
   - Pricing: Package-specific CTAs
   - Final: "Ready to boost rankings?"
   - Lead magnet: "Download free checklist"

4. **Social Proof**
   - Testimonials with specific results (+52% traffic)
   - Case study with before/after metrics
   - Client stats (500+ audits)

5. **Value-First Approach**
   - Free instant scan
   - Transparent deliverables
   - Money-back guarantee

## SEO Implementation

### Meta Tags

```typescript
title: "Free SEO Audit Tool — Instant Website SEO Check & Detailed Reports"
description: "Run a free SEO scan in 60s. Get prioritized fixes, Core Web Vitals report..."
```

### JSON-LD Schema

1. **FAQPage Schema** - 4 main FAQs
2. **Service Schema** - All 3 pricing tiers
3. **BreadcrumbList Schema** - Navigation hierarchy

### OpenGraph Tags

- Images: 1200x630 OG image
- Type: website
- Locale: en_IN

## Usage

### Development

```bash
npm run dev
# Visit http://localhost:3000/pages/seo-audit
```

### Production

```bash
npm run build
npm start
```

## Customization

### Update Pricing

Edit `app/pages/seo-audit/_components/pricing-section.tsx`:

```typescript
const packages = [
  {
    name: 'Starter',
    price: '₹6,999',
    // ... features
  }
]
```

### Update SEO Checks

Edit `app/api/seo-scan/route.ts`:

```typescript
async function performQuickAudit(url: string) {
  // Add your custom checks here
}
```

### Customize Lead Capture

Edit `app/pages/seo-audit/_components/instant-audit-widget.tsx`:

```typescript
const leadRes = await fetch('/api/lead', {
  method: 'POST',
  body: JSON.stringify({
    // Customize lead data
  })
});
```

## A/B Testing Ideas

1. **CTA Copy**
   - A: "Check My Site Now"
   - B: "Get Free Instant Audit"

2. **Score Display**
   - A: Numeric (56/100)
   - B: Badge ("SEO Health: Needs Work")

3. **Hero CTA Color**
   - A: Blue gradient
   - B: Green gradient

## Email Funnel Integration

After audit submission, users can receive:

1. **Immediate:** Audit report PDF + 7-point checklist
2. **Day 2:** Explain top 3 fixes
3. **Day 4:** Case study
4. **Day 7:** Limited-time discount
5. **Day 10:** Last call + book strategy call

Implement in your email marketing platform using the lead data from `/api/lead`.

## Performance Optimization

- **Lazy Loading:** All sections use intersection observer
- **Code Splitting:** Each section is a separate component
- **Image Optimization:** Next.js Image component recommended
- **API Timeout:** 10s timeout on scan requests
- **Error Handling:** Comprehensive try-catch blocks

## Security Considerations

- **Privacy:** Only public data scanned
- **No Passwords:** Never request credentials
- **Rate Limiting:** Implement on `/api/seo-scan` endpoint
- **CAPTCHA:** Recommended for production
- **GDPR Compliance:** Privacy notice included

## Monitoring & Analytics

Track these events:

```typescript
// Widget submission
fireConversion('lead_submit');

// CTA clicks
fireConversion('pricing_click');
fireConversion('download_checklist');

// Phone/WhatsApp clicks
fireConversion('call_click');
fireConversion('whatsapp_click');
```

## Troubleshooting

### Issue: Accordion not animating

**Solution:** Ensure globals.css has accordion animations and `@radix-ui/react-accordion` is installed.

### Issue: API scan timeout

**Solution:** Increase timeout in `app/api/seo-scan/route.ts`:

```typescript
const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s
```

### Issue: Leads not saving

**Solution:** Check Prisma schema and database connection. Verify `/api/lead` endpoint is working.

## Future Enhancements

1. **PageSpeed Insights API Integration**
   - Real Lighthouse scores
   - Actual Core Web Vitals

2. **Advanced Backlink Analysis**
   - Integration with Ahrefs/Majestic API
   - Toxic link detection

3. **Automated PDF Generation**
   - Puppeteer/wkhtmltopdf
   - Branded report templates

4. **Full Crawl Capability**
   - BFS crawler for 50-100 pages
   - Queue system (BullMQ)

5. **Competitor Analysis**
   - Side-by-side comparison
   - Keyword gap analysis

## Support

For questions or issues:
- 📞 Call: +91 99637 30111
- 💬 WhatsApp: https://wa.me/919963730111
- 📧 Email: support@yourwebsite.com

## License

Proprietary - All rights reserved

## Version

**v1.0.0** - Initial release
- Complete landing page with all sections
- Instant audit widget
- SEO scan API
- Lead integration
- JSON-LD schema
- Full mobile responsiveness
