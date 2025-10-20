# Free Consultation System - Flow Chart

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      LANDING PAGE                               │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                                                             │ │
│  │  ┌──────────────┐      ┌──────────────────┐               │ │
│  │  │ Hero Section │      │ Floating Button  │               │ │
│  │  │              │      │ (Always Visible) │               │ │
│  │  └──────┬───────┘      └────────┬─────────┘               │ │
│  │         │                       │                          │ │
│  │         ▼                       │                          │ │
│  │  ┌──────────────────────────────┼──────────────────┐      │ │
│  │  │   Free Consultation Banner   │                  │      │ │
│  │  │  (After Stats/Hero Section)  │                  │      │ │
│  │  └──────────────┬───────────────┼──────────────────┘      │ │
│  │                 │                │                          │ │
│  │                 │                │                          │ │
│  │                 ▼                ▼                          │ │
│  │         ┌────────────────────────────────────┐             │ │
│  │         │    Consultation Modal Opens        │             │ │
│  │         │  (Glassmorphism Premium Design)    │             │ │
│  │         └──────────────┬─────────────────────┘             │ │
│  │                        │                                    │ │
│  │                        ▼                                    │ │
│  │         ┌────────────────────────────────┐                 │ │
│  │         │     Consultation Form          │                 │ │
│  │         │  - Name, Email, Phone          │                 │ │
│  │         │  - Company, Service Interest   │                 │ │
│  │         │  - Preferred Date & Time       │                 │ │
│  │         │  - Additional Message          │                 │ │
│  │         └──────────────┬─────────────────┘                 │ │
│  │                        │                                    │ │
│  └────────────────────────┼────────────────────────────────────┘ │
└───────────────────────────┼──────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────────┐
              │   Client-Side Validation    │
              │   - Required fields check   │
              │   - Email format validation │
              │   - Phone format validation │
              └─────────────┬───────────────┘
                            │
                            ▼
         ┌──────────────────┴──────────────────┐
         │                                      │
    ┌────▼─────┐                         ┌─────▼─────┐
    │ Invalid  │                         │   Valid   │
    │  Data    │                         │   Data    │
    └────┬─────┘                         └─────┬─────┘
         │                                      │
         ▼                                      ▼
  ┌──────────────┐              ┌──────────────────────────────┐
  │ Show Errors  │              │  POST /api/consultation      │
  │ (Red Fields) │              │  - Send form data            │
  └──────────────┘              │  - Show loading state        │
                                └──────────────┬───────────────┘
                                               │
                                               ▼
                                ┌──────────────────────────────┐
                                │    API Endpoint Handler      │
                                │  /api/consultation/route.ts  │
                                │  - Validate server-side      │
                                │  - Sanitize input            │
                                └──────────────┬───────────────┘
                                               │
                                               ▼
                                ┌──────────────────────────────┐
                                │   Create Database Record     │
                                │   (Prisma - PostgreSQL)      │
                                │   ConsultationRequest table  │
                                └──────────────┬───────────────┘
                                               │
                            ┌──────────────────┴──────────────────┐
                            │                                      │
                       ┌────▼────┐                           ┌────▼────┐
                       │ Success │                           │  Error  │
                       └────┬────┘                           └────┬────┘
                            │                                      │
        ┌───────────────────┼──────────────────────┐              │
        │                   │                      │              │
        ▼                   ▼                      ▼              ▼
┌───────────────┐  ┌───────────────┐    ┌──────────────┐  ┌──────────────┐
│ Track Google  │  │ Send Email    │    │ Sync to Zoho │  │ Show Error   │
│   Analytics   │  │ Notifications │    │    CRM       │  │   Message    │
│  (Conversion) │  │ - To Admin    │    │  (Optional)  │  │              │
└───────┬───────┘  │ - To Client   │    └──────────────┘  └──────────────┘
        │          └───────────────┘                              │
        │                                                          │
        └──────────────────┬───────────────────────────────────────┘
                           │
                           ▼
                ┌─────────────────────────┐
                │   Show Success Message  │
                │  - Check icon animation │
                │  - Confirmation text    │
                │  - Auto-close modal     │
                └─────────────┬───────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │  Reset Form & Close   │
                  │  Return to Landing    │
                  └───────────────────────┘
```

---

## User Journey Flow

### Journey 1: Via Floating Button
```
User visits landing page
    │
    ▼
Sees floating button (bottom-right on desktop, bottom bar on mobile)
    │
    ▼
Clicks "Free Consultation" button
    │
    ▼
Modal opens with consultation form
    │
    ▼
Fills form and submits
    │
    ▼
Success confirmation shown
    │
    ▼
Modal auto-closes after 3 seconds
```

### Journey 2: Via Banner Section
```
User scrolls down landing page
    │
    ▼
Sees prominent consultation banner (after hero/stats)
    │
    ▼
Clicks "Schedule Your Free Consultation" button
    │
    ▼
Modal opens with consultation form
    │
    ▼
Fills form and submits
    │
    ▼
Success confirmation shown
    │
    ▼
Modal auto-closes after 3 seconds
```

---

## Form Validation Flow

```
User fills form field
    │
    ▼
onBlur / onChange event triggers
    │
    ▼
