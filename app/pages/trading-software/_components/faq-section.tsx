'use client';

/**
 * @fileoverview FAQ Section
 * @description Accordion-based FAQ to address common objections
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  console.log('[FAQ] Component rendered, openIndex:', openIndex);

  const faqs = [
    {
      question: 'How long does it take to set up the trading platform?',
      answer: 'Implementation typically takes 2-4 weeks depending on customization requirements. This includes exchange integration, branding, testing, and training. For complex custom features, timeline may extend to 6-8 weeks.'
    },
    {
      question: 'Can I customize the platform to match my brand?',
      answer: 'Absolutely! Our white-label solution allows complete customization including your logo, colors, domain name, and brand identity. You can also customize features, workflows, and user interface elements.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support via phone, email, and WhatsApp. Professional and Enterprise plans include a dedicated account manager. We also provide comprehensive training, documentation, and regular product updates.'
    },
    {
      question: 'Is the platform SEBI compliant?',
      answer: 'Yes, our platform is fully compliant with SEBI regulations, exchange norms, and audit requirements. We stay updated with regulatory changes and ensure your brokerage remains compliant.'
    },
    {
      question: 'Can I migrate my existing clients to this platform?',
      answer: 'Yes, we provide complete data migration support. Our team will help transfer client data, portfolios, and historical transactions from your existing system with zero data loss.'
    },
    {
      question: 'What exchanges do you support?',
      answer: 'We support NSE, BSE, MCX, NCDEX, NSE F&O, Currency markets, and popular cryptocurrency exchanges. Additional exchange integrations can be added on request.'
    },
    {
      question: 'Do you provide mobile apps?',
      answer: 'Yes, native iOS and Android apps are included in all plans. Apps feature real-time data, advanced charting, one-click trading, and biometric authentication.'
    },
    {
      question: 'What happens if there is downtime?',
      answer: 'We guarantee 99.99% uptime SLA. Our infrastructure includes redundancy, load balancing, and disaster recovery systems. Professional and Enterprise plans include SLA credits for any downtime.'
    },
    {
      question: 'Can I add algorithmic trading features?',
      answer: 'Yes, Professional and Enterprise plans include algo trading support. You can build, backtest, and deploy trading algorithms using Python, REST APIs, and WebSocket connections.'
    },
    {
      question: 'What payment gateways do you support?',
      answer: 'We integrate with Razorpay, PayU, Instamojo, CCAvenue, Paytm, and major banking partners including ICICI, HDFC, SBI, Axis, and Kotak.'
    },
    {
      question: 'Is training provided for my team?',
      answer: 'Yes, comprehensive training is included for your operations team, support staff, and dealers. We provide on-site or remote training sessions, video tutorials, and documentation.'
    },
    {
      question: 'What are the hardware/infrastructure requirements?',
      answer: "The platform is cloud-hosted on AWS/GCP, so you don't need any server infrastructure. Only standard computers with internet connection are required for your team."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-[#0d1b2e] via-[#0A1628] to-[#0d1b2e]"
      id="faq"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mb-5 border border-purple-500/30">
            <span className="font-bold text-purple-400 uppercase tracking-wide text-sm">
              FAQs
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 text-white">
            Frequently Asked Questions About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Hire Trading Software Developer
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Contact our sales team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <div
                className={`bg-white/5 backdrop-blur-md border-2 rounded-2xl overflow-hidden transition-all ${
                  openIndex === index
                    ? 'border-[#00FF88]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => {
                    const newIndex = openIndex === index ? null : index;
                    setOpenIndex(newIndex);
                    console.log('[FAQ] Toggled question:', index, 'open:', newIndex === index);
                  }}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-bold text-white text-lg pr-4 group-hover:text-[#00FF88] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180 text-[#00FF88]' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-4">
            Still have questions? Our team is here to help!
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FF88] to-[#00dd77] text-[#0A1628] font-black rounded-xl hover:shadow-2xl hover:shadow-[#00FF88]/50 transition-all"
          >
            Talk to Sales Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
