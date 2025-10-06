import { Metadata } from 'next';
import { metadata as pageMetadata } from './metadata';

export const metadata: Metadata = pageMetadata;

/**
 * Layout component for Google Ads Management Service page
 * Provides consistent structure and metadata
 */
export default function GoogleAdsManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
