# Architecture Documentation
## Shopify Headless Migration Landing Page

---

## 📐 System Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT BROWSER                          │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              Next.js App Router                        │ │
│  │                                                         │ │
│  │  ┌─────────────────────────────────────────────────┐  │ │
│  │  │     /pages/shopify-headless-migration/          │  │ │
│  │  │              page.tsx (Main)                     │  │ │
│  │  └─────────────────────────────────────────────────┘  │ │
│  │                        │                               │ │
│  │       ┌────────────────┴────────────────┐             │ │
│  │       │                                  │             │ │
│  │  ┌────▼────┐                      ┌─────▼──────┐      │ │
│  │  │ Section │                      │   Section  │      │ │
│  │  │Components│◄───Error Boundary───┤ Components │      │ │
│  │  └─────────┘                      └────────────┘      │ │
│  │       │                                  │             │ │
│  │  ┌────▼────────────────────────────────▼────┐         │ │
│  │  │      Shared UI Components                │         │ │
│  │  │  (Button, Card, Badge, etc.)             │         │ │
│  │  └──────────────────────────────────────────┘         │ │
│  └───────────────────────────────────────────────────────┘ │
│                        │                                    │
│       ┌────────────────┴────────────────┐                  │
│       │                                  │                  │
│  ┌────▼──────┐                    ┌─────▼──────┐          │
│  │  Framer   │                    │  Analytics │          │
│  │  Motion   │                    │  (gtag)    │          │
│  └───────────┘                    └────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Component Architecture

### Component Hierarchy

```
page.tsx (Root)
│
├── SectionErrorBoundary
│   └── HeroSection
│       ├── motion.div (animations)
│       ├── Button (UI component)
│       └── Speed Meter Visualization
│
├── SectionErrorBoundary
│   └── WhyHeadlessSection
│       ├── Comparison Table (Desktop)
│       └── Comparison Cards (Mobile)
│
├── SectionErrorBoundary
│   └── WhatYouGetSection
│       └── 5× Service Module Cards
│           ├── Icon
│           ├── Title
│           └── Features List
│
├── SectionErrorBoundary
│   └── PricingSection
│       └── 3× Pricing Cards
│           ├── Badge (Popular)
│           ├── Features List
│           └── CTA Button
│
├── SectionErrorBoundary
│   └── AddOnsSection
│       └── 5× Add-on Cards
│
├── SectionErrorBoundary
│   └── ProcessSection
│       └── 6× Process Steps
│           ├── Icon
│           ├── Number Badge
│           └── Description Card
│
├── SectionErrorBoundary
│   └── TechStackSection
│       ├── 10× Technology Pills
│       └── 3× Feature Cards
│
├── SectionErrorBoundary
│   └── WhyVedpragyaSection
│       ├── 5× USP Cards
│       ├── Stats Row
│       └── Quote Card
│
├── SectionErrorBoundary
│   └── CaseStudiesSection
│       └── 3× Case Study Cards
│           ├── Gradient Header
│           ├── Metrics Grid
│           └── Description
│
├── SectionErrorBoundary
│   └── FinalCTASection
│       ├── Main CTA Buttons
│       ├── Trust Indicators
│       └── Social Proof
│
├── ScrollToTop (Floating)
│
└── MobileFloatingCTA (Floating)
```

---

## 🔧 Technical Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.2.1 | App framework (App Router) |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 11.x | Animations |
| Lucide React | 0.544.0 | Icons |

### UI Component Library

```
Shadcn UI Components Used:
├── Button      (/app/components/ui/button.tsx)
├── Card        (/app/components/ui/card.tsx)
├── Badge       (/app/components/ui/badge.tsx)
├── Accordion   (/app/components/ui/accordion.tsx)
└── Tabs        (/app/components/ui/tabs.tsx)
```

---

## 📦 Data Flow

### State Management

**No Global State Required**
- All state is local component state
- Uses React hooks: `useState`, `useEffect`, `useRef`
- Framer Motion hooks: `useInView`, `useAnimation`

