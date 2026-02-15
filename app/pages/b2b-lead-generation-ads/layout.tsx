import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'B2B Lead Generation Ads | High-Quality Leads | Enterprise Hero',
  description: 'Expert B2B lead generation with Google Ads targeting decision-makers. ₹60K-₹1.25L/month. 5.2× average ROAS, 65% qualified leads, 40% conversion rate.',
  keywords: [
    'b2b lead generation ads',
    'google ads b2b',
    'b2b lead generation',
    'b2b advertising',
    'lead generation campaigns',
    'b2b marketing',
    'google ads b2b leads',
    'b2b lead nurturing',
    'decision maker targeting',
    'b2b conversion optimization',
    'b2b lead quality',
    'b2b sales leads'
  ],
  openGraph: {
    title: 'B2B Lead Generation Ads | High-Quality Leads',
    description: 'Expert B2B lead generation with Google Ads targeting decision-makers. 5.2× average ROAS, 65% qualified leads, 40% conversion rate.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Enterprise Hero',
    images: [
      {
        url: '/og-b2b-lead-generation.jpg',
        width: 1200,
        height: 630,
        alt: 'B2B Lead Generation Ads - High-Quality Leads'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Lead Generation Ads | High-Quality Leads',
    description: 'Expert B2B lead generation with Google Ads targeting decision-makers. 5.2× average ROAS, 65% qualified leads.',
    images: ['/og-b2b-lead-generation.jpg']
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
    canonical: '/pages/b2b-lead-generation-ads'
  }
};

export default function B2BLeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}