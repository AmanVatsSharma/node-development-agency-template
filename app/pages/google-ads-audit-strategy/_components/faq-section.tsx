import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does a Google Ads audit include?",
      answer: "Our Google Ads audit includes comprehensive analysis of account structure, keywords, targeting, bidding strategies, ad copy, landing pages, conversion tracking, and performance metrics. We provide actionable recommendations with clear implementation priorities."
    },
    {
      question: "How long does the audit process take?",
      answer: "The audit process typically takes 5-7 business days for basic audits, 7-10 days for professional audits, and 10-14 days for enterprise audits. This includes data analysis, report generation, and consultation scheduling."
    },
    {
      question: "What's the typical improvement from an audit?",
      answer: "Most clients see 40%+ improvement in ROAS within 30-60 days of implementing our recommendations. Some clients achieve 100%+ improvement depending on the issues identified and the extent of implementation."
    },
    {
      question: "Do you provide implementation support?",
      answer: "Yes, we provide implementation support including consultation calls, priority action lists, and ongoing guidance. Our professional and enterprise plans include hands-on implementation support and follow-up consultations."
    },
    {
      question: "What kind of report do you provide?",
      answer: "We provide comprehensive audit reports including executive summary, detailed findings, prioritized recommendations, implementation timeline, and performance benchmarks. Reports include visual charts, data analysis, and actionable insights."
    },
    {
      question: "Can you audit multiple Google Ads accounts?",
      answer: "Yes, we can audit multiple Google Ads accounts including cross-account analysis, budget allocation recommendations, and unified strategy development. This is included in our enterprise audit plans."
    },
    {
      question: "Do you offer ongoing strategy consultation?",
      answer: "Yes, we offer ongoing strategy consultation including monthly check-ins, performance reviews, and strategic adjustments. This is available as an add-on service or included in our enterprise plans."
    },
    {
      question: "What's your experience with different industries?",
      answer: "We have extensive experience across all industries including e-commerce, B2B, healthcare, finance, technology, and professional services. Our team understands industry-specific challenges and provides tailored recommendations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About Hire Google Ads Audit Expert
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our Google Ads audit and strategy services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-teal-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our audit team is here to answer any questions about our Google Ads audit services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300">
                Schedule Audit Call
              </button>
              <button className="px-8 py-3 border border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300">
                Download Audit Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}