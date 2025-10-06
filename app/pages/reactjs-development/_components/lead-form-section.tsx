'use client';

/**
 * Lead Form Section
 * Primary conversion point
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Rocket } from 'lucide-react';

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

  useEffect(() => {
    console.log('[ReactJS-Dev] LeadFormSection mounted');
    return () => console.log('[ReactJS-Dev] LeadFormSection unmounted');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[ReactJS-Dev] Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#61DAFB]/5 via-[#00C897]/5 to-[#61DAFB]/5 dark:from-[#61DAFB]/10 dark:via-[#00C897]/10 dark:to-[#61DAFB]/10"
      id="lead-form"
      role="region"
      aria-labelledby="lead-form-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#00C897]/20 to-[#61DAFB]/20 rounded-full mb-4 sm:mb-5 border border-[#00C897] text-sm sm:text-base">
            <span className="font-bold text-[#00C897] dark:text-[#00C897] uppercase tracking-wide">
              ⚙️ Let's Talk
            </span>
          </div>

          <h2
            id="lead-form-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Ready to Build Your Custom React App?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Let's transform your idea into a world-class digital product.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-2 border-gray-300 dark:border-gray-700 focus:border-[#61DAFB] dark:focus:border-[#61DAFB]"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-2 border-gray-300 dark:border-gray-700 focus:border-[#61DAFB] dark:focus:border-[#61DAFB]"
                  placeholder="your@email.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Project Type / Idea
                </label>
                <Input
                  id="projectType"
                  type="text"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full border-2 border-gray-300 dark:border-gray-700 focus:border-[#61DAFB] dark:focus:border-[#61DAFB]"
                  placeholder="e.g., Dashboard, SaaS, E-commerce"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-2 border-gray-300 dark:border-gray-700 focus:border-[#61DAFB] dark:focus:border-[#61DAFB]"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full text-base sm:text-lg px-8 py-7 h-auto shadow-2xl bg-gradient-to-r from-[#61DAFB] to-[#00C897] hover:from-[#50c9ea] hover:to-[#00b786] text-[#1E1E1E] font-black"
              >
                <Rocket className="h-5 w-5 mr-2" />
                🚀 Let's Build with ReactJS
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
