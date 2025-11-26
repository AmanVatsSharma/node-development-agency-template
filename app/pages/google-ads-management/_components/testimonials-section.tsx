'use client';

/**
 * Testimonials Section Component
 * Social Proof from Successful Clients
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

console.log('[Google-Ads] TestimonialsSection component loaded');

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] TestimonialsSection mounted');
    return () => console.log('[Google-Ads] TestimonialsSection unmounted');
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote: "They turned our ₹60K budget into consistent ₹6 L+ sales monthly. Unreal ROAS.",
      author: "K. Mehta",
      title: "Founder",
      company: "HomeDecor Co.",
      rating: 5
    },
    {
      quote: "We stopped worrying about ads altogether. Their team runs our marketing like a machine.",
      author: "Ankit R.",
      title: "CEO",
      company: "Startuply",
      rating: 5
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950"
      id="testimonials"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border border-yellow-200 dark:border-yellow-800 text-sm sm:text-base">
            <span className="font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide">
              Client Success Stories
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Client Success Stories with Hire Google Ads Expert
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from businesses we've helped grow
          </p>
        </motion.div>

        {/* Testimonials Grid - MOBILE OPTIMIZED */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-black text-gray-900 dark:text-white text-sm sm:text-base">
                  — {testimonial.author}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.title} @ {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
