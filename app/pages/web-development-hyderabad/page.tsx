import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function HyderabadWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Hyderabad"
      citySlug="hyderabad"
      region="Telangana"
      tagline="Custom web development for Hyderabad businesses — modern websites, SaaS platforms, and AI-powered applications built by a trusted Indian engineering team."
      neighborhoods={['HITEC City', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Kondapur']}
      testimonial={{
        quote:
          'We needed production-quality code for our Hyderabad healthtech platform. Vedpragya delivered with rigour and transparency — they are now our long-term tech partner.',
        author: 'Dr. Sai Krishna',
        role: 'Founder, Hyderabad healthtech platform',
      }}
    />
  );
}
