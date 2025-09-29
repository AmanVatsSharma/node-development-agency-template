### Build fixes (2025-09-29)

- Removed invalid named page export in `app/pages/website-development/page.tsx`:
  - `export const products` → `const products`
  - Next.js app router pages may only export default component (+ optional `metadata`, `generateMetadata`, etc.).
- Updated `next.config.js` for Next 15 compatibility:
  - Replaced `experimental.serverComponentsExternalPackages` with `serverExternalPackages`.
  - Removed `experimental.instrumentationHook` (use `instrumentation.ts` instead if needed).
  - Kept `experimental.optimizeCss: true` for Tailwind CSS v4 optimizer.

Result: `pnpm build` compiles successfully and static pages are generated.


