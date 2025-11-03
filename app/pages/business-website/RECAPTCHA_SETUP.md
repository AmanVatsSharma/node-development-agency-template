# reCAPTCHA v3 Setup Guide

## Overview
This landing page uses Google reCAPTCHA v3 for bot protection. reCAPTCHA v3 is invisible to users and provides a risk score (0.0 = bot, 1.0 = human).

## Setup Steps

### 1. Register Your Site with Google reCAPTCHA

1. Visit: https://www.google.com/recaptcha/admin
2. Click "Create" or "Add" to register a new site
3. Fill in the details:
   - **Label**: Your site name (e.g., "VedPragya Business Website")
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `yourdomain.com`
     - `www.yourdomain.com`
   - Accept the terms and click "Submit"

### 2. Get Your Keys

After registration, Google will provide:
- **Site Key** (Public key - safe to expose in frontend)- 
- **Secret Key** (Private key - keep secure, server-side only) -

### 3. Configure Environment Variables

**Choose one option:**

**Option A: `.env.local` (Recommended for Next.js)**
```bash
# Create or edit .env.local in project root
# reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Option B: Add to existing `.env` file**
```bash
# Add to your existing .env file
# reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Used in frontend (safe to expose)
- `RECAPTCHA_SECRET_KEY` - Used in backend only (keep secret)
- **You MUST restart your dev server after adding these variables!**
  ```bash
  # Stop server (Ctrl+C), then:
  npm run dev
  ```

**Verify Setup:**
```bash
# Run verification script
./check-recaptcha-setup.sh

# Or manually check:
grep RECAPTCHA .env.local 2>/dev/null || grep RECAPTCHA .env 2>/dev/null
```

### 4. How It Works

1. **Frontend (lead-form-section.tsx)**:
   - Loads reCAPTCHA v3 script automatically
   - Gets token when form is submitted
   - Sends token to API

2. **Backend (app/api/lead/route.ts)**:
   - Verifies token with Google
   - Checks score (0.3+ allows, < 0.3 flags as suspicious)
   - Stores score in lead metadata

3. **Scoring**:
   - **1.0 - 0.5**: Human-like behavior ✅
   - **0.5 - 0.3**: Suspicious but allowed ⚠️
   - **< 0.3**: Likely bot, but still processed (scored lower)

## Testing

1. **Development**: Works with `localhost` if added to Google console
2. **Production**: Ensure your production domain is added to Google console
3. **Test Forms**: Submit forms and check console logs for reCAPTCHA scores

## Troubleshooting

### reCAPTCHA not loading?
- Check browser console for errors
- Verify `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set
- Ensure domain is registered in Google console

### Verification failing?
- Check `RECAPTCHA_SECRET_KEY` is set correctly
- Verify domain matches registered domains
- Check server logs for specific error codes

### Low scores for legitimate users?
- This is normal - reCAPTCHA learns over time
- Scores improve with more traffic
- Users with VPNs or unusual patterns may score lower

## Notes

- reCAPTCHA v3 is invisible - no user interaction required
- The badge appears in bottom-right (required by Google)
- Scores are logged and stored in lead metadata
- Low scores don't block submissions but affect lead scoring

