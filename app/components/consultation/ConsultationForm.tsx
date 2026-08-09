/**
 * @fileoverview Free Consultation Form Component
 * @description Reusable form for consultation bookings with validation and error handling
 * @module components/consultation/ConsultationForm
 * 
 * Features:
 * - Real-time validation with error messages
 * - Premium UI with glassmorphism effects
 * - Loading states and success animations
 * - Integration with consultation API
 * - Console logging for debugging
 * 
 * Built by: Vedpragya Bharat Private Limited
 */

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

// Console log for debugging
console.log('[ConsultationForm] Component loaded');

// Form field type
type FormField = {
  value: string;
  error: string;
  touched: boolean;
};

// Form state type
type FormState = {
  name: FormField;
  email: FormField;
  phone: FormField;
  company: FormField;
  serviceInterest: FormField;
  preferredDate: FormField;
  preferredTime: FormField;
  message: FormField;
};

// Component props
type ConsultationFormProps = {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  compact?: boolean; // For smaller layouts
};

export default function ConsultationForm({ 
  onSuccess, 
  onError,
  compact = false 
}: ConsultationFormProps) {
  console.log('[ConsultationForm] Rendering with compact:', compact);

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Form state with console logging
  const [form, setForm] = useState<FormState>({
    name: { value: '', error: '', touched: false },
    email: { value: '', error: '', touched: false },
    phone: { value: '', error: '', touched: false },
    company: { value: '', error: '', touched: false },
    serviceInterest: { value: '', error: '', touched: false },
    preferredDate: { value: '', error: '', touched: false },
    preferredTime: { value: '', error: '', touched: false },
    message: { value: '', error: '', touched: false },
  });
  
  // Service options
  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'nodejs', label: 'Node.js Development' },
    { value: 'nextjs', label: 'Next.js Development' },
    { value: 'shopify', label: 'Shopify Development' },
    { value: 'ai-agents', label: 'AI Voice Agents' },
    { value: 'ai-chatbot', label: 'AI Chatbot Development' },
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'api', label: 'API Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other / Not Sure' },
  ];

  // Time slot options
  const timeSlots = [
    { value: '', label: 'Select a time' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
  ];
  
  // Handle input change with validation
  const handleChange = (field: keyof FormState, value: string) => {
    console.log(`[ConsultationForm] Field ${field} changed:`, value);
    let error = '';
    
    // Validation logic
    if (value.trim() === '' && field !== 'phone' && field !== 'company' && field !== 'message') {
      error = 'This field is required';
    } else if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    } else if (field === 'phone' && value && !/^[\d\s\+\-\(\)]+$/.test(value)) {
      error = 'Please enter a valid phone number';
    }
    
    setForm({
      ...form,
      [field]: {
        value,
        error,
        touched: true
      }
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[ConsultationForm] Form submission started');
    
    // Check if all required fields are filled and valid
    const requiredFields: (keyof FormState)[] = ['name', 'email', 'serviceInterest', 'preferredDate', 'preferredTime'];
    const formValid = requiredFields.every(field => 
      form[field].value.trim() !== '' && form[field].error === ''
    );
    
    console.log('[ConsultationForm] Form validation result:', formValid);
    
    if (!formValid) {
      console.log('[ConsultationForm] Form validation failed, marking fields as touched');
      // Mark all fields as touched to show errors
      const updatedForm = { ...form };
      requiredFields.forEach(field => {
        if (updatedForm[field].value.trim() === '') {
          updatedForm[field] = {
            ...updatedForm[field],
            error: 'This field is required',
            touched: true
          };
        }
      });
      
      setForm(updatedForm);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      console.log('[ConsultationForm] Sending request to API endpoint');
      
      // Prepare the form data for submission
      const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        company: form.company.value,
        serviceInterest: form.serviceInterest.value,
        preferredDate: form.preferredDate.value,
        preferredTime: form.preferredTime.value,
        message: form.message.value
      };
      
      console.log('[ConsultationForm] Form data:', formData);
      
      // Call the API endpoint with timeout and better error handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      try {
        const response = await fetch('/api/consultation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        // Try to parse JSON response
        let data;
        try {
          data = await response.json();
        } catch (parseError) {
          console.error('[ConsultationForm] Failed to parse response:', parseError);
          throw new Error('Server returned an invalid response. Database migration may be pending.');
        }
        
        console.log('[ConsultationForm] API response:', data);
        
        if (!response.ok) {
          // Handle specific error cases
          if (response.status === 500) {
            throw new Error('Database error: Please run Prisma migration first (npx prisma migrate dev)');
          }
          throw new Error(data.error || `Server error (${response.status}): ${data.message || 'Failed to submit'}`);
        }
        
        console.log('[ConsultationForm] Consultation request submitted successfully');
        setSubmitSuccess(true);
        
        // Call success callback
        if (onSuccess) {
          onSuccess();
        }
        
        // Reset form after successful submission
        setForm({
          name: { value: '', error: '', touched: false },
          email: { value: '', error: '', touched: false },
          phone: { value: '', error: '', touched: false },
          company: { value: '', error: '', touched: false },
          serviceInterest: { value: '', error: '', touched: false },
          preferredDate: { value: '', error: '', touched: false },
          preferredTime: { value: '', error: '', touched: false },
          message: { value: '', error: '', touched: false },
        });

        // Track conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          console.log('[ConsultationForm] Tracking Google Analytics conversion');
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'event_category': 'Consultation',
            'event_label': 'Free Consultation Booking',
            'value': 1
          });
        }
        
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        
        // Handle network errors
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timeout: Server is taking too long to respond');
        }
        if (fetchError.message?.includes('Failed to fetch')) {
          throw new Error('Network error: Unable to connect to server. Please check your connection.');
        }
        throw fetchError;
      }
      
    } catch (error) {
      console.error('[ConsultationForm] Error submitting form:', error);
      
      // User-friendly error messages
      let errorMessage = 'An error occurred while submitting the form.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      // Add helpful hint if it's likely a database issue
      if (errorMessage.includes('Prisma') || errorMessage.includes('Database') || errorMessage.includes('500')) {
        errorMessage += '\n\nℹ️ This is likely because database migration is pending. Run: npx prisma migrate dev';
      }
      
      setSubmitError(errorMessage);
      
      // Call error callback
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      setIsSubmitting(false);
      console.log('[ConsultationForm] Form submission completed');
    }
  };
  
  // Success message component
  if (submitSuccess) {
    console.log('[ConsultationForm] Showing success message');
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-500/50 text-green-800 dark:text-green-200 p-6 rounded-2xl text-center"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Consultation Booked! 🎉</h3>
        <p className="mb-4">Your free 30-minute consultation has been scheduled. We'll send you a confirmation email shortly.</p>
        <button
          onClick={() => {
            console.log('[ConsultationForm] Resetting success state');
            setSubmitSuccess(false);
          }}
          className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition duration-300"
        >
          Book Another Consultation
        </button>
      </motion.div>
    );
  }
  
  // Main form component
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Console log for form render */}
      {console.log('[ConsultationForm] Rendering form fields')}
      
      {/* Name & Email */}
      <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
        <div>
          <label htmlFor="consultation-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="consultation-name"
            value={form.name.value}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Your full name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
              ${form.name.touched && form.name.error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900'
              }`}
          />
          {form.name.touched && form.name.error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.name.error}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="consultation-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="consultation-email"
            value={form.email.value}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="your.email@company.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
              ${form.email.touched && form.email.error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900'
              }`}
          />
          {form.email.touched && form.email.error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.email.error}</p>
          )}
        </div>
      </div>
      
      {/* Phone & Company */}
      <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
        <div>
          <label htmlFor="consultation-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="consultation-phone"
            value={form.phone.value}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-colors dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900"
          />
          {form.phone.touched && form.phone.error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.phone.error}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="consultation-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company (Optional)
          </label>
          <input
            type="text"
            id="consultation-company"
            value={form.company.value}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Your company name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-colors dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900"
          />
        </div>
      </div>
      
      {/* Service Interest */}
      <div>
        <label htmlFor="consultation-service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Service Interested In *
        </label>
        <select
          id="consultation-service"
          value={form.serviceInterest.value}
          onChange={(e) => handleChange('serviceInterest', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
            ${form.serviceInterest.touched && form.serviceInterest.error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
              : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900'
            }`}
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {form.serviceInterest.touched && form.serviceInterest.error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.serviceInterest.error}</p>
        )}
      </div>

      {/* Preferred Date & Time */}
      <div className={`grid grid-cols-1 ${compact ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
        <div>
          <label htmlFor="consultation-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            id="consultation-date"
            value={form.preferredDate.value}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
              ${form.preferredDate.touched && form.preferredDate.error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900'
              }`}
          />
          {form.preferredDate.touched && form.preferredDate.error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.preferredDate.error}</p>
          )}
        </div>

        <div>
          <label htmlFor="consultation-time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Preferred Time *
          </label>
          <select
            id="consultation-time"
            value={form.preferredTime.value}
            onChange={(e) => handleChange('preferredTime', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors
              ${form.preferredTime.touched && form.preferredTime.error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200 dark:border-red-700 dark:focus:ring-red-900'
                : 'border-gray-300 focus:border-cyan-500 focus:ring-cyan-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900'
              }`}
          >
            {timeSlots.map((slot) => (
              <option key={slot.value} value={slot.value}>
                {slot.label}
              </option>
            ))}
          </select>
          {form.preferredTime.touched && form.preferredTime.error && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{form.preferredTime.error}</p>
          )}
        </div>
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="consultation-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Additional Details (Optional)
        </label>
        <textarea
          id="consultation-message"
          rows={3}
          value={form.message.value}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell us about your project or any specific requirements..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-colors dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-cyan-900"
        ></textarea>
      </div>
      
      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex-1">
              <p className="font-medium mb-1">Unable to Submit</p>
              <p className="text-sm whitespace-pre-line">{submitError}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Booking Consultation...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Book Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          )}
        </button>
      </div>

      {/* Trust indicators */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        <p>✓ No credit card required • ✓ 30-minute session • ✓ Expert consultant</p>
      </div>
    </form>
  );
}
