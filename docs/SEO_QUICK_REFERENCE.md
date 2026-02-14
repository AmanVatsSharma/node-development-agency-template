# SEO Quick Reference Guide

## 🚀 Quick Start

### Add SEO to Any Page (3 Steps)

#### 1. Add Breadcrumbs
```tsx
import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';

<Breadcrumbs 
  items={[
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/pages/services' },
    { name: 'Your Service', url: '/pages/your-service' },
  ]}
/>
```

#### 2. Add Related Services
```tsx
import { RelatedServices } from '@/app/components/SEO/RelatedServices';

<RelatedServices 
  currentPage="your-service-name"
  title="Related Services"
/>
```

#### 3. Optimize H1 Tag
```tsx
// Get keywords for your page
import { getKeywordsForPage } from '@/app/lib/seo/keyword-research';
import { generateH1 } from '@/app/lib/seo/content-optimizer';

const keywords = getKeywordsForPage('your-service-name');
const h1 = generateH1(keywords.primary[0], 'Your Service Name');

// Use in hero section
<h1>{h1}</h1>
```

## 📝 Content Optimization Checklist

### H1 Tag
- [ ] One H1 per page
- [ ] Includes primary keyword
- [ ] Format: `[Primary Keyword] | [Service Name]`
- [ ] Example: "Hire Google Ads Expert | Professional Google Ads Management Services"

### H2 Tags
- [ ] 3-5 H2 tags per page
- [ ] Include secondary keywords
- [ ] Natural, readable headings
- [ ] Example: "Google Ads Management Services"

### H3 Tags
- [ ] 5-10 H3 tags per page
- [ ] Include long-tail keywords
- [ ] Specific, descriptive headings
- [ ] Example: "Hire Google Ads Expert for Ecommerce"

### Content
- [ ] 1000+ words per page
- [ ] Primary keyword in first 100 words
- [ ] Semantic keywords throughout
- [ ] Internal links (3-5 per page)
- [ ] Alt text on all images

## 🔗 Internal Linking

### Related Services
```tsx
// Automatically links to related services
<RelatedServices currentPage="google-ads-management" />
```

### Manual Internal Links
```tsx
import Link from 'next/link';

// Use keyword-rich anchor text
<Link href="/pages/related-service">
  Related Service Name with Keywords
</Link>
```

## 🎯 Keyword Usage

### Primary Keywords
- **Use in**: H1, first paragraph, URL, meta title
- **Density**: 1-2%
- **Example**: "hire google ads expert"

### Secondary Keywords
- **Use in**: H2 tags, throughout content
- **Density**: 0.5-1%
- **Example**: "google ads management services"

### Long-Tail Keywords
- **Use in**: H3 tags, FAQ sections
- **Density**: Natural usage
- **Example**: "hire google ads expert for ecommerce"

### Semantic Keywords
- **Use in**: Throughout content naturally
- **Density**: Natural usage
- **Example**: "ppc management", "paid search"

## 📊 SEO Validation

### Check Page SEO
```tsx
import { validatePageSEO } from '@/app/lib/seo/page-optimizer';

const validation = validatePageSEO(
  'google-ads-management',
  h1Text,
  h2Count,
  h3Count,
  wordCount,
  internalLinksCount
);

console.log('SEO Score:', validation.score);
console.log('Issues:', validation.issues);
console.log('Suggestions:', validation.suggestions);
```

### Get SEO Recommendations
```tsx
import { generateSEORecommendations } from '@/app/lib/seo/page-optimizer';

const recommendations = generateSEORecommendations({
  pageName: 'google-ads-management',
  serviceName: 'Google Ads Management',
});

console.log('H1:', recommendations.h1);
console.log('H2s:', recommendations.h2s);
console.log('H3s:', recommendations.h3s);
console.log('Related Pages:', recommendations.relatedPages);
```

## 🛠️ Utilities

