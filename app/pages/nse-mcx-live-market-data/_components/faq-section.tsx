'use client';

/**
 * @fileoverview FAQ Section
 * @description Frequently asked questions
 */

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What data do you provide?',
      answer: 'We provide real-time and historical market data for NSE, BSE, MCX, and currency derivatives. This includes tick-by-tick data, options chain, F&O data, market depth (Level 2/3), indices, and corporate actions. Complete coverage of 5000+ instruments.'
    },
    {
      question: 'How fast is the data delivery?',
      answer: 'Our API delivers data with <1ms latency. We use co-located servers with direct exchange feeds and optimized network infrastructure. WebSocket streaming provides 1000+ updates per second for real-time applications.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! We offer a 7-day free trial with full access to our API. No credit card required. You can test all features including real-time data, historical data, and WebSocket streaming in our sandbox environment.'
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We provide a 99.99% uptime SLA. Our infrastructure is built on redundant systems across multiple regions with automatic failover. In case of any downtime, we offer service credits as per our SLA agreement.'
    },
    {
      question: 'Do you provide historical data?',
      answer: 'Yes, we provide historical data going back 10+ years. You can access minute-level, hourly, and daily OHLCV data for all instruments. Historical data is automatically adjusted for corporate actions like splits, bonuses, and dividends.'
    },
    {
      question: 'Which programming languages are supported?',
      answer: 'We provide official SDKs for Python, JavaScript/Node.js, Java, and C++/C#. Our REST API can be accessed from any language that supports HTTP requests. WebSocket streaming is also available in all major languages.'
    },
    {
      question: 'What are the rate limits?',
      answer: 'Rate limits depend on your plan. Starter plan: 10,000 requests/day, Professional: 100,000 requests/day, Enterprise: Unlimited. WebSocket connections have no message limits. Contact us for custom rate limits.'
    },
    {
      question: 'How do I get support?',
      answer: 'We offer 24/7 support via email, Slack, and phone. Professional and Enterprise plans get priority support with dedicated account managers. We also have comprehensive documentation, code examples, and video tutorials.'
    },
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Upgrades are effective immediately. Downgrades take effect at the end of your current billing cycle. Pro-rated credits are provided for upgrades.'
    },
    {
      question: 'Is the data compliant and legal?',
      answer: 'Yes, we are authorized by NSE, BSE, and MCX as a data vendor. We comply with all SEBI regulations and data distribution norms. Our data feed is sourced directly from exchanges and is 100% legal for commercial use.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black relative overflow-hidden"
      id="faq"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00FF88]/10 to-[#FFD700]/10 rounded-full mb-4 border border-[#00FF88]/30">
            <HelpCircle className="h-4 w-4 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-sm">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">
            Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#FFD700]">Questions?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our market data API
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-[#00FF88]/50 transition-all"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-6 w-6 text-[#00FF88]" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions? Our team is here to help!
          </p>
          <a
            href="mailto:support@yourservice.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00CC70] text-[#0B1E39] font-black rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all duration-300 hover:scale-105"
          >
            📧 Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}

console.log('[Market-Data-API] FAQSection loaded');
