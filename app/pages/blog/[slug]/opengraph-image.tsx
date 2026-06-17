import { ImageResponse } from 'next/og';
import { getBlogPost } from '@/app/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug).catch(() => null);

  const title = post?.title ?? 'Vedpragya Blog';
  const category = (post?.category ?? 'web-development').replace(/-/g, ' ');
  const readTime = post?.readTime ?? 8;
  const fontSize = title.length > 70 ? 40 : title.length > 50 ? 48 : 56;

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d2340 55%, #0a0f1e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              background: '#2563eb',
              color: '#fff',
              padding: '6px 18px',
              borderRadius: '100px',
              fontSize: '16px',
              fontWeight: 700,
              textTransform: 'capitalize',
              letterSpacing: '0.04em',
            }}
          >
            {category}
          </div>
          <div style={{ color: '#64748b', fontSize: '16px' }}>{readTime} min read</div>
        </div>

        {/* Title */}
        <div
          style={{
            color: '#f1f5f9',
            fontSize: `${fontSize}px`,
            fontWeight: 800,
            lineHeight: 1.22,
            maxWidth: '1000px',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ color: '#94a3b8', fontSize: '20px', fontWeight: 600 }}>
            vedpragya.com
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#3b82f6',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Web Dev · AI · Shopify · Google Ads · India
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
