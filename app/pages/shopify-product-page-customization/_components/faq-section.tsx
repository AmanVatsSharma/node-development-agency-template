'use client';

/**
 * @fileoverview FAQ Section - Frequently Asked Questions
 * @description Accordion-style FAQ to handle objections
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

console.log('[Shopify-Product-Page] FAQSection component loaded');

const faqs = [
  {
    question: 'How long does it take to customize a product page?',
    answer: 'Timelines vary by package: Starter (5 days), Conversion Pro (10 days), Premium Suite (15 days). We guarantee on-time delivery or you get a 10% discount.',
  },
  {
    question: 'Will the customizations work with my existing Shopify theme?',
    answer: 'Yes! We build custom features that integrate seamlessly with any Shopify theme. Our code is clean, modular, and won\'t conflict with your existing setup.',
  },
  {
    question: 'Can you integrate with third-party apps like Klaviyo or Meta Pixel?',
    answer: 'Absolutely. We specialize in integrating analytics tools, email marketing platforms, and conversion tracking. GA4, Meta Pixel, Klaviyo, Hotjar — we\'ve got you covered.',
  },
  {
    question: 'What if I want changes after the project is complete?',
    answer: 'All packages include 7-14 days of support. After that, we offer maintenance retainers starting at ₹5,000/month for ongoing updates and optimizations.',
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer: '100% satisfaction guaranteed. If you\'re not happy with the results within the first 7 days, we\'ll refund your payment in full or keep working until you\'re satisfied.',
  },
  {
    question: 'Can you help with A/B testing my product page?',
    answer: 'Yes! Our Premium Suite includes A/B testing setup and optimization. We\'ll help you test different layouts, CTAs, and features to maximize conversions.',
  },
  {
    question: 'Will my product page be mobile-optimized?',
    answer: 'Absolutely. We follow a mobile-first approach. Over 70% of Shopify traffic is mobile, so we optimize for thumb-reach, fast taps, and app-like interactions.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simple! Fill out the lead form below or WhatsApp us. We\'ll schedule a free 20-minute consultation to discuss your needs and provide a custom quote.',
  },
  {
    question: 'Do you provide source code and documentation?',
    answer: 'Yes! You get full access to all source code (Liquid, JS, CSS) plus detailed documentation on how everything works. No vendor lock-in.',
  },
  {
    question: 'Can you work with Shopify Plus stores?',
    answer: 'Yes! We\'re Shopify Plus experts. We can leverage advanced features like Scripts API, custom checkout extensions, and multi-store setups.',
  },
];

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gray-900 dark:text-white"
          >
            Frequently Asked Questions About <span className="text-[#FFB400]">Hire Shopify Customization Expert</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Got questions? We've got answers. Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <span className="text-base md:text-lg font-black text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-8 py-6 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-black">Still have questions?</span> We're here to help!
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 text-[#0A2540] dark:text-[#FFB400] font-bold text-lg hover:underline"
            >
              Talk to Our Team →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Shopify-Product-Page] FAQSection exported');
