# Free Consultation Components

## Overview
This module provides a complete consultation booking system for the vusiness-website landing page. It includes multiple components that work together to capture consultation requests and increase conversions.

**Built by:** Vedpragya Bharat Private Limited  
**Founder:** Aman Kumar Sharma

---

## 🎯 Purpose
Reduce client hesitation and increase conversions by offering prominent free consultations throughout the landing page.

---

## 📦 Components

### 1. **ConsultationForm.tsx**
Reusable form component with validation and error handling.

**Features:**
- Real-time field validation
- Premium UI with glassmorphism effects
- Loading states and success animations
- Integration with consultation API
- Google Analytics event tracking
- Extensive console logging for debugging

**Props:**
```typescript
{
  onSuccess?: () => void;      // Callback on successful submission
  onError?: (error: string) => void;  // Callback on error
  compact?: boolean;           // For smaller layouts (default: false)
}
```

**Usage:**
```tsx
import ConsultationForm from '@/app/components/consultation/ConsultationForm';

<ConsultationForm 
  onSuccess={() => console.log('Success!')}
  onError={(error) => console.error(error)}
  compact={false}
/>
```

---

### 2. **ConsultationModal.tsx**
Premium modal popup for consultation booking.

**Features:**
- Glassmorphism design matching website theme
- Smooth animations with framer-motion
- Click outside to close
- Escape key to close
- Prevents body scroll when open
- Auto-closes after successful submission

**Props:**
```typescript
{
  isOpen: boolean;    // Modal visibility state
  onClose: () => void; // Close callback
}
```

**Usage:**
```tsx
import ConsultationModal from '@/app/components/consultation/ConsultationModal';

const [isOpen, setIsOpen] = useState(false);

<ConsultationModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
/>
```

---

### 3. **FloatingConsultationButton.tsx**
Sticky floating button always visible while scrolling.

**Features:**
- Sticky positioning (bottom-right on desktop, bottom bar on mobile)
- Premium pulse animation
- Opens consultation modal on click
- Google Analytics click tracking
- Separate designs for desktop and mobile

**Props:** None (self-contained component)

**Usage:**
```tsx
import FloatingConsultationButton from '@/app/components/consultation/FloatingConsultationButton';

// Add to layout or page
<FloatingConsultationButton />
```

---

### 4. **FreeConsultationBanner.tsx**
Full-width banner section promoting free consultations.

**Features:**
- Eye-catching gradient design
- Benefits grid with icons
- Premium animations on scroll
- Opens consultation modal
- Trust indicators
- Responsive design

**Props:** None (self-contained component)

**Usage:**
```tsx
import FreeConsultationBanner from '@/app/components/consultation/FreeConsultationBanner';

// Add to landing page between sections
<FreeConsultationBanner />
```

---

## 🗄️ Database Schema

### ConsultationRequest Model
```prisma
model ConsultationRequest {
  id              String    @id @default(cuid())
  name            String
  email           String
  phone           String?
  company         String?
  serviceInterest String
  preferredDate   String
  preferredTime   String
  message         String?   @db.Text
  status          String    @default("pending")
  notes           String?   @db.Text
  source          String?
  zohoLeadId      String?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  @@index([status])
  @@index([createdAt])
  @@index([email])
}
```

**Statuses:**
- `pending` - New consultation request
- `confirmed` - Consultation confirmed with client
- `completed` - Consultation session completed
- `cancelled` - Consultation cancelled

---

## 🔌 API Endpoints

### POST /api/consultation
Submit a new consultation request.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 123-4567",
  "company": "Acme Corp",
  "serviceInterest": "nodejs",
  "preferredDate": "2025-10-25",
  "preferredTime": "14:00",
  "message": "Looking for enterprise Node.js solutions",
  "source": "landing_page"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "id": "clxxxx..."
}
```

### GET /api/consultation
Retrieve consultation requests (admin only).

**Query Parameters:**
- `status` - Filter by status (optional)
- `limit` - Number of records (default: 50)
- `offset` - Pagination offset (default: 0)

### PATCH /api/consultation
Update consultation status (admin only).

**Request Body:**
```json
{
  "id": "clxxxx...",
  "status": "confirmed",
  "notes": "Scheduled for Oct 25, 2pm"
}
```

---

## 📊 Google Analytics Tracking

The components automatically track the following events:

1. **Floating Button Click**
   - Category: `Consultation`
   - Label: `Floating Button Click`

2. **Banner CTA Click**
   - Category: `Consultation`
   - Label: `Banner CTA Click`

3. **Consultation Submission**
   - Category: `Consultation`
   - Label: `Free Consultation Booking`
   - Event: `conversion`

---

## 🎨 Styling

All components use:
- Tailwind CSS for styling
- Glassmorphism effects
- Gradient backgrounds
- Premium animations
- Dark mode support
- Fully responsive design

**Color Scheme:**
- Primary: Cyan-Blue gradient (`from-cyan-600 to-blue-600`)
- Success: Green (`green-500`)
- Error: Red (`red-500`)

---

## 🔧 Integration Steps

### 1. Add to Landing Page
```tsx
// app/page.tsx
import FreeConsultationBanner from './components/consultation/FreeConsultationBanner';
import FloatingConsultationButton from './components/consultation/FloatingConsultationButton';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      
      {/* Add banner after stats or hero */}
      <FreeConsultationBanner />
      
      {/* Other sections */}
      
      {/* Floating button - always visible */}
      <FloatingConsultationButton />
    </div>
  );
}
```

### 2. Update Database
```bash
# Generate Prisma client with new schema
npm run db:generate

# Run migrations
npm run db:migrate
```

### 3. Configure Analytics
Update Google Ads conversion ID in `ConsultationForm.tsx`:
```typescript
// Line ~190
'send_to': 'AW-YOUR_CONVERSION_ID/YOUR_CONVERSION_LABEL',
```

---

## 🐛 Debugging

All components include extensive console logging:

```
[ConsultationForm] Component loaded
[ConsultationForm] Rendering with compact: false
[ConsultationForm] Field email changed: user@example.com
[ConsultationForm] Form submission started
[ConsultationForm] Validation passed
[ConsultationAPI] POST request received
[ConsultationAPI] Consultation request created: clxxxx...
```

Enable in browser console to see full flow.

---

## ✅ Testing Checklist

- [ ] Form validation works correctly
- [ ] Modal opens and closes properly
- [ ] Floating button is always visible
- [ ] Banner displays correctly between sections
- [ ] Form submission creates database record
- [ ] Success message appears after submission
- [ ] Error handling works for failed submissions
- [ ] Mobile responsive design works
- [ ] Dark mode styling is correct
- [ ] Google Analytics events fire correctly

---

## 🚀 Future Enhancements

- [ ] Email notifications (admin + client)
- [ ] Zoho CRM integration
- [ ] Calendar integration (Google Calendar, Calendly)
- [ ] Admin dashboard for managing consultations
- [ ] SMS notifications
- [ ] Automated reminder emails
- [ ] Video call link generation
- [ ] A/B testing different CTA texts

---

## 📞 Support

For issues or questions:
- Email: info@enterprisehero.com
- Founder: Aman Kumar Sharma
- Company: Vedpragya Bharat Private Limited
- CIN: U47912HR2025PTC131357

---

**Last Updated:** 2025-10-20
