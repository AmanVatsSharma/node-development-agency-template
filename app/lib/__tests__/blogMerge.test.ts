import { describe, expect, it } from '@jest/globals';
import {
  dbRowToSummary,
  looksLikeHtml,
  mergeBlogSummaries,
  normalizeDbRow,
  normalizeDbRows,
  type DbBlogRow,
} from '../blogMerge';
import type { BlogPostSummary } from '../blog';

const baseRow: DbBlogRow = {
  slug: 'Hello-World',
  title: 'Hello',
  excerpt: 'An excerpt',
  content: '<p>Hi</p>',
  publishedAt: new Date('2026-03-01T00:00:00Z'),
  updatedAt: new Date('2026-03-02T00:00:00Z'),
  readTime: 5,
  category: 'AI',
  tags: ['a', 'b'],
  imageUrl: '   ',
  featured: true,
  author: { name: 'Aman Kumar Sharma', title: 'Founder' },
};

function summary(slug: string, publishedAt: string, title = slug): BlogPostSummary {
  return {
    slug,
    title,
    excerpt: '',
    category: 'general',
    tags: [],
    publishedAt,
    readTime: 5,
    author: 'Aman Kumar Sharma',
  };
}

describe('looksLikeHtml', () => {
  it('detects block-level html at the start', () => {
    expect(looksLikeHtml('<p>Hi</p>')).toBe(true);
    expect(looksLikeHtml('  \n<h2>Title</h2>')).toBe(true);
    expect(looksLikeHtml('<ul><li>x</li></ul>')).toBe(true);
  });

  it('treats markdown and inline html as markdown', () => {
    expect(looksLikeHtml('## Heading\n\ntext')).toBe(false);
    expect(looksLikeHtml('Intro with <b>bold</b> text')).toBe(false);
    expect(looksLikeHtml('')).toBe(false);
  });
});

describe('normalizeDbRow / normalizeDbRows', () => {
  it('rejects non-objects and rows missing required strings', () => {
    expect(normalizeDbRow(null)).toBeNull();
    expect(normalizeDbRow({})).toBeNull();
    expect(normalizeDbRow({ slug: 's', title: 't' })).toBeNull();
  });

  it('returns [] for the Vercel-build mock Prisma client result ({})', () => {
    expect(normalizeDbRows({})).toEqual([]);
    expect(normalizeDbRows(undefined)).toEqual([]);
  });

  it('keeps valid rows and drops invalid ones', () => {
    const rows = normalizeDbRows([
      { slug: 'a', title: 'A', content: 'x', publishedAt: '2026-01-01', author: { name: 'N', title: 'T' } },
      { nope: true },
    ]);
    expect(rows).toHaveLength(1);
    expect(rows[0].slug).toBe('a');
    expect(rows[0].author).toEqual({ name: 'N', title: 'T' });
    expect(rows[0].readTime).toBe(6);
  });
});

describe('dbRowToSummary', () => {
  it('normalises slug and category, blanks empty image, maps author', () => {
    const result = dbRowToSummary(baseRow);
    expect(result).not.toBeNull();
    expect(result?.slug).toBe('hello-world');
    expect(result?.category).toBe('ai');
    expect(result?.image).toBeUndefined();
    expect(result?.author).toBe('Aman Kumar Sharma');
    expect(result?.authorTitle).toBe('Founder');
    expect(result?.publishedAt).toBe('2026-03-01T00:00:00.000Z');
    expect(result?.updatedAt).toBe('2026-03-02T00:00:00.000Z');
    expect(result?.featured).toBe(true);
  });

  it('keeps a real image url', () => {
    expect(dbRowToSummary({ ...baseRow, imageUrl: ' /images/blog/x.jpg ' })?.image).toBe('/images/blog/x.jpg');
  });

  it('returns null for an invalid slug', () => {
    expect(dbRowToSummary({ ...baseRow, slug: 'Bad Slug!' })).toBeNull();
  });

  it('returns null for an invalid publishedAt', () => {
    expect(dbRowToSummary({ ...baseRow, publishedAt: 'not a date' })).toBeNull();
  });

  it('falls back to the default author when the relation is missing', () => {
    const result = dbRowToSummary({ ...baseRow, author: null });
    expect(result?.author).toBe('Aman Kumar Sharma');
    expect(result?.authorTitle).toBe('Founder, Vedpragya');
  });
});

describe('mergeBlogSummaries', () => {
  it('unions file and database posts and sorts newest first', () => {
    const merged = mergeBlogSummaries(
      [summary('file-old', '2026-01-01'), summary('file-new', '2026-05-01')],
      [summary('db-mid', '2026-03-01')],
    );
    expect(merged.map((p) => p.slug)).toEqual(['file-new', 'db-mid', 'file-old']);
  });

  it('lets the database copy win when slugs collide', () => {
    const merged = mergeBlogSummaries(
      [summary('same', '2026-01-01', 'File title')],
      [summary('same', '2026-02-01', 'DB title')],
    );
    expect(merged).toHaveLength(1);
    expect(merged[0].title).toBe('DB title');
  });

  it('returns file posts unchanged when the database is empty', () => {
    const files = [summary('a', '2026-01-01'), summary('b', '2026-02-01')];
    expect(mergeBlogSummaries(files, []).map((p) => p.slug)).toEqual(['b', 'a']);
  });
});
