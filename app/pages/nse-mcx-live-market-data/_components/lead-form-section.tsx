'use client';

/**
 * @fileoverview Lead Form Section
 * @description Primary lead capture form with multi-step smart form
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Mail, User, Phone, Building, CheckCircle2 } from 'lucide-react';

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    useCase: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Market-Data-API] Form submitted:', formData);
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Lead Generation',
        event_label: 'Market Data API Form',
        value: 1
      });
    }

    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        useCase: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const useCaseOptions = [
    'Algo Trading Platform',
    'Trading App/Terminal',
    'Portfolio Management',
    'Research & Analytics',
    'Advisory Services',
    'Other'
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-[#0B1E39] via-[#0a1929] to-[#050b14] relative overflow-hidden"
      id="lead-form"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #00FF88 1px, transparent 1px), linear-gradient(to bottom, #00FF88 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00FF88] rounded-full filter blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[150px] opacity-20 animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FF88]/10 backdrop-blur-md rounded-full mb-4 border border-[#00FF88]/30">
            <Rocket className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">START YOUR FREE TRIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
            Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Live Market Data?</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Start your 7-day free trial. No credit card required. Get instant API access.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-bold mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FF88] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-bold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FF88] transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-bold mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91-9876543210"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FF88] transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-white font-bold mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FF88] transition-all"
                  />
                </div>

                {/* Use Case */}
                <div>
                  <label className="block text-white font-bold mb-2">
                    Use Case *
                  </label>
                  <select
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#00FF88] transition-all"
                  >
                    <option value="" className="bg-gray-800">Select your use case</option>
                    {useCaseOptions.map((option, index) => (
                      <option key={index} value={option} className="bg-gray-800">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-bold mb-2">
                    Additional Requirements (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your specific requirements..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FF88] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl text-lg shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Rocket className="h-6 w-6" />
                  Start Free Trial Now
                </button>

                {/* Trust Line */}
                <p className="text-center text-white/70 text-sm">
                  ✅ No credit card required • 🔒 100% Secure • 📞 Instant API access
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#00FF88] to-[#00CC70] rounded-full mb-6">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">Thank You! 🎉</h3>
                <p className="text-white/80 text-lg mb-2">
                  Your request has been received successfully!
                </p>
                <p className="text-white/60">
                  Our team will contact you within 2 hours with API access details.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Benefits Below Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: '⚡', title: 'Instant Setup', desc: 'Get API keys in minutes' },
            { icon: '📊', title: 'Full Access', desc: 'All features included in trial' },
            { icon: '💬', title: '24/7 Support', desc: 'Expert help anytime' }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:border-[#00FF88]/50 transition-all"
            >
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <div className="text-white font-bold mb-1">{benefit.title}</div>
              <div className="text-white/70 text-sm">{benefit.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] LeadFormSection loaded');
