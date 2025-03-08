import React from 'react';

interface OrganizationStructuredDataProps {
  name?: string;
  logo?: string;
  url?: string;
  address?: {
    streetAddress: string;
    addressLocality: string; 
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[]; // Social media profiles
}

interface WebsiteStructuredDataProps {
  url?: string;
  name?: string;
  description?: string;
  publisher?: string;
}

interface ArticleStructuredDataProps {
  headline: string;
  image: string | string[];
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo?: string;
  };
  description?: string;
  url?: string;
}

interface FAQStructuredDataProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

// Default data
const defaultOrganization = {
  name: 'Enterprise Hero',
  logo: 'https://enterprisehero.com/logo.png',
  url: 'https://enterprisehero.com',
  address: {
    streetAddress: '123 Tech Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94107',
    addressCountry: 'US'
  },
  contactPoint: {
    telephone: '+1-415-555-1234',
    contactType: 'customer service',
    email: 'contact@enterprisehero.com'
  },
  sameAs: [
    'https://twitter.com/enterprisehero',
    'https://linkedin.com/company/enterprisehero',
    'https://github.com/enterprisehero'
  ]
};

// Organization structured data
export function OrganizationStructuredData({
  name = defaultOrganization.name,
  logo = defaultOrganization.logo,
  url = defaultOrganization.url,
  address = defaultOrganization.address,
  contactPoint = defaultOrganization.contactPoint,
  sameAs = defaultOrganization.sameAs
}: OrganizationStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    logo,
    url,
    address: {
      '@type': 'PostalAddress',
      ...address
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint
    },
    sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Website structured data
export function WebsiteStructuredData({
  url = defaultOrganization.url,
  name = defaultOrganization.name,
  description = 'Premium Node.js development and 3D animation services for enterprise applications.',
  publisher = defaultOrganization.name
}: WebsiteStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    publisher: {
      '@type': 'Organization',
      name: publisher
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Article structured data
export function ArticleStructuredData({
  headline,
  image,
  datePublished,
  dateModified = datePublished,
  author,
  publisher,
  description,
  url
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    image: Array.isArray(image) ? image : [image],
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: publisher.logo ? {
        '@type': 'ImageObject',
        url: publisher.logo
      } : undefined
    },
    description,
    url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// FAQ structured data
export function FAQStructuredData({ questions }: FAQStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 