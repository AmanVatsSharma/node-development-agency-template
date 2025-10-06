-- Manual Migration: Add LandingPageConfig table
-- Run this if you can't use prisma migrate dev

-- Create LandingPageConfig table
CREATE TABLE IF NOT EXISTS "LandingPageConfig" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "leadSubmitLabel" TEXT,
    "callClickLabel" TEXT,
    "whatsappLabel" TEXT,
    "newsletterLabel" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LandingPageConfig_pkey" PRIMARY KEY ("id")
);

-- Create unique index on slug
CREATE UNIQUE INDEX IF NOT EXISTS "LandingPageConfig_slug_key" ON "LandingPageConfig"("slug");

-- Create index on slug
CREATE INDEX IF NOT EXISTS "LandingPageConfig_slug_idx" ON "LandingPageConfig"("slug");

-- Create index on active
CREATE INDEX IF NOT EXISTS "LandingPageConfig_active_idx" ON "LandingPageConfig"("active");

-- Insert initial data for business-website
INSERT INTO "LandingPageConfig" (
    "id",
    "slug",
    "name",
    "description",
    "leadSubmitLabel",
    "callClickLabel",
    "whatsappLabel",
    "newsletterLabel",
    "active",
    "notes",
    "createdAt",
    "updatedAt"
) VALUES (
    gen_random_uuid()::text,
    'business-website',
    'Business Website',
    'Main landing page for business website development services',
    NULL,
    NULL,
    NULL,
    NULL,
    true,
    'Main conversion landing page - configure conversion labels in admin dashboard',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
) ON CONFLICT (slug) DO NOTHING;

-- Insert other landing pages
INSERT INTO "LandingPageConfig" (
    "id",
    "slug",
    "name",
    "description",
    "active",
    "notes",
    "createdAt",
    "updatedAt"
) VALUES
(
    gen_random_uuid()::text,
    'seo-audit',
    'SEO Audit',
    'SEO audit landing page',
    true,
    'Configure conversion labels in admin dashboard',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),
(
    gen_random_uuid()::text,
    'reactjs-development',
    'React.js Development',
    'React.js development services landing page',
    true,
    'Configure conversion labels in admin dashboard',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
),
(
    gen_random_uuid()::text,
    'next-js-development',
    'Next.js Development',
    'Next.js development services landing page',
    true,
    'Configure conversion labels in admin dashboard',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)
ON CONFLICT (slug) DO NOTHING;

-- Verify the table was created
SELECT COUNT(*) as landing_pages_count FROM "LandingPageConfig";
