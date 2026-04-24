-- Migration: Add Lead Contact Status and Notes
-- Description: Adds contactStatus and contactNotes fields to Lead model for sales pipeline management
-- Date: 2026-04-24

-- Add contactStatus field (pipeline stage, separate from Zoho push status)
ALTER TABLE "Lead" ADD COLUMN IF NOT EXISTS "contactStatus" TEXT NOT NULL DEFAULT 'new';

-- Add contactNotes field for internal notes
ALTER TABLE "Lead" ADD COLUMN IF NOT EXISTS "contactNotes" TEXT;

-- Add index on contactStatus for filtering performance
CREATE INDEX IF NOT EXISTS "Lead_contactStatus_idx" ON "Lead"("contactStatus");
