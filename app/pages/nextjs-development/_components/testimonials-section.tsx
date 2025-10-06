'use client';

/**
 * Testimonials Section
 * Client success stories and feedback
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

console.log('[NextJS-Dev] TestimonialsSection component loaded');

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
    console.log('[NextJS-Dev] TestimonialsSection mounted');
    return () => console.log('[NextJS-Dev] TestimonialsSection unmounted');
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Ravi K.',
      role: 'Founder',
      company: 'TechNova',
      quote: 'Working with this team was seamless. The site loads in under 1 second and our leads doubled within the first month!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      company: 'FinanceHub',
      quote: 'The Next.js migration transformed our platform. Page speed improved 4x, and SEO rankings shot up. Best decision we made.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Marketing Head',
      company: 'EduConnect',
      quote: 'They delivered a beautiful, fast website with perfect SEO. Our organic traffic increased by 38% in just 3 months!',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      company: 'CloudFlow SaaS',
      quote: 'Professional team, clean code, and exceptional performance. The dashboard they built handles 10k+ concurrent users effortlessly.',
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
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full mb-4 sm:mb-5 border border-yellow-200 dark:border-yellow-800 text-sm sm:text-base">
            <span className="font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide flex items-center gap-2 justify-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              Client Success Stories
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Trusted by Growing Businesses
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            See what our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
                <Quote className="h-16 w-16 sm:h-20 sm:w-20 text-indigo-600 dark:text-indigo-400" />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
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
              4.9/5 Average Rating
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              from 50+ projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
