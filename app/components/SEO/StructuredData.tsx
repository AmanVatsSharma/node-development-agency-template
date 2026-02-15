import React from 'react';
import { companyProfile } from '@/app/data/companyProfile';
import { SEO_DEFAULT_DESCRIPTION } from '@/app/lib/seo/constants';

interface OrganizationStructuredDataProps {
  name?: string;
  logo?: string;
  url?: string;
  /**
   * Keep address optional and partial to avoid publishing incorrect data.
   * If you don't have a verified address, omit it.
   */
  address?: Partial<{
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  }>;
  contactPoint?: {
    telephone?: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[]; // Social media profiles
  legalName?: string;
  taxId?: string;
  founderName?: string;
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

function normalizeSameAsUrls(sameAs?: string[]): string[] | undefined {
  if (!sameAs || sameAs.length === 0) {
    return undefined;
  }

  const normalizedUrls: string[] = [];
  const seenUrls = new Set<string>();

  sameAs.forEach((rawUrl) => {
    const trimmedUrl = rawUrl.trim();
    if (!trimmedUrl) {
      return;
    }

    if (/^\/\/[^/]/.test(trimmedUrl)) {
      console.warn('[SEO] Protocol-relative sameAs URL rejected in structured data.', {
        url: rawUrl,
      });
      return;
    }

    try {
      const parsedUrl = new URL(trimmedUrl);
      if (parsedUrl.protocol !== 'https:') {
        console.warn('[SEO] Non-HTTPS sameAs URL rejected in structured data.', {
          url: rawUrl,
          protocol: parsedUrl.protocol,
        });
        return;
      }

      if (parsedUrl.hash) {
        console.warn('[SEO] Fragmented sameAs URL rejected in structured data.', {
          url: rawUrl,
          hash: parsedUrl.hash,
        });
        return;
      }

      const normalizedUrl = parsedUrl.toString();
      const dedupeKey = normalizedUrl.toLowerCase();
      if (seenUrls.has(dedupeKey)) {
        return;
      }

      seenUrls.add(dedupeKey);
      normalizedUrls.push(normalizedUrl);
    } catch (error) {
      console.warn('[SEO] Invalid sameAs URL rejected in structured data.', {
        url: rawUrl,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  });

  return normalizedUrls.length > 0 ? normalizedUrls : undefined;
}

// Default data
const defaultOrganization = {
  name: companyProfile.brandName,
  // NOTE: Keep logo optional/real. If you add a real logo asset, set it explicitly.
  logo: undefined as string | undefined,
  url: companyProfile.websiteUrl,
  contactPoint: {
    contactType: 'customer service',
    email: companyProfile.contactEmail
  },
  sameAs:
    normalizeSameAsUrls(Object.values(companyProfile.social || {}).filter(Boolean) as string[]) || [],
  legalName: companyProfile.legalName,
  taxId: companyProfile.legal.gst,
  founderName: companyProfile.founder?.name
};

// Organization structured data
export function OrganizationStructuredData({
  name = defaultOrganization.name,
  logo = defaultOrganization.logo,
  url = defaultOrganization.url,
  contactPoint = defaultOrganization.contactPoint,
  sameAs = defaultOrganization.sameAs,
  legalName = defaultOrganization.legalName,
  taxId = defaultOrganization.taxId,
  founderName = defaultOrganization.founderName,
  address
}: OrganizationStructuredDataProps) {
  const normalizedSameAs = normalizeSameAsUrls(sameAs);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    legalName,
    url,
    ...(logo ? { logo } : {}),
    ...(address && Object.keys(address).length
      ? {
          address: {
            '@type': 'PostalAddress',
            ...address,
          },
        }
      : {}),
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint
    },
    ...(taxId ? { taxID: taxId } : {}),
    ...(founderName ? { founder: { '@type': 'Person', name: founderName } } : {}),
    ...(normalizedSameAs?.length ? { sameAs: normalizedSameAs } : {})
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
  description = SEO_DEFAULT_DESCRIPTION,
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