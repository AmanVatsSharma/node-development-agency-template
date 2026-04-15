import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function BangaloreWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Bangalore"
      citySlug="bangalore"
      region="Karnataka"
      tagline="Next.js, React, and Node.js web development for Bangalore's startup and SaaS ecosystem. Production-grade engineering, TypeScript-first, CI/CD built in."
      neighborhoods={[
        'Koramangala',
        'Indiranagar',
        'HSR Layout',
        'Whitefield',
        'Electronic City',
        'Jayanagar',
      ]}
      localMarketContent={[
        "Bangalore is India's undisputed startup capital, and the web development work we do for Bangalore clients reflects that. Instead of static marketing sites, most briefs start with \"we're a SaaS company\" or \"we're building a marketplace.\" Founders here care about product velocity, TypeScript discipline, test coverage, and CI/CD from day one — which happens to be exactly how we build.",
        'The Bangalore tech ecosystem has also pushed engineering quality expectations up. A HSR Layout YC-backed startup will evaluate us on code samples and Lighthouse scores. A Koramangala D2C brand will ask about Core Web Vitals and schema markup. A Whitefield enterprise will want SSO, multi-region hosting, and SOC 2-friendly architecture. We ship to all three audiences from the same codebase discipline: Next.js 15 App Router, TypeScript strict, PostgreSQL, and deploy-on-merge pipelines.',
        "Our typical Bangalore engagement is 6-12 weeks for a full marketing site plus a customer-facing product dashboard. We've worked with SaaS companies, fintech startups, edtech platforms, and D2C brands headquartered in Bangalore. For post-launch support, we offer retainer-based engagement where a dedicated senior developer works with your team 20-40 hours a week on features, refactors, and performance.",
      ]}
      localIndustries={[
        {
          name: 'SaaS & B2B Software',
          description:
            'Full marketing site + product dashboard, with Stripe billing, multi-tenant auth, and role-based access control.',
        },
        {
          name: 'Fintech & Neobanking',
          description:
            'KYC flows, Aadhaar/PAN verification integrations, RBI-compliant UX, and audit logging baked in.',
        },
        {
          name: 'Edtech & Online Learning',
          description:
            'Course catalogs, video streaming via Mux/Cloudflare Stream, quizzes, certificates, and Razorpay subscriptions.',
        },
        {
          name: 'D2C Brands (HSR, Indiranagar)',
          description:
            'Headless Shopify storefronts, conversion-optimized PDPs, and Google Ads landing pages.',
        },
        {
          name: 'Enterprise SaaS (Whitefield)',
          description:
            'Enterprise-grade product sites with SSO, SOC 2-aware architecture, and multi-region deployments.',
        },
        {
          name: 'HealthTech Startups',
          description:
            'Telemedicine flows, appointment booking, lab report uploads, and secure patient portals.',
        },
      ]}
      localFaqs={[
        {
          q: "We're a Bangalore SaaS startup — do you build product dashboards or just marketing sites?",
          a: 'Both. Our most common engagement is a marketing site plus a product dashboard in one 8-10 week project. The marketing site is Next.js for SEO; the dashboard is Next.js + PostgreSQL + TypeScript on the backend. We handle auth, billing (Stripe/Razorpay), and role-based permissions.',
        },
        {
          q: 'What testing and CI/CD do you set up by default?',
          a: 'Every project ships with Vitest (unit) + Playwright (E2E) tests, GitHub Actions CI that runs on every PR, automated deployment to staging on merge to main, and manual promotion to production. Pre-commit hooks run ESLint, Prettier, and TypeScript.',
        },
        {
          q: 'Can you integrate with YC-stack tools (Segment, PostHog, Retool, etc.)?',
          a: "Yes — we integrate PostHog and Segment routinely for product analytics, Retool for internal tools, Sentry for error tracking, LaunchDarkly for feature flags. If it's in the YC stack, we've probably wired it up before.",
        },
        {
          q: 'Can we do engineering reviews or pair with your developers?',
          a: 'Yes. Many Bangalore clients have in-house engineers who want to review our code before it ships. We do weekly design/code reviews, publish public PRs, and welcome your engineers to comment or pair on complex work.',
        },
        {
          q: 'What timezones do you work in?',
          a: "We're primarily IST (9 AM-7 PM), but core senior developers are flexible for early-morning calls with US clients of our Bangalore partners. Async work + daily standups keeps Bangalore-based teams in the loop without needing meetings.",
        },
      ]}
    />
  );
}
