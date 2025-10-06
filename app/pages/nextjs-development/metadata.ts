import { Metadata } from 'next';

/**
 * SEO Metadata for Next.js Web Development Landing Page
 * Optimized for search engines and social media sharing
 */

export const metadata: Metadata = {
  title: 'Next.js Web Development Services | Custom Next.js Agency India',
  description: 'Get blazing-fast, SEO-friendly, full-stack Next.js websites built by experts. Starting ₹14,999. Custom Next.js development, migrations, and enterprise solutions.',
  keywords: [
    'Next.js development agency',
    'React developer India',
    'custom Next.js website',
    'Next.js migration services',
    'Next.js eCommerce development',
    'Next.js SaaS development',
    'Next.js consulting',
    'Next.js developers',
    'Next.js web app',
    'Next.js TypeScript',
    'Next.js Tailwind CSS',
    'Next.js performance optimization',
    'Next.js SEO services'
  ],
  authors: [{ name: 'Next.js Development Agency' }],
  creator: 'Next.js Development Agency',
  publisher: 'Next.js Development Agency',
  openGraph: {
    title: 'Next.js Web Development Services | Fast, Scalable & SEO-Optimized',
    description: 'Professional Next.js development agency. Build lightning-fast websites with 100/100 Lighthouse scores. Starting ₹14,999.',
    url: 'https://yourdomain.com/pages/nextjs-development',
    siteName: 'Next.js Development Agency',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-nextjs-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Next.js Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Web Development Services | Custom Next.js Agency',
    description: 'Build blazing-fast, SEO-optimized Next.js websites. Enterprise-grade development starting ₹14,999.',
    images: ['/og-nextjs-development.jpg'],
    creator: '@youragency',
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
    canonical: 'https://yourdomain.com/pages/nextjs-development',
  },
  other: {
    'price:currency': 'INR',
    'price:amount': '14999',
  },
};

/**
 * Structured Data (JSON-LD) for SEO
 * Includes Organization, Product, Service, and FAQ schemas
 */
export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://yourdomain.com/#organization',
      name: 'Next.js Development Agency',
      url: 'https://yourdomain.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourdomain.com/logo.png',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://twitter.com/youragency',
        'https://www.linkedin.com/company/youragency',
        'https://github.com/youragency',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-99637-30111',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    },
    // Service Schema
    {
      '@type': 'Service',
      '@id': 'https://yourdomain.com/pages/nextjs-development#service',
      serviceType: 'Next.js Web Development',
      provider: {
        '@id': 'https://yourdomain.com/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Next.js Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Next.js Website Development',
              description: 'End-to-end Next.js website development from design to deployment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js + Headless CMS Integration',
              description: 'Integration with Strapi, Sanity, Contentful for content management',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Next.js eCommerce Development',
              description: 'E-commerce solutions with Shopify, Medusa, or custom cart systems',
            },
          },
        ],
      },
    },
    // Product Schema - Starter Package
    {
      '@type': 'Product',
      name: 'Next.js Website - Starter Package',
      description: 'Professional Next.js website with 3 pages, responsive design, and SEO optimization',
      offers: {
        '@type': 'Offer',
        price: '14999',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        seller: {
          '@id': 'https://yourdomain.com/#organization',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
    },
    // Product Schema - Professional Package
    {
      '@type': 'Product',
      name: 'Next.js Website - Professional Package',
      description: 'Advanced Next.js website with 6-8 pages, CMS integration, and comprehensive SEO',
      offers: {
        '@type': 'Offer',
        price: '49999',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        seller: {
          '@id': 'https://yourdomain.com/#organization',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
    },
    // FAQ Schema
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer design services too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! We provide complete design services including custom UI/UX design with Figma prototypes, design systems with Tailwind CSS, and mobile-first responsive layouts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What about hosting and domain setup?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We handle everything! We set up your site on Vercel or AWS, configure your custom domain, set up SSL certificates, and provide complete documentation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it SEO-ready out of the box?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! Every site includes optimized meta tags, structured data, Open Graph tags, XML sitemaps, and Lighthouse optimization.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you maintain my site monthly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer ongoing maintenance plans starting at ₹9,999/month including security updates, content updates, and priority support.',
          },
        },
      ],
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://yourdomain.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://yourdomain.com/pages/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Next.js Development',
          item: 'https://yourdomain.com/pages/nextjs-development',
        },
      ],
    },
  ],
};
