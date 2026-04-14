import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function DelhiWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Delhi NCR"
      citySlug="delhi"
      region="Delhi NCR"
      tagline="Custom websites, e-commerce stores, and web applications for Delhi NCR businesses — built with Next.js, React, and Node.js. Fast delivery, transparent pricing, enterprise-grade quality."
      neighborhoods={['Connaught Place', 'Nehru Place', 'Saket', 'Rohini', 'Dwarka', 'Karol Bagh']}
      testimonial={{
        quote:
          'Vedpragya delivered our SaaS platform in 9 weeks. Performance, polish, and support have been outstanding. A true tech partner for any Delhi startup.',
        author: 'Rohan Mehta',
        role: 'Founder, Delhi-based B2B SaaS',
      }}
    />
  );
}
