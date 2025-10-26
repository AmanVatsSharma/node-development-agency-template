# Policy Pages Documentation

**Last Updated:** January 2025  
**Purpose:** Comprehensive documentation for all legal policy pages and footer navigation structure  
**Company:** Vedpragya Bharat Private Limited (Enterprise Hero)  
**CIN:** U47912HR2025PTC131357  
**GST:** 06AALCV0051A1ZV

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Legal Pages Structure](#legal-pages-structure)
3. [Footer Navigation](#footer-navigation)
4. [Update Procedures](#update-procedures)
5. [Flowchart](#flowchart)
6. [Quick Reference](#quick-reference)

---

## Overview

This documentation covers all legal and policy pages required for business verification and compliance. As a service-based business providing software development and digital solutions, we maintain transparent policies for clients and compliance purposes.

### Files Structure
```
/app/pages/legal/
├── privacy-policy/
│   └── page.tsx          # Privacy Policy (GDPR compliance)
├── terms-of-service/
│   └── page.tsx          # Terms of Service
├── cancellations-refunds/
│   └── page.tsx          # Refunds & Cancellation Policy ✨ NEW
├── shipping-policy/
│   └── page.tsx          # Shipping Policy (Not Applicable) ✨ NEW
├── company-info/
│   └── page.tsx          # Company Information
└── POLICY_PAGES_DOCUMENTATION.md  # This file
```

---

## Legal Pages Structure

### 1. Privacy Policy (`/pages/legal/privacy-policy`)

**Purpose:** Explains how we collect, use, and protect user data  
**Compliance:** GDPR, CCPA, and international data protection standards  
**Key Sections:**
- Information collection practices
- Data usage and security measures
- User rights (access, correction, deletion)
- Global operations and data transfers
- Contact information

**Last Updated:** Dynamic (automatically displays current date)

---

### 2. Terms of Service (`/pages/legal/terms-of-service`)

**Purpose:** Legal terms and conditions for service engagement  
**Key Sections:**
- Service description
- User obligations
- Intellectual property rights
- Limitation of liability
- Dispute resolution
- Governing law (Indian jurisdiction)

**Last Updated:** Dynamic (automatically displays current date)

---

### 3. Cancellations & Refunds Policy (`/pages/legal/cancellations-refunds`) ✨ NEW

**Purpose:** Comprehensive refund and cancellation terms for service-based business  
**Key Sections:**
- **Cancellation Timeline & Refunds:**
  - 100% refund: Before project start
  - 75% refund: Within 7 days of project start
  - 50% refund: After work begins (in progress)
  - 0% refund: After milestone delivery
  - 0% refund: After final delivery
- **Refund Process:**
  - Request procedure via email (refunds@enterprisehero.com)
  - Processing timeline: 15-30 business days
  - Refund method: Original payment method
- **Non-Refundable Items:**
  - Third-party licenses
  - Hosting and domain costs
  - Custom development after approval
  - Consulting hours consumed
  - Project management fees
- Dispute resolution procedures
- Special circumstances (force majeure, quality issues)

**Contact:** refunds@enterprisehero.com

---

### 4. Shipping Policy (`/pages/legal/shipping-policy`) ✨ NEW

**Purpose:** Clarifies that shipping is not applicable for service-based business  
**Key Sections:**
- **Important Notice:** Shipping policy not applicable
- **Service-Based Business:** Digital services only (no physical products)
- **Service Delivery Timeline:**
  - Initial consultation: 1-2 business days
  - Project kickoff: 3-5 business days
  - Development milestones: Per project timeline
  - Final delivery: Code repository handover
  - Post-delivery support: Ongoing maintenance
- **What You Receive:** Digital deliverables only
- **No Physical Shipping:** All deliverables are digital

**Note:** This page explicitly states that physical shipping is not applicable as we are a service-based business providing software development and digital solutions.

---

### 5. Company Info (`/pages/legal/company-info`)

**Purpose:** Official company registration and legal information  
**Key Information:**
- Legal Name: Vedpragya Bharat Private Limited
- Brand Name: Enterprise Hero
- CIN: U47912HR2025PTC131357
- GST: 06AALCV0051A1ZV
- Registered Address: Haryana, India
- Founder: Aman Kumar Sharma
- Global Offices: India, Dubai, California, Toronto, Shenzhen

---

## Footer Navigation

### Reorganized Two-Row Layout ✨ UPDATED

The footer navigation has been reorganized into a **two-row grid layout** for better organization and readability while **keeping ALL existing links**.

#### Row 1 - Primary Navigation (12 columns total)

| Column Span | Section | Contents |
|------------|---------|----------|
| 3 cols | Company Info + Social | Logo, description, CIN/GST, social icons |
| 2 cols | Quick Links | Home, About, Portfolio, Blog, Resources, Contact |
| 2 cols | Development Services | Next.js, React.js, Web Dev, Mumbai, Healthcare (8 services) |
| 2 cols | Business Solutions | AI Chatbot, AI Voice, WhatsApp, CRM, Healthcare, Google Ads, SEO (7 services) |
| 3 cols | Google Ads Ecosystem | Complete Google Ads services (9 services) |

#### Row 2 - Secondary Navigation (12 columns total)

| Column Span | Section | Contents |
|------------|---------|----------|
| 3 cols | E-Commerce Solutions | Shopify migration, product pages, setup, all services (4 services) |
| 3 cols | Trading & Finance | Trading software, Market Data API (2 services) |
| 3 cols | Global Offices | All 5 offices with expand/collapse |
| 3 cols | Legal & Compliance | Privacy, Terms, Refunds, Shipping, Company Info, Sitemap (6 links) ✨ |

### Layout Pattern

```typescript
// Navigation data structure
export const footerNavigation = {
  quickLinks: [...],
  developmentServices: [...],
  googleAdsEcosystem: [...],
  businessSolutions: [...],
  ecommerceSolutions: [...],
  tradingFinance: [...],
  legal: [
    "Privacy Policy",           // Existing
    "Terms of Service",         // Existing
    "Cancellations & Refunds",  // ✨ NEW
    "Shipping Policy",          // ✨ NEW
    "Company Info",             // Existing
    "Sitemap"                  // Existing
  ]
};
```

---

## Update Procedures

### How to Update Policy Content

1. **Navigate to specific policy file** in `/app/pages/legal/[policy-name]/page.tsx`

2. **Update the content** within the structured sections:
   - Hero section (title, description, last updated date)
   - Company information box
   - Policy content sections

3. **Update metadata** (SEO):
   ```typescript
   export const metadata: Metadata = {
     title: "Policy Name | Enterprise Hero...",
     description: "Policy description for SEO",
     keywords: "relevant, keywords, here",
   };
   ```

4. **Test the changes** in development mode:
   ```bash
   npm run dev
   ```

5. **Update documentation** (this file) if significant changes are made

### Common Updates

**Updating Refund Percentages:**
- File: `/app/pages/legal/cancellations-refunds/page.tsx`
- Sections: "2. Cancellation Policy" or "4. Refund Terms"

**Updating Company Information:**
- Update in ALL policy files (company info box)
- File: `/app/data/navigation.ts` (footer legal section)
- Keep CIN, GST, and founder info consistent

**Adding New Legal Pages:**
1. Create new page in `/app/pages/legal/[name]/page.tsx`
2. Add to footer navigation in `/app/data/navigation.ts`
3. Update footer component if needed
4. Update this documentation

---

## Flowchart

```
Legal & Policy Pages Structure
│
├── Privacy Policy
│   ├── Data Collection
│   ├── Data Usage
│   ├── User Rights
│   └── Global Compliance
│
├── Terms of Service
│   ├── Service Description
│   ├── User Obligations
│   ├── IP Rights
│   └── Dispute Resolution
│
├── Cancellations & Refunds ✨ NEW
│   ├── Refund Tiers (100%, 75%, 50%, 0%)
│   ├── Request Process
│   ├── Non-Refundable Items
│   └── Dispute Resolution
│
├── Shipping Policy ✨ NEW
│   ├── Not Applicable (Service-Based)
│   ├── Digital Delivery
│   ├── Delivery Timeline
│   └── No Physical Products
│
└── Company Info
    ├── Legal Registration
    ├── Global Offices
    └── Contact Info
```

---

## Quick Reference

### All Policy Pages

| Page | Route | Purpose | Last Updated |
|------|-------|---------|--------------|
| Privacy Policy | `/pages/legal/privacy-policy` | Data protection | Dynamic |
| Terms of Service | `/pages/legal/terms-of-service` | Service agreement | Dynamic |
| **Cancellations & Refunds** | `/pages/legal/cancellations-refunds` | Refund policy | Dynamic ✨ |
| **Shipping Policy** | `/pages/legal/shipping-policy` | Not applicable | Dynamic ✨ |
| Company Info | `/pages/legal/company-info` | Company details | Static |

### Footer Navigation Quick Links

| Section | Links Count | Includes |
|---------|-------------|----------|
| Quick Links | 6 | Home, About, Portfolio, Blog, Resources, Contact |
| Development Services | 8 | Next.js, React, Web Dev, Mumbai, Healthcare, etc. |
| Business Solutions | 7 | AI services, CRM, healthcare, Google Ads, SEO |
| Google Ads Ecosystem | 9 | Complete Google Ads services suite |
| E-Commerce Solutions | 4 | Shopify services |
| Trading & Finance | 2 | Trading software, Market Data |
| **Legal & Compliance** | **6** | **Privacy, Terms, Refunds, Shipping, Company, Sitemap** ✨ |
| Global Offices | 5 | India, Dubai, California, Toronto, Shenzhen |

### Contact Information

**Company Legal:**  
- Legal Name: Vedpragya Bharat Private Limited  
- Brand: Enterprise Hero  
- CIN: U47912HR2025PTC131357  
- GST: 06AALCV0051A1ZV  
- Registered: Haryana, India  
- Founder: Aman Kumar Sharma  

**Contact Emails:**  
- General: info@enterprisehero.com  
- Refunds: refunds@enterprisehero.com  
- Support: support@enterprisehero.com  
- Privacy: privacy@enterprisehero.com  

**Global Offices:**  
- India (HQ): Gurugram, Noida, Bangalore  
- Dubai: Middle East Operations  
- California: Tech R&D  
- Toronto: North America Ops  
- Shenzhen: Asia-Pacific  

---

## Console Logging

All policy pages include console logging for debugging:

```typescript
console.log('[Policy-Name] Page loaded - [description]');
```

Footer component logs:
```typescript
console.log('[Footer] Rendering footer');
console.log('[Footer] Show all offices:', showAllOffices);
console.log('[Footer] [Link/Service] clicked: [name]');
```

---

## Testing Checklist

### Before Deploying Updates

- [ ] All policy pages load correctly
- [ ] Company information is consistent across all pages
- [ ] Last updated dates display correctly
- [ ] Footer navigation includes all new pages
- [ ] Footer two-row layout displays properly
- [ ] Mobile responsiveness works (collapsible sections)
- [ ] All links navigate correctly
- [ ] Console logs are present (check browser console)
- [ ] Dark mode works on all pages
- [ ] SEO metadata is properly set

---

## Notes

### Service-Based Business
Enterprise Hero operates as a **service-based business**, providing:
- Software development services
- Digital solutions and platforms
- Consulting and technical services
- No physical products or shipping

### Refund Tiers
Refunds follow a structured tier system based on project progress:
- **100%:** Before work starts
- **75%:** Within 7 days
- **50%:** Work in progress
- **0%:** After milestones or delivery

### Footer Organization
The footer maintains **ALL existing links** but is now organized in a cleaner two-row layout for better readability and user experience.

---

**Document Version:** 1.0.0  
**Created:** January 2025  
**Maintained By:** Development Team

