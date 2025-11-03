# reCAPTCHA v3 Visibility Guide

## Understanding reCAPTCHA v3

**Important:** reCAPTCHA v3 is **invisible by design** - there is no checkbox or challenge for users to interact with!

### What You Should See

1. **Automatic Badge (Bottom-Right)**
   - Google automatically adds a small reCAPTCHA badge in the bottom-right corner
   - This badge appears automatically when reCAPTCHA v3 script loads
   - It says "protected by reCAPTCHA" with a small link
   - **You don't need to add this manually** - it appears automatically

2. **Our Custom Indicator (Under Form)**
   - We've added a small text indicator under the form: "🛡️ Protected by reCAPTCHA v3"
   - This shows when `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is configured
   - This is just for user awareness - the actual protection is invisible

### Why You Might Not See Anything

#### 1. Site Key Not Configured
**Symptom:** No reCAPTCHA badge, console shows warning

**Solution:**
```bash
# Add to .env.local
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Restart dev server
npm run dev
```

#### 2. Domain Not Registered
**Symptom:** Script loads but badge doesn't appear

**Solution:**
- Go to https://www.google.com/recaptcha/admin
- Edit your site settings
- Add your domain (localhost for dev, yourdomain.com for prod)
- Save and wait a few minutes

#### 3. Development Environment
**Symptom:** Works in production but not localhost

**Solution:**
- Ensure `localhost` is added to Google reCAPTCHA console
- Or use test keys: https://developers.google.com/recaptcha/docs/faq#id-like-to-run-automated-tests-with-recaptcha-v3-what-should-i-do

### Testing reCAPTCHA is Working

1. **Check Browser Console:**
   ```
   [Business-Website] reCAPTCHA Site Key configured: YES
   [Business-Website] Loading reCAPTCHA v3 script...
   [Business-Website] ✅ reCAPTCHA v3 script loaded successfully
   [Business-Website] ✅ grecaptcha object is available
   ```

2. **Check Network Tab:**
   - Look for request to `google.com/recaptcha/api.js`
   - Should return 200 status

3. **Submit Form:**
   - Check console for: `[Business-Website] ✅ reCAPTCHA token obtained`
   - Check server logs for: `[API/Lead] ✅ reCAPTCHA verified - Score: X`

### Visual Indicators

**✅ Working (Site Key Configured):**
- Small badge in bottom-right (automatic by Google)
- Text indicator under form: "🛡️ Protected by reCAPTCHA v3"
- Console logs show successful loading

**⚠️ Not Configured:**
- Warning message under form: "⚠️ reCAPTCHA not configured"
- Console shows: "⚠️ reCAPTCHA site key not configured"
- No badge appears

### Quick Test

```bash
# 1. Check setup (run from project root)
./check-recaptcha-setup.sh

# Or manually check env file:
grep RECAPTCHA .env.local 2>/dev/null || grep RECAPTCHA .env 2>/dev/null

# 2. Check browser console (should see logs)
# 3. Submit form (check for reCAPTCHA token in network tab)
```

**Quick Setup Script:**
- Run `./check-recaptcha-setup.sh` from project root
- Shows current configuration status
- Provides next steps if keys are missing

### Common Issues

**Issue:** "reCAPTCHA site key not configured"
- ✅ Add `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` to `.env.local`
- ✅ Restart dev server
- ✅ Clear browser cache

**Issue:** "Script loaded but grecaptcha not found"
- Check domain is registered in Google console
- Wait a few minutes after adding domain
- Try incognito mode

**Issue:** "Badge doesn't appear"
- This is normal if script hasn't loaded
- Badge appears automatically when script loads
- Check console for script loading errors

### Remember

- **reCAPTCHA v3 is invisible** - no checkbox/challenge
- **Badge appears automatically** - you don't need to add it
- **Protection works invisibly** - bots are filtered server-side
- **User experience is seamless** - no interruptions for real users

