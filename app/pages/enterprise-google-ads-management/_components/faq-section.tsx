import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your enterprise Google Ads management different?",
      answer: "Our enterprise service includes dedicated account managers, 24/7 monitoring, advanced automation, custom reporting, and enterprise-level security. We provide a complete team of specialists focused solely on your account with guaranteed 8.5× ROAS performance."
    },
    {
      question: "How quickly can you improve our Google Ads performance?",
      answer: "Most enterprise clients see significant improvements within 30-60 days. We typically achieve 2-3× ROAS improvement in the first month, with full optimization reaching 8.5×+ ROAS within 3-6 months. Our dedicated team works around the clock to optimize your campaigns."
    },
    {
      question: "Do you work with large ad budgets?",
      answer: "Yes, we specialize in enterprise-level ad spend from ₹10L to ₹50Cr+ monthly. Our team has experience managing complex, high-volume campaigns across multiple accounts and markets. We provide dedicated resources and advanced tools for large-scale operations."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide comprehensive reporting including daily performance summaries, weekly strategic reviews, monthly executive reports, and custom analytics dashboards. All reports are tailored to your business needs and include detailed insights, recommendations, and ROI analysis."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We maintain enterprise-level security standards with SOC 2 compliance, encrypted data transmission, secure access controls, and regular security audits. We also ensure compliance with industry regulations like GDPR, CCPA, and healthcare privacy laws where applicable."
    },
    {
      question: "Can you integrate with our existing marketing tools?",
      answer: "Absolutely. We integrate with all major marketing platforms including Salesforce, HubSpot, Marketo, Adobe Analytics, and custom CRM systems. We also provide API integrations and custom solutions to ensure seamless data flow across your marketing stack."
    },
    {
      question: "What happens if we're not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our performance improvements within the first 30 days, we'll refund your investment. We're confident in our ability to deliver results, which is why we can offer this guarantee."
    },
    {
      question: "Do you provide training for our internal team?",
      answer: "Yes, we offer comprehensive training programs for your internal marketing team. This includes Google Ads best practices, campaign optimization techniques, reporting analysis, and ongoing support. We believe in knowledge transfer to ensure long-term success."
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
            Frequently Asked Questions About Hire Enterprise Google Ads Expert
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our enterprise Google Ads management services.
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
              Our enterprise team is here to answer any questions about our Google Ads management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                Schedule Enterprise Call
              </button>
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                Download Enterprise Guide
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}