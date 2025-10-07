# Component Documentation

## Table of Contents
1. [HeroSection](#herosection)
2. [StatsSection](#statssection)
3. [WhyChooseSection](#whychoosesection)
4. [FeaturesSection](#featuressection)
5. [PricingSection](#pricingsection)
6. [ProcessSection](#processsection)
7. [TechStackSection](#techstacksection)
8. [WhyUsSection](#whyussection)
9. [ResultsSection](#resultssection)
10. [FinalCTASection](#finalctasection)
11. [ContactFormSection](#contactformsection)

---

## HeroSection

### Purpose
The hero section is the first thing visitors see. It must capture attention, communicate value, and drive action within 3-5 seconds.

### Features
- Animated gradient background with floating orbs
- Eye-catching headline with gradient text
- Two primary CTAs for different user intents
- Floating store mockup illustration
- Smooth text reveal animations
- Mobile-optimized layout

### Props
None (stateless component)

### Internal Functions
```typescript
handleConsultation(): void
// Scrolls to contact form or opens modal
// Console logs: "[HeroSection] Free Consultation button clicked"

handleViewStores(): void
// Scrolls to results/portfolio section
// Console logs: "[HeroSection] View Recent Stores button clicked"
```

### Animation Timeline
1. Badge fades in (0.3s delay)
2. Headline animates up (0.2s stagger)
3. Subheading appears (0.2s stagger)
4. CTA buttons slide in (0.2s stagger)
5. Store mockup floats in (continuous)

### Styling
- Background: Gradient from #1C4E80 to #000814
- Text: White with #00B894 accent
- Buttons: Gradient green (primary), White/transparent (secondary)
- Border radius: 2xl (16px)

### Mobile Considerations
- Stack CTAs vertically on mobile
- Reduce heading font size
- Simplify background animations
- Touch-friendly button sizes (min 48px)

### Console Logs
```javascript
[HeroSection] Component loaded
[HeroSection] Rendering hero section
[HeroSection] Free Consultation button clicked
[HeroSection] View Recent Stores button clicked
```

---

## StatsSection

### Purpose
Build trust and credibility through impressive metrics and statistics.

### Features
- 4 animated stat cards
- Counter animation on scroll
- Icon-based visual hierarchy
- Hover effects
- Responsive grid layout

### Props
None (stateless component)

### Data Structure
```typescript
interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}
```

### Custom Hook
```typescript
useCounter(end: number, duration: number, shouldStart: boolean): number
// Animates number from 0 to end value
// Uses requestAnimationFrame for smooth animation
// Only starts when shouldStart is true (on scroll into view)
```

### Animation Timeline
1. Container fades in on scroll
2. Cards stagger in (0.1s delay each)
3. Counter animation starts (2s duration)
4. Hover effects always active

### Styling
- Background: White with subtle gray gradient
- Cards: White with shadow, border on hover
- Icons: Gradient backgrounds matching stat theme
- Grid: 1 col mobile, 2 col tablet, 4 col desktop

### Console Logs
```javascript
[StatsSection] Component loaded
[StatsSection] Rendering stats section
[StatsSection] Starting counter animation to {value}
```

---

## WhyChooseSection

### Purpose
Clearly articulate the problems with template stores and how custom solutions solve them.

### Features
- Side-by-side comparison table
- Problem (red X) vs Solution (green check)
- Mobile-friendly card layout
- Animated row reveals
- Desktop table / Mobile cards

### Props
None (stateless component)

### Data Structure
```typescript
interface Comparison {
  id: number;
  problem: string;
  solution: string;
}
```

### Layout Variations

**Desktop (md+)**
- 2-column table layout
- Header row with icons
- Hover effect on rows
- Visual dividers

**Mobile (<md)**
- Stacked cards per comparison
- Problem section with red accent
- Solution section with green accent
- Full-width cards

### Animation Timeline
1. Section header fades in
2. Badge scales in
3. Table/cards fade in with upward motion
4. Rows stagger in (0.1s delay each)

### Styling
- Background: White with gray gradient
- Problem icon: Red circle with X
- Solution icon: Green circle with check
- Cards: White with subtle shadows

### Console Logs
```javascript
[WhyChooseSection] Component loaded
[WhyChooseSection] Rendering why choose section
```

---

## FeaturesSection

### Purpose
Showcase the 5 core services in detail with visual hierarchy and clarity.

### Features
- 5 large feature cards
- Numbered design pattern (01-05)
- Icon + color coded
- Detailed feature lists
- Horizontal layout (icon left, content right)

### Props
None (stateless component)

### Data Structure
```typescript
interface Feature {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  color: string;
  gradient: string;
}
```

### Animation Timeline
1. Section header fades in
2. Feature cards stagger in (0.15s delay each)
3. Highlight items stagger in (0.1s delay each)
4. Hover effects always active

### Styling
- Background: Gray-white gradient
- Cards: White with shadow, gradient overlay on hover
- Numbers: Large, light gray background
- Icons: Gradient backgrounds, rotate on hover

### Card Layout
```
┌─────────────────────────────────────┐
│  [01]    [Icon]                    │
│                                     │
│  Title                              │
│  Subtitle                           │
│  Description                        │
│                                     │
│  • Highlight 1                      │
│  • Highlight 2                      │
│  • Highlight 3                      │
└─────────────────────────────────────┘
```

### Console Logs
```javascript
[FeaturesSection] Component loaded
[FeaturesSection] Rendering features section
```

---

## PricingSection

### Purpose
Present clear, transparent pricing with 3 tiers and additional add-ons.

### Features
- 3-tier pricing grid
- "Most Popular" badge on Growth tier
- Detailed feature lists
- CTA buttons per tier
- Add-ons section below
- Scale effect on popular tier

### Props
None (stateless component)

### Data Structure
```typescript
interface PricingTier {
  id: number;
  name: string;
  tagline: string;
  price: string;
  period: string;
  timeline: string;
  icon: React.ReactNode;
  features: string[];
  isPopular?: boolean;
  color: string;
  gradient: string;
}

interface AddOn {
  id: number;
  name: string;
  icon: React.ReactNode;
}
```

### Functions
```typescript
handleSelectPlan(planName: string): void
// Logs plan selection
// Scrolls to contact form
// Can be extended to open modal or direct to checkout
```

### Animation Timeline
1. Section header fades in
2. Pricing cards stagger in (0.15s delay each)
3. Popular badge drops down
4. Add-ons section fades in
5. Add-on items stagger in

### Styling
- Background: Gray-white gradient
- Cards: White with shadow
- Popular card: Larger scale, accent border
- Buttons: Gradient for popular, gray for others
- Add-ons: 2-column grid

### Pricing Card Layout
```
┌──────────────────────┐
│  🔥 Most Popular     │  (if applicable)
├──────────────────────┤
│  [Icon]              │
│  Plan Name           │
│  Tagline             │
│  ₹XX,XXX             │
│  Timeline: XX days   │
│  [Get Started] ───→  │
│  ✓ Feature 1         │
│  ✓ Feature 2         │
│  ✓ Feature 3         │
└──────────────────────┘
```

### Console Logs
```javascript
[PricingSection] Component loaded
[PricingSection] Rendering pricing section
[PricingSection] Plan selected: {planName}
```

---

## ProcessSection

### Purpose
Visualize the 6-step process from discovery to post-launch support.

### Features
- 6-step timeline
- Connected line animation
- Icon-based steps
- Desktop: horizontal/staggered
- Mobile: vertical timeline
- Animated connecting line

### Props
None (stateless component)

### Data Structure
```typescript
interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
```

### Layout Variations

**Desktop (lg+)**
- 3-column grid
- Alternating heights (zigzag pattern)
- Horizontal connecting line
- Dots on the line

**Mobile (<lg)**
- Vertical timeline
- Left-side dots and line
- Right-side content cards
- Top-to-bottom flow

### Animation Timeline
1. Section header fades in
2. Connecting line draws (1.5s)
3. Dots appear on line
4. Process cards stagger in (0.15s delay each)
5. Arrow indicators animate

### Styling
- Background: White with gray gradient
- Cards: White with shadow
- Timeline: Gradient line
- Dots: Gradient circles
- Numbers: Large, light gray

### Console Logs
```javascript
[ProcessSection] Component loaded
[ProcessSection] Rendering process section
```

---

## TechStackSection

### Purpose
Showcase the modern, industry-leading technologies used in development.

### Features
- Grid of 12+ technologies
- Animated tech cards
- Icon-based representation
- Category labels
- Hover effects

### Props
None (stateless component)

### Data Structure
```typescript
interface Tech {
  id: number;
  name: string;
  category: string;
  color: string;
}
```

### Animation Timeline
1. Section header fades in
2. Grid container fades in
3. Tech cards stagger in (0.05s delay each)
4. Hover scale and lift effects

### Styling
- Background: Gray gradient
- Cards: White with shadow
- Icons: Gradient backgrounds with first letter
- Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop

### Tech Card Layout
```
┌──────────────┐
│   [S]        │  (First letter as icon)
│   Shopify    │
│   Platform   │
└──────────────┘
```

### Console Logs
```javascript
[TechStackSection] Component loaded
[TechStackSection] Rendering tech stack section
```

---

## WhyUsSection

### Purpose
Highlight unique value propositions and differentiation from competitors.

### Features
- 5 key benefits with icons
- Large quote/tagline
- Additional stats row
- Animated rotating background orbs

### Props
None (stateless component)

### Data Structure
```typescript
interface Benefit {
  id: number;
  text: string;
  icon: React.ReactNode;
}
```

### Animation Timeline
1. Section header fades in
2. Benefit items stagger in (0.1s delay each)
3. Quote section fades in
4. Stats row appears
5. Background orbs rotate continuously

### Styling
- Background: White with subtle accent tint
- Card: Gradient white-gray
- Icons: Gradient backgrounds
- Quote: Gradient background card with arrow
- Stats: White cards with gradient text

### Layout
```
Benefits (2-column grid)
─────────────────────────
Quote Card (centered)
─────────────────────────
Stats (3-column grid)
```

### Console Logs
```javascript
[WhyUsSection] Component loaded
[WhyUsSection] Rendering why us section
```

---

## ResultsSection

### Purpose
Provide social proof through real case studies and client testimonials.

### Features
- 3 case study cards with metrics
- 3 client testimonials
- 5-star ratings
- Animated metric displays
- Quote icons

### Props
None (stateless component)

### Data Structures
```typescript
interface CaseStudy {
  id: number;
  industry: string;
  metric: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}
```

### Animation Timeline
1. Section header fades in
2. Case study cards stagger in (0.15s delay each)
3. Testimonials section fades in
4. Testimonial cards stagger in (0.1s delay each)

### Styling
- Background: Gray-white gradient
- Case cards: White with shadow, gradient overlay
- Metric value: Large, gradient text
- Testimonials: White-gray gradient
- Stars: Yellow rating stars

### Case Study Card Layout
```
┌──────────────────┐
│  [Icon]          │
│  INDUSTRY        │
│  +42%            │
│  Metric Label    │
│  Description     │
└──────────────────┘
```

### Testimonial Card Layout
```
┌──────────────────┐
│  ★★★★★    "      │
│  "Quote text..." │
│  [A] Name        │
│      Role, Co.   │
└──────────────────┘
```

### Console Logs
```javascript
[ResultsSection] Component loaded
[ResultsSection] Rendering results section
```

---

## FinalCTASection

### Purpose
Final high-impact conversion point with multiple contact options.

### Features
- Large gradient background
- Animated rotating orbs
- Two CTAs: Schedule Demo + WhatsApp
- Trust indicators
- Urgency badge
- SEO keywords footer

### Props
None (stateless component)

### Functions
```typescript
handleWhatsApp(): void
// Opens WhatsApp with pre-filled message
// Uses window.open with wa.me link
// Console logs click event

handleScheduleCall(): void
// Opens calendar link (Calendly, etc.)
// Or scrolls to contact form
// Console logs click event
```

### Animation Timeline
1. Container fades in with upward motion
2. Badge appears
3. Heading and description fade in
4. CTA buttons appear
5. Trust indicators fade in
6. Background orbs rotate continuously

### Styling
- Background: Dark gradient (#1C4E80 to #000814)
- Card: Dark with gradient orbs
- Text: White and cyan gradient
- Primary CTA: Green gradient
- Secondary CTA: White

### WhatsApp Integration
```typescript
const phoneNumber = '919876543210';
const message = encodeURIComponent('Hi! I\'m interested...');
window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
```

### Console Logs
```javascript
[FinalCTASection] Component loaded
[FinalCTASection] Rendering final CTA section
[FinalCTASection] WhatsApp button clicked
[FinalCTASection] Schedule Call button clicked
```

---

## ContactFormSection

### Purpose
Primary lead generation form with validation and success handling.

### Features
- 4 fields: Name, Email, Phone, Message
- Real-time validation
- Error messages
- Success state animation
- Icon-based inputs
- Loading state during submission

### Props
None (stateful component)

### State Management
```typescript
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const [formData, setFormData] = useState<FormData>({...});
const [errors, setErrors] = useState<FormErrors>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
```

### Functions
```typescript
validateForm(): boolean
// Validates all fields
// Returns true if valid
// Sets error messages
// Console logs validation status

handleSubmit(e: React.FormEvent): Promise<void>
// Prevents default
// Validates form
// Submits to API
// Shows success/error
// Console logs submission

handleChange(e: ChangeEvent): void
// Updates form data
// Clears field error
// Real-time feedback
```

### Validation Rules
- **Name**: Required, non-empty
- **Email**: Required, valid email format
- **Phone**: Required, 10 digits
- **Message**: Required, non-empty

### Animation Timeline
1. Section header fades in
2. Form fades in with upward motion
3. On success: form morphs to success card
4. Success icon scales in
5. After 5s: success message fades out

### Styling
- Background: White
- Form: Gray-white gradient
- Inputs: White with border
- Focus: Green border
- Error: Red border and text
- Success: Green gradient card

### Form Layout
```
┌──────────────────────────┐
│  Your Name *             │
│  [👤] [Input field]      │
├──────────────────────────┤
│  Email Address *         │
│  [📧] [Input field]      │
├──────────────────────────┤
│  Phone Number *          │
│  [📞] [Input field]      │
├──────────────────────────┤
│  Tell Us About Project * │
│  [💬] [Textarea]         │
├──────────────────────────┤
│  [Send Message →]        │
└──────────────────────────┘
```

### API Integration
```typescript
// TODO: Replace with actual endpoint
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Console Logs
```javascript
[ContactFormSection] Component loaded
[ContactFormSection] Rendering contact form section
[ContactFormSection] Form submitted
[ContactFormSection] Validation failed
[ContactFormSection] Form submission successful
[ContactFormSection] Form submission error
```

---

## Common Patterns

### Animation Pattern
All sections follow this pattern:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.6 }}
>
```

### Console Logging
All components include:
```typescript
console.log('[ComponentName] Component loaded');
console.log('[ComponentName] Rendering...');
console.log('[ComponentName] Action performed');
```

### Error Handling
All interactive components include try-catch blocks and user-friendly error messages.

### Accessibility
All components follow WCAG AA standards:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Color contrast 4.5:1+
- Focus indicators

---

## Maintenance Guide

### Updating Content
1. Locate component file
2. Find data array (stats, features, etc.)
3. Update object properties
4. Test in browser

### Adding New Items
1. Copy existing item structure
2. Update id (sequential)
3. Update content
4. Test animations

### Modifying Animations
1. Locate motion.div
2. Adjust initial/animate values
3. Modify transition duration/delay
4. Test performance

### Debugging
1. Check console logs
2. Verify isInView triggers
3. Test on different viewports
4. Use React DevTools

---

## Performance Tips

1. **Keep animations smooth** - Use transform and opacity only
2. **Avoid layout thrashing** - Batch DOM reads/writes
3. **Lazy load images** - Use next/image
4. **Debounce scroll events** - If adding custom listeners
5. **Monitor bundle size** - Keep components lightweight

---

## Questions?

Refer to:
- README.md for overview
- ARCHITECTURE.md for technical details
- FLOWCHART.md for user journey
- Console logs for debugging
