# Architecture Documentation

## 🏗️ System Architecture

### Overview
This landing page is built using a modern, component-based architecture with Next.js 15 App Router, focusing on performance, SEO, and conversion optimization.

```
┌─────────────────────────────────────────────────────────┐
│                     Next.js 15 App                      │
│                      (App Router)                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │     app/pages/shopify-store-setup/page.tsx      │  │
│  │              (Main Page Component)                │  │
│  └──────────────────────────────────────────────────┘  │
│                         │                               │
│                         │ imports                       │
│                         ▼                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │        app/components/shopify/                   │  │
│  │  ┌────────────────────────────────────────────┐  │  │
│  │  │  11 Section Components                     │  │  │
│  │  │  • HeroSection                            │  │  │
│  │  │  • StatsSection                           │  │  │
│  │  │  • WhyChooseSection                       │  │  │
│  │  │  • FeaturesSection                        │  │  │
│  │  │  • PricingSection                         │  │  │
│  │  │  • ProcessSection                         │  │  │
│  │  │  • TechStackSection                       │  │  │
│  │  │  • WhyUsSection                           │  │  │
│  │  │  • ResultsSection                         │  │  │
│  │  │  • FinalCTASection                        │  │  │
│  │  │  • ContactFormSection                     │  │  │
│  │  └────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
│                         │                               │
│                         │ uses                          │
│                         ▼                               │
│  ┌──────────────────────────────────────────────────┐  │
│  │       app/components/ui/ (Shadcn UI)            │  │
│  │  • Button                                        │  │
│  │  • Card                                          │  │
│  │  • Input                                         │  │
│  │  • (Other UI primitives)                        │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                  External Libraries                     │
│  • Framer Motion (Animations)                          │
│  • Lucide React (Icons)                                │
│  • Tailwind CSS (Styling)                              │
│  • Next.js Image (Optimization)                        │
└─────────────────────────────────────────────────────────┘
```

## 📦 Component Architecture

### Component Types

#### 1. **Container Components**
- `page.tsx` - Main page container
- Responsible for layout and composition
- No business logic
- SEO metadata

#### 2. **Section Components**
- Each major section (Hero, Stats, etc.)
- Self-contained and reusable
- Own animations and state
- Console logging for debugging

#### 3. **UI Components**
- From Shadcn UI library
- Reusable primitives (Button, Input, etc.)
- Consistent styling
- Accessibility built-in

### Component Hierarchy

```
Page
├── HeroSection
├── StatsSection
│   └── StatCard (repeated 4x)
├── WhyChooseSection
│   └── ComparisonRow (repeated 5x)
├── FeaturesSection
│   └── FeatureCard (repeated 5x)
├── PricingSection
│   ├── PricingCard (repeated 3x)
│   └── AddOnItem (repeated 4x)
├── ProcessSection
│   └── ProcessCard (repeated 6x)
├── TechStackSection
│   └── TechCard (repeated 12x)
├── WhyUsSection
│   └── BenefitItem (repeated 5x)
├── ResultsSection
│   ├── CaseStudyCard (repeated 3x)
│   └── TestimonialCard (repeated 3x)
├── FinalCTASection
└── ContactFormSection
```

## 🎨 Design System Architecture

### Color System
```javascript
// tailwind.config.js (conceptual)
{
  colors: {
    primary: '#1C4E80',    // Trust & Professionalism
    accent: '#00B894',     // Growth & Success
    success: '#10B981',    // Positive actions
    warning: '#F59E0B',    // Attention
    error: '#EF4444',      // Errors
    gray: {
      50: '#F9FAFB',       // Light backgrounds
      100: '#F3F4F6',      // Subtle backgrounds
      600: '#4B5563',      // Secondary text
      900: '#111827',      // Primary text
    }
  }
}
```

### Typography Scale
```
Hero: 4xl-7xl (36px-72px)
Section Headings: 3xl-5xl (30px-48px)
Card Titles: xl-2xl (20px-24px)
Body: base-lg (16px-18px)
Small: sm (14px)
```

