import type { Metadata } from "next";
import { buildPageMetadata } from "@/app/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Services | Enterprise-Grade Build & Optimization",
  description:
    "Enterprise-grade web development covering Next.js applications, SEO optimization, analytics integration, and growth-focused consulting.",
  path: "/pages/web-development",
  keywords: [
    "web development services",
    "nextjs development",
    "enterprise web development",
    "seo optimized websites",
  ],
});


