'use client';

/**
 * Testimonials Section
 * Client success stories and feedback
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

console.log('[Next-JS-Dev] TestimonialsSection component loaded');

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
    console.log('[Next-JS-Dev] TestimonialsSection mounted');
    return () => console.log('[Next-JS-Dev] TestimonialsSection unmounted');
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Ravi K.',
      role: 'Founder',
      company: 'TechNova',
      quote: 'Our site loads under 1 second now and looks premium. They handle everything like a real tech partner.',
      rating: 5
    },
    {
      name: 'Priya S.',
      role: 'Marketing Head',
      company: 'InLocal Store',
      quote: 'The migration to Next.js was seamless. Our conversion rate jumped 37% and Google indexed us 2× faster!',
      rating: 5
    },
    {
      name: 'Amit Gupta',
      role: 'CTO',
      company: 'EduSpark',
      quote: 'Professional, transparent, and incredibly skilled. Load time went from 2.8s to 0.8s. Our organic traffic is up 43%.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      role: 'Product Manager',
      company: 'CloudFlow SaaS',
      quote: 'Best investment we made this year. The Next.js + NestJS stack they built is rock solid and handles massive traffic.',
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
            Client Success Stories with Hire Next.js Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            See what our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonials - MOBILE: Horizontal Scroll */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar">
            <div className="flex gap-4 min-w-max">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-5 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-2xl transition-all duration-300 w-[300px] flex-shrink-0"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
                    <Quote className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                  </div>

                  <div className="relative z-10">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar Placeholder */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>

                      {/* Name & Role */}
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-2xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
                  <Quote className="h-20 w-20 text-indigo-600 dark:text-indigo-400" />
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
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
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