### Spacing System
```
Section Padding: py-20 sm:py-32
Container: max-w-6xl mx-auto
Card Padding: p-8 sm:p-10
Gap: gap-6 lg:gap-8
```

### Border Radius
```
Small: rounded-xl (12px)
Medium: rounded-2xl (16px)
Large: rounded-3xl (24px)
```

## 🎭 Animation Architecture

### Animation Strategy

#### 1. **Scroll-Triggered Animations**
- Use Framer Motion's `useInView` hook
- Trigger once (not on every scroll)
- 100px margin before viewport

```typescript
const ref = useRef(null);
const isInView = useInView(ref, { 
  once: true,        // Only animate once
  margin: '-100px'   // Start before entering viewport
});
```

#### 2. **Stagger Children**
- Parent container controls timing
- Children animate in sequence
- Creates professional flow

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // 100ms between children
      delayChildren: 0.2,    // Wait 200ms before starting
    },
  },
};
```

#### 3. **Hover Interactions**
- Scale, lift, color changes
- Fast response (< 300ms)
- Smooth easing

```typescript
whileHover={{ scale: 1.05, y: -5 }}
transition={{ type: 'spring', stiffness: 300 }}
```

### Animation Performance

#### Optimizations
1. **GPU-Accelerated Properties**
   - Use `transform` (translateX, translateY, scale)
   - Use `opacity`
   - Avoid: width, height, margin, padding

2. **Will-Change Hint**
   - Automatically handled by Framer Motion
   - Tells browser to optimize

3. **Reduced Motion**
   - Respects user preferences
   - Disables animations if requested

```typescript
// Framer Motion automatically respects:
// @media (prefers-reduced-motion: reduce)
```

## 📱 Responsive Architecture

### Breakpoint Strategy

```javascript
// Tailwind breakpoints
{
  sm: '640px',   // Mobile landscape, small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Laptop
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Large desktop
}
```

### Mobile-First Approach

1. **Start with mobile styles** (no prefix)
2. **Add tablet styles** (md: prefix)
3. **Add desktop styles** (lg: prefix)

```jsx
<div className="
  text-2xl           // Mobile: 24px
  md:text-4xl        // Tablet: 36px
  lg:text-6xl        // Desktop: 60px
">
```

### Layout Patterns

#### Mobile (< 768px)
- Single column
- Stacked sections
- Vertical timelines
- Touch-friendly buttons (48px+)

#### Tablet (768px - 1023px)
- 2-column grids
- Hybrid layouts
- Larger text

#### Desktop (1024px+)
- Multi-column grids
- Horizontal layouts
- Maximum content width: 1280px

## 🔄 Data Flow

### Static Data Pattern

```
Data Arrays (in component)
    ↓
Map to Components
    ↓
Render with Props
    ↓
Animate on Scroll
```

Example:
```typescript
// Data
const features: Feature[] = [ /* ... */ ];

// Map
features.map((feature, index) => (
  <FeatureCard 
    key={feature.id}
    feature={feature}
    index={index}
    isInView={isInView}
  />
))
```

### Form Data Flow

```
User Input
    ↓
onChange Handler
    ↓
Update State
    ↓
Clear Errors
    ↓
onSubmit Handler
    ↓
Validate
    ↓
API Call
    ↓
Success/Error State
```

## 🎯 SEO Architecture

### On-Page SEO

#### 1. **Metadata**
```typescript
export const metadata: Metadata = {
  title: 'Page Title | Brand',
  description: 'Meta description...',
  keywords: ['keyword1', 'keyword2'],
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
};
```

#### 2. **Semantic HTML**
```html
<main>
  <section> (Hero)
  <section> (Stats)
  <section> (Features)
  <!-- etc -->
