## Enterprise Hero – Brand System and Implementation Guide

This document is the single source of truth for the Enterprise Hero brand (Vedpragya Bharat Private Limited) across web, product, and marketing. New contributors should follow these guidelines to produce consistent, premium-quality work that reinforces our positioning: Global Node.js Excellence & 3D Innovation for enterprise outcomes.

### Brand Essence
- **Positioning**: Premium, engineering-first partner for enterprise-grade Node.js platforms and immersive 3D experiences.
- **Promise**: We deliver measurable business outcomes (productivity, uptime, revenue) with robust architecture, security, and global support.
- **Differentiators**:
  - Deep Node.js and modern web architecture expertise (microservices, GraphQL, Kubernetes, cloud).
  - High-impact 3D/interactive experiences that improve engagement and sales.
  - Global presence for 24/7 execution and compliance readiness.

### Core Messaging
- **Tagline**: Global Node.js Excellence & 3D Innovation.
- **Value Proposition**: End-to-end enterprise solutions that modernize legacy systems, automate workflows, and enable data-driven growth.
- **Proof Points** (use in pages/case studies):
  - 99.9% uptime targets, SLA-backed support.
  - Performance gains (50%+ productivity, 60% faster reports, 25%+ higher conversion rates where relevant).
  - Compliance-ready (GDPR, SOC 2 patterns), secure-by-design.

### Voice and Tone
- **Voice**: Confident, concise, senior-engineering led. Avoid hype; show impact.
- **Tone**: Executive-friendly, outcomes-first. Prefer specific metrics and clarity over adjectives.
- **Copy Rules**:
  - Lead with the business problem, then how we solve it, then the result.
  - Use active voice. Short sentences. Avoid jargon unless necessary and defined.
  - Always include a clear CTA aligned to the user’s lifecycle stage.

### Visual Identity
- **Logo/Wordmark**: `EnterpriseHero`. Use bold emphasis on “Enterprise”, neutral for “Hero”. Maintain legibility on dark/light.
- **Color System** (from `app/globals.css` tokens):
  - Primary: `--primary` #2563eb (dark mode #3b82f6). Usage: CTAs, highlights, links.
  - Secondary: `--secondary` #7c3aed (dark mode #8b5cf6). Usage: 3D/creative accents.
  - Accent: `--accent` #06b6d4 (dark mode #22d3ee). Usage: info badges, subtle accents.
  - Background/Foreground per scheme; ensure sufficient contrast (WCAG AA+).
- **Typography**:
  - Headings: Poppins (weights 400–700). Titles concise; two-line max for hero.
  - Body: Inter for readability.
  - Scale: H1 40–56px, H2 32–40px, H3 24–28px, body 16–18px. Line-height 1.3–1.6.
- **Layout**:
  - Grid width 1280px container. Ample white space. Prefer 24–32px vertical rhythm.
  - Components use Tailwind utility tokens; do not inline hard-coded colors outside tokens.
- **Imagery & Motion**:
  - Use abstract tech gradients for enterprise hero sections; pair with subtle 3D/geometry.
  - Motion should support comprehension (fade/slide 200–400ms). Avoid distracting loops.

### Information Architecture (IA)
- **Primary Navigation**: Home, Enterprise, Services, Industries, Case Studies, Resources, Blog, Contact.
- **Key Landing Pages**:
  - Enterprise: Executive overview, capabilities, architecture, security/compliance, delivery model, ROI, CTA + lead form.
  - Services: Node.js, 3D, API, Consulting (feature-level deep dives).
  - Industries: Tailored outcomes for Ecommerce, Finance, Manufacturing, Logistics, Healthcare.
  - Case Studies/Portfolio: Outcome-focused stories with metrics, challenge → solution → results.
  - Resources: Lead-gated whitepapers, templates, webinars for MQL generation.

### Conversion Framework
- **Primary CTAs**: “Book Enterprise Consultation”, “Talk to an Architect”, “Request Assessment”.
- **Secondary CTAs**: “Download Whitepaper”, “View Case Study”, “See Architecture Blueprint”.
- **Lead Capture**:
  - Short forms above the fold (name, email, company, interest). Enrich with URL params (utm_*) and source context.
  - Resource downloads gated (email) with immediate redirect.
  - Newsletter opt-in present in footer and resource pages.
  - Track conversion events via Google Analytics (gtag) and server logs.

### SEO & Structured Data
- **Titles**: `<Page> | Enterprise Hero` up to ~60 chars.
- **Meta Descriptions**: 140–160 chars; outcome-first.
- **Schema.org**: Organization, WebSite on root; Article for blog; FAQ where applicable.
- **Open Graph/Twitter**: Provide `og:image` per key pages. Keep branded default fallback.
- **URLs/Slugs**: Kebab-case, descriptive. Avoid dates in slugs for evergreen pages.

### Accessibility
- Color contrast AA minimum. Focus states visible. Semantic HTML landmarks. Alt text for imagery. Motion reduced for `prefers-reduced-motion`.

### Legal & Company Facts
- Company: Vedpragya Bharat Private Limited.
- CIN: U47912HR2025PTC131357. GST: 06AALCV0051A1ZV. Registered in Haryana, India.
- Global presence: India (Gurugram/Noida/Bangalore), Dubai, California, Toronto, Shenzhen.

### Component Usage (Implementation)
- **Header/Footer**: Keep consistent links and company facts. CTA button uses primary color.
- **Hero Sections**: Gradient background, strong headline, two CTAs (primary + secondary). Optional animation wrapper.
- **Cards/Grids**: Use rounded-xl, shadow-lg, hover elevation. Keep icons in 16–24px range.
- **Badges/Chips**: Rounded-full, small font, subdued backgrounds.

### Copy Templates
- **Hero**: “Transform [business outcome] with enterprise-grade [capability]. Delivering [metric] for [industry/clients].”
- **Service Block**: “We [do what] using [techniques/tools] so you can [business result].”
- **Case Study**: Challenge, Approach, Architecture, Results (with metrics), Quote, CTA.

### Analytics & Events
- Fire `gtag('event', 'lead_submit', { source: 'enterprise_page' })` on successful lead form submit.
- Fire `gtag('event', 'newsletter_subscribed')` on newsletter success.
- Fire `gtag('event', 'resource_download', { id, title, type })` on gated resource download.

### Content Governance
- All new pages should include: clear H1, executive summary, scannable subsections, at least one CTA above the fold and one mid-page.
- Case studies must include at least one quantitative KPI.
- Resources must have descriptive abstracts and intended audience.

### Quick Start for New Contributors
1) Follow typography and color tokens from `app/globals.css`.
2) Use existing components in `app/components` where possible.
3) Add lead capture blocks for new pages via `LeadCapture` component.
4) Use `Meta` or per-page `metadata` for SEO.
5) When adding resources, ensure API shape matches `/api/resources`.

