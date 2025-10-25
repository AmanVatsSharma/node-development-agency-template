import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Performance Max and how does it work?",
      answer: "Performance Max is Google's automated campaign type that uses machine learning to optimize across Search, Display, YouTube, Shopping, and Discovery networks. It automatically adjusts bidding, targeting, and creative elements to maximize conversions while minimizing manual management."
    },
    {
      question: "What's the typical ROAS for Performance Max campaigns?",
      answer: "Most Performance Max clients see 3-4× ROAS improvement within the first month, with full optimization reaching 6.5×+ ROAS within 4-6 months. Our average client achieves 6.5× ROAS, with some reaching 8×+ ROAS depending on their industry and campaign setup."
    },
    {
      question: "How do you optimize Performance Max campaigns?",
      answer: "We optimize Performance Max campaigns through advanced audience creation, asset optimization, conversion tracking setup, and strategic budget allocation. Our approach includes continuous monitoring, A/B testing, and automated bid adjustments for maximum performance."
    },
    {
      question: "Can Performance Max work for all business types?",
      answer: "Yes, Performance Max works for most business types including e-commerce, lead generation, app promotion, and brand awareness. We customize the strategy based on your business goals, target audience, and conversion objectives."
    },
    {
      question: "What kind of reporting do you provide for Performance Max?",
      answer: "We provide comprehensive Performance Max reporting including cross-network performance, audience insights, conversion tracking, and ROI analysis. Reports include detailed insights on which networks and audiences are driving the best results."
    },
    {
      question: "How do you handle creative assets for Performance Max?",
      answer: "We help create and optimize all required creative assets including headlines, descriptions, images, videos, and logos. Our team ensures your assets are optimized for all Google networks and audience segments."
    },
    {
      question: "Can you manage Performance Max alongside other campaigns?",
      answer: "Absolutely. We can manage Performance Max campaigns alongside your existing Search, Display, and Shopping campaigns. Our team ensures proper budget allocation and prevents overlap between different campaign types."
    },
    {
      question: "What's your experience with different Performance Max industries?",
      answer: "We have extensive experience across all industries including e-commerce, technology, healthcare, finance, and professional services. Our team understands industry-specific challenges and implements tailored Performance Max strategies for each vertical."
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
            Performance Max FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our Performance Max campaign services.
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
                    <Minus className="w-6 h-6 text-purple-600" />
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
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our Performance Max team is here to answer any questions about our automation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                Schedule Performance Max Call
              </button>
              <button className="px-8 py-3 border border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300">
                Download Performance Max Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}