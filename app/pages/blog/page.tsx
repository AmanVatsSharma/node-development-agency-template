import { BlogClient } from './_components/blog-client';
import { BlogPost } from '../../types/blog';

async function getInitialPosts(): Promise<BlogPost[]> {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${siteUrl}/api/blog?page=1&pageSize=6`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.posts || [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const initialPosts = await getInitialPosts();

  return <BlogClient initialPosts={initialPosts} />;
}
