import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you target local customers effectively?",
      answer: "We use advanced local targeting including radius targeting, location extensions, Google My Business integration, and local keyword optimization. Our strategies ensure your ads only show to potential customers in your service area with precise geographic control."
    },
    {
      question: "What's the typical ROAS for local businesses?",
      answer: "Most local business clients see 2-3× ROAS improvement within the first month, with full optimization reaching 5.8×+ ROAS within 3-6 months. Our average client achieves 5.8× ROAS, with some reaching 8×+ ROAS depending on their industry and local market."
    },
    {
      question: "Do you work with small local businesses?",
      answer: "Yes, we specialize in local businesses of all sizes from single-location shops to multi-location franchises. Our local business plans start at ₹25K/month and are designed specifically for local market challenges and opportunities."
    },
    {
      question: "How do you handle Google My Business optimization?",
      answer: "We provide complete Google My Business setup and optimization including profile optimization, review management, post scheduling, photo optimization, and Q&A management. This ensures maximum local visibility and customer engagement."
    },
    {
      question: "What kind of reporting do you provide for local businesses?",
      answer: "We provide comprehensive local reporting including foot traffic analysis, call tracking, local keyword performance, competitor analysis, and customer acquisition by location. Reports include detailed insights on local market performance and ROI."
    },
    {
      question: "How do you compete with larger businesses?",
      answer: "We use local-specific strategies including community-focused messaging, local event targeting, neighborhood-specific campaigns, and local influencer partnerships. Our approach helps local businesses compete effectively with larger competitors."
    },
    {
      question: "Can you help with multi-location businesses?",
      answer: "Absolutely. We provide multi-location management including location-specific campaigns, centralized reporting, local market analysis, and coordinated strategies across all locations. This ensures consistent branding while optimizing for local market differences."
    },
    {
      question: "What's your experience with different local industries?",
      answer: "We have extensive experience across all local business verticals including healthcare, restaurants, retail, automotive, beauty, fitness, and professional services. Our team understands industry-specific local challenges and implements tailored strategies for each vertical."
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
            Local Business Google Ads FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our local business Google Ads services.
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
                    <Minus className="w-6 h-6 text-blue-600" />
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our local business team is here to answer any questions about our Google Ads services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                Schedule Local Business Call
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                Download Local Business Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}