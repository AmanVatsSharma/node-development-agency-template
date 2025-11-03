# Quick reCAPTCHA Verification Checklist

## ✅ Step 1: Verify Configuration
```bash
./check-recaptcha-setup.sh
```
Expected: Both keys show as configured

## ✅ Step 2: Restart Dev Server
```bash
# Stop server (Ctrl+C), then:
npm run dev
```
**Important:** Environment variables only load on server start!

## ✅ Step 3: Open Form Page
Navigate to your business website form page

## ✅ Step 4: Check Browser Console (F12)
Look for these messages:
- ✅ `[Business-Website] reCAPTCHA Site Key configured: YES`
- ✅ `[Business-Website] ✅ reCAPTCHA v3 script loaded successfully`
- ✅ `[Business-Website] ✅ grecaptcha object is available`

## ✅ Step 5: Visual Checks
- ✅ Text under form: "🛡️ Protected by reCAPTCHA v3" (with green dot)
- ✅ Small badge in bottom-right corner (auto-added by Google)

## ✅ Step 6: Test Form Submission
1. Fill out and submit the form
2. Check console: `[Business-Website] ✅ reCAPTCHA token obtained`
3. Check server logs: `[API/Lead] ✅ reCAPTCHA verified - Score: X`

## If All Checks Pass:
🎉 **reCAPTCHA is working!** It's invisible by design, but protection is active.

## If Issues Persist:
1. Check domain is registered in Google console
2. Try incognito mode (bypasses cache)
3. Check for browser extensions blocking scripts
4. Verify network tab shows successful script load
