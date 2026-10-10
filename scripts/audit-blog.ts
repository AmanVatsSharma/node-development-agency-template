/**
 * Audit every post in content/blog against the rules in app/lib/blogAudit.ts.
 * Usage: npx tsx scripts/audit-blog.ts          (exit 1 if any error-level finding)
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { auditPost, type AuditFinding } from '../app/lib/blogAudit';
import { getStaticSeoRoutes } from '../app/lib/seo/routes';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
const parsed = files.map((file) => {
  const { data, content } = matter(fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'));
  const slug = String(data.slug || file.replace(/\.md$/, '')).toLowerCase();
  return { slug, data: data as Record<string, unknown>, body: content };
});

/**
 * Every real page route under app/pages (one `page.tsx` per folder), including
 * noindexed ones — getStaticSeoRoutes() deliberately omits those, but a link to
 * them still resolves for visitors.
 */
function discoverPageRoutes(dir: string, base = '/pages'): string[] {
  const routes: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
    const childDir = path.join(dir, entry.name);
    const route = `${base}/${entry.name}`;
    if (fs.existsSync(path.join(childDir, 'page.tsx'))) routes.push(route);
    routes.push(...discoverPageRoutes(childDir, route));
  }
  return routes;
}

const ctx = {
  knownRoutes: new Set<string>([
    '/',
    '/pages/blog',
    ...getStaticSeoRoutes(),
    ...discoverPageRoutes(path.join(process.cwd(), 'app', 'pages')),
  ]),
  knownBlogSlugs: new Set(parsed.map((p) => p.slug)),
  publicFileExists: (publicPath: string) => fs.existsSync(path.join(PUBLIC_DIR, publicPath)),
};

const findings: AuditFinding[] = parsed.flatMap((post) => auditPost(post, ctx));

const errors = findings.filter((f) => f.severity === 'error');
const warns = findings.filter((f) => f.severity === 'warn');
for (const f of [...errors, ...warns]) {
  console.log(`${f.severity.toUpperCase().padEnd(5)} ${f.slug.padEnd(48)} ${f.code.padEnd(24)} ${f.message}`);
}
console.log(`\n${parsed.length} posts audited — ${errors.length} errors, ${warns.length} warnings`);
process.exit(errors.length > 0 ? 1 : 0);
