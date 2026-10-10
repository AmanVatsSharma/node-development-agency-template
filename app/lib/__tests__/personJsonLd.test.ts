import { describe, expect, it } from '@jest/globals';
import { buildPersonJsonLd } from '../../components/SEO/PersonStructuredData';

describe('buildPersonJsonLd', () => {
  const base = {
    name: 'Aman Kumar Sharma',
    jobTitle: 'Founder & Operations Head',
    description: 'desc',
    url: 'https://vedpragya.com/pages/founder',
    worksFor: { name: 'Vedpragya Bharat Private Limited', url: 'https://vedpragya.com' },
  };

  it('builds a schema.org Person with an employer', () => {
    const data = buildPersonJsonLd(base);
    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('Person');
    expect(data.name).toBe('Aman Kumar Sharma');
    expect(data.worksFor).toEqual({
      '@type': 'Organization',
      name: 'Vedpragya Bharat Private Limited',
      url: 'https://vedpragya.com',
    });
  });

  it('omits sameAs when there are no verified profile URLs', () => {
    expect('sameAs' in buildPersonJsonLd(base)).toBe(false);
    expect('sameAs' in buildPersonJsonLd({ ...base, sameAs: [] })).toBe(false);
  });

  it('includes sameAs when URLs are provided', () => {
    expect(buildPersonJsonLd({ ...base, sameAs: ['https://linkedin.com/in/x'] }).sameAs).toEqual([
      'https://linkedin.com/in/x',
    ]);
  });
});
