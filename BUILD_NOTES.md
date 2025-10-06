### Build fixes (2025-09-29)

- Removed invalid named page export in `app/pages/website-development/page.tsx`:
  - `export const products` → `const products`
  - Next.js app router pages may only export default component (+ optional `metadata`, `generateMetadata`, etc.).
- Updated `next.config.js` for Next 15 compatibility:
  - Replaced `experimental.serverComponentsExternalPackages` with `serverExternalPackages`.
  - Removed `experimental.instrumentationHook` (use `instrumentation.ts` instead if needed).
  - Kept `experimental.optimizeCss: true` for Tailwind CSS v4 optimizer.

Result: `pnpm build` compiles successfully and static pages are generated.


### Integrations (Zoho CRM + Google Ads)

- Added Prisma models: `IntegrationSettings`, `Lead`, `IntegrationLog`, `IntegrationRetry`.
- Services:
  - `app/lib/zohoService.ts`: Zoho token refresh + lead creation with logs and retries.
  - `app/lib/googleAds.ts`: Google conversion config and server-side intent logging.
- API routes:
  - `POST /api/lead`: persist → Zoho → return Google mapping.
  - `GET/POST /api/admin/integrations`: manage credentials and labels.
  - `GET /api/admin/logs`: list logs.
  - `POST /api/retry`: process queued failures.
  - `GET /api/google-config`: provide client mapping.
  - `POST /api/track`: server-side conversion intent logging.
- Client utility: `utils/conversions.ts` with `fireConversion()`.
- `business-website` lead form posts to `/api/lead` and fires conversions; call/WhatsApp clicks tracked.

