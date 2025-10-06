# 🔐 Environment Variables - Complete Reference

## Required Environment Variables

Copy these to your `.env` or `.env.local` file.

---

## 📊 Google Ads Configuration

### Basic Tracking (Required)
```bash
# Google Ads Conversion ID
# Get from: Google Ads → Tools → Conversions → Your conversion action
# Format: AW-XXXXXXXXXX
GOOGLE_CONVERSION_ID="AW-123456789"
```

### Server-Side API (Optional but Recommended)
```bash
# Google Cloud OAuth Credentials
# Get from: Google Cloud Console → APIs & Services → Credentials
GOOGLE_ADS_CLIENT_ID="123456789-abcdefghijklmnop.apps.googleusercontent.com"
GOOGLE_ADS_CLIENT_SECRET="ABCDEF-xyz123_secretKey"

# Google Ads Developer Token
# Get from: Google Ads → Tools → API Center
# Request access if you don't have one
GOOGLE_ADS_DEVELOPER_TOKEN="abc123XYZ-defABC456"

# OAuth Refresh Token
# Generate using: Google OAuth Playground
# See: SERVER_SIDE_CONVERSION_SETUP.md
GOOGLE_ADS_REFRESH_TOKEN="1//abc123xyz..."

# Google Ads Customer ID
# Get from: Google Ads dashboard (top right, number like 123-456-7890)
# Format: 1234567890 (remove dashes)
GOOGLE_ADS_CUSTOMER_ID="1234567890"
```

---

## 🔗 Zoho CRM Configuration

### OAuth Credentials
```bash
# Zoho Client ID and Secret
# Get from: Zoho API Console → https://api-console.zoho.com
ZOHO_CLIENT_ID="your-zoho-client-id"
ZOHO_CLIENT_SECRET="your-zoho-client-secret"

# Zoho Refresh Token (generated via OAuth flow)
# Will be set automatically via admin dashboard
ZOHO_REFRESH_TOKEN="automatically-set-via-admin"
```

---

## 🗄️ Database Configuration

### PostgreSQL Database
```bash
# PostgreSQL connection string
# Format: postgresql://user:password@host:port/database
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# For production (Vercel, Railway, etc.):
# DATABASE_URL="postgresql://user:password@host.region.provider.com:5432/database?sslmode=require"
```

---

## 🔒 Security & Authentication

### Cron Job Authentication
```bash
# Secret for authenticating cron jobs
# Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
CRON_SECRET="your-random-secret-change-this-abc123xyz789"
```

### Next.js Configuration
```bash
# Next.js app URL (for OAuth callbacks)
NEXT_PUBLIC_APP_URL="https://your-domain.com"

# Or for local development:
# NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 📧 Email Configuration (Optional)

### SMTP for Email Notifications
```bash
# Email service configuration (optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM="noreply@your-domain.com"
```

---

## 🌐 Production Configuration

### Vercel Deployment
```bash
# Production URL
NEXT_PUBLIC_SITE_URL="https://your-domain.com"

# Environment
NODE_ENV="production"
```

---

## 📝 Complete .env Template

```bash
# ==============================================
# DATABASE
# ==============================================
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# ==============================================
# GOOGLE ADS - BASIC TRACKING
# ==============================================
GOOGLE_CONVERSION_ID="AW-123456789"

# ==============================================
# GOOGLE ADS - SERVER-SIDE API (Optional)
# ==============================================
GOOGLE_ADS_CLIENT_ID="123456789-abc.apps.googleusercontent.com"
GOOGLE_ADS_CLIENT_SECRET="ABC-secret123"
GOOGLE_ADS_DEVELOPER_TOKEN="abc123-DEV"
GOOGLE_ADS_REFRESH_TOKEN="1//refresh_token_here"
GOOGLE_ADS_CUSTOMER_ID="1234567890"

# ==============================================
# ZOHO CRM
# ==============================================
ZOHO_CLIENT_ID="your-zoho-client-id"
ZOHO_CLIENT_SECRET="your-zoho-client-secret"
ZOHO_REFRESH_TOKEN="auto-generated-via-admin"

# ==============================================
# SECURITY
# ==============================================
CRON_SECRET="generate-random-32-byte-hex"

# ==============================================
# APP CONFIGURATION
# ==============================================
NEXT_PUBLIC_APP_URL="https://your-domain.com"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NODE_ENV="production"

# ==============================================
# EMAIL (Optional)
# ==============================================
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM="noreply@your-domain.com"
```

---

## 🔧 How to Set Environment Variables

### Local Development (.env.local)
1. Create `.env.local` in project root
2. Copy template above
3. Fill in your values
4. Restart dev server: `npm run dev`

### Vercel Deployment
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add each variable:
   - Name: `GOOGLE_ADS_CLIENT_ID`
   - Value: `your-value-here`
   - Environment: Production, Preview, Development
4. Click "Save"
5. Redeploy for changes to take effect

### Railway Deployment
1. Go to Railway Dashboard → Your Project
2. Variables tab
3. Click "+ New Variable"
4. Add each variable
5. Redeploy

### Docker
Add to `docker-compose.yml`:
```yaml
environment:
  - DATABASE_URL=postgresql://...
  - GOOGLE_ADS_CLIENT_ID=...
  # ... other variables
