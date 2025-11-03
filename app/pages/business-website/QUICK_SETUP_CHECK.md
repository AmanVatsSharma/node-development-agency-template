# reCAPTCHA Quick Setup Check

## Current Status

Run these commands to check your reCAPTCHA configuration:

```bash
# Check if environment variables are set
grep -i "RECAPTCHA" .env.local 2>/dev/null || grep -i "RECAPTCHA" .env 2>/dev/null || echo "⚠️ No reCAPTCHA keys found"

# Check if NEXT_PUBLIC_RECAPTCHA_SITE_KEY exists
if grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" .env.local 2>/dev/null || grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" .env 2>/dev/null; then
  echo "✅ NEXT_PUBLIC_RECAPTCHA_SITE_KEY is configured"
else
  echo "❌ NEXT_PUBLIC_RECAPTCHA_SITE_KEY is NOT configured"
fi

# Check if RECAPTCHA_SECRET_KEY exists
if grep -q "RECAPTCHA_SECRET_KEY" .env.local 2>/dev/null || grep -q "RECAPTCHA_SECRET_KEY" .env 2>/dev/null; then
  echo "✅ RECAPTCHA_SECRET_KEY is configured"
else
  echo "❌ RECAPTCHA_SECRET_KEY is NOT configured"
fi
```

## Quick Setup

### Step 1: Get Your reCAPTCHA Keys

1. Go to: https://www.google.com/recaptcha/admin
2. Create a new site (or use existing)
3. Select **reCAPTCHA v3**
4. Add domains: `localhost`, `yourdomain.com`
5. Copy your **Site Key** and **Secret Key**

### Step 2: Add to Environment File

**Option A: Use `.env.local` (Recommended for Next.js)**
```bash
# Create or edit .env.local
echo "" >> .env.local
echo "# reCAPTCHA v3 Configuration" >> .env.local
echo "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here" >> .env.local
echo "RECAPTCHA_SECRET_KEY=your_secret_key_here" >> .env.local
```

**Option B: Add to existing `.env` file**
```bash
# Add to .env file
echo "" >> .env
echo "# reCAPTCHA v3 Configuration" >> .env
echo "NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here" >> .env
echo "RECAPTCHA_SECRET_KEY=your_secret_key_here" >> .env
```

### Step 3: Restart Dev Server

**IMPORTANT:** You must restart your Next.js dev server after adding environment variables!

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
# or
yarn dev
```

### Step 4: Verify in Browser

1. Open your form page
2. Open browser console (F12)
3. Look for these messages:
   ```
   [Business-Website] reCAPTCHA Site Key configured: YES
   [Business-Website] Loading reCAPTCHA v3 script...
   [Business-Website] ✅ reCAPTCHA v3 script loaded successfully
   [Business-Website] ✅ grecaptcha object is available
   ```

4. Check the form:
   - Should see: "🛡️ Protected by reCAPTCHA v3" text under form
   - Should see small badge in bottom-right corner (auto-added by Google)

## Troubleshooting

### Still not working?

1. **Clear browser cache** and hard refresh (Ctrl+Shift+R)
2. **Verify keys are correct** - copy/paste from Google console
3. **Check domain registration** - ensure `localhost` is added in Google console
4. **Restart dev server** - env vars only load on server start
5. **Check console errors** - look for specific error messages

### Test Keys (For Development)

If you want to test without registering, use Google's test keys:

```env
# Test keys (always pass)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

**Note:** Test keys always return score 0.9, but they work for testing the integration.

## Next Steps

Once configured:
1. Submit a test form
2. Check server logs for: `[API/Lead] ✅ reCAPTCHA verified - Score: X`
3. Verify badge appears in bottom-right
4. See "Protected by reCAPTCHA v3" text under form

If all checks pass, reCAPTCHA is working! 🎉

