# Admin Integrations - System Architecture

## Table of Contents
1. [System Overview](#system-overview)
2. [Authentication Flow](#authentication-flow)
3. [Component Architecture](#component-architecture)
4. [Data Flow Diagrams](#data-flow-diagrams)
5. [API Integration Patterns](#api-integration-patterns)
6. [Database Schema](#database-schema)
7. [Security Model](#security-model)
8. [Error Handling Strategy](#error-handling-strategy)
9. [Deployment Architecture](#deployment-architecture)

---

## System Overview

### High-Level Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                          │
│  ┌────────────────────┐  ┌─────────────────────────────────┐ │
│  │  Login Page        │  │  Admin Dashboard                 │ │
│  │  /login            │  │  /pages/admin/integrations       │ │
│  │                    │  │                                   │ │
│  │  - Email/Password  │  │  - Settings Management           │ │
│  │  - NextAuth v5     │  │  - Connection Testing            │ │
│  │  - Error Handling  │  │  - Logs Viewer                   │ │
│  └────────────────────┘  └─────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                      MIDDLEWARE LAYER                         │
│  ┌──────────────────────────────────────────────────────────┐│
│  │                    middleware.ts                          ││
│  │                                                            ││
│  │  1. Check if route requires auth                          ││
│  │  2. Verify NextAuth session exists                        ││
│  │  3. Validate user role (admin/editor)                     ││
│  │  4. Allow/Deny/Redirect based on authorization            ││
│  └──────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                       API ROUTE LAYER                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌─────────────┐│
│  │ NextAuth Routes  │  │ Admin Routes     │  │ Public API  ││
│  │ /api/auth/[...]  │  │ /api/admin/*     │  │ /api/*      ││
│  │                  │  │                  │  │             ││
│  │ - Sign In/Out    │  │ - Integrations   │  │ - Lead      ││
│  │ - Session        │  │ - Logs           │  │ - Track     ││
│  │ - CSRF           │  │ - Test Endpoints │  │ - Config    ││
│  └──────────────────┘  └──────────────────┘  └─────────────┘│
└──────────────────────────────────────────────────────────────┘
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                       SERVICE LAYER                           │
│  ┌─────────────────────────┐  ┌──────────────────────────────┐│
│  │  zohoService.ts         │  │  googleAds.ts                ││
│  │                         │  │                              ││
│  │  - Token Management     │  │  - Conversion Mapping        ││
│  │  - Lead Creation        │  │  - Event Tracking            ││
│  │  - API Calls            │  │  - Config Validation         ││
│  │  - Error Handling       │  │  - Server-side Logging       ││
│  └─────────────────────────┘  └──────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                       DATA LAYER                              │
│  ┌──────────────────────────────────────────────────────────┐│
│  │                    PostgreSQL Database                    ││
│  │                    (via Prisma ORM)                       ││
│  │                                                            ││
│  │  Tables:                                                   ││
│  │  - User (authentication)                                   ││
│  │  - IntegrationSettings (config)                            ││
│  │  - Lead (local backup)                                     ││
│  │  - IntegrationLog (activity)                               ││
│  │  - IntegrationRetry (queue)                                ││
│  └──────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
                            ▼
┌──────────────────────────────────────────────────────────────┐
│                    EXTERNAL SERVICES                          │
│  ┌────────────────────┐            ┌──────────────────────┐  │
│  │   Zoho CRM API     │            │   Google Ads API     │  │
│  │                    │            │                      │  │
│  │  - OAuth2 Token    │            │  - gtag.js (client)  │  │
│  │  - Lead Create     │            │  - Conversions API   │  │
│  │  - Settings API    │            │    (server)          │  │
│  └────────────────────┘            └──────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## Authentication Flow

### NextAuth v5 Authentication Sequence

```
┌─────────┐                                                    ┌───────────┐
│ Browser │                                                    │  Server   │
└────┬────┘                                                    └─────┬─────┘
     │                                                               │
     │  1. Navigate to /pages/admin/integrations                    │
     ├──────────────────────────────────────────────────────────────>
     │                                                               │
     │                    2. middleware.ts intercepts               │
     │                       Check auth() session                   │
     │                       ❌ No session found                    │
     │                                                               │
     │  3. Redirect to /login?callbackUrl=/pages/admin/integrations │
     <──────────────────────────────────────────────────────────────┤
     │                                                               │
     │  4. User enters credentials                                  │
     │     Email: admin@example.com                                 │
     │     Password: password123                                    │
     │                                                               │
     │  5. POST /api/auth/signin                                    │
     ├──────────────────────────────────────────────────────────────>
     │                                                               │
     │                    6. auth.ts authorize() function           │
     │                       - Query User from database             │
     │                       - Verify password with bcrypt          │
     │                       - Check user.active = true             │
     │                       - Return user object                   │
     │                                                               │
     │                    7. JWT callback                           │
     │                       - Add user.role to token               │
     │                       - Add user.id to token                 │
     │                                                               │
     │                    8. Session callback                       │
     │                       - Add role to session.user             │
     │                       - Add id to session.user               │
     │                                                               │
     │  9. ✅ Auth successful, Set-Cookie: next-auth.session-token  │
     <──────────────────────────────────────────────────────────────┤
     │                                                               │
     │  10. Redirect to callbackUrl                                 │
     │      /pages/admin/integrations                               │
     <──────────────────────────────────────────────────────────────┤
     │                                                               │
     │  11. GET /pages/admin/integrations                           │
     ├──────────────────────────────────────────────────────────────>
     │                                                               │
     │                    12. middleware.ts intercepts              │
     │                        Check auth() session                  │
     │                        ✅ Session found                      │
     │                        ✅ Role = admin (allowed)             │
     │                        → NextResponse.next()                 │
     │                                                               │
     │  13. Render admin dashboard                                  │
     <──────────────────────────────────────────────────────────────┤
     │                                                               │
```

### Middleware Authorization Logic

```
START: Incoming Request
    ↓
Is route /pages/admin/* or /api/admin/* ?
    ├─ NO  → Allow request through
    └─ YES → Continue
            ↓
        Get session = await auth()
            ↓
        Is session exists?
            ├─ NO  → Is API route?
            │         ├─ YES → Return 401 JSON
            │         └─ NO  → Redirect to /login
            │
            └─ YES → Check role
                     ↓
                 Is role = 'admin' OR 'editor'?
                     ├─ NO  → Is API route?
                     │         ├─ YES → Return 401 JSON
                     │         └─ NO  → Redirect to /login?error=insufficient_permissions
                     │
                     └─ YES → ✅ Allow request through
```

---

## Component Architecture

### Admin Integrations Page Component Tree

```
IntegrationsAdminPage (Client Component)
├── Hooks
│   ├── useSession() - Get current user session
│   ├── useState() - Multiple state variables (20+)
│   └── useEffect() - Data loading on mount & change detection
│
├── Functions
│   ├── loadData() - Fetch settings + logs from API
│   ├── testProvider(provider) - Test Zoho/Google connection
│   ├── testLeadPush() - Create sandbox lead in Zoho
│   ├── save() - Persist settings to database
│   └── updateSettings(updates) - Local state update helper
│
└── Render Tree
    ├── Header
    │   ├── Logo + Title
    │   ├── User Badge (email + role)
    │   └── Sign Out Button
    │
    ├── Stats Cards Row
    │   ├── Card: Total Logs
    │   ├── Card: Errors
    │   ├── Card: Zoho Events
    │   └── Card: Google Events
    │
    ├── [Conditional] Unsaved Changes Alert
    │
    ├── Integration Configuration Card
    │   ├── Tabs Component
    │   │   ├── TabsList
    │   │   │   ├── TabsTrigger: Zoho CRM
    │   │   │   └── TabsTrigger: Google Ads
    │   │   │
    │   │   ├── TabsContent: Zoho
    │   │   │   ├── Form Fields
    │   │   │   │   ├── Input: Client ID
    │   │   │   │   ├── Input: Client Secret (password)
    │   │   │   │   ├── Textarea: Refresh Token
    │   │   │   │   └── Info Display: Last Token Refresh
    │   │   │   │
    │   │   │   ├── Separator
    │   │   │   │
    │   │   │   ├── Test Actions
    │   │   │   │   ├── Button: Test Zoho Connection
    │   │   │   │   └── Button: Test Lead Push
    │   │   │   │
    │   │   │   └── Test Results
    │   │   │       ├── [Conditional] Alert: Zoho Test Result
    │   │   │       └── [Conditional] Alert: Lead Test Result
    │   │   │
    │   │   └── TabsContent: Google
    │   │       ├── Form Fields
    │   │       │   ├── Input: Conversion ID
    │   │       │   ├── Input: API Key (password)
    │   │       │   └── Textarea: Event Labels (JSON)
    │   │       │
    │   │       ├── Separator
    │   │       │
    │   │       ├── Test Actions
    │   │       │   └── Button: Test Google Config
    │   │       │
    │   │       └── Test Results
    │   │           └── [Conditional] Alert: Google Test Result
    │   │
    │   └── Save Button (bottom)
    │
    └── Integration Logs Card
        ├── Header
        │   ├── Title + Description
        │   └── Refresh Button
        │
        ├── Filter Tabs
        │   ├── Tab: All (count)
        │   ├── Tab: Zoho (count)
        │   └── Tab: Google (count)
        │
        └── Logs List (scrollable)
            └── [Map] Log Entry
                ├── Badge: Provider
                ├── Badge: Level
                ├── Text: Type
                ├── Text: Message
                ├── [Conditional] Text: Error
                └── Text: Timestamp
```

### State Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Component State Tree                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  settings: Settings | null                                    │
│    ↓                                                          │
│    Controlled by: loadData(), save(), updateSettings()       │
│    Used by: Form inputs, Save button                         │
│                                                               │
│  originalSettings: Settings | null                            │
│    ↓                                                          │
│    Controlled by: loadData(), save()                          │
│    Used by: Change detection (hasUnsavedChanges)             │
│                                                               │
│  logs: IntegrationLog[]                                       │
│    ↓                                                          │
│    Controlled by: loadData()                                  │
│    Used by: Stats cards, Logs viewer                         │
│                                                               │
│  loading: boolean                                             │
│    ↓                                                          │
│    Controlled by: loadData()                                  │
│    Used by: Loading spinner (initial load)                   │
│                                                               │
│  saving: boolean                                              │
│    ↓                                                          │
│    Controlled by: save()                                      │
│    Used by: Save button disabled state                       │
│                                                               │
│  testing: { zoho, google, lead }                              │
│    ↓                                                          │
│    Controlled by: testProvider(), testLeadPush()              │
│    Used by: Test buttons disabled/loading states             │
│                                                               │
│  testResult: { zoho?, google?, lead? }                        │
│    ↓                                                          │
│    Controlled by: testProvider(), testLeadPush()              │
│    Used by: Test result alerts                               │
│                                                               │
│  activeTab: 'zoho' | 'google'                                 │
│    ↓                                                          │
│    Controlled by: Tabs component                              │
│    Used by: Tabs visibility                                   │
│                                                               │
│  hasUnsavedChanges: boolean                                   │
│    ↓                                                          │
│    Computed by: useEffect(settings, originalSettings)         │
│    Used by: Unsaved changes alert, Save button               │
│                                                               │
│  logFilter: 'all' | 'zoho' | 'google_ads'                     │
│    ↓                                                          │
│    Controlled by: Filter tabs                                 │
│    Used by: filteredLogs computation                          │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### Integration Settings Save Flow

```
                      ┌──────────────────┐
                      │  Admin UI Form   │
                      │  User edits      │
                      │  settings        │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  updateSettings()│
                      │  Local state     │
                      │  update          │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  hasUnsavedChanges│
                      │  = true          │
                      │  (auto-computed) │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  User clicks     │
                      │  "Save Settings" │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  save() function │
                      │  setSaving(true) │
                      └────────┬─────────┘
                               │
                               ▼
                   POST /api/admin/integrations
                      { settings object }
                               │
                               ▼
                      ┌──────────────────┐
                      │  API Route       │
                      │  route.ts        │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  Validate fields │
                      │  Filter allowed  │
                      │  keys            │
                      └────────┬─────────┘
                               │
                               ▼
                    ┌────────────────────────┐
                    │  Prisma upsert         │
                    │  IntegrationSettings   │
                    └────────┬───────────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  Return updated  │
                      │  settings        │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  Update state    │
                      │  - settings      │
                      │  - originalSettings│
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  hasUnsavedChanges│
                      │  = false         │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  loadData()      │
                      │  Refresh logs    │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  setSaving(false)│
                      │  ✅ Done         │
                      └──────────────────┘
```

### Zoho Lead Creation Flow

```
                      ┌──────────────────┐
                      │  User submits    │
                      │  lead form       │
                      │  (website)       │
                      └────────┬─────────┘
                               │
                               ▼
                      POST /api/lead
                      { name, email, phone, message, ... }
                               │
                               ▼
                      ┌──────────────────┐
                      │  Store in DB     │
                      │  Lead table      │
                      │  status: pending │
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  Get Integration │
                      │  Settings        │
                      └────────┬─────────┘
                               │
                               ▼
                Are Zoho credentials configured?
                      ├─ NO  → Skip Zoho, log warning
                      │
                      └─ YES → Continue
                               │
                               ▼
                      ┌──────────────────┐
                      │  zohoService.ts  │
                      │  createZohoLead()│
                      └────────┬─────────┘
                               │
                               ▼
                      ┌──────────────────┐
                      │  Check token     │
                      │  expiry          │
                      └────────┬─────────┘
                               │
                               ▼
                Is token expired/missing?
                      ├─ YES → refreshZohoToken()
                      │         ↓
                      │    POST /oauth/v2/token
                      │         ↓
                      │    Update IntegrationSettings
                      │         ↓
                      │    Continue
                      │
                      └─ NO  → Continue
                               │
                               ▼
                      ┌──────────────────┐
                      │  POST to Zoho    │
                      │  /crm/v2/Leads   │
                      │  with lead data  │
                      └────────┬─────────┘
                               │
                               ▼
                      Was request successful?
                      ├─ NO  → ┌──────────────────┐
                      │        │  Log error       │
                      │        │  Update Lead     │
                      │        │  status: failed  │
                      │        │  Queue retry     │
                      │        └──────────────────┘
                      │
                      └─ YES → ┌──────────────────┐
                               │  Extract Zoho    │
                               │  Lead ID         │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │  Update Lead     │
                               │  status: pushed  │
                               │  zohoLeadId: XXX │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │  Log success     │
                               │  IntegrationLog  │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │  Return to API   │
                               │  route           │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │  Map Google Ads  │
                               │  conversion      │
                               │  labels          │
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │  Return response │
                               │  to client       │
                               │  + conversion map│
                               └────────┬─────────┘
                                        │
                                        ▼
                               ┌──────────────────┐
                               │  Client fires    │
                               │  gtag conversion │
                               │  ✅ Complete     │
                               └──────────────────┘
```

---

## API Integration Patterns

### Zoho CRM OAuth2 Token Management

```
┌─────────────────────────────────────────────────────────┐
│              Token Lifecycle Management                  │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Initial Setup (Manual)                                   │
│    1. Admin creates OAuth client in Zoho                  │
│    2. Admin initiates OAuth flow                          │
│    3. User authorizes scopes                              │
│    4. Exchange auth code for refresh token                │
│    5. Store refresh token in IntegrationSettings          │
│                                                           │
│  First API Call                                           │
│    1. Check: accessToken exists?                          │
│       ├─ NO  → refreshZohoToken() → Continue              │
│       └─ YES → Check: tokenExpiresAt > now?               │
│                ├─ NO  → refreshZohoToken() → Continue     │
│                └─ YES → Use existing token                │
│                                                           │
│  Token Refresh Process                                    │
│    1. POST https://accounts.zoho.com/oauth/v2/token       │
│       Body:                                               │
│         refresh_token: XXXX                               │
│         client_id: XXXX                                   │
│         client_secret: XXXX                               │
│         grant_type: refresh_token                         │
│                                                           │
│    2. Response:                                           │
│       {                                                   │
│         access_token: "new_token",                        │
│         expires_in: 3600 (seconds)                        │
│       }                                                   │
│                                                           │
│    3. Update IntegrationSettings:                         │
│       - zohoAccessToken = new_token                       │
│       - zohoTokenExpiresAt = now + expires_in             │
│       - lastZohoTokenRefreshAt = now                      │
│                                                           │
│    4. Log refresh event to IntegrationLog                 │
│                                                           │
│  Error Handling                                           │
│    - Invalid refresh token → Log error, notify admin      │
│    - Network error → Retry with exponential backoff       │
│    - Rate limit → Queue request for later                 │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Google Ads Conversion Tracking

```
┌─────────────────────────────────────────────────────────┐
│          Client-Side Conversion Tracking                  │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  Setup (Once)                                             │
│    1. Load gtag.js script in <head>                       │
│       <script async src="https://www.googletagmanager    │
│              .com/gtag/js?id=AW-XXXXXXXXXX"></script>    │
│                                                           │
│    2. Initialize gtag with conversion ID                  │
│       gtag('js', new Date());                             │
│       gtag('config', 'AW-XXXXXXXXXX');                    │
│                                                           │
│  Conversion Event (On Lead Submit)                        │
│    1. API returns Google conversion labels                │
│       {                                                   │
│         "lead_submit": "AW-XXXXXXXXXX/AbCdEfGhIj",        │
│         "call_click": "AW-XXXXXXXXXX/KlMnOpQrSt"          │
│       }                                                   │
│                                                           │
│    2. Fire conversion event                               │
│       gtag('event', 'conversion', {                       │
│         'send_to': 'AW-XXXXXXXXXX/AbCdEfGhIj',            │
│         'value': 1.0,                                     │
│         'currency': 'USD',                                │
│         'transaction_id': '<lead_id>'                     │
│       });                                                 │
│                                                           │
│    3. Google receives conversion                          │
│       - Attributes to ad click (if within window)         │
│       - Updates conversion metrics in Google Ads          │
│                                                           │
│  Server-Side Tracking (Optional)                          │
│    1. Use Google Ads API with API key                     │
│    2. Enhanced conversions with hashed user data          │
│    3. Better attribution, works without cookies           │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Entity Relationship Diagram

```
┌─────────────────────┐
│       User          │
│─────────────────────│
│ id (PK)             │◄──────┐
│ name                │       │
│ email (unique)      │       │ Authentication
│ passwordHash        │       │ & Authorization
│ role                │       │
│ active              │       │
│ createdAt           │       │
│ updatedAt           │       │
└─────────────────────┘       │
                              │
                              │
┌──────────────────────────────────┐
│     IntegrationSettings          │
│──────────────────────────────────│
│ id (PK)                          │
│ zohoClientId                     │◄────────┐
│ zohoClientSecret                 │         │
│ zohoRefreshToken                 │         │ Zoho CRM
│ zohoAccessToken                  │         │ Configuration
│ zohoTokenExpiresAt               │         │
│ lastZohoTokenRefreshAt           │         │
│ googleConversionId               │◄────────┤
│ googleApiKey                     │         │
│ googleEventLabels (JSON)         │         │ Google Ads
│ createdAt                        │         │ Configuration
│ updatedAt                        │         │
└──────────────────────────────────┘         │
                                             │
                                             │
┌─────────────────────┐                     │
│       Lead          │                     │
│─────────────────────│                     │
│ id (PK)             │                     │
│ name                │                     │
│ email               │                     │
│ phone               │◄────────────────────┤
│ message             │                     │
│ source              │                     │ Lead Management
│ campaign            │                     │ & Backup
│ leadSource          │                     │
│ raw (JSON)          │                     │
│ status              │ (pending/pushed/failed)
│ zohoLeadId          │                     │
│ createdAt           │ (indexed)           │
│ updatedAt           │                     │
└─────────────────────┘                     │
      ↓ (correlation)                       │
      ↓                                     │
┌──────────────────────┐                    │
│   IntegrationLog     │                    │
│──────────────────────│                    │
│ id (PK)              │                    │
│ type                 │◄───────────────────┤
│ provider             │ (zoho/google_ads)  │
│ level                │ (info/warn/error)  │ Activity Logging
│ message              │                    │ & Monitoring
│ statusCode           │                    │
│ request (JSON)       │                    │
│ response (JSON)      │                    │
│ error                │                    │
│ correlationId        │                    │
│ createdAt            │ (indexed)          │
└──────────────────────┘                    │
                                            │
                                            │
┌─────────────────────────┐                 │
│    IntegrationRetry     │                 │
│─────────────────────────│                 │
│ id (PK)                 │                 │
│ type                    │◄────────────────┘
│ payload (JSON)          │
│ attempts                │      Retry Queue
│ maxAttempts             │      & Error Recovery
│ nextRunAt               │ (indexed)
│ lastError               │
│ status                  │ (queued/succeeded/failed)
│ createdAt               │ (indexed)
│ updatedAt               │
└─────────────────────────┘
```

### Index Strategy

```sql
-- Performance-critical indexes

-- Lead lookups by status and time
CREATE INDEX idx_lead_status ON Lead(status);
CREATE INDEX idx_lead_created_at ON Lead(createdAt DESC);

-- Log filtering and sorting
CREATE INDEX idx_log_provider_created ON IntegrationLog(provider, createdAt DESC);
CREATE INDEX idx_log_level_created ON IntegrationLog(level, createdAt DESC);

-- Retry queue processing
CREATE INDEX idx_retry_status_nextrun ON IntegrationRetry(status, nextRunAt ASC);
CREATE INDEX idx_retry_created ON IntegrationRetry(createdAt DESC);

-- User authentication
CREATE UNIQUE INDEX idx_user_email ON User(email);
```

---

## Security Model

### Threat Model & Mitigations

```
┌──────────────────────────────────────────────────────────┐
│                    Threat: Unauthorized Access            │
├──────────────────────────────────────────────────────────┤
│ Risk: User without admin role accessing admin panel      │
│                                                           │
│ Mitigations:                                              │
│  ✓ Middleware checks role before serving protected pages │
│  ✓ API routes verify session and role                    │
│  ✓ NextAuth JWT tokens signed with NEXTAUTH_SECRET       │
│  ✓ Tokens expire after 30 days                           │
│  ✓ HTTPS-only in production                              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                 Threat: Credential Exposure               │
├──────────────────────────────────────────────────────────┤
│ Risk: Zoho/Google credentials leaked in logs or frontend │
│                                                           │
│ Mitigations:                                              │
│  ✓ Secrets stored in environment variables               │
│  ✓ Database credentials encrypted at rest                │
│  ✓ Password fields use type="password" (masked)          │
│  ✓ Access tokens not sent to frontend                    │
│  ✓ Logs sanitize sensitive data before writing           │
│  ✓ .env.local in .gitignore (not committed)              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                   Threat: CSRF Attacks                    │
├──────────────────────────────────────────────────────────┤
│ Risk: Forged requests modifying integration settings     │
│                                                           │
│ Mitigations:                                              │
│  ✓ NextAuth CSRF protection built-in                     │
│  ✓ SameSite cookie attribute                             │
│  ✓ Origin checking in middleware                         │
│  ✓ No GET requests with side effects                     │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                   Threat: XSS Attacks                     │
├──────────────────────────────────────────────────────────┤
│ Risk: Malicious scripts injected via log messages        │
│                                                           │
│ Mitigations:                                              │
│  ✓ React auto-escapes rendered content                   │
│  ✓ Input validation and sanitization                     │
│  ✓ CSP headers in production                             │
│  ✓ No dangerouslySetInnerHTML usage                      │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│               Threat: SQL Injection                       │
├──────────────────────────────────────────────────────────┤
│ Risk: Malicious SQL via API inputs                       │
│                                                           │
│ Mitigations:                                              │
│  ✓ Prisma ORM parameterized queries                      │
│  ✓ No raw SQL queries                                    │
│  ✓ Input validation before database operations           │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│            Threat: Brute Force Attacks                    │
├──────────────────────────────────────────────────────────┤
│ Risk: Attacker guesses admin password                    │
│                                                           │
│ Mitigations:                                              │
│  ✓ bcrypt password hashing (slow by design)              │
│  ✓ Rate limiting (TODO: implement)                       │
│  ✓ Account lockout after N failures (TODO)               │
│  ✓ Strong password policy (TODO)                         │
│  ✓ MFA/2FA (TODO: planned enhancement)                   │
└──────────────────────────────────────────────────────────┘
```

---

## Error Handling Strategy

### Error Handling Layers

```
┌──────────────────────────────────────────────────────────┐
│                  Layer 1: Frontend                        │
├──────────────────────────────────────────────────────────┤
│  try {                                                    │
│    const res = await fetch('/api/admin/integrations');   │
│    const data = await res.json();                        │
│    setSettings(data.settings);                           │
│  } catch (error) {                                        │
│    console.error('[Admin] Error loading:', error);       │
│    // User sees: "Loading..." indefinitely or            │
│    // show error alert (TODO)                            │
│  }                                                        │
│                                                           │
│  Characteristics:                                         │
│  - User-friendly error messages                          │
│  - Graceful degradation                                  │
│  - Retry mechanisms                                      │
│  - Loading states                                        │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                  Layer 2: API Routes                      │
├──────────────────────────────────────────────────────────┤
│  export async function POST(req: NextRequest) {          │
│    try {                                                  │
│      const body = await req.json();                      │
│      const settings = await prisma.integrationSettings   │
│        .upsert({...});                                    │
│      return NextResponse.json({ settings });             │
│    } catch (error: any) {                                │
│      console.error('[API] Error:', error);               │
│      return NextResponse.json(                           │
│        { error: error.message },                         │
│        { status: 500 }                                   │
│      );                                                   │
│    }                                                      │
│  }                                                        │
│                                                           │
│  Characteristics:                                         │
│  - Structured error responses                            │
│  - HTTP status codes                                     │
│  - Error logging                                         │
│  - Sanitized error messages                              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                  Layer 3: Service Layer                   │
├──────────────────────────────────────────────────────────┤
│  export async function createZohoLead(data) {            │
│    try {                                                  │
│      await ensureZohoToken();                            │
│      const response = await axios.post(...);             │
│      await logIntegration('info', 'Lead created', ...);  │
│      return { success: true, zohoLeadId: ... };          │
│    } catch (error: any) {                                │
│      await logIntegration('error', error.message, ...);  │
│      await queueRetry('zoho_lead', data);                │
│      throw error; // Re-throw to API layer               │
│    }                                                      │
│  }                                                        │
│                                                           │
│  Characteristics:                                         │
│  - Business logic error handling                         │
│  - Automatic retry queueing                              │
│  - Detailed logging                                      │
│  - Error recovery strategies                             │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                  Layer 4: External APIs                   │
├──────────────────────────────────────────────────────────┤
│  Zoho CRM API Errors:                                     │
│  - 401: Invalid token → Auto-refresh & retry             │
│  - 403: Insufficient permissions → Log & alert admin     │
│  - 429: Rate limit → Queue & retry with backoff          │
│  - 500: Server error → Retry with exponential backoff    │
│  - Network timeout → Retry 3 times, then queue           │
│                                                           │
│  Google Ads API Errors:                                   │
│  - Invalid conversion ID → Log & show in admin UI        │
│  - Missing credentials → Gracefully skip tracking        │
│  - Client-side gtag errors → Silent (won't break app)    │
└──────────────────────────────────────────────────────────┘
```

### Retry Strategy

```
Failed Request (e.g., Zoho API timeout)
    ↓
Log error to IntegrationLog
    ↓
Create IntegrationRetry entry
    - payload: original request data
    - attempts: 0
    - maxAttempts: 5
    - nextRunAt: now + 60 seconds
    - status: queued
    ↓
[Background Job / Cron]
    ↓
Query IntegrationRetry
WHERE status = 'queued' AND nextRunAt <= now
    ↓
FOR EACH retry:
    ↓
    Attempt request again
        ↓
        Success?
        ├─ YES → Update status: succeeded
        │         Delete from queue (optional)
        │
        └─ NO  → attempts++
                 ↓
                 attempts < maxAttempts?
                 ├─ YES → nextRunAt = now + (60 * 2^attempts)
                 │         (exponential backoff)
                 │
                 └─ NO  → status: failed
                          lastError: error message
                          Alert admin (TODO)
```

---

## Deployment Architecture

### Production Deployment (Vercel + PostgreSQL)

```
┌─────────────────────────────────────────────────────────────┐
│                         Internet                             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
              ┌─────────────────────┐
              │   Vercel Edge       │
              │   Network           │
              │                     │
              │  - SSL/TLS          │
              │  - DDoS Protection  │
              │  - CDN              │
              └──────────┬──────────┘
                         │
                         ▼
              ┌─────────────────────┐
              │   Next.js App       │
              │   (Serverless)      │
              │                     │
              │  - Middleware       │
              │  - API Routes       │
              │  - React Components │
              └──────────┬──────────┘
                         │
                         ├──────────┐
                         ▼          ▼
            ┌─────────────────┐  ┌──────────────────┐
            │   PostgreSQL    │  │   External APIs  │
            │   Database      │  │                  │
            │                 │  │  - Zoho CRM      │
            │  - Neon/Supabase│  │  - Google Ads    │
            │  - Connection   │  └──────────────────┘
            │    Pooling      │
            │  - Automated    │
            │    Backups      │
            └─────────────────┘
```

### Environment Configuration

```yaml
# Production (.env.production)
NODE_ENV: production
DATABASE_URL: postgresql://...@db.region.provider.com/prod_db
NEXTAUTH_SECRET: <64-char-random-string>
NEXTAUTH_URL: https://your-domain.com
ZOHO_CLIENT_ID: <production-client-id>
ZOHO_CLIENT_SECRET: <production-client-secret>
ZOHO_REFRESH_TOKEN: <production-refresh-token>
GOOGLE_CONVERSION_ID: AW-XXXXXXXXXX

# Staging (.env.staging)
NODE_ENV: production
DATABASE_URL: postgresql://...@db.region.provider.com/staging_db
NEXTAUTH_SECRET: <different-secret>
NEXTAUTH_URL: https://staging.your-domain.com
ZOHO_CLIENT_ID: <sandbox-client-id>
ZOHO_CLIENT_SECRET: <sandbox-client-secret>
ZOHO_REFRESH_TOKEN: <sandbox-refresh-token>
GOOGLE_CONVERSION_ID: AW-YYYYYYYYYY

# Development (.env.local)
NODE_ENV: development
DATABASE_URL: postgresql://postgres:password@localhost:5432/dev_db
NEXTAUTH_SECRET: dev-secret-not-secure
NEXTAUTH_URL: http://localhost:3000
ZOHO_CLIENT_ID: <development-client-id>
ZOHO_CLIENT_SECRET: <development-client-secret>
ZOHO_REFRESH_TOKEN: <development-refresh-token>
GOOGLE_CONVERSION_ID: AW-TESTTEST
```

### Scaling Considerations

```
Current Architecture (Small Scale)
  - Vercel Serverless Functions (auto-scales)
  - PostgreSQL (managed, single instance)
  - Suitable for: < 10,000 leads/month

Medium Scale (10K - 100K leads/month)
  - Add: Redis cache for settings
  - Add: Database read replicas
  - Add: Message queue (Bull/BullMQ) for async processing
  - Consider: Dedicated Zoho/Google service workers

Large Scale (> 100K leads/month)
  - Microservices architecture
  - Kubernetes orchestration
  - Multi-region database (PostgreSQL + read replicas)
  - Event-driven architecture (Kafka/RabbitMQ)
  - Separate services:
    - Auth Service
    - Integration Service (Zoho)
    - Tracking Service (Google)
    - Logging Service
    - Admin API Gateway
```

---

## Monitoring & Observability

### Metrics to Track

```
Application Metrics:
  - Request latency (p50, p95, p99)
  - Error rate (per endpoint)
  - Authentication success/failure rate
  - Database query performance

Business Metrics:
  - Leads submitted (per hour/day)
  - Leads pushed to Zoho (success rate)
  - Zoho token refresh rate
  - Google conversion tracking rate
  - Integration test results

Infrastructure Metrics:
  - CPU usage
  - Memory usage
  - Database connections (active/idle)
  - API response times
  - Network throughput

Logs to Collect:
  - Authentication events
  - Integration successes/failures
  - API errors
  - Database errors
  - Security events (unauthorized access attempts)
```

### Recommended Tools

```
- Logging: Vercel Logs, LogRocket, Sentry
- Monitoring: Vercel Analytics, New Relic, Datadog
- Error Tracking: Sentry, Rollbar
- Database: Prisma logging, PostgreSQL logs
- Uptime: UptimeRobot, Pingdom
```

---

## Conclusion

This architecture provides:
- ✅ **Robust authentication** with NextAuth v5
- ✅ **Scalable design** from small to large scale
- ✅ **Comprehensive error handling** at all layers
- ✅ **Security best practices** throughout
- ✅ **Maintainable codebase** with clear separation of concerns
- ✅ **Enterprise-grade monitoring** and observability

For questions or improvements, refer to README.md or contact the development team.
