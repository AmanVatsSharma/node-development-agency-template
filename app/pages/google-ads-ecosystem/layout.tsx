import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Ecosystem | Complete PPC Services | Rajapragya Bharat',
  description: 'Master-level Google Ads ecosystem with 8+ specialized services. Enterprise management, e-commerce optimization, B2B lead generation, and more. 98% client retention, 7.2× average ROAS.',
  keywords: [
    'google ads ecosystem',
    'ppc services india',
    'google ads agency',
    'enterprise google ads',
    'ecommerce google ads',
    'b2b lead generation',
    'youtube advertising',
    'performance max campaigns',
    'google ads audit',
    'landing page optimization',
    'ppc management',
    'digital marketing agency'
  ],
  openGraph: {
    title: 'Google Ads Ecosystem | Complete PPC Services | Rajapragya Bharat',
    description: 'Master-level Google Ads ecosystem with 8+ specialized services. Enterprise management, e-commerce optimization, B2B lead generation, and more.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rajapragya Bharat',
    images: [
      {
        url: '/og-google-ads-ecosystem.jpg',
        width: 1200,
        height: 630,
        alt: 'Google Ads Ecosystem - Complete PPC Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Ecosystem | Complete PPC Services',
    description: 'Master-level Google Ads ecosystem with 8+ specialized services. 98% client retention, 7.2× average ROAS.',
    images: ['/og-google-ads-ecosystem.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/pages/google-ads-ecosystem'
  }
};

export default function GoogleAdsEcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}