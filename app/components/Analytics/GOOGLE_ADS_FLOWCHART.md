# Google Ads Tracking Flow Chart

## 🌊 Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION START                         │
│                 (Next.js App Router)                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    layout.tsx                                │
│  - Root Layout Component Renders                            │
│  - Loads GoogleAdsTracking component in <head>             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              GoogleAdsTracking Component                     │
│                   Initialization                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                 STEP 1: Validation                           │
│  console.log('[GoogleAdsTracking] Component initialized')   │
│  console.log('[GoogleAdsTracking] Conversion ID: ...')      │
│                                                               │
│  ┌──────────────────────────────────────┐                   │
│  │ Check: Conversion ID Format          │                   │
│  │ Expected: AW-XXXXXXXXXX               │                   │
│  └──────────┬───────────────────────────┘                   │
│             │                                                 │
│     ┌───────┴────────┐                                       │
│     │ Valid?         │                                       │
│     └───┬────────┬───┘                                       │
│         │ YES    │ NO                                        │
│         │        └──────> Log Error & Stop                   │
│         │                                                     │
│         ▼                                                     │
└─────────┼─────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────┐
│              STEP 2: Load Google Tag Script                  │
│                                                               │
│  <Script src="googletagmanager.com/gtag/js?id=AW-..."      │
│         strategy="afterInteractive"                          │
│         onLoad={handleScriptLoad}                           │
│         onError={handleScriptError} />                      │
│                                                               │
│  ┌────────────────────────────────────┐                     │
│  │  Browser fetches script from       │                     │
│  │  Google's CDN                      │                     │
│  └────────────┬──────────────────────┘                      │
│               │                                               │
│       ┌───────┴────────┐                                     │
│       │ Success?        │                                     │
│       └───┬────────┬───┘                                     │
│           │ YES    │ NO                                      │
│           │        └──> handleScriptError()                  │
│           │             console.error('[GoogleAdsTracking]   │
│           │             Failed to load...')                  │
│           │             setHasError(true)                    │
│           │                                                   │
│           ▼                                                   │
│    handleScriptLoad()                                        │
│    console.log('[GoogleAdsTracking] Script loaded')         │
│    setIsLoaded(true)                                         │
│                                                               │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│           STEP 3: Initialize DataLayer & gtag               │
│                                                               │
│  <Script id="google-ads-init">                              │
│    console.log('[GoogleAdsTracking] Initializing...')      │
│                                                               │
│    try {                                                     │
│      ┌─────────────────────────────────────┐               │
│      │ window.dataLayer = dataLayer || []  │               │
│      │ console.log('dataLayer initialized')│               │
│      └─────────────┬───────────────────────┘               │
│                    │                                         │
│                    ▼                                         │
│      ┌─────────────────────────────────────┐               │
│      │ Define gtag() function              │               │
│      │ window.gtag = function(){ ... }     │               │
│      └─────────────┬───────────────────────┘               │
│                    │                                         │
│                    ▼                                         │
│      ┌─────────────────────────────────────┐               │
│      │ gtag('js', new Date())              │               │
│      │ console.log('Timestamp set')        │               │
│      └─────────────┬───────────────────────┘               │
│                    │                                         │
│                    ▼                                         │
│      ┌─────────────────────────────────────┐               │
│      │ gtag('config', 'AW-17606401808')    │               │
│      │ console.log('Google Ads configured')│               │
│      └─────────────┬───────────────────────┘               │
│                    │                                         │
│                    ▼                                         │
│      console.log('Initialization complete')                │
│                                                               │
│    } catch (error) {                                        │
│      console.error('Initialization error:', error)         │
│    }                                                         │
│  </Script>                                                   │
│                                                               │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│              STEP 4: Tracking Ready                          │
│                                                               │
│  ✅ Component fully initialized                              │
│  ✅ gtag() function available globally                       │
│  ✅ dataLayer receiving events                               │
│  ✅ Google Ads receiving data                                │
│                                                               │
│  User Activity Tracked:                                     │
│  - Page Views (automatic)                                   │
│  - Conversions (manual via trackConversion)                │
│  - Custom Events (manual via trackEvent)                   │
│                                                               │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
         ┌────────────────────┐
         │  MONITORING LOOP    │
         └────────┬────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────────┐
│           STEP 5: Event Monitoring (Optional)               │
│                                                               │
│  useEffect(() => {                                          │
│    if (isLoaded) {                                          │
│      // Wrap gtag to log all calls                         │
│      const originalGtag = window.gtag;                     │
│      window.gtag = function(...args) {                     │
│        console.log('[GoogleAdsTracking] gtag call:', args);│
│        return originalGtag.apply(window, args);            │
│      };                                                      │
│    }                                                         │
│  }, [isLoaded]);                                            │
│                                                               │
└─────────────────┬───────────────────────────────────────────┘
                  │
                  ▼
         ┌────────────────────┐
         │   READY FOR USE    │
         └────────────────────┘
```

## 🎯 User Interaction Flows

### Flow A: Automatic Page View Tracking

```
User navigates to page
         │
         ▼
Next.js Router Change
         │
         ▼
GoogleAdsTracking already loaded
         │
         ▼
gtag() sends page view event
         │
         ▼
Event pushed to dataLayer
         │
         ▼
console.log('[GoogleAdsTracking] Event pushed...')
         │
         ▼
Data sent to Google Ads servers
         │
         ▼
Google Ads records page view
```

### Flow B: Manual Conversion Tracking

```
User completes action (e.g., form submission)
         │
         ▼
Your code calls trackConversion()
         │
         ▼
console.log('[GoogleAdsTracking] trackConversion called')
         │
         ▼
Function validates gtag availability
         │
    ┌────┴────┐
    │ gtag?   │
    └─┬─────┬─┘
      │YES  │NO
      │     └──> console.warn('gtag not available')
      │
      ▼
gtag('event', 'conversion', {...})
      │
      ▼
console.log('[GoogleAdsTracking] Conversion tracked successfully')
      │
      ▼
Event sent to Google Ads
      │
      ▼
Conversion recorded in Google Ads campaign
      │
      ▼
Appears in Google Ads dashboard (24-48 hour delay)
```

### Flow C: Custom Event Tracking

```
User interacts with element (e.g., button click)
         │
         ▼
Event handler calls trackEvent()
         │
         ▼
console.log('[GoogleAdsTracking] trackEvent called')
console.log('Event details:', { name, params })
         │
         ▼
Validate gtag availability
         │
    ┌────┴────┐
    │ gtag?   │
    └─┬─────┬─┘
      │YES  │NO
      │     └──> console.warn('gtag not available')
      │
      ▼
gtag('event', eventName, eventParams)
      │
      ▼
console.log('Event tracked successfully')
      │
      ▼
Event sent to Google Ads
      │
      ▼
Data available for remarketing & optimization
```

## 🔄 Error Handling Flow

```
                  START
                    │
                    ▼
         ┌──────────────────────┐
         │  Component Mounts    │
         └──────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │  Validate ID         │
         └──────┬───────────────┘
                │
        ┌───────┴────────┐
        │ Valid Format?  │
        └───┬────────┬───┘
            │ YES    │ NO
            │        │
            │        ▼
            │   ┌──────────────────────────┐
            │   │ Log Error:               │
            │   │ 'Invalid conversion ID   │
            │   │  format'                 │
            │   │                          │
            │   │ setHasError(true)        │
            │   │                          │
            │   │ Component returns null   │
            │   │ (no render)              │
            │   └──────────────────────────┘
            │
            ▼
  ┌─────────────────────┐
  │  Load Script        │
  └─────────┬───────────┘
            │
    ┌───────┴────────┐
    │ Script Loads?  │
    └───┬────────┬───┘
        │ YES    │ NO
        │        │
        │        ▼
        │   ┌─────────────────────────────┐
        │   │ handleScriptError()         │
        │   │                             │
        │   │ console.error('Failed to    │
        │   │  load script', error)       │
        │   │                             │
        │   │ console.error('Error        │
        │   │  details:', {...})          │
        │   │                             │
        │   │ setHasError(true)           │
        │   │                             │
        │   │ User can still use site     │
        │   │ (tracking disabled)         │
        │   └─────────────────────────────┘
        │
        ▼
┌─────────────────────┐
│ Initialize gtag     │
└─────────┬───────────┘
          │
  ┌───────┴────────┐
  │ Initialization │
  │   Success?     │
  └───┬────────┬───┘
      │ YES    │ NO (caught by try/catch)
      │        │
      │        ▼
      │   ┌─────────────────────────────┐
      │   │ catch (error) {             │
      │   │   console.error(            │
      │   │     'Initialization error', │
      │   │     error                   │
      │   │   );                        │
      │   │   console.error(            │
      │   │     'Error stack',          │
      │   │     error.stack             │
      │   │   );                        │
      │   │ }                           │
      │   │                             │
      │   │ Partial tracking may work   │
      │   └─────────────────────────────┘
      │
      ▼
┌──────────────────┐
│ TRACKING ACTIVE  │
└──────────────────┘
```

## 📊 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                      YOUR WEBSITE                            │
│                                                               │
│  ┌────────────────────────────────────────────────────┐     │
│  │  GoogleAdsTracking Component                       │     │
│  │                                                      │     │
│  │  window.dataLayer = []                             │     │
│  │         │                                           │     │
│  │         ▼                                           │     │
│  │  [Event 1, Event 2, Event 3, ...]                 │     │
│  │         │                                           │     │
│  │         ▼                                           │     │
│  │  gtag() processes events                           │     │
│  └────────┼──────────────────────────────────────────┘     │
│           │                                                   │
└───────────┼───────────────────────────────────────────────────┘
            │
            │ HTTPS (encrypted)
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│              GOOGLE TAG MANAGER                              │
│                                                               │
│  Receives tracking data                                     │
│  Processes events                                           │
│  Routes to appropriate destinations                         │
│                                                               │
└───────────┬─────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│                   GOOGLE ADS                                 │
│                                                               │
│  ┌─────────────────────────────────────────┐               │
│  │  Conversion Tracking                    │               │
│  │  - Records conversions                  │               │
│  │  - Attributes to campaigns              │               │
│  │  - Updates bid strategies               │               │
│  └─────────────────────────────────────────┘               │
│                                                               │
│  ┌─────────────────────────────────────────┐               │
│  │  Remarketing                            │               │
│  │  - Builds audience lists                │               │
│  │  - Tags users for retargeting          │               │
│  └─────────────────────────────────────────┘               │
│                                                               │
│  ┌─────────────────────────────────────────┐               │
│  │  Reporting & Analytics                  │               │
│  │  - Generates reports                    │               │
│  │  - Calculates ROI                       │               │
│  │  - Provides insights                    │               │
│  └─────────────────────────────────────────┘               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## 🔍 Debugging Flow

```
Issue Detected (e.g., conversions not tracking)
         │
         ▼
Step 1: Check Browser Console
         │
         ├──> See initialization logs? ──YES──> Script loaded ✓
         │                               │
         └──NO──> Check Network tab      │
                  │                       │
                  ├──> Requests blocked?  │
                  │    (Ad blocker?)      │
                  │                       │
                  └──> Script error?      │
                       Contact support    │
                                          │
                                          ▼
Step 2: Verify dataLayer                │
         │                               │
         ▼                               │
Type: window.dataLayer in console       │
         │                               │
         ├──> Array exists? ──YES──> ✓  │
         │                               │
         └──NO──> Initialization failed  │
                  Check error logs        │
                                          │
                                          ▼
Step 3: Test gtag function              │
         │                               │
         ▼                               │
Type: window.gtag('event', 'test')      │
         │                               │
         ├──> Works? ──YES──> ✓          │
         │                               │
         └──NO──> gtag not defined       │
                  Reload page            │
                                          │
                                          ▼
Step 4: Verify conversion ID            │
         │                               │
         ▼                               │
Check: AW-17606401808 is correct?       │
         │                               │
         ├──> Correct? ──YES──> ✓        │
         │                               │
         └──NO──> Update in layout.tsx   │
                                          │
                                          ▼
Step 5: Check Google Ads dashboard      │
         │                               │
         ▼                               │
Wait 24-48 hours for data to appear     │
         │                               │
         ├──> Data appears? ──YES──> ✓   │
         │                               │
         └──NO──> Check conversion       │
                  settings in Google Ads │
                                          │
                                          ▼
                                    RESOLVED ✓
```

## 🎨 Legend

- `┌─┐ └─┘` = Process boxes
- `│ ▼ ┬ ┴` = Flow direction
- `?` = Decision point
- `✓` = Success state
- `✗` = Error state
- `console.log()` = Debug logging
- `console.error()` = Error logging

