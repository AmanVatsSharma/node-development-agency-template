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
      name: 'Vikram Mehta',
      business: 'Mehta Electronics & Appliances',
      city: 'Mumbai',
      rating: 5,
      text: 'Excellent service! Our website went live in just 18 days and we saw 280% increase in online inquiries. The team was very professional and responsive. Highly recommended for any business looking to go digital!',
      image: 'https://ui-avatars.com/api/?name=Vikram+Mehta&background=6366f1&color=fff&size=128'
    },
    {
      name: 'Anjali Kapoor',
      business: 'Kapoor Beauty Salon & Spa',
      city: 'Delhi',
      rating: 5,
      text: 'Great experience working with VedPragya! The WhatsApp booking integration is helping us manage appointments seamlessly. Our bookings have increased by 195% and customers love the online experience. Worth every rupee!',
      image: 'https://ui-avatars.com/api/?name=Anjali+Kapoor&background=ec4899&color=fff&size=128'
    },
    {
      name: 'Rahul Shah',
      business: 'Shah Builders & Developers',
      city: 'Ahmedabad',
      rating: 5,
      text: 'Professional team with deep understanding of real estate business needs. They built a stunning website with virtual property tours. Our leads increased by 320% and we are closing more deals. Best investment we made!',
      image: 'https://ui-avatars.com/api/?name=Rahul+Shah&background=f59e0b&color=fff&size=128'
    },
    {
      name: 'Kavitha Nair',
      business: 'Nair Restaurant & Catering',
      city: 'Hyderabad',
      rating: 5,
      text: 'Outstanding work! The online ordering system with menu management is perfect for our restaurant. Orders increased by 240% and customer satisfaction improved significantly. The team provided excellent support throughout!',
      image: 'https://ui-avatars.com/api/?name=Kavitha+Nair&background=10b981&color=fff&size=128'
    },
    {
      name: 'Siddharth Agarwal',
      business: 'Agarwal Coaching Institute',
      city: 'Bangalore',
      rating: 5,
      text: 'Very professional and responsive team. They understood our educational business requirements perfectly. The student portal with online payment integration works flawlessly. Enrollments increased by 180%!',
      image: 'https://ui-avatars.com/api/?name=Siddharth+Agarwal&background=8b5cf6&color=fff&size=128'
    },
    {
      name: 'Priyanka Desai',
      business: 'Desai Jewellers & Diamonds',
      city: 'Pune',
      rating: 5,
      text: 'Amazing results! Our website showcases our jewelry collection beautifully. Customer inquiries increased by 265% and we are getting quality leads. The team was patient and understood our vision perfectly. Highly satisfied!',
      image: 'https://ui-avatars.com/api/?name=Priyanka+Desai&background=eab308&color=fff&size=128'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-950 dark:to-indigo-950/30"
      role="region"
      aria-label="Client testimonials"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-block px-3 sm:px-4 py-1.5 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-full mb-3 sm:mb-4 border border-yellow-200 dark:border-yellow-800 text-xs sm:text-sm">
            <span className="font-bold text-yellow-700 dark:text-yellow-300 uppercase tracking-wide flex items-center gap-1 sm:gap-2 justify-center">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-500 text-yellow-500" />
              Success Stories
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-gray-900 dark:text-white px-2">
            Trusted by 500+ Indian Businesses
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-2">
            See what our clients say
          </p>
        </motion.div>

        {/* Testimonials Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border border-gray-200 dark:border-gray-800 relative"
            >
              {/* Quote Icon - Smaller on mobile */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10 dark:opacity-5">
                <Quote className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-indigo-600" />
              </div>

              {/* Rating Stars - Compact */}
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text - Compact */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 md:mb-6 leading-snug sm:leading-relaxed relative z-10 text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author Info - Compact */}
              <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-800">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 border-2 border-indigo-200 dark:border-indigo-800"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to initial if image fails
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                    {testimonial.business}
                  </div>
                  <div className="text-[10px] sm:text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    📍 {testimonial.city}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center px-2"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-0.5 sm:mb-1">
                4.9/5
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Avg Rating</div>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-0.5 sm:mb-1">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-0.5 sm:mb-1">
                98%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

