import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function BangaloreWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Bangalore"
      citySlug="bangalore"
      region="Karnataka"
      tagline="Custom websites, e-commerce, SaaS platforms, and web apps for Bangalore startups and enterprises — built with Next.js, React, Node.js, and modern cloud infrastructure."
      neighborhoods={['Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout', 'Electronic City', 'MG Road']}
      testimonial={{
        quote:
          'We shipped our MVP in 8 weeks and scaled to 500 paying users in 4 months. Vedpragya understands the Indian startup ecosystem and delivered exactly what Bangalore founders need.',
        author: 'Arjun Krishnamurthy',
        role: 'CTO, Bangalore-based fintech startup',
      }}
    />
  );
}
