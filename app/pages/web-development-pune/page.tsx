import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function PuneWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Pune"
      citySlug="pune"
      region="Maharashtra"
      tagline="Custom web development for Pune's IT, manufacturing, and education ecosystem. SaaS platforms, e-commerce stores, and enterprise-grade web apps."
      neighborhoods={[
        'Kothrud',
        'Baner',
        'Hinjewadi',
        'Viman Nagar',
        'Koregaon Park',
        'Aundh',
      ]}
      localMarketContent={[
        "Pune's economy is unusually well-balanced. You have the Hinjewadi and Baner IT corridors hosting global engineering centers and fast-moving SaaS companies, the Chakan-Pimpri belt with India's largest auto and manufacturing cluster, and one of India's densest concentrations of universities and colleges making Pune a serious edtech hub. We build websites for all three.",
        "Our SaaS clients in Hinjewadi and Baner typically want a marketing site plus a product dashboard delivered in 8-10 weeks with TypeScript, tests, and CI/CD. Our manufacturing and industrial clients want B2B catalog sites with inquiry flows, dealer portals, and integration with SAP or Tally. Our edtech clients want course catalog sites with Razorpay subscriptions, video streaming, and student dashboards. Different industries, same engineering discipline.",
        'One thing we see consistently from Pune clients is a preference for long-term retainer engagements over one-off projects. Pune companies tend to value continuity and quality over cost — which suits us well, since our best work happens when we stay with a client for 6-12+ months. Typical Pune retainer: a dedicated senior developer at 30-40 hours/week, ₹1.5-3 lakhs/month, with weekly planning and demo sessions.',
      ]}
      localIndustries={[
        {
          name: 'SaaS & B2B Software (Hinjewadi, Baner)',
          description:
            'Marketing sites + customer dashboards, Stripe/Razorpay billing, multi-tenant architecture, and Sentry monitoring.',
        },
        {
          name: 'Manufacturing & Industrial (Chakan, Pimpri)',
          description:
            'B2B catalog sites, dealer portals, SAP/Tally integrations, and GST-compliant inquiry-to-quote flows.',
        },
        {
          name: 'Edtech & Online Learning',
          description:
            'Course catalogs, Mux/Cloudflare Stream video, Razorpay subscriptions, and student dashboards.',
        },
        {
          name: 'Auto & Dealer Networks',
          description:
            'Multi-location dealer sites, inventory sync, test-drive booking, and lead-routing to nearest showroom.',
        },
        {
          name: 'Pharma & Medical Devices',
          description:
            'Compliance-aware marketing sites, product catalogs, and international regulatory documentation portals.',
        },
        {
          name: 'D2C & E-commerce',
          description:
            'Shopify and headless Next.js storefronts, conversion-tuned PDPs, and Razorpay/Cashfree checkout.',
        },
      ]}
      localFaqs={[
        {
          q: 'Do you offer long-term retainer engagements for Pune clients?',
          a: "Yes — retainers are our most common engagement model with Pune clients. A typical retainer is a dedicated senior developer at 30-40 hours/week for ₹1.5-3 lakhs/month. Includes weekly planning, demos, and quarterly architecture reviews.",
        },
        {
          q: 'Can you integrate with SAP, Tally, or Zoho for manufacturing clients?',
          a: "Yes. We've built website integrations with SAP (for inventory sync), Tally Prime (for invoices and GST), and Zoho Books/CRM (for lead capture). For Pune manufacturing clients, these integrations are usually the difference between a static site and a tool the sales team actually uses.",
        },
        {
          q: 'What is your experience with Pune-based edtech projects?',
          a: "We've built full course platforms with video streaming (Mux), subscription billing (Razorpay), progress tracking, certificates, and student dashboards. If you already have Moodle or a course builder, we can integrate with those too.",
        },
        {
          q: 'How do you handle projects across multiple languages (Marathi, Hindi, English)?',
          a: "We use Next.js i18n routing so Marathi, Hindi, and English versions of the site are separate, SEO-indexable URLs. Translation is usually handled by the client's local team, with a CMS-backed workflow to keep translations in sync.",
        },
        {
          q: 'Are you available for on-site kickoff or review meetings in Pune?',
          a: "We're based in Haryana and most delivery is remote. For large engagements (>₹10 lakhs), we can fly out for kickoff or major milestone reviews at the client's cost.",
        },
      ]}
    />
  );
}
