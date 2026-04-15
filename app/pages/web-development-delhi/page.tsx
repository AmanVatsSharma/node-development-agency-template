import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function DelhiWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Delhi NCR"
      citySlug="delhi"
      region="Delhi NCR"
      tagline="Custom websites, e-commerce stores, and web applications for Delhi NCR businesses — built with Next.js, React, and Node.js. Fast delivery, transparent pricing, enterprise-grade quality."
      neighborhoods={[
        'Connaught Place',
        'Nehru Place',
        'Saket',
        'Rohini',
        'Dwarka',
        'Karol Bagh',
      ]}
      localMarketContent={[
        "Delhi NCR is one of India's most commercially active regions, combining Central Delhi's trading hubs, Gurgaon's corporate corridor, Noida's IT parks, and Faridabad's manufacturing belt into a single metropolitan economy. Businesses here range from decades-old wholesale traders in Chandni Chowk to D2C startups in South Delhi and enterprise SaaS companies headquartered in Gurgaon. Each needs a very different kind of website — and we've built for most of them.",
        "What we see consistently from Delhi-based clients is a strong need for websites that handle both B2B and B2C use cases. A Nehru Place IT reseller needs an e-commerce catalog that also handles enterprise quote requests. A Saket clinic needs appointment booking plus doctor profiles plus health content SEO. A Connaught Place law firm needs a conservative, authoritative site that still ranks well on Google. Our Delhi NCR projects are usually Next.js-based for SEO, with custom admin panels and Razorpay/Cashfree checkout for Indian payment flows.",
        "We've also worked with several Delhi-based D2C and e-commerce brands on headless Shopify migrations, Google Ads landing pages, and GST-compliant invoicing. For Gurgaon-based SaaS startups, our typical engagement is a full marketing site plus a customer dashboard, delivered in 6-10 weeks. We work entirely remote — most of our Delhi NCR clients have never needed an in-person meeting, though we're happy to do video calls during working hours.",
      ]}
      localIndustries={[
        {
          name: 'D2C & E-commerce (South Delhi, Gurgaon)',
          description:
            'Headless Shopify, Next.js storefronts, Razorpay/Cashfree checkout, GST invoices, Google Shopping feeds.',
        },
        {
          name: 'B2B SaaS (Gurgaon, Noida)',
          description:
            'Marketing site + product dashboard combos, with Stripe or Razorpay billing and enterprise SSO.',
        },
        {
          name: 'Professional Services (CP, Saket)',
          description:
            'Law, CA, and consulting firm websites with lead capture, content SEO, and WhatsApp enquiry flows.',
        },
        {
          name: 'Healthcare Clinics (South Delhi, Dwarka)',
          description:
            'Appointment booking, doctor profiles, health content SEO, and HIPAA-style data handling for Indian clinics.',
        },
        {
          name: 'IT & Electronics Trade (Nehru Place)',
          description:
            'B2B catalog sites with quote workflows, bulk-pricing logic, and dealer login portals.',
        },
        {
          name: 'Education & EdTech',
          description:
            'Admission-funnel landing pages, course catalogs, and payment-gateway integration for Delhi-based institutes.',
        },
      ]}
      localFaqs={[
        {
          q: 'Do you work with clients in Gurgaon and Noida too?',
          a: "Yes — Delhi NCR, Gurgaon, Noida, Faridabad, and Ghaziabad are all part of our Delhi NCR service area. All work is delivered remotely, so location within NCR doesn't affect our process or pricing.",
        },
        {
          q: 'Can you integrate Razorpay, Cashfree, and PayU for a Delhi e-commerce site?',
          a: 'Yes. We integrate all three Indian payment gateways regularly. Razorpay is our default recommendation for new D2C stores because of its ease of setup, but we have experience with Cashfree (better for subscriptions) and PayU (legacy enterprise) as well.',
        },
        {
          q: 'How do you handle GST invoices for Delhi-based B2B clients?',
          a: 'Every e-commerce and SaaS site we build supports GSTIN collection at checkout, auto-generates GST-compliant invoices, and can optionally sync to Tally or Zoho Books. We also handle the IGST / CGST+SGST split correctly based on customer state.',
        },
        {
          q: 'Can you build a website that targets both English and Hindi users?',
          a: 'Yes. For Delhi NCR projects we often build bilingual sites with Next.js i18n routing. Hindi URLs like /hi/price become fully indexable, with separate meta tags and hreflang annotations.',
        },
        {
          q: 'How quickly can you start a project for a Delhi client?',
          a: 'We typically kick off within 7-10 days of contract signing. For urgent projects (e.g., a launch-day landing page), we can start within 48 hours.',
        },
      ]}
    />
  );
}