</main>
```

#### 3. **Heading Hierarchy**
```
H1: Main page title (Hero)
H2: Section headings
H3: Card titles
```

#### 4. **Alt Text**
- All images have descriptive alt text
- Decorative images: alt=""

### Technical SEO

#### 1. **Core Web Vitals**
- LCP < 2.5s (Largest Contentful Paint)
- FID < 100ms (First Input Delay)
- CLS < 0.1 (Cumulative Layout Shift)

#### 2. **Performance Optimizations**
- Next.js Image component
- Lazy loading
- Code splitting
- Minification

#### 3. **Mobile-Friendly**
- Responsive design
- Touch-friendly targets
- Fast loading on 3G

## 🔒 Error Handling Architecture

### Console Logging Strategy

Every component includes:
```typescript
console.log('[ComponentName] Component loaded');
console.log('[ComponentName] Rendering...');
console.log('[ComponentName] Action performed');
```

### Form Validation

1. **Client-Side Validation**
   - Real-time feedback
   - Field-level errors
   - Submit-time validation

2. **Error Display**
   - Red border on invalid fields
   - Error message below field
   - Clear, actionable text

3. **Success Handling**
   - Success animation
   - Clear confirmation
   - Auto-dismiss

### Error Boundaries (Future)

```typescript
// Can add error boundaries for graceful degradation
<ErrorBoundary fallback={<ErrorMessage />}>
  <Section />
</ErrorBoundary>
```

## 🚀 Performance Architecture

### Loading Strategy

#### 1. **Above the Fold**
- Load immediately
- Hero section critical
- No lazy loading

#### 2. **Below the Fold**
- Can lazy load
- Load on scroll
- Use React.lazy() if needed

#### 3. **Images**
```typescript
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"  // Below fold
  priority        // Above fold
/>
```

### Bundle Optimization

#### Code Splitting
- Automatic with Next.js
- Each route is separate bundle
- Shared components in common bundle

#### Tree Shaking
- Remove unused code
- Import only what's needed
- Example: `import { Button } from '@/components/ui/button';`

### Caching Strategy

#### Static Generation
- Page is pre-rendered at build time
- Served as static HTML
- Extremely fast

#### Revalidation
```typescript
export const revalidate = 3600; // Revalidate every hour
```

## 🧪 Testing Architecture

### Testing Layers

#### 1. **Component Testing**
- Unit tests for components
- Jest + React Testing Library
- Test rendering, props, events

#### 2. **Integration Testing**
- Test component interactions
- Form submission flows
- Navigation between sections

#### 3. **E2E Testing**
- Cypress or Playwright
- Full user journeys
- Critical conversion paths

#### 4. **Visual Testing**
- Screenshot testing
- Cross-browser
- Mobile vs desktop

### Test Coverage Goals
- Components: 80%+
- Critical paths: 100%
- Forms: 100%

## 🔧 Configuration Architecture

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=919963730111
NEXT_PUBLIC_CONTACT_API=/api/contact
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Next.js Config

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'],
  },
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
};
```

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { /* custom colors */ },
      animation: { /* custom animations */ },
    },
  },
};
```

## 📊 Analytics Architecture

### Event Tracking

#### 1. **Page Views**
- Automatic with Google Analytics
- Track route changes

#### 2. **CTA Clicks**
```typescript
const handleCTAClick = (label: string) => {
  // Google Analytics
  gtag('event', 'cta_click', {
    event_category: 'engagement',
    event_label: label,
  });
  
  // Facebook Pixel
  fbq('track', 'Lead');
};
```

#### 3. **Form Submissions**
```typescript
const handleFormSubmit = () => {
  gtag('event', 'form_submit', {
    event_category: 'conversion',
    event_label: 'Contact Form',
  });
};
```

#### 4. **Scroll Depth**
- Track 25%, 50%, 75%, 100%
- Measure engagement

### Conversion Tracking

```typescript
// Lead (form submission)
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXX/XXXXX',
  value: 1.0,
  currency: 'INR',
});

// Purchase (if applicable)
gtag('event', 'purchase', {
  transaction_id: 'T_12345',
  value: 35000,
  currency: 'INR',
});
```

## 🔐 Security Architecture

### Input Sanitization

```typescript
// Sanitize user input before submission
const sanitize = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, ''); // Remove < and >
};
```

### CSRF Protection
- Use Next.js API routes
- Add CSRF tokens if needed

### Rate Limiting
- Prevent spam submissions
- Cloudflare or API middleware

## 🚢 Deployment Architecture

### Build Process

```bash
1. Install dependencies
   npm install

