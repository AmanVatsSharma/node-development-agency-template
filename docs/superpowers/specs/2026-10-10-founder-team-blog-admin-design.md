# Founder, Team, Blog Sync and Admin Hardening — Design

Date: 2026-10-10
Status: Approved by user in chat (2026-10-10), including optional admin hygiene.

## Context

- Database moved from a dead AWS Postgres to Neon (Vercel Marketplace). Dev, Preview and
  Production share one Neon database (`neon-red-drum`).
- Public blog is file-based (`content/blog/*.md`, 26 posts, read by `app/lib/blog.ts`).
  The admin blog editor and the `/sitemap.xml` use the `BlogPost` table instead, so the three
  are out of sync. The sitemap currently lists only the 7 seeded DB posts instead of all 26.
- `seed-production.ts` inserted three fabricated team members (Rajesh Kumar, Priya Sharma,
  Amit Patel) into the live database.
- `companyProfile.ts` and the about page list the founder as "Founder & CEO".
- Admin verification (2026-10-10): 12 pages and 13 GET APIs return 200; auth gate correct.
  Zoho is not connected (placeholder refresh token). `/api/admin/integrations` returns Zoho
  secrets unmasked. 11 admin routes instantiate their own `PrismaClient`.

## Decisions (from user)

- Team: founder only for now; delete the three placeholders; real team added later via admin.
- Members page: public team page.
- Blogs: new SEO posts + fix existing 26 + sync admin editor with the public site.
- Lead test: one labelled form submission on production after an approved deploy.
- Founder title: "Founder & Operations Head".

## Scope

### 1. Identity and data
- `app/data/companyProfile.ts`: founder title -> "Founder & Operations Head".
- `app/pages/about/page.tsx`: replace hard-coded "Founder & CEO".
- `prisma/seed-production.ts`: seed only the founder as `TeamMember`; no placeholders.
- Database: delete the three placeholder rows; upsert the founder (order 0). Bio text reuses
  the existing about-page copy; no new factual claims. Monogram avatar until a photo exists.

### 2. Founder page `/pages/founder`
Hero, bio, operations remit, company facts from `companyProfile`, timeline from existing
founding facts, contact CTA. `Person` JSON-LD with `sameAs` only for verified URLs (personal
LinkedIn omitted until supplied). Sitemap entry; links from about page and footer.

### 3. Team page `/pages/team`
Server component reading active `TeamMember` rows ordered by `order`; founder featured and
linking to `/pages/founder`. Falls back to the founder from `companyProfile` if the DB is
unreachable. `revalidate = 3600`. Nav link and sitemap entry.

### 4. Blogs
- Sitemap: union of file posts and DB posts (DB wins on slug).
- Sync: public blog = file posts UNION DB posts, DB wins on slug. Renderer accepts DB content
  as HTML and file content as markdown. Markdown stays the git-versioned source for existing
  posts.
- Fix existing: repair the 3 broken `image:` references; run an audit script (thin content,
  broken internal links, author/title inconsistencies) and report before changing copy.
- New posts (pending per-post review by user, no unsourced statistics):
  1. Custom ERP software development in India: cost and when you need one
  2. Mobile app development cost in India: native vs Flutter vs React Native
  3. Local SEO checklist for Indian businesses (Google Business Profile)
  4. Zoho CRM implementation in India: steps, cost, mistakes
  5. WhatsApp Business API pricing in India: Meta charges vs provider add-ons
  6. Google Ads for clinics and hospitals in India: compliance, keywords, budget

### 5. Admin hygiene
- Replace `new PrismaClient()` in 11 admin routes with the shared `@/app/lib/prisma` client.
- Mask Zoho secrets in `GET /api/admin/integrations`; the PUT path must keep the stored secret
  when the submitted value is the masked placeholder or empty.

### 6. Verification and release
- Typecheck, lint, tests, build.
- Production deploy only after explicit user approval of the method.
- Production smoke test: key pages 200, sitemap contains all blog posts + team + founder,
  one labelled test lead submitted through the real form, confirmed in production
  `/admin/leads`, then deleted (and the Zoho/Google Ads side effects noted for manual cleanup).

## Out of scope
- Members-only/private area; real team member records beyond the founder; Zoho credential
  provisioning; new cover images; moving blog content wholly into the database.

## Open inputs (non-blocking)
Founder photo; founder personal LinkedIn URL; real Zoho credentials.
