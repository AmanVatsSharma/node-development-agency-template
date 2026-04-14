import { CityLandingPage } from '@/app/components/CityLandingPage';

export default function GurgaonWebDevelopmentPage() {
  return (
    <CityLandingPage
      cityName="Gurgaon"
      citySlug="gurgaon"
      region="Haryana"
      tagline="Your local Gurgaon web development partner. Custom websites, web apps, and SaaS platforms built by a Haryana-registered agency — Vedpragya Bharat Private Limited."
      neighborhoods={['Cyber Hub', 'DLF Cyber City', 'Sohna Road', 'Golf Course Road', 'Sector 44', 'Udyog Vihar']}
      testimonial={{
        quote:
          'As a Gurgaon-based startup, we needed a development partner who understood our market and could deliver fast. Vedpragya did exactly that — and they are literally in our city.',
        author: 'Priya Sharma',
        role: 'Co-founder, Gurgaon D2C brand',
      }}
    />
  );
}
