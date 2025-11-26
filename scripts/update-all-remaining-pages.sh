#!/bin/bash
# Batch update script for remaining pages
# This script provides the exact patterns to update each page

PAGES=(
  "performance-max-campaigns"
  "google-ads-audit-strategy"
  "youtube-advertising-management"
  "ai-voice-agents"
  "healthcare-software-development"
  "trading-software"
  "nse-mcx-live-market-data"
  "shopify-product-page-customization"
  "shopify-store-setup"
  "website-development"
  "web-development-mumbai"
  "website-services"
  "google-ads-ecosystem"
)

echo "Pages to update: ${#PAGES[@]}"
echo "Use the search_replace tool to update each page with:"
echo "1. Add imports"
echo "2. Add breadcrumbs after main"
echo "3. Add related services before final CTA"
