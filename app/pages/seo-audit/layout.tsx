import { metadata } from './metadata';
import { companyProfile } from '@/app/data/companyProfile';
import { toAbsoluteSeoUrl } from '@/app/lib/seo/constants';

export { metadata };

/**
 * JSON-LD Structured Data for SEO Audit Page
 */
function StructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does the full audit take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3–5 business days for Professional package. Enterprise package timeline is discussed at kickoff."
        }
      },
      {
        "@type": "Question",
        "name": "Do you need access to Google Search Console?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Optional read-only access recommended for deeper insights into keyword data and indexation issues."
        }
      },
      {
        "@type": "Question",
        "name": "Will you fix issues or only report them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide both options — comprehensive reporting with implementation guides, or hands-on implementation via hourly rates or monthly retainers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a money-back guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! 7-day satisfaction guarantee. We'll revise or provide a full refund if you're not satisfied."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO Audit & Consulting",
    "provider": {
      "@type": "Organization",
      "name": companyProfile.legalName,
      "url": companyProfile.websiteUrl
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Audit Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter SEO Audit",
            "description": "1-page deep crawl with PDF report and 30-min strategy call"
          },
          "price": "6999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional SEO Audit",
            "description": "Up to 25 pages crawl with technical audit, backlink overview, and implementation roadmap"
          },
          "price": "19999",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise SEO Audit",
            "description": "Up to 100 pages with competitor analysis, keyword strategy, and 3-month follow-up"
          },
          "price": "49999",
          "priceCurrency": "INR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": toAbsoluteSeoUrl('/')
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SEO Audit",
        "item": toAbsoluteSeoUrl('/pages/seo-audit')
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function SEOAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData />
      {children}
    </>
  );
}
