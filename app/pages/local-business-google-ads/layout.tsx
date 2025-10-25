import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local Business Google Ads | Local SEO & Ads | Rajapragya Bharat',
  description: 'Expert local business Google Ads with location targeting, Google My Business optimization, and local SEO. ₹25K-₹75K/month. 4.2× average ROAS, 60% local traffic increase.',
  keywords: [
    'local business google ads',
    'local google ads',
    'local seo ads',
    'google my business ads',
    'local advertising',
    'location targeting',
    'local business marketing',
    'google ads local',
    'local ppc management',
    'local business growth',
    'local lead generation',
    'local conversion optimization'
  ],
  openGraph: {
    title: 'Local Business Google Ads | Local SEO & Ads',
    description: 'Expert local business Google Ads with location targeting, Google My Business optimization, and local SEO. 4.2× average ROAS, 60% local traffic increase.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Rajapragya Bharat',
    images: [
      {
        url: '/og-local-business-google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Business Google Ads - Local SEO & Ads'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Business Google Ads | Local SEO & Ads',
    description: 'Expert local business Google Ads with location targeting, Google My Business optimization, and local SEO. 4.2× average ROAS.',
    images: ['/og-local-business-google-ads.jpg']
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
    canonical: '/pages/local-business-google-ads'
  }
};

export default function LocalBusinessGoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}