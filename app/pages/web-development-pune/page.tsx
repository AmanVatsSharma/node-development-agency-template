import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function PuneWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Pune"
      citySlug="pune"
      region="Maharashtra"
      tagline="Custom web development for Pune businesses — SaaS platforms, e-commerce stores, and web applications built with modern technology stacks."
      neighborhoods={['Kothrud', 'Baner', 'Hinjewadi', 'Viman Nagar', 'Koregaon Park', 'Aundh']}
      testimonial={{
        quote:
          'Pune has great talent, but we wanted a partner with enterprise-grade discipline. Vedpragya delivered on schedule with zero compromises.',
        author: 'Kunal Deshpande',
        role: 'CEO, Pune SaaS company',
      }}
    />
  );
}
