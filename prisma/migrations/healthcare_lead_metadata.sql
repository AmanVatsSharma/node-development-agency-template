-- Migration: Add Healthcare Lead Metadata
-- Description: Add comprehensive healthcare-specific lead metadata tracking
-- Date: 2024-01-XX
-- Author: Development Team

-- Create HealthcareLeadMetadata table
CREATE TABLE "HealthcareLeadMetadata" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "organization" TEXT,
    "position" TEXT,
    "healthcareType" TEXT,
    "currentSystem" TEXT,
    "budget" TEXT,
    "timeline" TEXT,
    "requirements" TEXT,
    "complianceNeeds" TEXT[],
    "integrationNeeds" TEXT[],
    "userCount" INTEGER,
    "patientVolume" TEXT,
    "platformPreference" TEXT,
    "deploymentType" TEXT,
    "dataMigration" BOOLEAN,
    "trainingRequired" BOOLEAN,
    "supportLevel" TEXT,
    "projectStage" TEXT,
    "decisionMakers" TEXT[],
    "budgetApproved" BOOLEAN,
    "timelineUrgent" BOOLEAN,
    "previousVendor" TEXT,
    "leadScore" INTEGER DEFAULT 0,
    "qualificationLevel" TEXT,
    "priority" TEXT,
    "followUpDate" TIMESTAMP(3),
    "notes" TEXT,
    "sourcePage" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmTerm" TEXT,
    "utmContent" TEXT,
    "referrer" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,
    "country" TEXT,
    "city" TEXT,
    "deviceType" TEXT,
    "browserType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HealthcareLeadMetadata_pkey" PRIMARY KEY ("id")
);

-- Create indexes for performance
CREATE UNIQUE INDEX "HealthcareLeadMetadata_leadId_key" ON "HealthcareLeadMetadata"("leadId");
CREATE INDEX "HealthcareLeadMetadata_leadId_idx" ON "HealthcareLeadMetadata"("leadId");
CREATE INDEX "HealthcareLeadMetadata_healthcareType_idx" ON "HealthcareLeadMetadata"("healthcareType");
CREATE INDEX "HealthcareLeadMetadata_leadScore_idx" ON "HealthcareLeadMetadata"("leadScore");
CREATE INDEX "HealthcareLeadMetadata_qualificationLevel_idx" ON "HealthcareLeadMetadata"("qualificationLevel");
CREATE INDEX "HealthcareLeadMetadata_createdAt_idx" ON "HealthcareLeadMetadata"("createdAt");

-- Add foreign key constraint
ALTER TABLE "HealthcareLeadMetadata" ADD CONSTRAINT "HealthcareLeadMetadata_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Add comments for documentation
COMMENT ON TABLE "HealthcareLeadMetadata" IS 'Extended lead information for healthcare software inquiries with comprehensive metadata tracking';
COMMENT ON COLUMN "HealthcareLeadMetadata"."leadId" IS 'Foreign key reference to main Lead table';
COMMENT ON COLUMN "HealthcareLeadMetadata"."healthcareType" IS 'Type of healthcare facility (Hospital, Clinic, Pharmacy, etc.)';
COMMENT ON COLUMN "HealthcareLeadMetadata"."complianceNeeds" IS 'Array of compliance requirements (HIPAA, GDPR, ISO 27001, etc.)';
COMMENT ON COLUMN "HealthcareLeadMetadata"."integrationNeeds" IS 'Required integrations (HL7, FHIR, DICOM, etc.)';
COMMENT ON COLUMN "HealthcareLeadMetadata"."leadScore" IS 'Lead quality score from 0-100 based on multiple factors';
COMMENT ON COLUMN "HealthcareLeadMetadata"."qualificationLevel" IS 'Lead qualification level (Hot, Warm, Cold)';
COMMENT ON COLUMN "HealthcareLeadMetadata"."priority" IS 'Lead priority level (High, Medium, Low)';
COMMENT ON COLUMN "HealthcareLeadMetadata"."decisionMakers" IS 'Array of decision maker roles involved';
COMMENT ON COLUMN "HealthcareLeadMetadata"."complianceNeeds" IS 'Array of compliance requirements needed';
COMMENT ON COLUMN "HealthcareLeadMetadata"."integrationNeeds" IS 'Array of required system integrations';