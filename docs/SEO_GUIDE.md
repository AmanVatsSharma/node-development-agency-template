# SEO Implementation Guide

## Overview

This guide provides comprehensive instructions for implementing and maintaining SEO across all landing pages in the Enterprise Hero website.

## SEO Architecture

### 1. Metadata System

All pages should have a `metadata.ts` file that exports Next.js Metadata object.

**Location:** `/app/pages/{page-name}/metadata.ts`

**Usage:**
```typescript
import { Metadata } from 'next';
import { generateServiceMetadata, KEYWORD_SETS } from '@/app/lib/seo/metadata-generator';

export const metadata: Metadata = generateServiceMetadata(
  'Service Name | Professional Services',
  'Service description (150-160 characters)',
  ['keyword1', 'keyword2', ...],
  '/pages/service-name',
  '/images/service-og.jpg'
);
```

### 2. Structured Data (JSON-LD)

Structured data should be added via `layout.tsx` files for pages that need it.

**Location:** `/app/pages/{page-name}/layout.tsx`

**Required Schemas:**
- **Service Schema** - For all service pages
- **FAQ Schema** - For pages with FAQ sections
- **Breadcrumb Schema** - For all pages
- **Organization Schema** - Global (in root layout)

**Example:**
```typescript
import { StructuredDataScript } from '@/app/lib/seo/structured-data';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/app/lib/seo/structured-data';

function StructuredData() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Service Name',
    serviceDescription: 'Service description',
    serviceType: 'Service Type',
    areaServed: ['India', 'United States'],
    offers: [
      {
        name: 'Package Name',
        description: 'Package description',
        price: '10000',
        priceCurrency: 'INR',
      },
    ],
    aggregateRating: {
      ratingValue: '4.8',
      reviewCount: '350',
    },
  });

  const faqSchema = generateFAQSchema({
    questions: [
      {
        question: 'Question?',
        answer: 'Answer.',
      },
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/pages/services' },
      { name: 'Service Name', url: '/pages/service-name' },
    ],
  });

  return (
    <>
      <StructuredDataScript data={serviceSchema} />
      <StructuredDataScript data={faqSchema} />
      <StructuredDataScript data={breadcrumbSchema} />
    </>
  );
}
```

### 3. Sitemap

The sitemap is automatically generated from `/utils/sitemap.ts`.

**To add a new page:**
1. Add entry to `staticPages` array in `sitemap.ts`
2. Set appropriate priority (0.5-1.0)
3. Set change frequency (daily/weekly/monthly/yearly)

**Priority Guidelines:**
- Homepage: 1.0
- Main service pages: 0.9
- Sub-service pages: 0.8
- Blog posts: 0.7
- Legal pages: 0.5

### 4. Robots.txt

Located at `/public/robots.txt`. Automatically generated but can be manually edited.

## SEO Checklist for New Pages

### Required Elements

- [ ] **Metadata File**
  - [ ] Title (60-70 characters, keyword-rich)
  - [ ] Description (150-160 characters, compelling)
  - [ ] Keywords (10-15 relevant keywords)
  - [ ] Canonical URL
  - [ ] Open Graph tags
  - [ ] Twitter Card tags
  - [ ] Robots directives

- [ ] **Structured Data**
  - [ ] Service Schema (for service pages)
  - [ ] FAQ Schema (if page has FAQ)
  - [ ] Breadcrumb Schema
  - [ ] Review Schema (if page has testimonials)

- [ ] **Sitemap Entry**
  - [ ] Added to `sitemap.ts`
  - [ ] Proper priority set
  - [ ] Change frequency set

- [ ] **Content Optimization**
  - [ ] One H1 tag (keyword-rich)
  - [ ] Proper H2-H6 hierarchy
  - [ ] Internal links to related pages
  - [ ] Image alt text
  - [ ] Meta descriptions optimized

- [ ] **Technical SEO**
  - [ ] Page loads fast (< 3 seconds)
  - [ ] Mobile responsive
  - [ ] No broken links
  - [ ] Proper URL structure

## SEO Best Practices

### Title Tags
- Include primary keyword
- Keep under 60 characters
- Include brand name
- Make it compelling

### Meta Descriptions
- 150-160 characters
- Include primary keyword
- Include call-to-action
- Make it compelling

### Header Tags
- One H1 per page (keyword-rich)
- Logical H2-H6 hierarchy
- Include keywords naturally

### Images
- Descriptive alt text
- Optimized file sizes
- Proper file names
- WebP format where possible

### Internal Linking
- Link to related services
- Use descriptive anchor text
- Create topic clusters
- Link to blog posts

## Common Keyword Sets

Pre-defined keyword sets are available in `/app/lib/seo/metadata-generator.ts`:

- `KEYWORD_SETS.googleAds` - Google Ads related keywords
- `KEYWORD_SETS.webDevelopment` - Web development keywords
- `KEYWORD_SETS.seo` - SEO related keywords
- `KEYWORD_SETS.shopify` - Shopify related keywords

## Testing SEO

### Tools to Use
1. **Google Search Console** - Monitor indexing and performance
2. **Google Rich Results Test** - Test structured data
3. **PageSpeed Insights** - Check page speed
4. **Lighthouse** - Overall SEO audit
5. **Schema Markup Validator** - Validate JSON-LD

### Validation Checklist
- [ ] Metadata renders correctly
- [ ] Structured data validates
- [ ] Sitemap includes page
- [ ] Robots.txt allows indexing
- [ ] Page loads fast
- [ ] Mobile-friendly
- [ ] No console errors

## Maintenance

### Regular Tasks
1. **Weekly:** Check Google Search Console for errors
2. **Monthly:** Review and update sitemap
3. **Quarterly:** Audit all pages for SEO compliance
4. **Annually:** Review and update keywords

### Monitoring
- Track rankings for target keywords
- Monitor organic traffic
- Check conversion rates
- Review bounce rates

## Troubleshooting

### Common Issues

**Issue:** Page not indexed
- Check robots.txt
- Verify sitemap includes page
- Check for noindex tags
- Submit to Google Search Console

**Issue:** Structured data errors
- Validate with Google Rich Results Test
- Check JSON-LD syntax
- Verify required fields present

**Issue:** Poor rankings
- Review keyword optimization
- Check content quality
- Verify internal linking
- Check page speed

## Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [SEO Best Practices](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

**Last Updated:** 2024
**Maintained By:** Development Team
