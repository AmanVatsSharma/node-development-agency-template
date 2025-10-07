# EnterpriseHero CRM - Design Specifications

**Complete design system and visual guidelines**

## 🎨 Color Palette

### Primary Colors
```css
/* Bharat Blue - Trust & Technology */
--bharat-blue-dark: #002F9E;
--bharat-blue: #0041E2;
--bharat-blue-light: #0056FF;

/* Gold Accent - Premium & Innovation */
--gold: #FFD700;
--gold-light: #FFE44D;
--gold-dark: #FFA500;

/* Emerald - Growth & Prosperity */
--emerald: #00C897;
--emerald-light: #00E5B0;
--emerald-dark: #00A37F;
```

### Neutral Colors
```css
/* Light Mode */
--white: #FFFFFF;
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-900: #111827;

/* Dark Mode */
--dark-bg: #030712;
--dark-surface: #1F2937;
--dark-border: #374151;
```

### Semantic Colors
```css
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--info: #3B82F6;
```

---

## 🎭 Gradients

### Hero Gradients
```css
/* Main Hero Background */
background: linear-gradient(
  120deg,
  #002F9E 0%,
  #0041E2 40%,
  #00C897 100%
);

/* Text Gradient */
background: linear-gradient(
  to right,
  #002F9E,
  #FFD700,
  #00C897
);
background-clip: text;
-webkit-text-fill-color: transparent;

/* Button Gradient */
background: linear-gradient(
  to right,
  #002F9E,
  #FFD700,
  #002F9E
);

/* Card Gradient */
background: linear-gradient(
  to bottom right,
  #FFFFFF,
  #F9FAFB
);
```

### Section Backgrounds
```css
/* Alternating Sections */
.section-light {
  background: linear-gradient(
    to bottom,
    #FFFFFF 0%,
    #F9FAFB 50%,
    #FFFFFF 100%
  );
}

.section-dark {
  background: linear-gradient(
    to bottom,
    #111827 0%,
    #000000 50%,
    #111827 100%
  );
}
```

---

## 📝 Typography

### Font Stack
```css
--font-sans: Inter, system-ui, -apple-system, sans-serif;
--font-heading: Poppins, Inter, sans-serif;
```

### Type Scale (Mobile → Desktop)
```css
/* Hero Headline */
font-size: 32px → 96px;
line-height: 1.1;
font-weight: 900; /* Black */
letter-spacing: -0.02em;

/* Section Headline */
font-size: 28px → 56px;
line-height: 1.2;
font-weight: 900;
letter-spacing: -0.01em;

/* Card Title */
font-size: 20px → 32px;
line-height: 1.3;
font-weight: 900;

/* Body Large */
font-size: 18px → 24px;
line-height: 1.5;
font-weight: 500;

/* Body Regular */
font-size: 16px → 20px;
line-height: 1.6;
font-weight: 400;

/* Caption */
font-size: 12px → 14px;
line-height: 1.4;
font-weight: 600;
```

### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

---

## 📐 Spacing System

### Base Unit: 4px

```css
/* Spacing Scale */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Section Padding
```css
/* Mobile */
padding: 80px 16px;

/* Tablet */
padding: 96px 24px;

