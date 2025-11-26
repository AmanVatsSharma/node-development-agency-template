'use client';

/**
 * FAQ Section Component
 * Address Common Objections & Questions
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

console.log('[Google-Ads] FAQSection component loaded');

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[Google-Ads] FAQSection mounted');
    return () => console.log('[Google-Ads] FAQSection unmounted');
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'How soon can I see results?',
      answer: 'Typically within 2–4 weeks of launch once data optimizations start. However, some clients see positive movement in the first week. Google Ads requires initial learning phase of 7-14 days, after which we implement aggressive optimization based on real performance data.'
    },
    {
      question: 'Do I need a landing page?',
      answer: 'Yes, we either improve yours or build a high-converting page for best ROI. A dedicated landing page typically converts 3-5× better than sending traffic to your homepage. We offer landing page optimization as an add-on service (₹10K-₹30K one-time).'
    },
    {
      question: 'Is the ad spend included in your fee?',
      answer: 'No — you pay Google directly; our fee covers management & optimization. This keeps everything transparent. You maintain full control of your ad account and budget. We recommend a minimum ad spend of ₹30,000-₹50,000/month for meaningful results.'
    },
    {
      question: 'Will I get access to my Google Ads account?',
      answer: 'Always. You own the data; we just manage it professionally. We set up the account under your ownership and you can access it 24/7. We provide admin access and full transparency into all campaign settings, keywords, and performance data.'
    },
    {
      question: 'What makes you different from other agencies?',
      answer: 'We focus on ROI, not vanity metrics. Our team reviews data every 48 hours and optimizes continuously. We\'re certified Google Ads experts with 10+ years combined experience. Plus, you get transparent reporting, dedicated support, and you own all your data and accounts.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! We work on a month-to-month basis with no long-term contracts. We believe in earning your business every month through results. Just provide 15 days notice if you wish to discontinue.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Common Questions
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Frequently Asked Questions About Hire Google Ads Expert
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our Google Ads management service
          </p>
        </motion.div>

        {/* FAQ Accordion - MOBILE OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 px-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
