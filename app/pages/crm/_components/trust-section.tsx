'use client';

/**
 * @fileoverview Enterprise Trust Section - EnterpriseHero CRM
 * @description Logo bar and testimonials with metrics
 * @author Vedpragya Bharat Pvt. Ltd.
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

console.log('[CRM] TrustSection component loaded');

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'TechVision Enterprises',
      image: '👨‍💼',
      quote: 'EnterpriseHero CRM transformed how we manage customer relationships. The customization level is unmatched.',
      metrics: '300% increase in sales efficiency',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Operations Director',
      company: 'Global Manufacturing Ltd',
      image: '👩‍💼',
      quote: 'Having full control over our data on our own servers was a game-changer. The BharatERP integration is seamless.',
      metrics: '₹5Cr+ in tracked revenue',
      rating: 5
    },
    {
      name: 'Amit Patel',
      position: 'Founder',
      company: 'Digital Solutions Co',
      image: '👨‍💻',
      quote: 'Best investment we made. The implementation team understood our workflow and delivered beyond expectations.',
      metrics: '5,000+ customers managed',
      rating: 5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
      id="trust"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Trusted by <span className="bg-gradient-to-r from-[#002F9E] via-[#FFD700] to-[#00C897] bg-clip-text text-transparent">Enterprises</span> Across India
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join the growing community of businesses that have taken control of their customer relationships.
            </p>
          </motion.div>

          {/* Logo Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-4">
              {['Enterprise A', 'Company B', 'Business C', 'Firm D', 'Corp E'].map((company, index) => (
                <div 
                  key={index}
                  className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <span className="text-xl font-black text-gray-400 dark:text-gray-600">{company}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFD700] shadow-xl hover:shadow-2xl transition-all">
                  
                  {/* Quote Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white mb-6">
                    <Quote className="h-6 w-6" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFD700] fill-[#FFD700]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Metrics Badge */}
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#002F9E]/10 to-[#00C897]/10 rounded-xl border border-[#FFD700]/30 mb-6">
                    <span className="text-sm font-black text-[#002F9E] dark:text-[#FFD700]">
                      📈 {testimonial.metrics}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-black text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
