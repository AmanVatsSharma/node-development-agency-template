import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function NoidaWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Noida"
      citySlug="noida"
      region="Uttar Pradesh"
      tagline="Custom web development for Noida businesses — a Haryana-based engineering team serving the Delhi NCR region with production-grade websites and applications."
      neighborhoods={['Sector 62', 'Sector 18', 'Sector 125', 'Noida Expressway', 'Sector 16', 'Greater Noida']}
      testimonial={{
        quote:
          'Vedpragya rebuilt our corporate website with Next.js and tripled our lead flow in 90 days. Exceptional delivery and communication throughout.',
        author: 'Neha Gupta',
        role: 'Marketing Director, Noida enterprise client',
      }}
    />
  );
}
