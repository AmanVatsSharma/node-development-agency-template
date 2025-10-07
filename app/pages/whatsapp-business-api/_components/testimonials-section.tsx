'use client';

/**
 * @fileoverview Testimonials Section
 * @description Social proof from satisfied clients
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[TestimonialsSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      company: 'FashionHub India',
      image: '👩‍💼',
      rating: 5,
      text: 'WhatsApp automation transformed our customer engagement. We recovered ₹12 lakhs in abandoned carts in just 3 months. The setup was seamless and the team was incredibly professional.',
      highlight: '₹12L+ cart recovery in 3 months'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Director',
      company: 'HealthPlus Clinic',
      image: '👨‍⚕️',
      rating: 5,
      text: 'Our no-show rate dropped from 30% to 6% after implementing automated appointment reminders. The ROI was immediate — we recouped our investment in just 2 months!',
      highlight: '80% reduction in no-shows'
    },
    {
      name: 'Amit Verma',
      role: 'Sales Head',
      company: 'TechSolutions Ltd',
      image: '👨‍💻',
      rating: 5,
      text: 'Response time went from 20 minutes to under 2 minutes. Our lead conversion rate increased by 45%. This is the best investment we made in our sales process.',
      highlight: '45% increase in conversions'
    },
    {
      name: 'Neha Patel',
      role: 'Operations Manager',
      company: 'HomeServices Co',
      image: '👩‍💼',
      rating: 5,
      text: 'Managing 500+ service requests daily was overwhelming. Now WhatsApp automation handles 80% of routine queries. Our team can focus on complex issues. Game changer!',
      highlight: '80% queries automated'
    },
    {
      name: 'Rohit Mehta',
      role: 'Marketing Director',
      company: 'GourmetFood Delivery',
      image: '👨‍🍳',
      rating: 5,
      text: 'Customer satisfaction jumped to 92% after we started using WhatsApp for order updates. Real-time notifications keep customers happy and reduce support calls by 60%.',
      highlight: '92% customer satisfaction'
    },
    {
      name: 'Anjali Singh',
      role: 'Founder',
      company: 'BeautyBox Salon',
      image: '💇‍♀️',
      rating: 5,
      text: 'Appointment booking is now 100% automated. Customers love the convenience of booking via WhatsApp. We increased bookings by 35% without hiring more staff.',
      highlight: '35% more bookings'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="testimonials"
      role="region"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFB100]/10 rounded-full text-[#FF7A00] font-bold text-sm border border-[#FFB100]/20">
                <Star className="h-4 w-4" />
                Client Success Stories
              </span>
            </div>
            <h2 
              id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Loved by 500+
              <br />
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FFB100] bg-clip-text text-transparent">
                Indian Businesses
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it — hear from businesses like yours
            </p>
            
            {/* Star Rating */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[#FFB100] text-[#FFB100]" />
                ))}
              </div>
              <span className="text-gray-900 dark:text-white font-bold text-lg">
                4.9/5
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                (500+ reviews)
              </span>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#25D366] dark:hover:border-[#25D366] transition-all relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB100] text-[#FFB100]" />
                  ))}
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 bg-[#25D366]/10 rounded-full text-[#25D366] text-xs font-bold mb-4 border border-[#25D366]/20">
                  {testimonial.highlight}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t-2 border-gray-100 dark:border-gray-700">
                  <div className="text-4xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12">
              <div className="text-center text-white mb-8">
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  Join 500+ Happy Customers
                </h3>
                <p className="text-lg opacity-90">
                  Trusted by businesses across India
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-white">
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">500+</div>
                  <div className="text-sm opacity-90">Active Clients</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">10M+</div>
                  <div className="text-sm opacity-90">Messages Sent</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">4.9/5</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-2">99.9%</div>
                  <div className="text-sm opacity-90">Uptime SLA</div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] TestimonialsSection component loaded');
