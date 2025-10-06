# 🚀 Quick Setup Guide

## Prerequisites
- Node.js 18+ installed
- PostgreSQL database
- pnpm package manager

## Step-by-Step Setup

### 1. Environment Variables
Create `.env.local` in project root:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/agency_db"

# NextAuth (IMPORTANT: Generate a secure secret!)
# Run: openssl rand -base64 32
NEXTAUTH_SECRET="your-generated-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Zoho CRM (Optional for testing - can configure later in admin UI)
ZOHO_CLIENT_ID="your-zoho-client-id"
ZOHO_CLIENT_SECRET="your-zoho-client-secret"
ZOHO_REFRESH_TOKEN="your-zoho-refresh-token"
ZOHO_DOMAIN="https://www.zohoapis.com"

# Google Ads (Optional for testing)
GOOGLE_CONVERSION_ID="AW-XXXXXXXXXX"
GOOGLE_API_KEY="your-google-api-key"
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Setup Database
```bash
# Push Prisma schema to database
pnpm db:push

# Seed database with admin user and sample data
pnpm db:seed
```

This creates an admin user:
- **Email**: `admin@example.com`
- **Password**: `password123`
- **Role**: `admin`

### 4. Start Development Server
```bash
pnpm dev
```

Server will start at `http://localhost:3000`

### 5. Access Admin Panel

1. **Login**
   - Visit: `http://localhost:3000/login`
   - Email: `admin@example.com`
   - Password: `password123`
   - Click "Sign In"

2. **You should be redirected to**: `http://localhost:3000/pages/admin/integrations`

3. **You should see**:
   - Modern enterprise dashboard with statistics cards
   - Zoho CRM and Google Ads configuration tabs
   - Integration logs viewer
   - Test buttons for validating connections

---

## Testing the Implementation

### Test 1: Authentication Flow ✅
1. Visit `/pages/admin/integrations` without logging in
2. Should redirect to `/login`
3. Login with admin credentials
4. Should redirect back to admin page
5. Check browser console for auth logs

### Test 2: Middleware Protection ✅
1. Try accessing `/api/admin/integrations` without auth
2. Should get 401 Unauthorized JSON response
3. Login first, then try again
4. Should get settings JSON response

### Test 3: Admin Dashboard ✅
1. Check statistics cards show counts
2. Switch between Zoho and Google tabs
3. Logs viewer should show entries
4. Filter tabs should update counts
5. User badge should show your email and role

### Test 4: Settings Save ✅
1. Change any setting (e.g., Zoho Client ID)
2. "Unsaved Changes" alert should appear
3. Click "Save Settings"
4. Button shows "Saving..." spinner
5. Settings saved successfully
6. Alert disappears

### Test 5: Zoho Connection Test (if configured) ✅
1. Enter Zoho credentials in settings
2. Click "Save Settings"
3. Click "Test Zoho Connection"
4. Should show success/error alert
5. Check logs for test entry

### Test 6: Google Config Test (if configured) ✅
1. Enter Google Conversion ID
2. Click "Save Settings"
3. Click "Test Google Config"
4. Should show success/error alert
5. Check logs for test entry

### Test 7: Test Lead Push (if Zoho configured) ✅
1. Ensure Zoho credentials are saved
2. Click "Test Lead Push"
3. Should create sandbox lead in Zoho
4. Returns Zoho Lead ID on success
5. Check logs for lead creation

### Test 8: Dark Mode ✅
1. Toggle system theme to dark mode
2. Admin dashboard should switch to dark theme
3. All components should be readable
4. No color contrast issues

### Test 9: Responsive Design ✅
1. Resize browser window
2. Dashboard should adapt to smaller screens
3. Cards should stack on mobile
4. Tables should scroll horizontally if needed

### Test 10: Sign Out ✅
1. Click "Sign Out" button in header
2. Should redirect to login page
3. Try accessing admin page again
4. Should redirect to login (not authenticated)

---

## Troubleshooting

### Issue: "Loading..." stuck forever
**Solution**: Check browser console and terminal for errors. Verify:
- NEXTAUTH_SECRET is set in `.env.local`
- Database is running and accessible
- User exists in database (run `pnpm db:seed` again)

### Issue: "Module not found" errors
**Solution**: 
```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Issue: Login fails with "Invalid credentials"
**Solution**:
- Verify admin user exists in database
- Check password is exactly `password123`
- Try re-seeding: `pnpm db:seed`

### Issue: 401 Unauthorized on admin page
**Solution**:
- Check user role is `admin` or `editor` in database
- Clear browser cookies and login again
- Verify NEXTAUTH_SECRET matches in all places

### Issue: Middleware crashes with auth error
**Solution**:
- Ensure `auth.ts` exports are correct
- Check Next.js version is 15+
- Verify next-auth is v4.24.11 (v5 compatible)

---

## Console Logs Guide

### Browser Console
- `[Admin Page]` - Admin dashboard operations
- `[Login]` - Login page operations
- `[Providers]` - SessionProvider initialization

### Server Terminal
- `[Auth]` - NextAuth operations
- `[Middleware]` - Route protection decisions
- `[API]` - API route processing
- `[Admin]` - Admin API operations

---

## Next Steps

1. ✅ Verify authentication works
2. ✅ Explore the admin dashboard
3. ✅ Configure real Zoho/Google credentials
4. ✅ Test integrations with test buttons
5. ✅ Monitor logs for activity
6. 📖 Read `app/pages/admin/integrations/README.md` for detailed docs
7. 🏗️ Review `app/pages/admin/integrations/ARCHITECTURE.md` for technical details
8. 🚀 Deploy to production when ready

---

## Production Deployment

### Before deploying:
1. Generate strong NEXTAUTH_SECRET (64+ characters)
2. Use production database URL
3. Set production Zoho credentials
4. Set production Google Ads conversion ID
5. Change admin password immediately after first login
6. Enable HTTPS only
7. Set up database backups
8. Configure monitoring/alerts

### Vercel Deployment:
```bash
# Set environment variables in Vercel dashboard
vercel env add NEXTAUTH_SECRET
vercel env add DATABASE_URL
vercel env add NEXTAUTH_URL
# ... add all other env vars

# Deploy
vercel --prod
```

---

## Security Checklist

- [x] NEXTAUTH_SECRET is strong random string
- [x] Database credentials not exposed
- [x] Middleware protects admin routes
- [x] JWT tokens have expiry (30 days)
- [x] Passwords hashed with bcrypt
- [x] Role-based access control enforced
- [x] CSRF protection enabled
- [x] Input validation on all forms
- [ ] Rate limiting (TODO)
- [ ] MFA/2FA (TODO)
- [ ] Account lockout (TODO)

---

## Support Resources

- **Documentation**: `app/pages/admin/integrations/README.md`
- **Architecture**: `app/pages/admin/integrations/ARCHITECTURE.md`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Environment Setup**: `ENV_VARIABLES.md`

---

**Happy Coding! 🎉**
