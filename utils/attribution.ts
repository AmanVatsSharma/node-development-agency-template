/**
 * Attribution Tracking Utilities
 * Captures GCLID, UTM parameters, and other attribution data for Google Ads
 */

export interface AttributionData {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  fbclid?: string;
  referrer?: string;
  landingPage?: string;
}

/**
 * Get GCLID from URL or localStorage
 * GCLID is stored for 30 days to attribute conversions back to the original ad click
 */
export function getGclid(): string | null {
  if (typeof window === 'undefined') return null;

  try {
    // Check URL first
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');

    if (gclid) {
      // Store for later use (30 day expiry - Google's standard)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      localStorage.setItem('gclid', gclid);
      localStorage.setItem('gclid_expires', expiryDate.toISOString());
      console.log('[Attribution] GCLID captured:', gclid);
      return gclid;
    }

    // Check localStorage for stored GCLID
    const storedGclid = localStorage.getItem('gclid');
    const expiresAt = localStorage.getItem('gclid_expires');

    if (storedGclid && expiresAt) {
      const expiry = new Date(expiresAt);
      if (expiry > new Date()) {
        return storedGclid;
      } else {
        // Expired, clear it
        localStorage.removeItem('gclid');
        localStorage.removeItem('gclid_expires');
      }
    }
  } catch (error) {
    console.error('[Attribution] Error getting GCLID:', error);
  }

  return null;
}

/**
 * Get UTM parameter from URL
 */
function getUtmParam(param: string): string | undefined {
  if (typeof window === 'undefined') return undefined;

  try {
    const params = new URLSearchParams(window.location.search);
    return params.get(`utm_${param}`) || undefined;
  } catch (error) {
    console.error(`[Attribution] Error getting utm_${param}:`, error);
    return undefined;
  }
}

/**
 * Get all attribution data from current page
 * Captures GCLID, UTM parameters, referrer, and landing page
 */
export function getAttributionData(): AttributionData {
  if (typeof window === 'undefined') return {};

  try {
    const params = new URLSearchParams(window.location.search);

    const data: AttributionData = {
      gclid: getGclid(),
      utm_source: getUtmParam('source'),
      utm_medium: getUtmParam('medium'),
      utm_campaign: getUtmParam('campaign'),
      utm_term: getUtmParam('term'),
      utm_content: getUtmParam('content'),
      fbclid: params.get('fbclid') || undefined,
      referrer: document.referrer || undefined,
      landingPage: window.location.pathname || undefined,
    };

    console.log('[Attribution] Captured attribution data:', data);
    return data;
  } catch (error) {
    console.error('[Attribution] Error getting attribution data:', error);
    return {};
  }
}

/**
 * Calculate lead score based on various factors
 * Score range: 0-100
 */
export function calculateLeadScore(lead: {
  budget?: string;
  timeline?: string;
  email?: string;
  phone?: string;
  message?: string;
  timeOnPage?: number;
  pagesVisited?: number;
}): number {
  let score = 0;

  // Budget score (0-40 points) - Higher budget = higher score
  if (lead.budget) {
    const budgetScores: Record<string, number> = {
      'under-50k': 10,
      '50k-2lakh': 25,
      '2lakh-5lakh': 35,
      '5lakh-plus': 40,
    };
    score += budgetScores[lead.budget] || 0;
  }

  // Timeline urgency (0-20 points) - More urgent = higher score
  if (lead.timeline) {
    const timelineScores: Record<string, number> = {
      urgent: 20,
      'this-month': 15,
      'this-quarter': 10,
      exploring: 5,
    };
    score += timelineScores[lead.timeline] || 0;
  }

  // Form completeness (0-30 points) - More info = higher score
  if (lead.email) score += 10;
  if (lead.phone) score += 10;
  if (lead.message && lead.message.length > 50) score += 10;

  // Engagement (0-10 points) - More engaged = higher score
  if (lead.timeOnPage && lead.timeOnPage > 120) score += 5; // 2+ minutes
  if (lead.pagesVisited && lead.pagesVisited > 3) score += 5; // 3+ pages

  return Math.min(score, 100);
}

/**
 * Calculate dynamic conversion value based on budget and timeline
 */
export function calculateConversionValue(
  landingPageSlug: string,
  budget?: string,
  timeline?: string
): number {
  // Base values per landing page (in INR)
  const baseValues: Record<string, number> = {
    'business-website': 15000,
    'seo-audit': 5000,
    'next-js-development': 25000,
    'reactjs-development': 25000,
    'web-development': 20000,
    'website-services': 18000,
    enterprise: 50000,
  };

  let baseValue = baseValues[landingPageSlug] || 10000;

  // Budget multipliers
  const budgetMultipliers: Record<string, number> = {
    'under-50k': 0.5,
    '50k-2lakh': 1.0,
    '2lakh-5lakh': 2.0,
    '5lakh-plus': 3.0,
  };

  // Timeline multipliers
  const timelineMultipliers: Record<string, number> = {
    urgent: 2.0,
    'this-month': 1.5,
    'this-quarter': 1.0,
    exploring: 0.5,
  };

  const budgetMultiplier = budget ? budgetMultipliers[budget] || 1.0 : 1.0;
  const timelineMultiplier = timeline ? timelineMultipliers[timeline] || 1.0 : 1.0;

  // Calculate final value
  const finalValue = Math.round(baseValue * budgetMultiplier * timelineMultiplier);

  console.log('[Attribution] Conversion value calculated:', {
    landingPageSlug,
    baseValue,
    budget,
    timeline,
    budgetMultiplier,
    timelineMultiplier,
    finalValue,
  });

  return finalValue;
}
