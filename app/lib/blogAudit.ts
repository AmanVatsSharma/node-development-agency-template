export type AuditSeverity = 'error' | 'warn';

export interface AuditFinding {
  slug: string;
  severity: AuditSeverity;
  code: string;
  message: string;
}

export interface AuditInput {
  slug: string;
  data: Record<string, unknown>;
  body: string;
}

export interface AuditContext {
  knownRoutes: ReadonlySet<string>;
  knownBlogSlugs: ReadonlySet<string>;
  /** True when `public/<path>` exists. Receives a path like "/images/x.jpg". */
  publicFileExists: (publicPath: string) => boolean;
}

const REQUIRED_FIELDS = ['title', 'excerpt', 'category', 'publishedAt', 'readTime', 'author'] as const;
const MIN_WORDS = 900;

export function countWords(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[^\p{L}\p{N}₹'’\s]/gu, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function extractInternalLinks(markdown: string): string[] {
  const links: string[] = [];
  const pattern = /\]\((\/[^)\s]*)\)/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(markdown)) !== null) {
    const path = match[1].split('#')[0].split('?')[0].replace(/\/+$/, '');
    links.push(path === '' ? '/' : path);
  }
  return links;
}

export function auditPost(input: AuditInput, ctx: AuditContext): AuditFinding[] {
  const { slug, data, body } = input;
  const findings: AuditFinding[] = [];
  const add = (severity: AuditSeverity, code: string, message: string) =>
    findings.push({ slug, severity, code, message });

  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    if (value === undefined || value === null || value === '') {
      add('error', 'missing-field', `Missing frontmatter field: ${field}`);
    }
  }

  const title = typeof data.title === 'string' ? data.title : '';
  if (title.length > 70) add('warn', 'title-length', `Title is ${title.length} chars (aim for ≤ 70)`);

  const excerpt = typeof data.excerpt === 'string' ? data.excerpt : '';
  if (excerpt && (excerpt.length < 70 || excerpt.length > 170)) {
    add('warn', 'excerpt-length', `Excerpt is ${excerpt.length} chars (aim for 70–170)`);
  }

  if (!Array.isArray(data.tags) || data.tags.length === 0) add('warn', 'no-tags', 'Post has no tags');

  const image = typeof data.image === 'string' ? data.image : '';
  if (image && image.startsWith('/') && !ctx.publicFileExists(image)) {
    add('error', 'broken-image', `image points to a missing file: ${image}`);
  }

  if (data.updatedAt && data.publishedAt) {
    const updated = new Date(String(data.updatedAt)).getTime();
    const published = new Date(String(data.publishedAt)).getTime();
    if (!Number.isNaN(updated) && !Number.isNaN(published) && updated < published) {
      add('warn', 'updated-before-published', 'updatedAt is earlier than publishedAt');
    }
  }

  const words = countWords(body);
  if (words < MIN_WORDS) add('warn', 'thin-content', `Only ${words} words (aim for ≥ ${MIN_WORDS})`);

  if (/^# /m.test(body)) {
    add('warn', 'duplicate-h1', 'Body contains an H1; the page template already renders the title as H1');
  }

  for (const link of new Set(extractInternalLinks(body))) {
    const blogMatch = link.match(/^\/pages\/blog\/([a-z0-9-]+)$/);
    const known = blogMatch ? ctx.knownBlogSlugs.has(blogMatch[1]) : ctx.knownRoutes.has(link);
    if (!known) add('error', 'broken-internal-link', `Internal link does not resolve: ${link}`);
  }

  return findings;
}
