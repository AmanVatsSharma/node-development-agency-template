'use client';

/**
 * Testimonials Section
 * Client success stories and feedback
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

console.log('[AI-Chatbot-Dev] TestimonialsSection component loaded');

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] TestimonialsSection mounted');
    return () => console.log('[AI-Chatbot-Dev] TestimonialsSection unmounted');
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Arjun Mehra',
      role: 'CEO',
      company: 'SaaSly',
      quote: 'Our AI chatbot from Vedpragya Bharat is like having a sales team that never sleeps. We closed ₹3 L+ extra in a month.',
      rating: 5
    },
    {
      name: 'Kritika S.',
      role: 'Founder',
      company: 'Fashionably AI',
      quote: 'They understand AI like artists understand colors. It\'s not just code — it\'s experience.',
      rating: 5
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      id="testimonials"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border border-yellow-200 dark:border-yellow-800 text-sm sm:text-base">
            <span className="font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide flex items-center gap-2 justify-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              Client Love
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Client Success Stories with Hire AI Chatbot Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Real feedback from businesses we've empowered
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFB100] dark:hover:border-[#FFB100] hover:shadow-2xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
                  <Quote className="h-20 w-20 text-[#FFB100]" />
                </div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0A2540] to-[#FFB100] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>

                    {/* Name & Role */}
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <div className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
              5.0/5 Average Rating
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              from 50+ clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
