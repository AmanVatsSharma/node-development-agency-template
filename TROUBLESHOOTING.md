# 🔧 Troubleshooting Guide

## ✅ Issue Fixed: TypeError & 404 Error

### **What Was Wrong:**
1. **TypeError: Cannot read properties of undefined (reading 'custom')** - Shadcn UI components were trying to access theme colors that weren't defined in Tailwind v4's `@theme inline` directive.
2. **404 Error** - Route mismatch or server not recognizing the admin route.

### **What Was Fixed:**
I added the missing Shadcn UI color definitions to `app/globals.css`:
- ✅ Added `--card`, `--card-foreground`, `--popover`, etc. to `:root`
- ✅ Added `--primary-foreground`, `--secondary-foreground`, etc.
- ✅ Added `--muted`, `--muted-foreground`, `--accent-foreground`
- ✅ Added `--destructive`, `--border`, `--input`, `--ring`
- ✅ Added dark mode variants for all Shadcn colors
- ✅ Added `@theme inline` mappings for all colors

### **Now Try:**
1. Wait for the development server to fully start (20-30 seconds)
2. Visit: `http://localhost:3000/login`
3. Login with: `admin@example.com` / `password123`
4. You should be redirected to: `http://localhost:3000/pages/admin/integrations`

---

## Common Issues & Solutions

### Issue 1: "Module not found" errors
**Solution:**
```bash
# Clean install
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Issue 2: Development server won't start
**Solution:**
```bash
# Check if port 3000 is already in use
lsof -ti:3000 | xargs kill -9

# Or use a different port
pnpm dev -- -p 3001
```

### Issue 3: "Loading..." stuck on admin page
**Causes:**
- NEXTAUTH_SECRET not set
- Database not connected
- API routes failing

**Solution:**
```bash
# Check .env.local exists and has NEXTAUTH_SECRET
cat .env.local | grep NEXTAUTH_SECRET

# Generate if missing:
echo "NEXTAUTH_SECRET=$(openssl rand -base64 32)" >> .env.local

# Verify database connection
pnpm db:push
```

### Issue 4: Login fails with "Invalid credentials"
**Solution:**
```bash
# Re-seed database to ensure admin user exists
pnpm db:seed

# Check database directly
pnpm db:studio
# Navigate to User table and verify admin@example.com exists
```

### Issue 5: Middleware returns 401 Unauthorized
**Causes:**
- User role is not 'admin' or 'editor'
- Session cookie not being set
- NEXTAUTH_SECRET mismatch

**Solution:**
1. Clear browser cookies for localhost
2. Verify `.env.local` has NEXTAUTH_SECRET
3. Check user role in database:
```bash
pnpm db:studio
# User table → Find your user → Check 'role' field = 'admin'
```

### Issue 6: 404 on /pages/admin/integrations
**Note:** The route is `/pages/admin/integrations` (with `/pages` prefix) because the file is in `app/pages/admin/integrations/page.tsx`.

If you want the route to be `/admin/integrations` instead:
```bash
# Move the file:
mkdir -p app/admin/integrations
mv app/pages/admin/integrations/page.tsx app/admin/integrations/
mv app/pages/admin/integrations/*.md app/admin/integrations/

# Update middleware.ts matcher:
# From: '/pages/admin/:path*'
# To: '/admin/:path*'
```

### Issue 7: Tailwind classes not working
**Solution:**
```bash
# Restart dev server
pkill -f "next dev"
pnpm dev

# Or clear Next.js cache
rm -rf .next
pnpm dev
```

### Issue 8: Dark mode not working
**Solution:**
Check that ThemeProvider is properly configured in `app/layout.tsx`:
```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

---

## Debugging Checklist

### Before Testing:
- [ ] `.env.local` file exists with all required variables
- [ ] NEXTAUTH_SECRET is a strong random string (32+ characters)
- [ ] DATABASE_URL points to a running PostgreSQL database
- [ ] `pnpm db:push` completed successfully
- [ ] `pnpm db:seed` created admin user
- [ ] Development server started without errors

### During Testing:
- [ ] Browser console shows no errors (F12 → Console tab)
- [ ] Network tab shows successful API calls (F12 → Network tab)
- [ ] Check server terminal for error messages
- [ ] Verify cookies are being set (F12 → Application → Cookies)

### Browser Console Logs to Look For:
```
✅ Good logs:
[Providers] Initializing SessionProvider
[Auth] NextAuth v5 configuration loaded
[Middleware] NextAuth v5 middleware configured
[Admin Page] Loading initial data...
[Admin Page] Settings loaded

❌ Bad logs:
TypeError: Cannot read properties...
404 Not Found
401 Unauthorized
Network request failed
```

---

## Server Terminal Logs

### What to Look For:
```bash
✅ Good:
✓ Ready in 3.2s
○ Compiling / ...
✓ Compiled in 1.2s
[Auth] NextAuth v5 configuration loaded
[Middleware] NextAuth v5 middleware configured

❌ Bad:
Error: Cannot find module...
TypeError: ...
Failed to compile
```

---

## Quick Diagnostics

### Test 1: Check Database Connection
```bash
pnpm db:studio
# Should open Prisma Studio in browser
# Check if User table has admin@example.com
```

### Test 2: Test API Endpoints Manually
```bash
# After logging in, test API in another terminal:

# Get session (should return user data)
curl -b cookies.txt http://localhost:3000/api/auth/session

# Get integration settings (should return settings object)
curl -b cookies.txt http://localhost:3000/api/admin/integrations

# Get logs (should return logs array)
curl -b cookies.txt http://localhost:3000/api/admin/logs
```

### Test 3: Verify File Structure
```bash
# Check admin page exists
ls -la app/pages/admin/integrations/page.tsx

# Check auth route exists
ls -la app/api/auth/[...nextauth]/route.ts

# Check middleware exists
ls -la middleware.ts
```

---

## Environment Variables Debug

### Check Current Values:
```bash
# View (sanitized)
cat .env.local | sed 's/=.*/=***HIDDEN***/'

