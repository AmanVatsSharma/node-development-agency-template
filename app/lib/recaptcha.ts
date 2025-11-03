/**
 * reCAPTCHA v3 Integration
 * Server-side verification utility for Google reCAPTCHA v3
 * 
 * SETUP REQUIRED:
 * 1. Register your site at https://www.google.com/recaptcha/admin
 * 2. Add RECAPTCHA_SITE_KEY to .env.local (public key)
 * 3. Add RECAPTCHA_SECRET_KEY to .env.local (private key)
 * 4. Add reCAPTCHA script to your page (see lead-form-section.tsx)
 * 
 * reCAPTCHA v3 is invisible - no user interaction needed
 * Returns a score from 0.0 (bot) to 1.0 (human)
 */

console.log('[reCAPTCHA] Utility loaded');

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || '';
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

export interface RecaptchaVerificationResult {
  success: boolean;
  score?: number; // 0.0 (bot) to 1.0 (human)
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

/**
 * Verify reCAPTCHA v3 token on server-side
 * 
 * @param token - reCAPTCHA token from client-side
 * @param remoteIp - Optional IP address for additional verification
 * @returns Verification result with score
 */
export async function verifyRecaptcha(
  token: string,
  remoteIp?: string
): Promise<RecaptchaVerificationResult> {
  console.log('[reCAPTCHA] Verifying token on server-side');
  
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn('[reCAPTCHA] ⚠️ RECAPTCHA_SECRET_KEY not configured - skipping verification');
    return {
      success: true, // Allow in development if not configured
      score: 0.9, // Default high score
    };
  }
  
  if (!token) {
    console.error('[reCAPTCHA] ❌ No token provided');
    return {
      success: false,
      'error-codes': ['missing-input-response'],
    };
  }

  try {
    const params = new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: token,
      ...(remoteIp && { remoteip: remoteIp }),
    });

    console.log('[reCAPTCHA] Sending verification request to Google');
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data: RecaptchaVerificationResult = await response.json();
    
    console.log('[reCAPTCHA] Verification response:', {
      success: data.success,
      score: data.score,
      errors: data['error-codes'],
    });

    // Typically, scores above 0.5 are considered human
    // Scores below 0.3 are likely bots
    if (data.success && data.score !== undefined) {
      if (data.score >= 0.5) {
        console.log('[reCAPTCHA] ✅ Verification passed - Score:', data.score, '(Human-like)');
      } else if (data.score >= 0.3) {
        console.warn('[reCAPTCHA] ⚠️ Low score - Score:', data.score, '(Suspicious, but allowing)');
      } else {
        console.error('[reCAPTCHA] ❌ Very low score - Score:', data.score, '(Likely bot)');
      }
    }

    return data;
  } catch (error) {
    console.error('[reCAPTCHA] ❌ Verification error:', error);
    return {
      success: false,
      'error-codes': ['network-error'],
    };
  }
}

/**
 * Get reCAPTCHA site key from environment
 */
export function getRecaptchaSiteKey(): string {
  return process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
}

