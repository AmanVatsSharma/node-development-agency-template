# Environment Variables Configuration

Copy this configuration to your `.env.local` file and fill in your values.

```bash
# ============================================
# Database Configuration
# ============================================
DATABASE_URL="postgresql://user:password@localhost:5432/agency_db"

# ============================================
# Simple Admin Authentication
# ============================================
# Simple password for admin panel access
# Change this to a secure password in production!
ADMIN_PASSWORD="your-secure-admin-password-here"

# ============================================
# Zoho CRM Integration
# ============================================
ZOHO_CLIENT_ID="your-zoho-client-id"
ZOHO_CLIENT_SECRET="your-zoho-client-secret"
ZOHO_REFRESH_TOKEN="your-zoho-refresh-token"
ZOHO_DOMAIN="https://www.zohoapis.com"

# ============================================
# Google Ads Integration
# ============================================
GOOGLE_CONVERSION_ID="AW-123456789"
GOOGLE_API_KEY="your-google-api-key"
GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# ============================================
# AI Sales Agent (Optional - Configure via Admin)
# ============================================
# Configure your AI sales agent via the admin panel at /admin/ai-agent
# Supported providers: OpenAI, Claude (Anthropic), Google Gemini
# API keys are stored encrypted in database (configured via admin UI)
```

## Setup Instructions

1. **Copy configuration**: Create `.env.local` in project root
2. **Set admin password**: Choose a strong password for ADMIN_PASSWORD
3. **Configure Zoho**: Get credentials from https://api-console.zoho.com/
4. **Configure Google**: Get conversion ID from Google Ads console
5. **Run migrations**: `pnpm db:push`
6. **Start server**: `pnpm dev`

## Admin Access

- URL: `/login`
- Password: Set via `ADMIN_PASSWORD` environment variable
- No database or user management required

**⚠️ Use a strong password in production!**

## SEO Notes

Admin pages are protected from search engines:
- Blocked in `robots.txt`
- Not included in `sitemap.xml`
- Include `noindex, nofollow` meta tags
