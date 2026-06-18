// TEMPORARILY DISABLED — NSE/MCX Live Market Data page hidden from site.
// The original page.tsx has been moved to _disabled-page.tsx. To restore, rename _disabled-page.tsx back to page.tsx.

import { redirect } from 'next/navigation';

export const dynamic = 'force-static';

export default function NseMcxMarketDataPage() {
  redirect('/');
}
