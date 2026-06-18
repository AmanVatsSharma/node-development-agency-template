// TEMPORARILY DISABLED — Trading Software page hidden from site.
// The original page.tsx has been moved to _disabled-page.tsx. To restore, rename _disabled-page.tsx back to page.tsx.

import { redirect } from 'next/navigation';

export const dynamic = 'force-static';

export default function TradingSoftwarePage() {
  redirect('/');
}