### Data Flow Pattern

```
User Interaction
    │
    ├─► CTA Click
    │   ├─► Console Log
    │   ├─► Analytics Event (gtag)
    │   └─► Navigation / External Link
    │
    ├─► Scroll
    │   ├─► Update Visibility States
    │   ├─► Trigger Animations (Framer Motion)
    │   └─► Track Scroll Depth (gtag)
    │
    └─► Form Submit (Future)
        ├─► Validate Input
        ├─► API Call
        └─► Show Success/Error
```

---

## 🎨 Styling Architecture

### Tailwind CSS Configuration

**Color System:**
```javascript
// Custom colors used
'#0F172A'  // Deep Navy (primary dark)
'#00E0B8'  // Futuristic Mint (primary accent)
'#F9FAFB'  // Background (light mode)

// Gradient patterns
'from-[#00E0B8] to-cyan-400'
'from-[#0F172A] to-[#1e293b]'
```

**Responsive Design:**
```javascript
// Mobile-first breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets  
lg: 1024px  // Laptops
xl: 1280px  // Desktops

// Pattern used:
className="text-base sm:text-lg md:text-xl lg:text-2xl"
```

**Design Tokens:**
```javascript
// Spacing
py-16 md:py-24  // Section vertical padding
px-4            // Horizontal padding
gap-6 md:gap-8  // Grid gaps

// Shadows
shadow-lg hover:shadow-2xl
shadow-[0_0_40px_rgba(0,224,184,0.3)]

// Border Radius
rounded-xl   // 0.75rem (12px)
rounded-2xl  // 1rem (16px)
rounded-3xl  // 1.5rem (24px)

// Backdrop Effects
backdrop-blur-xl     // 24px blur
bg-white/10          // 10% opacity white
border-white/10      // 10% opacity border
```

---

## 🎭 Animation Architecture

### Framer Motion Patterns

**1. Fade In Up (Standard Entry)**
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};
```

**2. Stagger Container (Sequential)**
```typescript
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
```

**3. Scale & Rotate (Playful)**
```typescript
animate={{ 
  scale: [1, 1.05, 1],
  rotate: [0, 5, -5, 0]
}}
transition={{ 
  duration: 3,
  repeat: Infinity
}}
```

**4. Slide In (Directional)**
```typescript
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
```

### Intersection Observer (Scroll Triggers)

```typescript
// Pattern used across all sections
const sectionRef = useRef<HTMLDivElement>(null);
const inView = useInView(sectionRef, { 
  once: true,      // Animate only once
  amount: 0.2      // Trigger when 20% visible
});

// Conditional animation
animate={inView ? "show" : "hidden"}
```

### Performance Optimization

- **GPU Acceleration:** Transform & opacity only
- **Will-change:** Automatically handled by Framer Motion
- **Debouncing:** Scroll handlers throttled
- **Lazy Animation:** Triggered only when in view

---

## 🔐 Error Handling

### Error Boundary Strategy

**SectionErrorBoundary Component:**
```typescript
// Used in: @/app/components/common/SectionErrorBoundary.tsx

Purpose:
- Catch React component errors
- Prevent full page crash
- Log errors to console
- Show fallback UI

Wraps every major section:
<SectionErrorBoundary name="HeroSection">
  <HeroSection />
</SectionErrorBoundary>
```

### Console Logging Strategy

**Comprehensive Logging:**
```typescript
// Component Load
console.log('[Shopify-Headless] HeroSection component loaded');

// State Changes
console.log('[Shopify-Headless] In view:', inView);

// User Actions
console.log('[Shopify-Headless] Hero CTA clicked: request_demo');

