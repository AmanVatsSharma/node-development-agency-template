#!/bin/bash
echo "=== reCAPTCHA Setup Verification ==="
echo ""

# Check which env file exists
ENV_FILE=".env.local"
if [ ! -f "$ENV_FILE" ]; then
    ENV_FILE=".env"
fi

if [ ! -f "$ENV_FILE" ]; then
    echo "❌ No .env.local or .env file found"
    echo "   Create .env.local and add your reCAPTCHA keys"
    exit 1
fi

echo "📁 Checking: $ENV_FILE"
echo ""

# Check for site key
if grep -q "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" "$ENV_FILE"; then
    SITE_KEY=$(grep "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" "$ENV_FILE" | cut -d '=' -f2 | tr -d ' "' | head -1)
    if [ -z "$SITE_KEY" ] || [ "$SITE_KEY" = "your_site_key_here" ] || [ "$SITE_KEY" = "" ]; then
        echo "❌ NEXT_PUBLIC_RECAPTCHA_SITE_KEY is set but empty or placeholder"
    else
        echo "✅ NEXT_PUBLIC_RECAPTCHA_SITE_KEY is configured"
        echo "   Key preview: ${SITE_KEY:0:10}..."
    fi
else
    echo "❌ NEXT_PUBLIC_RECAPTCHA_SITE_KEY is NOT configured"
fi

# Check for secret key
if grep -q "RECAPTCHA_SECRET_KEY" "$ENV_FILE"; then
    SECRET_KEY=$(grep "RECAPTCHA_SECRET_KEY" "$ENV_FILE" | cut -d '=' -f2 | tr -d ' "' | head -1)
    if [ -z "$SECRET_KEY" ] || [ "$SECRET_KEY" = "your_secret_key_here" ] || [ "$SECRET_KEY" = "" ]; then
        echo "❌ RECAPTCHA_SECRET_KEY is set but empty or placeholder"
    else
        echo "✅ RECAPTCHA_SECRET_KEY is configured"
        echo "   Key preview: ${SECRET_KEY:0:10}..."
    fi
else
    echo "❌ RECAPTCHA_SECRET_KEY is NOT configured"
fi

echo ""
echo "=== Verification Complete ==="
echo ""
echo "If keys are missing:"
echo "1. Get keys from: https://www.google.com/recaptcha/admin"
echo "2. Add to $ENV_FILE"
echo "3. Restart dev server (npm run dev)"
