# Environment Variables Configuration

Copy this configuration to your `.env.local` file and fill in your values.

```bash
# ============================================
# Database Configuration
# ============================================
DATABASE_URL="postgresql://user:password@localhost:5432/agency_db"

# ============================================
# NextAuth Configuration
# ============================================
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-key-here-replace-with-random-string"
NEXTAUTH_URL="http://localhost:3000"

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
```

## Setup Instructions

1. **Copy configuration**: Create `.env.local` in project root
2. **Generate secret**: Run `openssl rand -base64 32` for NEXTAUTH_SECRET
3. **Configure Zoho**: Get credentials from https://api-console.zoho.com/
4. **Configure Google**: Get conversion ID from Google Ads console
5. **Run migrations**: `pnpm db:push`
6. **Seed database**: `pnpm db:seed`
7. **Start server**: `pnpm dev`

## Default Admin Credentials

After seeding:
- Email: `admin@example.com`
- Password: `password123`
- Role: `admin`

**⚠️ Change password immediately in production!**
