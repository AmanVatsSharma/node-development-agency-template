import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function HyderabadWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Hyderabad"
      citySlug="hyderabad"
      region="Telangana"
      tagline="Custom web development for Hyderabad's pharma, healthtech, and SaaS industries. Next.js, TypeScript, and enterprise-grade engineering."
      neighborhoods={[
        'HITEC City',
        'Gachibowli',
        'Banjara Hills',
        'Jubilee Hills',
        'Madhapur',
        'Kondapur',
      ]}
      localMarketContent={[
        "Hyderabad has become one of India's most important technology and pharma hubs, and the web development work we do here reflects that mix. In HITEC City and Gachibowli we work with SaaS startups, product companies, and the engineering centers of global firms. Across Jubilee Hills and Banjara Hills we work with healthcare groups, diagnostic chains, and private hospitals. And in the Genome Valley belt we work with pharma and life sciences companies on product catalogs and regulatory documentation portals.",
        "Healthcare and pharma are particularly strong in Hyderabad, and those projects come with their own requirements: patient data handling, appointment booking flows, doctor profile SEO, lab report delivery, secure patient portals, and — for pharma — international regulatory documentation (USFDA, WHO-GMP). We build all of these with security-first architecture: encrypted data at rest, audit logging, role-based access control, and secure session management.",
        "For Hyderabad SaaS and product companies, our default stack is Next.js 15 + TypeScript + PostgreSQL with CI/CD on GitHub Actions. Typical engagement: a marketing site + product dashboard delivered in 8-12 weeks, followed by an optional retainer for ongoing features. For healthcare clients, we often add HIPAA-style data handling patterns, audit logs, and integrations with lab information systems or hospital ERPs.",
      ]}
      localIndustries={[
        {
          name: 'Healthcare & Hospitals (Jubilee Hills, Banjara Hills)',
          description:
            'Appointment booking, patient portals, doctor profiles, lab reports delivery, and HIPAA-style data handling.',
        },
        {
          name: 'Pharma & Life Sciences (Genome Valley)',
          description:
            'Product catalogs, regulatory documentation portals, USFDA/WHO-GMP compliance pages, and B2B inquiry flows.',
        },
        {
          name: 'SaaS & Product Companies (HITEC City)',
          description:
            'Marketing sites + customer dashboards, Stripe billing, multi-tenant auth, and engineering-grade monitoring.',
        },
        {
          name: 'Diagnostic Chains & Labs',
          description:
            'Appointment booking, home-sample collection scheduling, report uploads, and WhatsApp delivery flows.',
        },
        {
          name: 'Biotech Startups',
          description:
            'Research portfolio sites, investor decks, regulatory documentation, and public-facing product pages.',
        },
        {
          name: 'Enterprise IT & Services',
          description:
            'Corporate sites, client portals, vendor onboarding, and enterprise procurement-ready engagement models.',
        },
      ]}
      localFaqs={[
        {
          q: 'Can you build a HIPAA-style secure patient portal for a Hyderabad hospital?',
          a: "Yes. While HIPAA is a US regulation, we apply the same security patterns to Indian healthcare projects: encryption at rest and in transit, audit logging, role-based access, secure session management, and strict least-privilege data access. We can also align with India's DPDP Act 2023 requirements.",
        },
        {
          q: 'Do you have experience with pharma regulatory documentation portals?',
          a: "Yes. We've built pharma websites with separate sections for USFDA-facing documentation, WHO-GMP compliance, and country-specific regulatory pages. These usually involve access-controlled areas for verified distributors and public-facing product catalogs.",
        },
        {
          q: 'Can you integrate with LIS (Lab Information Systems) or Hospital ERPs?',
          a: "Yes. We've integrated websites with lab information systems for automated report delivery, and with hospital ERPs for appointment sync. Most of these integrations use REST APIs, though we can also work with HL7 FHIR for advanced use cases.",
        },
        {
          q: 'How do you handle large volumes of patient appointment bookings?',
          a: 'We use PostgreSQL with proper indexing, Redis-based caching, and queue-based processing (BullMQ) for high-throughput booking flows. For very large hospitals, we can also deploy with multi-region setups to ensure sub-100ms response times across Hyderabad.',
        },
        {
          q: 'Can you do SEO for Hyderabad-specific medical keywords?',
          a: "Yes. We do full on-page SEO optimization, including local schema markup (MedicalClinic, Physician, MedicalProcedure), location-specific landing pages (e.g., 'IVF clinic in Jubilee Hills'), and content SEO aimed at ranking in Google Maps and local search results.",
        },
      ]}
    />
  );
}
