/**
 * @fileoverview Company Profile (Single Source of Truth)
 * @description Centralized, authenticity-first company identity used across UI + SEO + structured data.
 *
 * WHY THIS EXISTS:
 * - Avoids "fake" / placeholder data (e.g. random US address, "#" social links)
 * - Keeps legal identifiers consistent everywhere (CIN/GST/incorporation date)
 * - Makes it easy to update without hunting through many pages/components
 *
 * GUIDELINES (Authenticity-first):
 * - If you don't have a verified public URL (LinkedIn, GitHub, etc.), keep it undefined.
 * - Do NOT put placeholder addresses/phone numbers into structured data.
 * - Keep claims (Fortune 500, ROAS, retention) only if you can substantiate.
 */

export type CompanySocialKey =
  | "linkedin"
  | "x"
  | "facebook"
  | "instagram"
  | "youtube"
  | "github";

export interface CompanyProfile {
  brandName: string;
  legalName: string;
  websiteUrl: string;
  contactEmail: string;
  legal: {
    cin?: string;
    gst?: string;
    incorporationDateISO?: string; // e.g. "2025-04-28"
    registrationState?: string; // e.g. "Haryana, India"
  };
  founder?: {
    name: string;
    title?: string;
  };
  // Keep optional: only add if you have verified public URLs
  social?: Partial<Record<CompanySocialKey, string>>;
}

/**
 * Company profile used throughout the site.
 * Update this file to reflect real/verified public information.
 */
export const companyProfile: CompanyProfile = {
  brandName: "Enterprise Hero",
  legalName: "Vedpragya Bharat Private Limited",
  websiteUrl: "https://enterprisehero.com",
  contactEmail: "info@enterprisehero.com",
  legal: {
    cin: "U47912HR2025PTC131357",
    gst: "06AALCV0051A1ZV",
    // Source: /pages/legal/company-info
    incorporationDateISO: "2025-04-28",
    registrationState: "Haryana, India",
  },
  founder: {
    name: "Aman Kumar Sharma",
    title: "Founder & CEO",
  },
  // IMPORTANT: Keep these undefined unless you have the exact URLs.
  // Example:
  // social: { linkedin: "https://www.linkedin.com/company/<your-handle>" }
  social: {},
};

