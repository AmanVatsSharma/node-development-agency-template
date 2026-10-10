import { describe, expect, it } from '@jest/globals';
import { auditPost, countWords, extractInternalLinks, type AuditContext } from '../blogAudit';

const ctx: AuditContext = {
  knownRoutes: new Set(['/', '/pages/contact', '/pages/crm']),
  knownBlogSlugs: new Set(['other-post']),
  publicFileExists: (p) => p === '/images/exists.jpg',
};

const goodData = {
  title: 'A reasonable title for a post',
  excerpt: 'x'.repeat(120),
  category: 'seo',
  publishedAt: '2026-01-01',
  readTime: 5,
  author: 'Aman Kumar Sharma',
  tags: ['a'],
};
const longBody = ('word '.repeat(1000)).trim();

function codes(findings: ReturnType<typeof auditPost>) {
  return findings.map((f) => f.code).sort();
}

describe('countWords', () => {
  it('ignores code fences and link urls', () => {
    expect(countWords('hello [world](https://x.y/z) ```code here``` end')).toBe(3);
  });
});

describe('extractInternalLinks', () => {
  it('returns internal paths without query/hash or trailing slash', () => {
    expect(
      extractInternalLinks('[a](/pages/crm) [b](/pages/contact/#x) [c](https://ext.com) [d](/pages/blog/other-post?x=1)'),
    ).toEqual(['/pages/crm', '/pages/contact', '/pages/blog/other-post']);
  });
});

describe('auditPost', () => {
  it('passes a healthy post', () => {
    expect(auditPost({ slug: 's', data: goodData, body: longBody }, ctx)).toEqual([]);
  });

  it('flags missing required frontmatter', () => {
    const { title: _t, ...rest } = goodData;
    void _t;
    expect(codes(auditPost({ slug: 's', data: rest, body: longBody }, ctx))).toContain('missing-field');
  });

  it('flags a broken image reference but accepts an existing one', () => {
    expect(
      codes(auditPost({ slug: 's', data: { ...goodData, image: '/images/nope.jpg' }, body: longBody }, ctx)),
    ).toContain('broken-image');
    expect(
      auditPost({ slug: 's', data: { ...goodData, image: '/images/exists.jpg' }, body: longBody }, ctx),
    ).toEqual([]);
  });

  it('flags thin content', () => {
    expect(codes(auditPost({ slug: 's', data: goodData, body: 'too short' }, ctx))).toContain('thin-content');
  });

  it('flags broken internal links and unknown blog slugs', () => {
    const body = `${longBody}\n[x](/pages/missing) [y](/pages/blog/nope) [ok](/pages/crm) [ok2](/pages/blog/other-post)`;
    const found = auditPost({ slug: 's', data: goodData, body }, ctx).filter(
      (f) => f.code === 'broken-internal-link',
    );
    expect(found).toHaveLength(2);
  });

  it('flags a duplicate H1, bad excerpt length, long title, no tags, updated-before-published', () => {
    const data = {
      ...goodData,
      title: 't'.repeat(80),
      excerpt: 'short',
      tags: [],
      updatedAt: '2025-01-01',
    };
    const result = codes(auditPost({ slug: 's', data, body: `# Heading\n${longBody}` }, ctx));
    expect(result).toEqual(
      expect.arrayContaining(['duplicate-h1', 'excerpt-length', 'title-length', 'no-tags', 'updated-before-published']),
    );
  });
});
