# Footer Component - Logic Flowchart

## 🔄 Component Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     FOOTER COMPONENT LIFECYCLE                  │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   Component Mounts     │
                    │  console.log loaded    │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  Initialize State      │
                    │  - showBackToTop=false │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  Setup useEffect       │
                    │  (Scroll Listener)     │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   Render Footer JSX    │
                    └────────────────────────┘
                                 │
                    ┌────────────┴────────────────────┬──────────────┐
                    ▼                                 ▼              ▼
        ┌──────────────────────┐       ┌─────────────────────┐  ┌──────────┐
        │  Render Desktop      │       │  Render Mobile      │  │ Render   │
        │  (> 1024px)          │       │  (< 640px)          │  │ Tablet   │
        │  - Full Grid         │       │  - Single Column    │  │ 640-1024 │
        │  - All Expanded      │       │  - Collapsible      │  │ 2 Cols   │
        └──────────────────────┘       └─────────────────────┘  └──────────┘
```

---

## 📱 Mobile Collapsible Section Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                   COLLAPSIBLE SECTION LOGIC                     │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  CollapsibleSection    │
                    │  Component Mounts      │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  State: isOpen=false   │
                    │  (defaultOpen param)   │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  User on Mobile?       │
                    └────────────────────────┘
                         │              │
                    Yes  │              │  No (Desktop)
                         ▼              ▼
            ┌───────────────────┐   ┌──────────────────┐
            │ Show Button with  │   │  Always Expanded │
            │ Dropdown Icon     │   │  No Button       │
            └───────────────────┘   └──────────────────┘
                         │
                         ▼
            ┌───────────────────────┐
            │  User Clicks Button?  │
            └───────────────────────┘
                         │
                    Yes  │
                         ▼
            ┌───────────────────────┐
            │  Toggle isOpen State  │
            │  console.log toggle   │
            └───────────────────────┘
                         │
                    ┌────┴─────┐
                    ▼          ▼
        ┌─────────────────┐ ┌─────────────────┐
        │  isOpen = true  │ │ isOpen = false  │
        │  Expand Section │ │ Collapse Section│
        │  max-h-96       │ │ max-h-0         │
        │  Rotate Icon ↑  │ │ Icon Normal ↓   │
        └─────────────────┘ └─────────────────┘
```

---

## 🔝 Back to Top Button Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                  BACK TO TOP BUTTON LOGIC                       │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   useEffect Mounted    │
                    │   Setup Scroll Event   │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │   User Scrolls Page    │
                    │   handleScroll fires   │
                    └────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  Check scroll position │
                    │  window.scrollY > 500? │
                    └────────────────────────┘
                         │              │
                    Yes  │              │  No
                         ▼              ▼
            ┌───────────────────┐   ┌──────────────────┐
            │ shouldShow = true │   │ shouldShow=false │
            └───────────────────┘   └──────────────────┘
                         │                      │
                         ▼                      ▼
            ┌───────────────────┐   ┌──────────────────┐
            │ State Update?     │   │ State Update?    │
            │ If changed, set   │   │ If changed, set  │
            └───────────────────┘   └──────────────────┘
                         │                      │
                         ▼                      ▼
            ┌───────────────────┐   ┌──────────────────┐
            │ Show Button       │   │ Hide Button      │
            │ opacity-100       │   │ opacity-0        │
            │ translate-y-0     │   │ translate-y-10   │
            └───────────────────┘   └──────────────────┘
                         │
                         ▼
            ┌───────────────────────┐
            │  User Clicks Button?  │
            └───────────────────────┘
                         │
                    Yes  │
                         ▼
            ┌───────────────────────┐
            │   scrollToTop()       │
            │   window.scrollTo()   │
            │   behavior: 'smooth'  │
            │   console.log action  │
            └───────────────────────┘
                         │
                         ▼
            ┌───────────────────────┐
            │  Scroll to Y=0        │
            │  Button Fades Out     │
            │  (scroll < 500)       │
            └───────────────────────┘
```

---

## 🎯 User Interaction Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     USER INTERACTION FLOW                       │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  User Reaches Footer   │
                    └────────────────────────┘
                                 │
                    ┌────────────┴────────────────────┐
                    ▼                                 ▼
        ┌──────────────────────┐       ┌─────────────────────┐
        │   MOBILE USER        │       │   DESKTOP USER      │
        └──────────────────────┘       └─────────────────────┘
                    │                                 │
                    ▼                                 ▼
        ┌──────────────────────┐       ┌─────────────────────┐
        │ See Company Info     │       │ See All Sections    │
        │ (always visible)     │       │ Expanded            │
        └──────────────────────┘       └─────────────────────┘
                    │                                 │
                    ▼                                 ▼
        ┌──────────────────────┐       ┌─────────────────────┐
        │ Tap Section to       │       │ Hover Over Links    │
        │ Expand/Collapse      │       │ - See Animations    │
        │ - Quick Links        │       │ - Color Changes     │
        │ - Services           │       │ - Scale Effects     │
        │ - Global Offices     │       └─────────────────────┘
        └──────────────────────┘                    │
                    │                               │
                    ▼                               ▼
        ┌──────────────────────┐       ┌─────────────────────┐
        │ Browse Content       │       │ Click Links         │
        │ - Read Info          │       │ Navigate Site       │
        │ - Click Links        │       └─────────────────────┘
        └──────────────────────┘                    │
                    │                               │
                    └───────────────┬───────────────┘
                                    ▼
                    ┌────────────────────────┐
                    │  Subscribe Newsletter  │
                    │  (optional)            │
                    └────────────────────────┘
                                    │
                                    ▼
                    ┌────────────────────────┐
                    │  Social Media Links    │
                    │  (optional)            │
                    └────────────────────────┘
                                    │
                                    ▼
                    ┌────────────────────────┐
                    │  Back to Top Button    │
                    │  (if scrolled down)    │
                    └────────────────────────┘
```

