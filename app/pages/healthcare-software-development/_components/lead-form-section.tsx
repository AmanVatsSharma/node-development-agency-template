'use client';

/**
 * Lead Form Section Component - Healthcare Software Development
 * Primary Conversion Point
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Users,
  DollarSign,
  Calendar,
  FileText,
  Send
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] LeadFormSection component loaded');

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    healthcareType: '',
    currentSystem: '',
    budget: '',
    timeline: '',
    requirements: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('[Healthcare-Software-Dev] Form submitted:', formData);
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        event_category: 'Lead Form',
        event_label: 'Healthcare Software Inquiry',
        value: 1
      });
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const healthcareTypes = [
    'Hospital',
    'Clinic',
    'Pharmacy',
    'Laboratory',
    'Diagnostic Center',
    'Nursing Home',
    'Dental Clinic',
    'Mental Health Center',
    'Rehabilitation Center',
    'Other'
  ];

  const currentSystems = [
    'No existing system',
    'Paper-based records',
    'Basic computer system',
    'Legacy software',
    'Cloud-based EMR',
    'Other EMR/EHR system',
    'Not sure'
  ];

  const budgetRanges = [
    '₹2.5L - ₹5L',
    '₹5L - ₹10L',
    '₹10L - ₹25L',
    '₹25L - ₹50L',
    '₹50L+',
    'Not sure'
  ];

  const timelines = [
    'ASAP (Within 1 month)',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'More than 1 year',
    'Just exploring'
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  if (isSubmitted) {
    return (
      <section 
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-green-500 to-blue-500 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              We've received your healthcare software development inquiry. 
              Our team will review your requirements and get back to you within 24 hours.
            </p>
            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-300" />
                  <span>We'll review your requirements within 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-300" />
                  <span>Our healthcare expert will call you within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-300" />
                  <span>We'll send you a detailed proposal and timeline</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-green-300" />
                  <span>Schedule a free consultation to discuss your project</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="lead-form"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get Your Free{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Healthcare Software Consultation
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tell us about your healthcare facility and requirements. 
            We'll provide a detailed proposal and timeline within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
                Tell Us About Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                        placeholder="Dr. Rajesh Kumar"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="rajesh@hospital.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Position/Title
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Medical Director"
                    />
                  </div>
                </div>

                {/* Organization Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Organization Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Apollo Hospital"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Healthcare Facility Type *
                    </label>
                    <select
                      name="healthcareType"
                      value={formData.healthcareType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select Type</option>
                      {healthcareTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current System
                    </label>
                    <select
                      name="currentSystem"
                      value={formData.currentSystem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select Current System</option>
                      {currentSystems.map((system, index) => (
                        <option key={index} value={system}>{system}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Specific Requirements
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Describe your specific requirements, features needed, and any special considerations..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get Free Consultation
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Benefits & Trust Signals */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Why Choose Our Healthcare Software?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">HIPAA Compliant</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Built with healthcare data protection standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">100+ Healthcare Providers</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Trusted by hospitals and clinics across India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">24/7 Support</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Round-the-clock technical assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Custom Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Tailored to your specific healthcare needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                What You'll Receive
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Detailed project proposal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Custom timeline and milestones</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Transparent pricing breakdown</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Dedicated project team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">Security and compliance plan</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Need Immediate Assistance?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Call Us Now</div>
                    <div className="text-green-100">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-green-100">healthcare@vedpragyabharat.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6" />
                  <div>
                    <div className="font-semibold">Live Chat</div>
                    <div className="text-green-100">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}