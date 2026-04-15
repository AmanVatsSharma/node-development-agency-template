import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function NoidaWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Noida"
      citySlug="noida"
      region="Uttar Pradesh"
      tagline="Custom web development for Noida's IT services, BPO, and edtech corridor. Next.js, React, and enterprise-grade engineering — delivered fully remote."
      neighborhoods={[
        'Sector 62',
        'Sector 18',
        'Sector 125',
        'Noida Expressway',
        'Sector 16',
        'Greater Noida',
      ]}
      localMarketContent={[
        "Noida is one of India's largest IT services and BPO hubs, with Sector 62 and Sector 16 hosting some of the biggest names in the industry, and Noida Expressway housing a rapidly growing cluster of product and SaaS startups. Greater Noida adds a large manufacturing base — auto parts, electronics, consumer goods — which brings its own web development needs. We work across all three segments.",
        "For Noida IT services and BPO clients, we usually build corporate sites, client portals, and case-study content hubs. These projects tend to be content-heavy with strict brand governance, multi-language support (often English + Hindi + sometimes Spanish or Japanese for international clients), and integration with CRMs like Zoho or Salesforce. Delivery is typically 6-10 weeks with a CMS (Sanity or Contentful) so the marketing team can update content independently.",
        "For Noida startups and product companies, our engagements look different: marketing sites with product dashboards, Stripe/Razorpay billing, and customer-facing features delivered in 8-12 weeks. For Greater Noida manufacturing clients, we build B2B catalog sites with inquiry flows, dealer portals, and Tally integration for invoicing. All of it is built with the same engineering discipline: TypeScript, PostgreSQL, tests, and CI/CD pipelines.",
      ]}
      localIndustries={[
        {
          name: 'IT Services & BPO (Sector 62, Sector 16)',
          description:
            'Corporate sites, case-study content hubs, client portals, and multi-language CMS-backed websites.',
        },
        {
          name: 'Edtech & Test Prep',
          description:
            'Course catalogs, video streaming, Razorpay subscriptions, student dashboards, and mock test platforms.',
        },
        {
          name: 'SaaS & Product Startups (Noida Expressway)',
          description:
            'Marketing sites + customer dashboards, Stripe/Razorpay billing, and CI/CD-driven deployment pipelines.',
        },
        {
          name: 'Manufacturing (Greater Noida)',
          description:
            'B2B catalog sites, dealer portals, inquiry-to-quote flows, and integration with Tally / SAP for invoicing.',
        },
        {
          name: 'Real Estate & Proptech',
          description:
            'Property listing sites with map integration, advanced search, and WhatsApp-based inquiry routing.',
        },
        {
          name: 'Media & Entertainment',
          description:
            'Content-heavy publisher sites with CMS, ad ops, newsletter integration, and fast Core Web Vitals.',
        },
      ]}
      localFaqs={[
        {
          q: 'Do you work with large IT services companies in Noida?',
          a: "Yes. We have experience with large corporate procurement processes, NDAs, MSAs, security questionnaires, and vendor-onboarding forms. For large engagements, we can dedicate a 3-5 person team with a named project manager and monthly status reports.",
        },
        {
          q: 'Can you build a multi-language site (English + Hindi + Japanese etc.) for a Noida BPO?',
          a: "Yes. We use Next.js i18n routing for multi-language sites. Each language is a separate indexable URL with its own meta tags and hreflang annotations. We can integrate translation management tools like Lokalise or Crowdin if your team uses them.",
        },
        {
          q: 'What about integration with Zoho CRM, Salesforce, or HubSpot?',
          a: "We integrate with all three regularly. Typical integration: website forms push leads into the CRM with proper source tracking, UTMs, and conversion event firing to Google Ads / Meta Ads. For advanced use cases, we can also sync back user data from the CRM to the website (e.g., for personalization).",
        },
        {
          q: 'Do you build test-prep and mock-test platforms for Noida edtech clients?',
          a: "Yes. We've built question banks, timed test flows, answer submission, result analytics, and student dashboards. Infrastructure: PostgreSQL with proper indexing, Redis for caching, queue-based grading for large tests, and real-time updates via WebSockets.",
        },
        {
          q: 'How do you handle GST for clients in Uttar Pradesh?',
          a: "Since we're Haryana-registered, Uttar Pradesh clients get an IGST invoice (inter-state supply). This is fully creditable under GST input tax credit rules, so there's no additional cost to your business.",
        },
      ]}
    />
  );
}
