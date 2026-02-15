import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-commerce Google Ads Optimization | Shopping Campaigns | Enterprise Hero',
  description: 'Expert e-commerce Google Ads optimization with shopping campaigns, product feeds, and conversion tracking. ₹50K-₹1.5L/month. 6.8× average ROAS, 45% increase in sales.',
  keywords: [
    'ecommerce google ads optimization',
    'shopping campaigns',
    'google shopping ads',
    'ecommerce ppc management',
    'product feed optimization',
    'google merchant center',
    'ecommerce advertising',
    'online store marketing',
    'shopping campaign management',
    'ecommerce conversion optimization',
    'google ads for ecommerce',
    'ppc for online stores'
  ],
  openGraph: {
    title: 'E-commerce Google Ads Optimization | Shopping Campaigns',
    description: 'Expert e-commerce Google Ads optimization with shopping campaigns, product feeds, and conversion tracking. 6.8× average ROAS, 45% increase in sales.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Enterprise Hero',
    images: [
      {
        url: '/og-ecommerce-google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Google Ads Optimization - Shopping Campaigns'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Google Ads Optimization | Shopping Campaigns',
    description: 'Expert e-commerce Google Ads optimization with shopping campaigns, product feeds, and conversion tracking. 6.8× average ROAS.',
    images: ['/og-ecommerce-google-ads.jpg']
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
    canonical: '/pages/ecommerce-google-ads-optimization'
  }
};

export default function EcommerceGoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}