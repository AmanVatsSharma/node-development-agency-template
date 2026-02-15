import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Google Ads Management | Dedicated PPC Team | Enterprise Hero',
  description: 'Complete enterprise Google Ads management with dedicated team, advanced strategies, and 24/7 monitoring. ₹75K-₹2L+/month. 8.5× average ROAS, 98% client retention.',
  keywords: [
    'enterprise google ads management',
    'dedicated ppc team',
    'enterprise digital marketing',
    'google ads agency enterprise',
    'ppc management enterprise',
    'google ads dedicated team',
    'enterprise advertising',
    'large business google ads',
    'enterprise ppc services',
    'dedicated account manager',
    'enterprise marketing agency',
    'google ads enterprise solutions'
  ],
  openGraph: {
    title: 'Enterprise Google Ads Management | Dedicated PPC Team',
    description: 'Complete enterprise Google Ads management with dedicated team, advanced strategies, and 24/7 monitoring. 8.5× average ROAS.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Enterprise Hero',
    images: [
      {
        url: '/og-enterprise-google-ads.jpg',
        width: 1200,
        height: 630,
        alt: 'Enterprise Google Ads Management - Dedicated PPC Team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Google Ads Management | Dedicated PPC Team',
    description: 'Complete enterprise Google Ads management with dedicated team, advanced strategies, and 24/7 monitoring.',
    images: ['/og-enterprise-google-ads.jpg']
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
    canonical: '/pages/enterprise-google-ads-management'
  }
};

export default function EnterpriseGoogleAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}