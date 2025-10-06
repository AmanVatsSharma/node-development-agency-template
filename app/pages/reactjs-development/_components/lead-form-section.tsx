'use client';

/**
 * Lead Form Section - PREMIUM GLASSMORPHISM VERSION
 * Beautiful form with glassmorphism design
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Rocket, Sparkles, Send, CheckCircle2 } from 'lucide-react';

console.log('[ReactJS-Dev] LeadFormSection component loaded');

export function LeadFormSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log('[ReactJS-Dev] LeadFormSection mounted');
    return () => console.log('[ReactJS-Dev] LeadFormSection unmounted');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('[ReactJS-Dev] Form submitted:', formData);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Add your actual form submission logic here
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 lg:py-40 bg-[#F8FAFF] dark:bg-[#0A0A0A] overflow-hidden"
      id="lead-form"
      role="region"
      aria-labelledby="lead-form-heading"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#61DAFB]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00C897]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#00C897]/10 to-[#61DAFB]/10 backdrop-blur-xl rounded-full mb-6 sm:mb-8 border border-[#00C897]/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#00C897]" />
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-[#00C897] to-[#61DAFB] bg-clip-text text-transparent uppercase tracking-wider">
              Let's Connect
            </span>
          </motion.div>

          <motion.h2
            id="lead-form-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Ready to Build Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#00C897] to-[#61DAFB] bg-clip-text text-transparent">
              React App?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Let's transform your idea into a world-class digital product
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Glassmorphism Container */}
          <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border-2 border-white/20 dark:border-gray-800/20 shadow-2xl overflow-hidden">
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#61DAFB]/5 via-transparent to-[#00C897]/5" />
            
            {/* Glow Effects */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#61DAFB]/20 to-[#00C897]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00C897]/20 to-[#61DAFB]/20 rounded-full blur-3xl" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-3">
                  Your Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-14 sm:h-16 px-6 text-base sm:text-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-gray-300/50 dark:border-gray-700/50 rounded-2xl focus:border-[#61DAFB] dark:focus:border-[#61DAFB] focus:ring-4 focus:ring-[#61DAFB]/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-3">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-14 sm:h-16 px-6 text-base sm:text-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-gray-300/50 dark:border-gray-700/50 rounded-2xl focus:border-[#61DAFB] dark:focus:border-[#61DAFB] focus:ring-4 focus:ring-[#61DAFB]/20 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-3">
                  Project Type
                </label>
                <Input
                  id="projectType"
                  type="text"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full h-14 sm:h-16 px-6 text-base sm:text-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-gray-300/50 dark:border-gray-700/50 rounded-2xl focus:border-[#61DAFB] dark:focus:border-[#61DAFB] focus:ring-4 focus:ring-[#61DAFB]/20 transition-all"
                  placeholder="e.g., Dashboard, SaaS, E-commerce"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-3">
                  Tell Us About Your Project
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 text-base sm:text-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border-2 border-gray-300/50 dark:border-gray-700/50 rounded-2xl focus:border-[#61DAFB] dark:focus:border-[#61DAFB] focus:ring-4 focus:ring-[#61DAFB]/20 transition-all resize-none"
                  placeholder="Describe your vision, goals, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-16 sm:h-20 text-lg sm:text-xl font-black bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-white rounded-2xl shadow-2xl hover:shadow-[#61DAFB]/50 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <Rocket className="w-6 h-6" />
                      Let's Build with ReactJS
                      <Send className="w-6 h-6" />
                    </span>
                  )}
                </Button>
              </motion.div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t-2 border-gray-200/50 dark:border-gray-700/50">
                {[
                  '✅ Free Consultation',
                  '✅ 24h Response Time',
                  '✅ NDA Available'
                ].map((signal, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00C897]" />
                    {signal}
                  </div>
                ))}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
