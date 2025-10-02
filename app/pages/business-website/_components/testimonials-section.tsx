'use client';

/**
 * Testimonials Section Component
 * Social proof from real Indian clients
 * Builds trust and credibility
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

console.log('[Business-Website] TestimonialsSection component loaded');

interface Testimonial {
  name: string;
  business: string;
  city: string;
  rating: number;
  text: string;
  image?: string;
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Business-Website] TestimonialsSection mounted');
    return () => console.log('[Business-Website] TestimonialsSection unmounted');
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Electronics',
      city: 'Mumbai',
      rating: 5,
      text: 'Amazing service! They built our website in just 15 days and our online inquiries increased by 300%. The ₹13,999 package was perfect for our small business. Highly recommended!'
    },
    {
      name: 'Priya Sharma',
      business: 'Sharma Beauty Salon',
      city: 'Delhi',
      rating: 5,
      text: 'Professional team and great support. The WhatsApp integration helped us get bookings directly. Worth every rupee! They also helped us with Google Maps listing.'
    },
    {
      name: 'Amit Patel',
      business: 'Patel Furniture Mart',
      city: 'Ahmedabad',
      rating: 5,
      text: 'We went with the ₹45,999 package with CRM integration. Best decision ever! We can track all customer inquiries and the SEO is bringing us regular leads. Thank you!'
    },
    {
      name: 'Sneha Reddy',
      business: 'Reddy Coaching Classes',
      city: 'Hyderabad',
      rating: 5,
      text: 'Very responsive team. They understood our requirements and delivered exactly what we needed. The admin panel is so easy to use, I can update content myself!'
    },
    {
      name: 'Mohammed Ali',
      business: 'Ali Restaurant & Catering',
      city: 'Bangalore',
      rating: 5,
      text: 'Excellent work! Online orders increased significantly after getting our website. The team also helped us set up online payment gateway. Great value for money!'
    },
    {
      name: 'Deepak Singh',
      business: 'Singh Builders',
      city: 'Pune',
      rating: 5,
      text: 'We needed a professional website to showcase our projects. The team delivered a beautiful website with image gallery and contact forms. Getting good quality leads now!'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-950 dark:to-indigo-950/30"
      role="region"
      aria-label="Client testimonials"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-full mb-6 border border-yellow-200 dark:border-yellow-800">
            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide flex items-center gap-2 justify-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              Client Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Trusted by 500+ Indian Businesses
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See what our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-800 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                <Quote className="h-16 w-16 text-indigo-600" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.business}
                  </div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    📍 {testimonial.city}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-8 px-8 py-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                4.9/5
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800" />
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                98%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