// Analytics Events
console.log('[Shopify-Headless] Tracking Google Analytics page view');
```

**Log Filtering:**
- All logs prefixed with `[Shopify-Headless]`
- Easy filtering in DevTools Console
- Production logs can be stripped via build config

---

## 📊 Analytics Architecture

### Event Tracking Structure

**Page View:**
```typescript
gtag('event', 'page_view', {
  page_title: 'Shopify Headless Migration Services',
  page_location: window.location.href,
  page_path: '/pages/shopify-headless-migration',
  service_type: 'headless_migration',
  ticket_size: 'high_ticket'
});
```

**Scroll Depth:**
```typescript
gtag('event', 'scroll_depth', {
  depth_percentage: 25, // 25%, 50%, 75%, 100%
  page_path: '/pages/shopify-headless-migration'
});
```

**CTA Clicks:**
```typescript
gtag('event', 'cta_click', {
  cta_location: 'hero',              // hero, pricing, final_cta
  cta_type: 'request_demo',          // request_demo, get_quote, etc.
  page_path: '/pages/shopify-headless-migration'
});
```

**Plan Selection:**
```typescript
gtag('event', 'plan_selected', {
  plan_name: 'Pro Next.js Storefront',
  page_path: '/pages/shopify-headless-migration'
});
```

**WhatsApp Clicks:**
```typescript
gtag('event', 'whatsapp_click', {
  location: 'final_cta',             // final_cta, mobile_floating_cta
  page_path: '/pages/shopify-headless-migration'
});
```

### Conversion Funnel

```
Page Load (page_view)
    │
    ├─► 25% Scroll (scroll_depth: 25)
    │   └─► Reached: Why Headless Section
    │
    ├─► 50% Scroll (scroll_depth: 50)
    │   └─► Reached: Pricing Section
    │   
    ├─► CTA Click (cta_click)
    │   └─► Type: request_demo, get_quote
    │
    ├─► Plan Selection (plan_selected)
    │   └─► Plan: Starter / Pro / Enterprise
    │
    ├─► WhatsApp Click (whatsapp_click)
    │   └─► Location: final_cta, mobile_floating_cta
    │
    └─► Form Submit (Future)
        └─► Type: consultation_request
```

---

## 🚀 Performance Architecture

### Code Splitting Strategy

**Automatic Splitting:**
```
Next.js automatically splits:
├── Page-level: Each route
├── Component-level: Dynamic imports
└── Third-party: Vendor bundles
```

**Manual Splitting (Future):**
```typescript
// Heavy components can be lazy-loaded
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false // Client-only if needed
});
```

### Loading Strategy

**Above Fold:**
- Hero Section: Inline, priority
- Critical CSS: Inline
- First paint: < 1s

**Below Fold:**
- Lazy load via Intersection Observer
- Animate on scroll into view
- Images: Lazy load with Next.js Image

### Bundle Optimization

**Tree Shaking:**
```typescript
// Named imports (tree-shakeable)
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

// Avoid (pulls entire library)
// import * as Icons from 'lucide-react';
```

**Dependency Analysis:**
```bash
# Run bundle analyzer
npm run analyze

# Check bundle composition
# Ensure Framer Motion is < 50KB gzipped
# Ensure no duplicate dependencies
```

---

## 🔗 Integration Points

### External Services

**1. WhatsApp Integration**
```typescript
// Direct link (no API required)
const phoneNumber = '919963730111';
const message = encodeURIComponent('Message text');
const url = `https://wa.me/${phoneNumber}?text=${message}`;
window.open(url, '_blank');
```

**2. Google Analytics**
```typescript
// Assuming gtag is loaded in layout
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'event_name', params);
}
```

**3. Future Integrations (Not Implemented)**
- Email API (Mailchimp, SendGrid)
- CRM (HubSpot, Salesforce)
- Calendar (Calendly, Google Calendar)
- Payment (Stripe, Razorpay)

---

## 📱 Responsive Architecture

### Breakpoint Strategy

**Mobile First:**
```typescript
// Base styles (mobile)
className="text-base py-4"

// Progressive enhancement
className="text-base md:text-lg lg:text-xl py-4 md:py-6"
```

**Layout Shifts:**
```
Mobile (< 768px):
├── Single column
├── Stacked sections
├── Full-width cards
├── Floating CTAs visible
└── Hamburger menu