Client-side validation runs
    │
    ├─── Required field? ──┐
    │                      │
    ├─── Valid email?  ────┤
    │                      │
    └─── Valid phone?  ────┤
                           │
                           ▼
                    ┌──────────────┐
                    │ Set field    │
                    │ error state  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Display red  │
                    │ error text   │
                    └──────────────┘
```

---

## Data Flow Diagram

```
┌─────────────┐       ┌──────────────┐       ┌────────────────┐
│  Frontend   │──────▶│  API Route   │──────▶│   Database     │
│  Component  │       │  (Next.js)   │       │  (PostgreSQL)  │
└─────────────┘       └──────────────┘       └────────────────┘
       │                     │                       │
       │                     ▼                       │
       │              ┌──────────────┐               │
       │              │  Validation  │               │
       │              └──────────────┘               │
       │                     │                       │
       │                     ▼                       │
       │              ┌──────────────┐               │
       │              │ Email Queue  │               │
       │              │  (Optional)  │               │
       │              └──────────────┘               │
       │                     │                       │
       │                     ▼                       │
       │              ┌──────────────┐               │
       │              │  Zoho CRM    │               │
       │              │  Integration │               │
       │              │  (Optional)  │               │
       │              └──────────────┘               │
       │                     │                       │
       ▼                     ▼                       ▼
┌─────────────┐       ┌──────────────┐       ┌────────────────┐
│   Success   │◀──────│   Response   │◀──────│  Record Saved  │
│  Animation  │       │   JSON       │       │   with ID      │
└─────────────┘       └──────────────┘       └────────────────┘
```

---

## Component Interaction Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                        page.tsx                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                          │ │
│  │  <FreeConsultationBanner />                             │ │
│  │    │                                                     │ │
│  │    ├─── State: isModalOpen                             │ │
│  │    │                                                     │ │
│  │    └─── <ConsultationModal isOpen={isModalOpen} />     │ │
│  │              │                                           │ │
│  │              └─── <ConsultationForm />                  │ │
│  │                         │                                │ │
│  │                         ├─── Form State Management      │ │
│  │                         ├─── Validation Logic           │ │
│  │                         └─── API Call                   │ │
│  │                                                          │ │
│  │  <FloatingConsultationButton />                         │ │
│  │    │                                                     │ │
│  │    ├─── State: isModalOpen                             │ │
│  │    │                                                     │ │
│  │    └─── <ConsultationModal isOpen={isModalOpen} />     │ │
│  │              │                                           │ │
│  │              └─── <ConsultationForm />                  │ │
│  │                                                          │ │
│  └────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

---

## Database Schema Flow

```
ConsultationRequest
├── id (cuid)           ──▶ Unique identifier
├── name                ──▶ Client name
├── email               ──▶ Client email (indexed)
├── phone               ──▶ Optional phone number
├── company             ──▶ Optional company name
├── serviceInterest     ──▶ Selected service
├── preferredDate       ──▶ YYYY-MM-DD format
├── preferredTime       ──▶ HH:MM format
├── message             ──▶ Optional additional details
├── status              ──▶ pending | confirmed | completed | cancelled
├── notes               ──▶ Admin notes
├── source              ──▶ landing_page | modal | banner
├── zohoLeadId          ──▶ Optional Zoho CRM link
├── createdAt           ──▶ Auto timestamp (indexed)
└── updatedAt           ──▶ Auto timestamp
```

---

## State Management Flow

```
Component State:
┌─────────────────────┐
│ ConsultationForm    │
│                     │
│ form: {             │
│   name: {           │
│     value: "",      │
│     error: "",      │
│     touched: false  │
│   },                │
│   email: {...},     │
│   ...               │
│ }                   │
│                     │
│ isSubmitting: false │
│ submitSuccess: false│
│ submitError: ""     │
└─────────────────────┘
            │
            ▼
    User Input Changes
            │
            ▼
    handleChange(field, value)
            │
            ▼
    Validation Logic
            │
            ▼
    Update Field State
            │
            ▼
    Re-render with Errors
```

---

## Error Handling Flow

```
API Call (/api/consultation)
    │
    ├─── Network Error ───────────▶ Show generic error message
    │
    ├─── 400 Bad Request ─────────▶ Show validation error
    │
    ├─── 500 Server Error ────────▶ Show server error message
    │
    └─── 201 Success ─────────────▶ Show success animation
```

---

## Console Logging Flow

```
[ConsultationForm] Component loaded
    │
    ▼
[ConsultationForm] Rendering with compact: false
    │
    ▼
[ConsultationForm] Field email changed: user@example.com
    │
    ▼
[ConsultationForm] Form submission started
    │
    ▼
[ConsultationForm] Form validation result: true
    │
    ▼
[ConsultationForm] Sending request to API endpoint
    │
    ▼
[ConsultationAPI] POST request received
    │
    ▼
[ConsultationAPI] Validation passed, creating consultation request
    │
    ▼
[ConsultationAPI] Consultation request created: clxxxx...
    │
    ▼
[ConsultationForm] Consultation request submitted successfully
    │
    ▼
[ConsultationForm] Tracking Google Analytics conversion
    │
    ▼
[ConsultationModal] Auto-closing modal after success
```

---

**Built by:** Vedpragya Bharat Private Limited  
**Founder:** Aman Kumar Sharma  
**Last Updated:** 2025-10-20
