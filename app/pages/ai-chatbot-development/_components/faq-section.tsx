'use client';

/**
 * FAQ Section
 * Frequently Asked Questions
 */

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

console.log('[AI-Chatbot-Dev] FAQSection component loaded');

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    console.log('[AI-Chatbot-Dev] FAQSection mounted');
    return () => console.log('[AI-Chatbot-Dev] FAQSection unmounted');
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'Will this work on my existing website?',
      answer: 'Yes! We integrate on any platform — WordPress, Shopify, Next.js, React, or custom-built websites. Our chatbot is platform-agnostic and can be embedded with a simple code snippet.'
    },
    {
      question: 'Can it connect to my CRM like HubSpot or Zoho?',
      answer: 'Absolutely! Our bots sync data through secure APIs with popular CRMs including HubSpot, Zoho, Salesforce, and Pipedrive. All leads and conversations are automatically logged in your CRM.'
    },
    {
      question: 'How do you train the bot on my data?',
      answer: 'We use AI vector databases and embeddings to make your bot understand your business documents, FAQs, product catalogs, and knowledge base. It learns your brand voice and can answer questions specific to your business.'
    },
    {
      question: 'What languages does the chatbot support?',
      answer: 'Our AI chatbots support 50+ languages including Hindi, English, Marathi, Tamil, Telugu, and more. The bot can automatically detect the user\'s language and respond accordingly.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Typically 7-15 days depending on complexity. Starter packages are ready in 7-10 days, Professional in 10-15 days, and Enterprise solutions in 15-30 days. We provide regular updates throughout the process.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'All packages include post-launch support. Starter gets 15 days, Professional gets 30 days, and Enterprise gets 90 days of free support plus ongoing optimization. We also offer maintenance packages for long-term support.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide flex items-center gap-2 justify-center">
              <HelpCircle className="h-4 w-4" />
              Got Questions?
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-gray-900 dark:text-white"
          >
            Frequently Asked Questions About Hire AI Chatbot Developer
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our AI chatbot services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#FFB100] transition-all duration-300 px-6 py-2"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-gray-900 dark:text-white hover:text-[#0A2540] dark:hover:text-[#FFB100] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A2540] to-[#0A2540]/90 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Talk to Our AI Expert
          </a>
        </motion.div>
      </div>
    </section>
  );
}