---

## 🔍 Responsive Breakpoint Decision Tree

```
                    ┌────────────────────────┐
                    │   Screen Width Check   │
                    └────────────────────────┘
                                 │
                    ┌────────────┼────────────┐
                    ▼            ▼            ▼
        ┌─────────────────┐ ┌──────────┐ ┌──────────┐
        │   < 640px       │ │ 640-1024 │ │ > 1024px │
        │   (Mobile)      │ │ (Tablet) │ │ (Desktop)│
        └─────────────────┘ └──────────┘ └──────────┘
                    │            │            │
                    ▼            ▼            ▼
        ┌─────────────────┐ ┌──────────┐ ┌──────────┐
        │ Grid: 1 Col     │ │Grid: 2Col│ │Grid:12Col│
        │ Collapsible: ON │ │Collap:OFF│ │Collap:OFF│
        │ Touch: 44px+    │ │Touch:40px│ │Hover: ON │
        └─────────────────┘ └──────────┘ └──────────┘
```

---

## 🎨 Hover State Machine

```
┌─────────────────────────────────────────────────────────────────┐
│                    LINK HOVER STATE MACHINE                     │
└─────────────────────────────────────────────────────────────────┘

    [Idle State]
    text-gray-400
         │
         │ Mouse Enter
         ▼
    [Hover State]
    text-blue-400
    + Underline bar appears
    + Smooth transition
         │
         │ Mouse Leave
         ▼
    [Idle State]
    text-gray-400


┌─────────────────────────────────────────────────────────────────┐
│                  SOCIAL ICON HOVER STATE                        │
└─────────────────────────────────────────────────────────────────┘

    [Idle State]
    bg-gray-800/50
    text-gray-400
    border-gray-700/50
         │
         │ Mouse Enter
         ▼
    [Hover State]
    bg-gradient (blue→cyan)
    text-white
    scale-110
    border-transparent
         │
         │ Mouse Leave
         ▼
    [Idle State]
```

---

## 🔧 Error Handling Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                     ERROR HANDLING FLOW                         │
└─────────────────────────────────────────────────────────────────┘

    ┌────────────────────────┐
    │  Component Error?      │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Error Boundary Catches │
    │ (Parent Level)         │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Fallback UI Shown      │
    │ Footer doesn't crash   │
    │ Rest of app continues  │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Console Logs Available │
    │ For Debugging          │
    └────────────────────────┘


    Newsletter Signup Error:
    ┌────────────────────────┐
    │ API Call Fails?        │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Error State in         │
    │ NewsletterSignup       │
    │ Component              │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Show Error Message     │
    │ Footer Remains Stable  │
    └────────────────────────┘
```

---

## 📊 Performance Optimization Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                 PERFORMANCE OPTIMIZATION                        │
└─────────────────────────────────────────────────────────────────┘

Scroll Event Optimization:
    ┌────────────────────────┐
    │ Scroll Event Fires     │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Passive Listener       │
    │ { passive: true }      │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Check if state changed │
    │ Only update if needed  │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ Update State           │
    │ (if different)         │
    └────────────────────────┘


CSS Transitions vs JS:
    ┌────────────────────────┐
    │ Use CSS Transitions    │
    │ - Hardware Accelerated │
    │ - Better Performance   │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │ transition-all         │
    │ duration-300           │
    └────────────────────────┘
```

---

## 🧪 Testing Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        TESTING FLOW                             │
└─────────────────────────────────────────────────────────────────┘

    ┌────────────────────────┐
    │  Manual Testing        │
    └────────────────────────┘
                │
    ┌───────────┼──────────┐
    ▼           ▼          ▼
[Mobile]   [Tablet]   [Desktop]
    │           │          │
    ▼           ▼          ▼
Test        Test       Test
Collapse    Layout     Hover
    │           │          │
    └───────────┴──────────┘
                │
                ▼
    ┌────────────────────────┐
    │  Accessibility Test    │
    │  - Keyboard Nav        │
    │  - Screen Reader       │
    │  - Focus Indicators    │
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │  Performance Test      │
    │  - Scroll Performance  │
    │  - Animation Smoothness│
    └────────────────────────┘
                │
                ▼
    ┌────────────────────────┐
    │   ✅ All Tests Pass    │
    │   Deploy to Production │
    └────────────────────────┘
```

---

**Last Updated**: October 2025
**Version**: 3.0.0