Desktop (≥ 768px):
├── Multi-column grids
├── Side-by-side layouts
├── Hover effects enabled
├── Floating CTAs hidden
└── Full navigation
```

**Touch Targets:**
```typescript
// Minimum 44×44px for mobile
className="w-12 h-12"  // Icon buttons
className="py-3 px-6"  // Text buttons
```

---

## 🧪 Testing Architecture

### Unit Testing (Future)

```typescript
// Jest + React Testing Library
import { render, screen } from '@testing-library/react';
import { HeroSection } from './hero-section';

test('renders hero headline', () => {
  render(<HeroSection />);
  expect(screen.getByText(/Go Headless/i)).toBeInTheDocument();
});
```

### Integration Testing (Future)

```typescript
// Test user flows
test('CTA click navigates to contact', () => {
  render(<HeroSection />);
  const button = screen.getByText(/Request a Demo/i);
  fireEvent.click(button);
  expect(window.location.hash).toBe('#contact');
});
```

### E2E Testing (Future)

```typescript
// Playwright or Cypress
test('complete user journey', async ({ page }) => {
  await page.goto('/pages/shopify-headless-migration');
  await page.click('[data-testid="hero-cta"]');
  await page.waitForSelector('#contact');
  await page.fill('[data-testid="name-input"]', 'John Doe');
  await page.click('[data-testid="submit-button"]');
  await expect(page.locator('.success-message')).toBeVisible();
});
```

---

## 🔒 Security Considerations

### XSS Prevention

- React automatically escapes JSX
- No `dangerouslySetInnerHTML` used
- User input sanitized (when forms added)

### HTTPS Only

- All external links use HTTPS
- WhatsApp link uses `https://wa.me`
- Analytics scripts loaded via HTTPS

### Privacy

- No PII stored in local storage
- Analytics: Only aggregate data
- GDPR: Cookie consent (to be added)

---

## 🚢 Deployment Architecture

### Build Process

```bash
# 1. Type checking
npm run type-check

# 2. Linting
npm run lint

# 3. Build
npm run build

# 4. Production server
npm run start
```

### Environment Variables

```bash
# Required for production
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=919963730111
NEXT_PUBLIC_PHONE_NUMBER=919963730111
```

### Hosting

**Recommended:** Vercel (optimized for Next.js)
- Automatic HTTPS
- Edge caching
- Instant rollbacks
- Preview deployments

**Alternatives:**
- Netlify
- AWS Amplify
- Cloudflare Pages

---

## 📈 Scalability Considerations

### Current Limitations

- Static content only
- No database
- No server-side processing
- Limited to client-side analytics

### Future Enhancements

1. **Add API Routes**
   ```typescript
   // /app/api/contact/route.ts
   export async function POST(req: Request) {
     const body = await req.json();
     // Send to CRM, email, etc.
   }
   ```

2. **Add Database (Prisma)**
   ```typescript
   // Store leads, track conversions
   await prisma.lead.create({
     data: { name, email, phone }
   });
   ```

3. **Add CMS Integration**
   ```typescript
   // Sanity, Strapi, or Contentful
   // Editable content without code changes
   ```

4. **Add A/B Testing**
   ```typescript
   // Google Optimize, Optimizely
   // Test headlines, CTAs, layouts
   ```

---

## 🔄 Maintenance & Updates

### Code Updates

```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Content Updates

**To update content:**
1. Edit component files directly
2. Or add CMS for non-technical editors

**Common updates:**
- Pricing plans
- Case studies
- Testimonials
- Contact information

### Performance Monitoring

**Tools to use:**
- Lighthouse (Chrome DevTools)
- WebPageTest
- Google Analytics (Core Web Vitals)
- Vercel Analytics

---

## 📚 Related Documentation

- [README.md](./README.md) - User guide & features
- [FLOWCHART.md](./FLOWCHART.md) - User journey & conversion flow
- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Document Version:** 1.0.0  
**Last Updated:** 2025-10-07  
**Maintained By:** Vedpragya Bharat Development Team