2. Generate Prisma client (if using)
   npx prisma generate

3. Build application
   npm run build

4. Start production server
   npm start
```

### Hosting Options

#### Vercel (Recommended)
- Automatic deployments
- Edge network
- Preview deployments
- Analytics included

#### AWS / Azure / GCP
- More control
- Custom domains
- CDN configuration

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Install dependencies
      - Run tests
      - Build application
      - Deploy to hosting
```

## 📈 Monitoring Architecture

### Performance Monitoring

1. **Lighthouse CI**
   - Run on every deploy
   - Performance budget
   - Alert on regressions

2. **Real User Monitoring (RUM)**
   - Track actual user metrics
   - Core Web Vitals
   - Error rates

3. **Synthetic Monitoring**
   - Automated tests
   - Uptime checks
   - Performance checks

### Error Tracking

1. **Sentry (Recommended)**
   - Automatic error capture
   - Source maps
   - User context

2. **Console Logs**
   - Extensive logging included
   - Debug in development
   - Remove in production (optional)

## 🔄 Maintenance Architecture

### Update Strategy

#### 1. **Content Updates**
- Edit data arrays in components
- No code changes needed
- Test in browser

#### 2. **Dependency Updates**
```bash
npm outdated           # Check outdated
npm update            # Update minor versions
npm install pkg@latest # Update major versions
```

#### 3. **Component Updates**
- Modify component file
- Test animations
- Test responsiveness
- Verify console logs

### Version Control

```
main branch          - Production
staging branch       - Testing
feature/xyz branch   - Development
```

## 📚 Documentation Architecture

### Documentation Files

1. **README.md** - Overview, features, quick start
2. **COMPONENTS.md** - Detailed component docs
3. **ARCHITECTURE.md** - This file
4. **FLOWCHART.md** - User journey
5. **SETUP_GUIDE.md** - Installation guide (if needed)

### Code Comments

#### File Header
```typescript
/**
 * ComponentName
 * 
 * Description of what this component does
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 * 
 * @component
 */
```

#### Function Comments
```typescript
/**
 * Function description
 * @param param1 - Description
 * @returns Description
 */
```

#### Inline Comments
```typescript
// Clear, concise explanation
// Why, not what
```

## 🎓 Best Practices

### Component Design

1. **Single Responsibility** - One component, one job
2. **Composition over Inheritance** - Build from smaller parts
3. **Props for Customization** - Make reusable
4. **Keep It Simple** - Avoid over-engineering

### Performance

1. **Lazy Load** - Below-fold content
2. **Optimize Images** - Use next/image
3. **Minimize JS** - Keep bundles small
4. **Cache Aggressively** - Use Next.js caching

### Accessibility

1. **Semantic HTML** - Use correct tags
2. **ARIA Labels** - When needed
3. **Keyboard Nav** - Tab through elements
4. **Color Contrast** - 4.5:1 minimum

### SEO

1. **Unique Titles** - Per page
2. **Meta Descriptions** - Under 160 characters
3. **Structured Data** - Schema.org
4. **Fast Loading** - Core Web Vitals

## 🔮 Future Enhancements

### Potential Additions

1. **A/B Testing Framework**
   - Test different CTAs
   - Test different layouts
   - Measure conversions

2. **Personalization**
   - Show different content based on source
   - Remember returning visitors
   - Customize CTAs

3. **Chatbot Integration**
   - Live chat widget
   - AI-powered responses
   - Lead qualification

4. **Advanced Analytics**
   - Heatmaps (Hotjar)
   - Session recordings
   - Funnel analysis

5. **Multi-Language Support**
   - i18n implementation
   - RTL support
   - Currency conversion

## 📞 Support

For architecture questions:
1. Review this document
2. Check component docs
3. Inspect console logs
4. Review code comments

---

*This architecture is designed for scalability, maintainability, and performance. Follow these patterns when extending or modifying the codebase.*
