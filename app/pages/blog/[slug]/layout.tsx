import type { Metadata } from 'next';
import { buildPageMetadata } from '@/app/lib/seo/metadata';
import {
  ArticleStructuredData,
  BreadcrumbStructuredData,
} from '@/app/components/SEO/StructuredData';
import { companyProfile } from '@/app/data/companyProfile';
import { SEO_SITE_URL, toAbsoluteSeoUrl } from '@/app/lib/seo/constants';
import { getBlogPost } from '@/app/lib/blog';
import prisma from '@/app/lib/prisma';

interface BlogSlugLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

interface BlogSlugMetadataParams {
  params: Promise<{ slug: string }>;
}

function normalizeBlogSlugForMetadata(rawSlug: string): string {
  const normalizedSlug = rawSlug
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  if (!normalizedSlug) {
    console.warn('[SEO] Invalid blog slug received for metadata canonicalization. Using fallback slug.', {
      rawSlug,
      fallbackSlug: 'blog-post',
    });
    return 'blog-post';
  }

  return normalizedSlug;
}

function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

/**
 * Dynamic metadata per blog post. Reads from the filesystem-backed blog
 * system (content/blog/*.md). No DB dependency.
 */
export async function generateMetadata({ params }: BlogSlugMetadataParams): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const normalizedSlug = normalizeBlogSlugForMetadata(rawSlug);

  try {
    const dbPost = await prisma.blogPost.findUnique({ where: { slug: normalizedSlug } });
    const post = dbPost ?? await getBlogPost(normalizedSlug);
    if (post) {
      const title = (dbPost as { title?: string } | null)?.title ?? (post as { title?: string }).title ?? normalizedSlug;
      const excerpt = (dbPost as { excerpt?: string } | null)?.excerpt ?? (post as { excerpt?: string }).excerpt ?? '';
      const image = (dbPost as { image?: string | null } | null)?.image ?? (post as { image?: string }).image ?? '/logo.png';
      const tags = (post as { tags?: string[] }).tags ?? [];
      const category = (post as { category?: string }).category ?? '';
      console.log('[SEO] Blog slug metadata generated', {
        source: dbPost ? 'database' : 'filesystem',
        requestedSlug: rawSlug,
        canonicalSlug: normalizedSlug,
      });
      return buildPageMetadata({
        title: `${title} | Vedpragya Blog`,
        description: excerpt,
        path: `/pages/blog/${normalizedSlug}`,
        keywords: [
          ...tags,
          category,
          'vedpragya blog',
          'software development insights',
          'digital growth insights',
        ].filter(Boolean) as string[],
        imagePath: image || '/logo.png',
        ogType: 'article',
      });
    }
  } catch (error) {
    console.error('[SEO] Failed to load blog post for metadata. Using fallback metadata.', {
      requestedSlug: rawSlug,
      canonicalSlug: normalizedSlug,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  const readableTitle = humanizeSlug(normalizedSlug);
  return buildPageMetadata({
    title: `${readableTitle} | Vedpragya Blog`,
    description: `Read ${readableTitle} on the Vedpragya blog for practical software engineering and growth insights.`,
    path: `/pages/blog/${normalizedSlug}`,
    keywords: [readableTitle, 'vedpragya blog', 'software development insights', 'growth insights'],
  });
}

export default async function BlogSlugLayout({ children, params }: BlogSlugLayoutProps) {
  const { slug: rawSlug } = await params;
  const normalizedSlug = normalizeBlogSlugForMetadata(rawSlug);

  let articleData: {
    headline: string;
    image: string;
    datePublished: string;
    dateModified: string;
    description: string;
    url: string;
  } | null = null;

  try {
    const post = await getBlogPost(normalizedSlug);
    if (post) {
      articleData = {
        headline: post.title,
        image: post.image ? toAbsoluteSeoUrl(post.image) : `${SEO_SITE_URL}/logo.png`,
        datePublished: new Date(post.publishedAt).toISOString(),
        dateModified: new Date(post.updatedAt || post.publishedAt).toISOString(),
        description: post.excerpt || '',
        url: toAbsoluteSeoUrl(`/pages/blog/${normalizedSlug}`),
      };
    }
  } catch {
    // Non-fatal: article schema is a bonus, not a requirement
  }

  const readableTitle = humanizeSlug(normalizedSlug);

  return (
    <>
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: SEO_SITE_URL },
          { name: 'Blog', url: `${SEO_SITE_URL}/pages/blog` },
          {
            name: articleData?.headline || readableTitle,
            url: toAbsoluteSeoUrl(`/pages/blog/${normalizedSlug}`),
          },
        ]}
      />
      {articleData && (
        <ArticleStructuredData
          headline={articleData.headline}
          image={articleData.image}
          datePublished={articleData.datePublished}
          dateModified={articleData.dateModified}
          description={articleData.description}
          url={articleData.url}
          author={{
            name: companyProfile.founder?.name || companyProfile.brandName,
            url: SEO_SITE_URL,
          }}
          publisher={{
            name: companyProfile.legalName,
            logo: `${SEO_SITE_URL}/logo.png`,
          }}
        />
      )}
      {children}
    </>
  );
}
