'use client';

/**
 * FAQ Section Component
 * Addresses common objections with accordion
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/app/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: 'How long does the full audit take?',
      answer: '3–5 business days for the Professional package. The Enterprise package timeline is discussed during the kickoff call to ensure we cover all your specific needs. You\'ll receive a detailed timeline after booking.'
    },
    {
      question: 'Do you need access to Google Search Console?',
      answer: 'For deeper insights, we request read-only access to Google Search Console and Google Analytics — both are optional but highly recommended. This allows us to provide accurate keyword data, indexation issues, and performance metrics. We never make changes without your approval.'
    },
    {
      question: 'Will you fix the issues or only report them?',
      answer: 'We provide both options. Our standard packages include comprehensive reporting with detailed implementation guides and code snippets. If you need hands-on implementation, we offer hourly rates or monthly retainers. Many clients prefer our implementation service for technical fixes.'
    },
    {
      question: 'What makes your audit different from free online tools?',
      answer: 'Free tools only scan surface-level issues. Our audit includes manual review by SEO experts, competitive analysis, backlink quality assessment, content gap analysis, and a prioritized action plan tailored to your business goals. Plus, you get a 60-minute strategy call to discuss findings.'
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'Yes! We offer a 7-day satisfaction guarantee. If you\'re not satisfied with the audit quality or deliverables, we\'ll either revise it to your satisfaction or provide a full refund — no questions asked. Your success is our priority.'
    },
    {
      question: 'Can you audit e-commerce or multilingual websites?',
      answer: 'Absolutely! We specialize in e-commerce audits (including product page optimization, faceted navigation, and schema markup) and multilingual sites (hreflang implementation, international targeting). Our Enterprise package is perfect for complex websites.'
    },
    {
      question: 'What if I only need help with specific SEO issues?',
      answer: 'We offer focused audits too. During the initial consultation, let us know your specific concerns (e.g., Core Web Vitals, backlinks only, or technical SEO). We can customize a package to address your exact needs and budget.'
    },
    {
      question: 'How quickly will I see results after implementing fixes?',
      answer: 'Results vary based on competition and current site health. Technical fixes (like page speed and mobile issues) can show improvement in 2-4 weeks. Content and backlink work typically takes 60-90 days. Our clients average +38% organic traffic growth within 90 days of implementation.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950"
      id="faq"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our SEO audit services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919963730111"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              📞 Call Us: +91 9963730111
            </a>
            <a 
              href="https://wa.me/919963730111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