```

Or use `.env` file with Docker:
```bash
docker run --env-file .env your-image
```

---

## ✅ Validation Checklist

### Required for Basic Operation
- [ ] `DATABASE_URL` - Database connection
- [ ] `GOOGLE_CONVERSION_ID` - For client-side tracking

### Required for Google Ads Server-Side
- [ ] `GOOGLE_ADS_CLIENT_ID`
- [ ] `GOOGLE_ADS_CLIENT_SECRET`
- [ ] `GOOGLE_ADS_DEVELOPER_TOKEN`
- [ ] `GOOGLE_ADS_REFRESH_TOKEN`
- [ ] `GOOGLE_ADS_CUSTOMER_ID`

### Required for Zoho CRM
- [ ] `ZOHO_CLIENT_ID`
- [ ] `ZOHO_CLIENT_SECRET`

### Required for Cron Jobs
- [ ] `CRON_SECRET`

### Recommended
- [ ] `NEXT_PUBLIC_APP_URL`
- [ ] `NODE_ENV`

---

## 🧪 Test Your Configuration

### Check Environment Variables Loaded
```bash
# In your app, add this temporarily:
console.log('Google Ads configured:', !!process.env.GOOGLE_ADS_CLIENT_ID);
console.log('Database configured:', !!process.env.DATABASE_URL);
```

### Test Database Connection
```bash
npx prisma db pull
```

Should connect successfully if `DATABASE_URL` is correct.

### Test Google Ads API
Visit: `/api/admin/integrations`
- Should load without errors if basic config is correct

---

## 🔍 Troubleshooting

### Error: "Environment variable not found"
**Solution:** 
1. Check variable name spelling
2. Restart dev server after adding variables
3. In Vercel/Railway, redeploy after adding variables

### Error: "Database connection failed"
**Solution:**
- Verify `DATABASE_URL` format
- Check database is running
- Test connection with: `npx prisma db pull`

### Error: "Google Ads API unauthorized"
**Solution:**
- Verify all 5 Google Ads variables are set
- Check refresh token hasn't expired
- Regenerate refresh token if needed

### Error: "Cron job failing"
**Solution:**
- Check `CRON_SECRET` matches in both .env and cron config
- Verify endpoint is accessible
- Check logs for detailed error

---

## 📚 Related Documentation

- **Google Ads Setup:** `GOOGLE_ADS_SETUP_GUIDE.md`
- **Server-Side Conversions:** `SERVER_SIDE_CONVERSION_SETUP.md`
- **Quick Start:** `QUICK_START_CONVERSIONS.md`
- **Admin Dashboard:** `/pages/admin/integrations`

---

## 🔐 Security Best Practices

### DO:
✅ Use `.env.local` for local development (git-ignored)  
✅ Use environment variables in production (Vercel/Railway)  
✅ Generate strong random secrets (32+ characters)  
✅ Rotate secrets periodically (every 90 days)  
✅ Use different values for dev/staging/production  

### DON'T:
❌ Commit `.env` files to git  
❌ Share environment variables in public channels  
❌ Use production credentials in development  
❌ Hard-code secrets in source code  
❌ Use weak/predictable secrets  

---

## 📋 Quick Reference

| Variable | Required | Used For | Get From |
|----------|----------|----------|----------|
| `DATABASE_URL` | ✅ Yes | Database connection | Your DB provider |
| `GOOGLE_CONVERSION_ID` | ✅ Yes | Client-side tracking | Google Ads dashboard |
| `GOOGLE_ADS_CLIENT_ID` | 🟡 Recommended | Server-side API | Google Cloud Console |
| `GOOGLE_ADS_CLIENT_SECRET` | 🟡 Recommended | Server-side API | Google Cloud Console |
| `GOOGLE_ADS_DEVELOPER_TOKEN` | 🟡 Recommended | Server-side API | Google Ads API Center |
| `GOOGLE_ADS_REFRESH_TOKEN` | 🟡 Recommended | Server-side API | OAuth Playground |
| `GOOGLE_ADS_CUSTOMER_ID` | 🟡 Recommended | Server-side API | Google Ads dashboard |
| `ZOHO_CLIENT_ID` | 🟡 Optional | Zoho CRM integration | Zoho API Console |
| `ZOHO_CLIENT_SECRET` | 🟡 Optional | Zoho CRM integration | Zoho API Console |
| `CRON_SECRET` | 🟡 Recommended | Secure cron jobs | Generate random |

---

**Next Step:** Configure your environment variables, then proceed with deployment!

🔒 **Remember: Never commit sensitive credentials to version control!** 🔒