# Should show:
DATABASE_URL=***HIDDEN***
NEXTAUTH_SECRET=***HIDDEN***
NEXTAUTH_URL=***HIDDEN***
```

### Required Variables:
```bash
# Minimum required for admin panel to work:
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="<random-32-char-string>"
NEXTAUTH_URL="http://localhost:3000"
```

---

## Still Having Issues?

### 1. Check Versions
```bash
node --version  # Should be 18+
pnpm --version  # Should be 8+
```

### 2. Check Package Versions
```bash
cat package.json | grep -A 1 '"next":'
# Should show: "next": "15.2.1" or similar

cat package.json | grep -A 1 '"next-auth":'
# Should show: "next-auth": "^4.24.11"
```

### 3. Complete Clean Restart
```bash
# Nuclear option - clean everything
rm -rf node_modules
rm -rf .next
rm pnpm-lock.yaml
rm -rf dist
pnpm install
pnpm db:push
pnpm db:seed
pnpm dev
```

### 4. Check Browser
- Try incognito/private mode (fresh cookies)
- Try a different browser
- Clear all site data (cookies, cache, local storage)

### 5. Enable Debug Logging
In `auth.ts`, debug mode is already enabled in development:
```typescript
debug: process.env.NODE_ENV === 'development',
```

Check server terminal for detailed auth logs.

---

## Getting Help

### Information to Provide:
1. **Error message** (exact text from browser console or terminal)
2. **Steps to reproduce**
3. **Screenshots** (if visual issue)
4. **Browser console logs** (F12 → Console → copy all)
5. **Server terminal output** (last 50 lines)
6. **Node version**: `node --version`
7. **Package versions**: `cat package.json | grep "next\|next-auth"`

### Useful Commands for Debugging:
```bash
# Check Next.js version
pnpm list next

# Check if admin route is registered
pnpm next info

# View all environment variables (be careful, don't share)
printenv | grep -i next

# Check if database is accessible
pnpm prisma db pull
```

---

## Success Indicators

✅ **You know it's working when:**
1. Login page loads without errors
2. Can sign in with admin@example.com / password123
3. Redirected to `/pages/admin/integrations` after login
4. Statistics cards show numbers (even if 0)
5. Tabs switch between Zoho and Google
6. Can edit and save settings
7. Logs viewer shows entries
8. No console errors

---

## Common Terminal Errors

### "EADDRINUSE" - Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
pnpm dev -- -p 3001
```

### "Cannot find module '@prisma/client'"
```bash
pnpm prisma generate
```

### "Error: P1001: Can't reach database server"
```bash
# Check if PostgreSQL is running
# Update DATABASE_URL in .env.local
# Test connection:
pnpm prisma db pull
```

---

**Last Updated:** After fixing Shadcn UI color definitions
**Status:** ✅ Should be working now!
