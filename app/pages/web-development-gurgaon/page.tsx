import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function GurgaonWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Gurgaon"
      citySlug="gurgaon"
      region="Haryana"
      tagline="Your local Haryana-registered web development partner. Custom websites, SaaS platforms, and enterprise web apps for Gurgaon's corporate and startup ecosystem."
      neighborhoods={[
        'Cyber Hub',
        'DLF Cyber City',
        'Sohna Road',
        'Golf Course Road',
        'Sector 44',
        'Udyog Vihar',
      ]}
      localMarketContent={[
        "Gurgaon is our home state's economic engine — Vedpragya Bharat Private Limited is registered in Haryana, which makes Gurgaon one of the few cities where we can legitimately claim to be a local agency. The Gurgaon economy is dominated by corporate India: Fortune 500 back offices in Cyber City, fast-growing SaaS startups in Udyog Vihar, and a massive D2C/e-commerce belt along Sohna Road and Golf Course Road.",
        "Most of our Gurgaon clients fall into two buckets. The first is corporate and enterprise — they need marketing sites, internal tools, or internal-audience portals built with proper governance, audit logging, and SSO. The second is D2C and startups — they need product-market-fit velocity, fast Google Ads landing pages, and Shopify or custom storefronts that convert. Both get the same engineering discipline: Next.js, TypeScript, PostgreSQL, and CI/CD pipelines that catch bugs before they ship.",
        "For Gurgaon projects, we often handle the full stack: custom design from Figma, development, staging, production deployment, and post-launch retainer. Because we're legally based in Haryana, our invoices are Haryana-intra-state GST (CGST+SGST), which simplifies GST input credit for other Haryana-registered businesses. We can also do in-person meetings at Cyber Hub or DLF Cyber City if the engagement requires it — though most of our Gurgaon work ships fully remote.",
      ]}
      localIndustries={[
        {
          name: 'Corporate Marketing Sites (Cyber City, DLF)',
          description:
            'Enterprise-grade corporate sites with CMS (Sanity, Contentful), multi-language support, and strict brand governance.',
        },
        {
          name: 'D2C & E-commerce (Sohna Road, Golf Course Rd)',
          description:
            'Shopify + headless Next.js storefronts, GST-compliant checkout, Razorpay integration, and performance-tuned PDPs.',
        },
        {
          name: 'SaaS Startups (Udyog Vihar)',
          description:
            'Marketing site + product dashboards, Stripe/Razorpay billing, multi-tenant auth, and Sentry-backed monitoring.',
        },
        {
          name: 'Real Estate & Proptech',
          description:
            'Property listing sites with advanced search, map integration, and inquiry-to-WhatsApp funnel flows.',
        },
        {
          name: 'Insurance & Finance',
          description:
            'Quote-to-lead funnels, calculators, KYC flows, and compliance-ready form handling for Gurgaon-based insurance and fintech.',
        },
        {
          name: 'Ad-tech & Marketing',
          description:
            'High-throughput landing pages for Google Ads / Meta Ads, conversion tracking, and A/B test infrastructure.',
        },
      ]}
      localFaqs={[
        {
          q: 'Are you actually based in Gurgaon? Can we meet in person?',
          a: "Vedpragya Bharat Private Limited is registered in Haryana, so for legal and tax purposes we're a local Haryana entity. We can meet in person at Cyber Hub, DLF Cyber City, or anywhere else in Gurgaon for kickoff meetings or major milestones, though most of our delivery happens remotely.",
        },
        {
          q: 'Do you raise GST-compliant invoices with Haryana CGST+SGST?',
          a: "Yes. We're GST-registered in Haryana. For clients based in Haryana (including Gurgaon, Faridabad, Panchkula), we raise CGST+SGST invoices, which maximizes your GST input credit. For out-of-state clients, we raise IGST invoices as per the GST rules.",
        },
        {
          q: 'Can you help us with Google Ads + landing pages as a single project?',
          a: 'Yes. Our Google Ads management team works closely with our web dev team. We can build the landing page, set up the Google Ads account, configure conversion tracking, and run the campaign — all as a single integrated engagement.',
        },
        {
          q: 'How do you handle large corporate clients with strict compliance needs?',
          a: 'We sign MSAs, NDAs, and DPAs. We have experience with enterprise procurement, vendor-onboarding forms, security questionnaires, and audit logs. For very large engagements (>₹25 lakhs), we can dedicate a 3-5 person team with a named project manager.',
        },
        {
          q: 'What about post-launch maintenance and support?',
          a: 'We offer retainer-based support starting at ₹30,000/month for minor updates and bug fixes, up to ₹2,00,000+/month for a dedicated senior developer. SLAs, escalation paths, and monthly reports are included.',
        },
      ]}
    />
  );
}
