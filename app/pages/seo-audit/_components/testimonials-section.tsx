'use client';

/**
 * Testimonials Section Component
 * Social proof with specific results
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      location: 'Mumbai',
      content: 'The SEO audit revealed critical issues we had no idea about. Within 90 days of implementing their recommendations, our organic traffic increased by 52% and we\'re now ranking on page 1 for our main keywords.',
      result: '+52% Traffic',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      location: 'Bangalore',
      content: 'The detailed backlink audit helped us identify and disavow toxic links that were hurting our rankings. The team was professional, responsive, and the deliverables exceeded expectations. Highly recommended!',
      result: '+38% Rankings',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Founder, E-commerce Store',
      location: 'Delhi',
      content: 'Best investment we made for our online business. The Core Web Vitals optimization alone improved our conversion rate by 23%. The implementation roadmap was clear and easy to follow.',
      result: '+23% Conversions',
      rating: 5,
      image: '👨‍💻'
    }
  ];

  // Case study highlight
  const caseStudy = {
    company: 'LocalBiz Delhi',
    industry: 'Local Services',
    before: {
      traffic: '1,200/mo',
      keywords: '15 top-10',
      leads: '8/mo'
    },
    after: {
      traffic: '4,800/mo',
      keywords: '67 top-10',
      leads: '42/mo'
    },
    timeline: '6 months'
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-950"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-4 border border-green-200 dark:border-green-800">
            <span className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join hundreds of businesses that improved their SEO with our audits
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4 opacity-50" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <span className="text-sm font-bold text-green-700 dark:text-green-300">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl">
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
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                📈 Featured Case Study
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {caseStudy.company} — {caseStudy.industry}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Before */}
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Before Audit
                </div>
                <div className="space-y-2">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {caseStudy.before.traffic}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Organic Traffic
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {caseStudy.before.keywords}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Keywords in Top 10
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {caseStudy.before.leads}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Monthly Leads
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="text-4xl">→</div>
              </div>

              {/* After */}
              <div className="text-center">
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-3">
                  After {caseStudy.timeline}
                </div>
                <div className="space-y-2">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg p-3 border-2 border-green-300 dark:border-green-700">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {caseStudy.after.traffic}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Organic Traffic (+300%)
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg p-3 border-2 border-green-300 dark:border-green-700">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {caseStudy.after.keywords}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Keywords in Top 10 (+347%)
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg p-3 border-2 border-green-300 dark:border-green-700">
                    <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                      {caseStudy.after.leads}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Monthly Leads (+425%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