### Get Keywords for Page
```tsx
import { getKeywordsForPage } from '@/app/lib/seo/keyword-research';

const keywords = getKeywordsForPage('google-ads-management');
// Returns: { primary, secondary, longTail, semantic, local }
```

### Generate H1/H2/H3
```tsx
import { generateH1, generateH2s, generateH3s } from '@/app/lib/seo/content-optimizer';

const h1 = generateH1(keywords.primary[0], 'Service Name');
const h2s = generateH2s(keywords, 5);
const h3s = generateH3s(keywords, 8);
```

### Get Related Pages
```tsx
import { getRelatedPages } from '@/app/lib/seo/internal-linking';

const related = getRelatedPages('google-ads-management');
// Returns: ['b2b-lead-generation-ads', 'enterprise-google-ads-management', ...]
```

## 📈 Best Practices

### 1. Content Structure
- One H1 per page
- 3-5 H2 tags
- 5-10 H3 tags
- 1000+ words

### 2. Keyword Usage
- Primary keyword in H1
- Secondary keywords in H2
- Long-tail keywords in H3
- Semantic keywords naturally

### 3. Internal Linking
- Link to 4-6 related services
- Use keyword-rich anchor text
- Link to main service pages

### 4. Images
- Alt text with keywords
- Descriptive file names
- Optimized file sizes
- WebP format when possible

### 5. Technical SEO
- Site speed < 3 seconds
- Mobile-friendly
- Schema markup
- Clean URLs

## 🎨 Component Examples

### Complete Page Setup
```tsx
'use client';

import { Breadcrumbs } from '@/app/components/SEO/Breadcrumbs';
import { RelatedServices } from '@/app/components/SEO/RelatedServices';
import { getKeywordsForPage } from '@/app/lib/seo/keyword-research';
import { generateH1 } from '@/app/lib/seo/content-optimizer';

export default function ServicePage() {
  const keywords = getKeywordsForPage('your-service-name');
  const h1 = generateH1(keywords.primary[0], 'Your Service Name');
  
  return (
    <main>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/pages/services' },
          { name: 'Your Service', url: '/pages/your-service' },
        ]}
      />
      
      {/* Hero with SEO H1 */}
      <section>
        <h1>{h1}</h1>
        {/* ... rest of hero content */}
      </section>
      
      {/* Main content with H2/H3 */}
      <section>
        <h2>{keywords.secondary[0]}</h2>
        <h3>{keywords.longTail[0]}</h3>
        {/* ... content */}
      </section>
      
      {/* Related Services */}
      <RelatedServices 
        currentPage="your-service-name"
        title="Related Services"
      />
    </main>
  );
}
```

## 📚 Resources

- [Comprehensive SEO Strategy](./COMPREHENSIVE_SEO_STRATEGY.md)
- [SEO Implementation Guide](./SEO_IMPLEMENTATION_GUIDE.md)
- [Keyword Strategy](./ADVANCED_SEO_KEYWORD_STRATEGY.md)

## 🆘 Common Issues

### Related Services Not Showing
- Check if page name exists in `INTERNAL_LINKS` in `internal-linking.ts`
- Verify page name matches exactly (case-sensitive)

### Keywords Not Found
- Check if page name exists in `getKeywordsForPage()` function
- Verify keyword set is defined in `keyword-research.ts`

### Breadcrumbs Not Rendering
- Ensure `items` array is provided
- Check that URLs are valid paths

## ✅ Quick Checklist

Before publishing a page:
- [ ] H1 includes primary keyword
- [ ] 3-5 H2 tags with secondary keywords
- [ ] 5-10 H3 tags with long-tail keywords
- [ ] 1000+ words of content
- [ ] Breadcrumb navigation added
- [ ] Related services section added
- [ ] Alt text on all images
- [ ] Internal links (3-5 per page)
- [ ] Primary keyword in first 100 words
- [ ] Mobile-friendly design
