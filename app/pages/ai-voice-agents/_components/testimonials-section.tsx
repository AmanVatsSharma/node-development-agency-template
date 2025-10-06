'use client';

/**
 * Testimonials Section - AI Voice Agents
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  const testimonials = [
    {
      name: 'R. Sharma',
      role: 'Director',
      company: 'Prime Care Clinic',
      quote: 'It sounds like a real person! Our customers didn\'t even realize it was AI.',
      rating: 5
    },
    {
      name: 'V. Kapoor',
      role: 'COO',
      company: 'BPO Solutions',
      quote: 'Vedpragya Bharat delivered what we thought was science fiction.',
      rating: 5
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mb-5 border border-yellow-200 dark:border-yellow-800">
            <span className="font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide text-sm flex items-center gap-2 justify-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              Client Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#FF7A00] dark:hover:border-[#FF7A00] transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
                <Quote className="h-20 w-20 text-[#FF7A00]" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0B1E39] to-[#FF7A00] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>

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
    </section>
  );
}
