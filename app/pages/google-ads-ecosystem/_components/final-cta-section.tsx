'use client';

/**
 * @fileoverview Final CTA Section - Lead capture with ecosystem context
 * @description High-converting lead form with ecosystem-specific messaging and urgency
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Comprehensive lead form
 * - Ecosystem-specific messaging
 * - Multiple conversion options
 * - Urgency and scarcity elements
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Award,
  Shield,
  Zap,
  Star,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  monthlyBudget: string;
  industry: string;
  primaryGoal: string;
  currentChallenges: string[];
  preferredServices: string[];
  timeline: string;
  message: string;
}

const industries = [
  'Real Estate',
  'Healthcare',
  'E-commerce',
  'B2B Services',
  'SaaS',
  'Education',
  'Automotive',
  'Technology',
  'Other'
];

const monthlyBudgets = [
  '₹25K-₹50K',
  '₹50K-₹1L',
  '₹1L-₹2L',
  '₹2L-₹5L',
  '₹5L+'
];

const primaryGoals = [
  'Increase Leads',
  'Boost Sales',
  'Improve ROAS',
  'Reduce Cost Per Lead',
  'Brand Awareness',
  'Market Expansion'
];

const currentChallenges = [
  'High cost per lead',
  'Low conversion rates',
  'Poor ROAS',
  'Lack of qualified leads',
  'Seasonal fluctuations',
  'Competition issues',
  'Budget wastage',
  'No clear strategy'
];

const preferredServices = [
  'Enterprise Google Ads Management',
  'E-commerce Google Ads Optimization',
  'B2B Lead Generation',
  'Local Business Google Ads',
  'YouTube Advertising Management',
  'Performance Max Campaigns',
  'Google Ads Audit & Strategy',
  'Landing Page Optimization'
];

const timelines = [
  'ASAP (Within 1 week)',
  'Within 2 weeks',
  'Within 1 month',
  'Within 3 months',
  'Just exploring options'
];

const urgencyElements = [
  'Limited spots available this month',
  'Free strategy session (₹25K value)',
  'No setup fees for new clients',
  '24-hour response guarantee',
  'Exclusive bonus: Free landing page audit'
];

export function FinalCTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    monthlyBudget: '',
    industry: '',
    primaryGoal: '',
    currentChallenges: [],
    preferredServices: [],
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleArrayChange = (field: 'currentChallenges' | 'preferredServices', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.monthlyBudget) newErrors.monthlyBudget = 'Monthly budget is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.primaryGoal) newErrors.primaryGoal = 'Primary goal is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log('[FinalCTASection] Form validation failed');
      return;
    }

    setIsSubmitting(true);
    console.log('[FinalCTASection] Form submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Track conversion
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_form_submit', {
          form_type: 'ecosystem_lead_form',
          business_name: formData.businessName,
          industry: formData.industry,
          monthly_budget: formData.monthlyBudget,
          page_location: window.location.pathname
        });
      }
    }, 2000);
  };

  const handleCTAClick = (ctaType: string) => {
    console.log(`[FinalCTASection] CTA clicked: ${ctaType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'final_cta_click', {
        cta_type: ctaType,
        page_location: window.location.pathname
      });
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Thank You, {formData.name}!
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We've received your information and our team will contact you within 24 hours 
              to discuss your Google Ads ecosystem needs.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Our team will review your requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <span className="text-gray-700">We'll schedule a free strategy call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Receive your custom Google Ads strategy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Google Ads Results?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ successful businesses who trust our Google Ads ecosystem 
              to drive growth and maximize ROI. Let's discuss your goals and create 
              a custom strategy that delivers results.
            </p>

            {/* Urgency Elements */}
            <div className="space-y-4 mb-8">
              {urgencyElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{element}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-blue-100">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">7.2×</div>
                <div className="text-blue-100">Average ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-blue-100">Campaigns Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24hr</div>
                <div className="text-blue-100">Response Time</div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                onClick={() => handleCTAClick('phone_call')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              
              <a
                href="mailto:info@rajapragyabharat.com"
                onClick={() => handleCTAClick('email')}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Your Free Strategy Session
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.businessName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your business name"
                  />
                  {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              {/* Business Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Budget *
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => handleInputChange('monthlyBudget', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.monthlyBudget ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select budget range</option>
                    {monthlyBudgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                  {errors.monthlyBudget && <p className="text-red-500 text-sm mt-1">{errors.monthlyBudget}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.industry ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Goal *
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.primaryGoal ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your primary goal</option>
                  {primaryGoals.map((goal) => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
                {errors.primaryGoal && <p className="text-red-500 text-sm mt-1">{errors.primaryGoal}</p>}
              </div>

              {/* Current Challenges */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Current Challenges (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {currentChallenges.map((challenge) => (
                    <label key={challenge} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.currentChallenges.includes(challenge)}
                        onChange={() => handleArrayChange('currentChallenges', challenge)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Interested Services (Select all that apply)
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {preferredServices.map((service) => (
                    <label key={service} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.preferredServices.includes(service)}
                        onChange={() => handleArrayChange('preferredServices', service)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">When would you like to start?</option>
                  {timelines.map((timeline) => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us more about your business and goals..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Award className="w-5 h-5" />
                    Get My Free Strategy Session
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
                We'll never share your information with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;