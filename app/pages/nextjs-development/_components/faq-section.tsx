'use client';

/**
 * FAQ Section
 * Address common objections and questions
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

console.log('[NextJS-Dev] FAQSection component loaded');

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    console.log('[NextJS-Dev] FAQSection mounted');
    return () => console.log('[NextJS-Dev] FAQSection unmounted');
  }, []);

  const faqs: FAQ[] = [
    {
      question: 'Do you offer design services too?',
      answer: 'Yes! We provide complete design services including custom UI/UX design with Figma prototypes, design systems with Tailwind CSS, and mobile-first responsive layouts. Our designers work closely with developers to ensure pixel-perfect implementation.'
    },
    {
      question: 'What about hosting and domain setup?',
      answer: 'We handle everything! We set up your site on Vercel (free tier available) or AWS, configure your custom domain, set up SSL certificates, and provide complete documentation. You own everything — no vendor lock-in.'
    },
    {
      question: 'Is it SEO-ready out of the box?',
      answer: 'Absolutely! Every site includes optimized meta tags, structured data (Schema.org), Open Graph tags for social sharing, XML sitemaps, robots.txt, and Lighthouse optimization. We ensure your site is fully crawlable and indexable by search engines.'
    },
    {
      question: 'Can you maintain my site monthly?',
      answer: 'Yes, we offer ongoing maintenance plans starting at ₹9,999/month. This includes security updates, content updates, performance monitoring, bug fixes, backup management, and priority support.'
    },
    {
      question: 'What if I need changes after launch?',
      answer: 'All packages include a 30-day bug warranty. Any bugs or issues found within 30 days are fixed free of charge. For feature additions or design changes, we offer flexible hourly rates or monthly retainer packages.'
    },
    {
      question: 'How long does it take to build a Next.js site?',
      answer: 'Timeline depends on complexity: Starter (3 pages): 7-10 days, Professional (6-8 pages): 14-21 days, Enterprise: 3-6 weeks. Rush delivery available for urgent projects with additional fees.'
    },
    {
      question: 'Do you provide the source code?',
      answer: 'Yes! You get complete source code ownership with documentation, GitHub repository access, deployment scripts, and technical handover. We use clean, well-commented code following industry best practices.'
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Absolutely! We have experience integrating with CRM systems (Zoho, HubSpot, Salesforce), payment gateways (Stripe, Razorpay, PayPal), email services (SendGrid, Mailchimp), analytics tools, and custom APIs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mb-4 sm:mb-5 border border-blue-200 dark:border-blue-800 text-sm sm:text-base">
            <span className="font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
              Got Questions?
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Everything you need to know about our Next.js development services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 pt-0 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <div className="inline-block px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl border border-indigo-200 dark:border-indigo-800">
            <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
              Still have questions?
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3">
              We're here to help! Get in touch with our team.
            </p>
            <a 
              href="#lead-form"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm sm:text-base"
              onClick={() => console.log('[NextJS-Dev] FAQ CTA clicked')}
            >
              Ask Us Anything
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
