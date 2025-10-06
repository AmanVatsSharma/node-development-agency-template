'use client';

/**
 * Testimonials Section
 * Social proof from satisfied clients
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

console.log('[ReactJS-Dev] TestimonialsSection component loaded');

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[ReactJS-Dev] TestimonialsSection mounted');
    return () => console.log('[ReactJS-Dev] TestimonialsSection unmounted');
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Rishabh',
      role: 'SaaS Founder',
      company: 'TechFlow',
      text: 'They built our entire dashboard in React — incredibly fast and efficient. The code quality is top-notch!',
      rating: 5
    },
    {
      name: 'Megha',
      role: 'Marketing Director',
      company: 'GrowthHub',
      text: 'From Figma to flawless React — top-tier quality! The attention to detail is outstanding.',
      rating: 5
    },
    {
      name: 'Arjun',
      role: 'CTO',
      company: 'DataSync',
      text: 'Best React developers we\'ve worked with. Delivered our MVP 2 weeks ahead of schedule!',
      rating: 5
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
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
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-[#61DAFB]/20 to-[#00C897]/20 rounded-full mb-4 sm:mb-5 border border-[#61DAFB] text-sm sm:text-base">
            <span className="font-bold text-[#61DAFB] dark:text-[#61DAFB] uppercase tracking-wide">
              💬 Client Love
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            What Our Clients Say
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Real feedback from real clients building real products
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-[#61DAFB] dark:hover:border-[#61DAFB] hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-[#61DAFB]" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#00C897] text-[#00C897]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
