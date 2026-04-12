import { ResourcesClient } from './_components/resources-client';
import { Resource } from '../../types/blog';

async function getInitialResources(): Promise<Resource[]> {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const res = await fetch(`${siteUrl}/api/resources?page=1&pageSize=9`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.resources || [];
  } catch {
    return [];
  }
}

export default async function ResourcesPage() {
  const initialResources = await getInitialResources();

  return <ResourcesClient initialResources={initialResources} />;
}
