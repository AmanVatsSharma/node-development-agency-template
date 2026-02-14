'use client';

/**
 * @fileoverview FAQ Section
 * @description Address common objections and questions
 * @version 1.0.0
 */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  console.log('[FAQSection] Rendering, inView:', inView);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const faqs = [
    {
      question: 'How long does it take to set up WhatsApp Business API?',
      answer: 'Our standard setup takes 48 hours from start to finish. This includes Facebook Business verification, WhatsApp API setup, automation configuration, and testing. For urgent projects, we offer express 24-hour setup (additional charges apply).'
    },
    {
      question: 'Is this the official WhatsApp Business API?',
      answer: 'Yes, absolutely! We are official Meta Business Partners and use only the verified WhatsApp Cloud API or certified BSP partners (360Dialog, Gupshup, Twilio). Your business will get the green verification tick, ensuring customers trust your messages.'
    },
    {
      question: 'Can I use my existing business phone number?',
      answer: 'Yes, you can! However, the number cannot be registered on regular WhatsApp or WhatsApp Business app. If your number is currently in use, we can help you migrate or we can provide a new business number. Most clients prefer a dedicated business number for automation.'
    },
    {
      question: 'What about data security and privacy?',
      answer: 'Security is our top priority. All messages are end-to-end encrypted by WhatsApp. We are GDPR compliant, ISO 27001 certified, and follow Meta\'s data protection guidelines. Your customer data never leaves secure servers and we never share information with third parties.'
    },
    {
      question: 'How many messages can I send per month?',
      answer: 'Message limits depend on your pricing plan: Starter (1,000/month), Growth (5,000/month), Pro (20,000/month). You can purchase additional message credits anytime. WhatsApp also has tiered messaging limits that increase as your quality rating improves.'
    },
    {
      question: 'Can customers reply and have conversations?',
      answer: 'Absolutely! This is not broadcast messaging. Customers can reply and have real two-way conversations. Your automation can handle FAQs, but humans can take over anytime for complex queries. You\'ll have a full dashboard to manage all conversations.'
    },
    {
      question: 'Do I need technical knowledge to manage this?',
      answer: 'Not at all! We handle all technical setup and configuration. You\'ll get a user-friendly dashboard to view conversations, analytics, and update simple settings. We also provide training and 24/7 support. If you need changes to workflows, just contact us.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We integrate with 100+ platforms including: CRMs (HubSpot, Salesforce, Zoho), E-commerce (Shopify, WooCommerce, Wix), Payment Gateways (Razorpay, Stripe), and tools like Zapier, Google Sheets. Custom integrations available for any platform with an API.'
    },
    {
      question: 'What if I want to cancel or change plans?',
      answer: 'No long-term contracts! You can change plans anytime (effective next billing cycle). If you want to cancel, we require 30 days notice. Setup costs are one-time and non-refundable, but monthly subscriptions can be cancelled with proper notice.'
    },
    {
      question: 'How is this different from WhatsApp Business app?',
      answer: 'WhatsApp Business app is manual and limited to 1 device. WhatsApp Business API is for automation, supports unlimited users, integrates with your systems, has advanced analytics, and can handle thousands of messages. It\'s the difference between a bicycle and a Ferrari!'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All plans include ongoing support: Starter (email, 24h response), Growth (priority, 4h response), Pro (dedicated manager, 1h response). We also provide monthly analytics reports, optimization suggestions, and regular feature updates.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'Setup costs are non-refundable as they cover Meta verification, API configuration, and automation development. Monthly subscriptions can be cancelled anytime with 30-day notice. If you\'re unhappy in the first week, we\'ll work with you to make it right or discuss options.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="faq"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#075E54]/10 rounded-full text-[#075E54] dark:text-[#25D366] font-bold text-sm border border-[#075E54]/20">
                <HelpCircle className="h-4 w-4" />
                Got Questions?
              </span>
            </div>
            <h2 
              id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              Frequently Asked Questions About
              <br />
              <span className="bg-gradient-to-r from-[#075E54] to-[#25D366] bg-clip-text text-transparent">
                Hire WhatsApp Business API Expert
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about WhatsApp Business API automation
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div variants={fadeInUp}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl px-6 border-2 border-gray-200 dark:border-gray-700 hover:border-[#25D366] dark:hover:border-[#25D366] transition-all"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-bold text-gray-900 dark:text-white hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Still Have Questions CTA */}
          <motion.div variants={fadeInUp} className="mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Book a free consultation call and we'll answer all your questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#lead-form"
                  className="inline-block px-8 py-4 bg-white text-[#25D366] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                >
                  Schedule Free Call
                </a>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

console.log('[WhatsApp-API] FAQSection component loaded');
