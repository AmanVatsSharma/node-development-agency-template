-- Quick Wins Implementation - Database Migration
-- Adds conversion value, attribution tracking, and lead quality fields

-- 1. Add conversion value fields to LandingPageConfig
ALTER TABLE "LandingPageConfig" 
ADD COLUMN IF NOT EXISTS "defaultLeadValue" INTEGER,
ADD COLUMN IF NOT EXISTS "enableDynamicValues" BOOLEAN DEFAULT false;

-- 2. Add attribution tracking fields to Lead
ALTER TABLE "Lead"
ADD COLUMN IF NOT EXISTS "gclid" TEXT,
ADD COLUMN IF NOT EXISTS "utmSource" TEXT,
ADD COLUMN IF NOT EXISTS "utmMedium" TEXT,
ADD COLUMN IF NOT EXISTS "utmCampaign" TEXT,
ADD COLUMN IF NOT EXISTS "utmTerm" TEXT,
ADD COLUMN IF NOT EXISTS "utmContent" TEXT,
ADD COLUMN IF NOT EXISTS "fbclid" TEXT,
ADD COLUMN IF NOT EXISTS "referrer" TEXT;

-- 3. Add lead quality fields to Lead
ALTER TABLE "Lead"
ADD COLUMN IF NOT EXISTS "budget" TEXT,
ADD COLUMN IF NOT EXISTS "timeline" TEXT,
ADD COLUMN IF NOT EXISTS "conversionValue" INTEGER,
ADD COLUMN IF NOT EXISTS "leadScore" INTEGER;

-- 4. Create indexes for better query performance
CREATE INDEX IF NOT EXISTS "Lead_gclid_idx" ON "Lead"("gclid");
CREATE INDEX IF NOT EXISTS "Lead_utmCampaign_idx" ON "Lead"("utmCampaign");

-- 5. Update existing business-website landing page with default value
UPDATE "LandingPageConfig"
SET "defaultLeadValue" = 15000,
    "enableDynamicValues" = true
WHERE "slug" = 'business-website';

-- Verify the changes
SELECT 
  slug,
  name,
  "defaultLeadValue",
  "enableDynamicValues",
  active
FROM "LandingPageConfig"
ORDER BY name;
