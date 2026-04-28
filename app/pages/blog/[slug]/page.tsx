import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getBlogPost,
  getBlogPostSlugs,
  getRelatedBlogPosts,
  getCategoryServiceLink,
} from '@/app/lib/blog';
import { buildPageMetadata } from '@/app/lib/seo/metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found | Vedpragya Blog' };
  }

  const base = buildPageMetadata({
    title: `${post.title} | Vedpragya Blog`,
    description: post.excerpt,
    path: `/pages/blog/${post.slug}`,
    keywords: post.tags,
    ogType: 'article',
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
      ...(post.updatedAt ? { modifiedTime: new Date(post.updatedAt).toISOString() } : {}),
      authors: [post.author],
      tags: post.tags,
    },
  };
}

/**
 * Pre-generate all blog post routes at build time so Googlebot and users
 * get instant static responses. Essential for SEO and crawl efficiency.
 */
export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  console.log('[Blog] generateStaticParams', { count: slugs.length });
  return slugs.map((slug) => ({ slug }));
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.category, post.slug, 3);
  const serviceLink = getCategoryServiceLink(post.category);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center text-sm">
              <Link
                href="/pages/blog"
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <span className="mx-2 text-gray-500" aria-hidden="true">|</span>
              <span className="text-blue-400 capitalize">{post.category.replace(/-/g, ' ')}</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
                {post.author
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{post.author}</p>
                <p className="text-xs text-gray-400">
                  {formatDate(post.publishedAt)} • {post.readTime} min read
                </p>
              </div>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white opacity-30">{post.title.substring(0, 2)}</span>
              </div>
            </div>

            {/* Content */}
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-24"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Service CTA Block — links from blog content to matching service page */}
            <aside className="mt-12 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/40 p-6 md:p-8">
              <p className="text-sm uppercase tracking-wide text-blue-700 dark:text-blue-300 font-semibold mb-2">
                Need help with {post.category.replace(/-/g, ' ')}?
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Talk to Vedpragya&apos;s {serviceLink.label.replace(' Services', '')} experts
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-5">
                We&apos;ve helped businesses across India, UAE, and the US build production-grade solutions.
                Get a free 30-minute consultation and a written proposal.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={serviceLink.url}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  See {serviceLink.label}
                </Link>
                <Link
                  href="/pages/contact"
                  className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full font-medium border border-blue-200 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                >
                  Book Free Consultation
                </Link>
              </div>
            </aside>

            {/* Author Bio */}
            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-medium text-gray-700 dark:text-gray-300 mr-4">
                  {post.author
                    .split(' ')
                    .map((n: string) => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{post.author}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.authorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="h-48 bg-blue-100 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-30">
                      {relatedPost.title.substring(0, 2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Link href={`/pages/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/pages/blog/${relatedPost.slug}`}
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our expertise in {post.category.replace(/-/g, ' ')} can help your business grow.
          </p>
          <Link
            href="/pages/contact"
            className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