/* Desktop */
padding: 128px 32px;
```

### Container Max-Width
```css
.container {
  max-width: 1280px; /* 7xl */
  margin: 0 auto;
  padding: 0 16px;
}
```

---

## 🎯 Component Patterns

### Button Styles

#### Primary Button
```css
padding: 28px 32px;
border-radius: 16px;
font-size: 18px;
font-weight: 900;
background: linear-gradient(to right, #002F9E, #FFD700, #002F9E);
color: #FFFFFF;
box-shadow: 0 20px 40px -12px rgba(0, 47, 158, 0.4);
transition: all 0.3s ease;

/* Hover */
transform: scale(1.02);
box-shadow: 0 25px 60px -15px rgba(255, 215, 0, 0.6);
```

#### Secondary Button
```css
padding: 24px 32px;
border-radius: 16px;
border: 2px solid #FFD700;
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(12px);
font-size: 16px;
font-weight: 700;

/* Hover */
background: rgba(255, 215, 0, 0.1);
```

### Card Styles

#### Standard Card
```css
padding: 32px 48px;
border-radius: 24px;
background: linear-gradient(to bottom right, #FFFFFF, #F9FAFB);
border: 2px solid #E5E7EB;
box-shadow: 0 10px 40px -12px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease;

/* Hover */
border-color: #FFD700;
box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.2);
transform: translateY(-4px);
```

#### Glass Card
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

#### Feature Card with Icon
```css
.icon-container {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: linear-gradient(to bottom right, #002F9E, #00C897);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 47, 158, 0.3);
}

.icon {
  width: 40px;
  height: 40px;
  color: #FFFFFF;
}
```

---

## 🎭 Animation Patterns

### Scroll Animations
```typescript
// Fade In Up
{
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

// Fade In Scale
{
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

// Stagger Children
{
  variants: {
    show: {
      transition: { staggerChildren: 0.12 }
    }
  }
}
```

### Hover Effects
```css
/* Button Hover */
transform: scale(1.02);
box-shadow: 0 25px 60px -15px rgba(255, 215, 0, 0.6);

/* Card Hover */
transform: translateY(-8px);
box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.15);

/* Icon Hover */
transform: scale(1.1) rotate(3deg);
```

### Loading States
```typescript
// Pulse Animation
{
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5]
  },
  transition: {
    duration: 2,
    repeat: Infinity
  }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px;   /* Small tablets */
md: 768px;   /* Tablets */
lg: 1024px;  /* Small desktops */
xl: 1280px;  /* Desktops */
2xl: 1536px; /* Large desktops */
```

### Mobile-First Grid
```css
/* 1 column on mobile */
grid-template-columns: 1fr;

/* 2 columns on tablets */
@media (min-width: 640px) {
  grid-template-columns: repeat(2, 1fr);
}

/* 3 columns on desktop */
@media (min-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}

/* 4 columns on large desktop */
@media (min-width: 1280px) {
  grid-template-columns: repeat(4, 1fr);
}
```

---

## 🖼️ Image Guidelines

### Hero Dashboard Mockup
- Dimensions: 1200×800px
- Format: PNG with transparency
- File size: < 200KB
- Shadow: Yes, prominent
- Border: 4px white/gold

### Feature Screenshots
- Dimensions: 800×600px
- Format: PNG or WebP
- File size: < 150KB each
- Border radius: 16px
- Shadow: Soft, 24px blur

### Testimonial Photos
- Dimensions: 80×80px
- Format: JPG
- File size: < 20KB
- Shape: Circle
- Quality: 85%

### Company Logos
- Dimensions: 200×80px
- Format: SVG preferred, PNG fallback
- File size: < 30KB
- Grayscale: Yes
- Opacity: 50-70%

### OG Image
- Dimensions: 1200×630px
- Format: PNG
- File size: < 100KB
- Text: Large, readable
- Brand colors: Yes

---

## 🎨 Design Tokens (CSS Variables)

```css
:root {
  /* Colors */
  --color-primary: #002F9E;
  --color-accent: #FFD700;
  --color-success: #00C897;
  
  /* Spacing */
  --spacing-section: 128px;
  --spacing-card: 32px;
  --spacing-element: 16px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.15);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
  
  /* Z-index */
  --z-base: 1;
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal: 40;
  --z-toast: 50;
}
```

---

## 🎯 Iconography

### Icon Size Scale
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
--icon-2xl: 64px;
```

### Icon Usage
- **Navigation**: 24px
- **Buttons**: 20px
- **Section Headers**: 32px
- **Feature Cards**: 48px
- **Hero Icons**: 64px

### Icon Style
- Library: Lucide React
- Stroke width: 2px
- Style: Outlined
- Color: Inherit from parent

---

## 📊 Grid System

### Column Layout
```css
/* 12-column grid */
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Common layouts */
.span-full { grid-column: 1 / -1; }
.span-6 { grid-column: span 6; }
.span-4 { grid-column: span 4; }
.span-3 { grid-column: span 3; }
```

### Gap Scale
```css
--gap-sm: 16px;
--gap-md: 24px;
--gap-lg: 32px;
--gap-xl: 48px;
```

---

## 🎨 Special Effects

### Glow Effects
```css
/* Gold Glow */
.glow-gold {
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
  filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.3));
}

/* Blue Glow */
.glow-blue {
  box-shadow: 0 0 40px rgba(0, 47, 158, 0.5);
}

/* Ambient Glow (Background) */
.ambient-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.15),
    transparent
  );
  filter: blur(80px);
}
```

### Tricolor Wave
```css
/* Saffron */
.wave-saffron {
  background: linear-gradient(to right, #FF9933, #FFB366, #FF9933);
  opacity: 0.2;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}

/* White */
.wave-white {
  background: linear-gradient(to right, #FFFFFF, #F0F0F0, #FFFFFF);
}

/* Green */
.wave-green {
  background: linear-gradient(to right, #138808, #16A00D, #138808);
  opacity: 0.2;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
}
```

---

## ♿ Accessibility

### Color Contrast
```
Minimum Ratios (WCAG AA):
- Normal text: 4.5:1
- Large text (18px+): 3:1
- Interactive elements: 3:1

Our Compliance:
✅ Primary on white: 12.8:1
✅ Gold on blue: 4.7:1
✅ White on primary: 12.8:1
```

### Focus States
```css
:focus-visible {
  outline: 3px solid #FFD700;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Touch Targets
```
Minimum size: 44×44px (WCAG 2.1)
Recommended: 48×48px
Our implementation: 56×56px minimum
```

---

## 📏 Component Sizes

### Buttons
```css
/* Small */
padding: 12px 24px;
font-size: 14px;

/* Medium (default) */
padding: 16px 32px;
font-size: 16px;

/* Large */
padding: 24px 48px;
font-size: 18px;

/* Extra Large (Hero CTA) */
padding: 28px 56px;
font-size: 20px;
```

### Form Inputs
```css
/* Standard Input */
padding: 16px 20px;
border-radius: 12px;
font-size: 16px;
min-height: 56px;

/* Textarea */
padding: 16px 20px;
border-radius: 12px;
font-size: 16px;
min-height: 120px;
resize: vertical;
```

### Cards
```css
/* Small Card */
padding: 24px;
border-radius: 16px;

/* Medium Card (default) */
padding: 32px;
border-radius: 24px;

/* Large Card */
padding: 48px 64px;
border-radius: 32px;
```

---

## 🎯 Layout Patterns

### Section Layout
```
┌─────────────────────────────────┐
│        SECTION PADDING          │
│  ┌───────────────────────────┐  │
│  │     CONTAINER (7xl)       │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   SECTION BADGE     │  │  │
│  │  │      (centered)     │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │      HEADLINE       │  │  │
│  │  │      (h2, bold)     │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │    DESCRIPTION      │  │  │
│  │  │    (p, centered)    │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   CONTENT GRID      │  │  │
│  │  │  (cards/features)   │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
│        SECTION PADDING          │
└─────────────────────────────────┘
```

---

## 🎨 Print Styles (Optional)

```css
@media print {
  /* Hide interactive elements */
  button,
  .mobile-floating-cta,
  .scroll-to-top {
    display: none !important;
  }
  
  /* Expand sections */
  section {
    page-break-inside: avoid;
  }
  
  /* Remove backgrounds */
  * {
    background: white !important;
    color: black !important;
  }
}
```

---

## 📦 Asset Checklist

Before launch, ensure you have:

### Images
- [ ] Hero dashboard mockup (1200×800px)
- [ ] 4 carousel screenshots (800×600px each)
- [ ] 3 testimonial photos (80×80px each)
- [ ] 5 company logos (200×80px each)
- [ ] OG image (1200×630px)
- [ ] Favicon (32×32px, 16×16px)

### Icons
- [ ] All Lucide icons imported
- [ ] Custom icons in SVG format
- [ ] Icon sprite sheet (optional)

### Fonts
- [ ] Inter (300, 400, 500, 600, 700, 900)
- [ ] Poppins (300, 400, 500, 600, 700)
- [ ] Font files optimized (WOFF2)

---

**Version**: 1.0.0  
**Last Updated**: 2025-10-07  
**Design System**: EnterpriseHero CRM  
**Maintained by**: Vedpragya Bharat Private Limited
