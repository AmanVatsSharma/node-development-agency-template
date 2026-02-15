'use client';

/**
 * FAQ Section Component - Healthcare Software Development
 * Healthcare Industry Objections & Questions
 * CONVERSION OPTIMIZED for Indian healthcare market
 */

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { companyProfile } from '@/app/data/companyProfile';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Shield, 
  Clock, 
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

console.log('[Healthcare-Software-Dev] FAQSection component loaded');
const CONTACT_EMAIL = companyProfile.contactEmail;

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "How long does it take to develop a healthcare software solution?",
      answer: "Development time varies based on complexity. A basic clinic management system takes 2-3 months, while a comprehensive hospital management system can take 4-6 months. Our team provides detailed timelines during the consultation phase and keeps you updated throughout the development process.",
      category: "Development Timeline"
    },
    {
      id: 2,
      question: "Is the software HIPAA compliant and secure?",
      answer: "Yes, absolutely. All our healthcare software solutions are built with HIPAA compliance in mind from day one. We implement end-to-end encryption, access controls, audit trails, and regular security audits. We also provide SOC 2 Type II compliance and can help you achieve any additional certifications required.",
      category: "Security & Compliance"
    },
    {
      id: 3,
      question: "What if we already have existing systems? Can you integrate with them?",
      answer: "Yes, we specialize in integrating with existing healthcare systems. We support HL7 FHIR standards, DICOM for medical imaging, and can integrate with most EMR/EHR systems, lab systems, and pharmacy management software. Our team will analyze your current systems and create a seamless integration plan.",
      category: "Integration"
    },
    {
      id: 4,
      question: "How much does healthcare software development cost?",
      answer: "Our pricing starts from ₹2.5L for basic clinic management systems and goes up to ₹10L+ for comprehensive hospital management systems. The cost depends on features, integrations, and complexity. We provide transparent pricing with no hidden costs and offer flexible payment options including monthly subscriptions.",
      category: "Pricing"
    },
    {
      id: 5,
      question: "Do you provide training and support after deployment?",
      answer: "Yes, we provide comprehensive training for all users including doctors, nurses, and administrative staff. Our support includes 24/7 technical assistance, regular updates, security patches, and performance monitoring. We also offer ongoing maintenance contracts to ensure your system runs smoothly.",
      category: "Support & Training"
    },
    {
      id: 6,
      question: "Can the software be customized for our specific needs?",
      answer: "Absolutely. Every healthcare facility has unique workflows and requirements. We offer extensive customization options including custom modules, workflows, reports, and integrations. Our team works closely with your staff to understand your specific needs and tailor the solution accordingly.",
      category: "Customization"
    },
    {
      id: 7,
      question: "What happens to our data if we decide to switch providers?",
      answer: "Your data belongs to you. We provide complete data export capabilities in standard formats (HL7 FHIR, CSV, JSON) and assist with data migration to other systems. We never lock you into proprietary formats and ensure smooth transitions if needed.",
      category: "Data Ownership"
    },
    {
      id: 8,
      question: "Can the software handle multiple locations and users?",
      answer: "Yes, our solutions are designed to scale. We support multiple locations, unlimited users, and can handle thousands of patients. The system includes centralized management with location-specific configurations, role-based access control, and real-time synchronization across all locations.",
      category: "Scalability"
    },
    {
      id: 9,
      question: "Do you offer mobile apps for doctors and patients?",
      answer: "Yes, we develop native mobile apps for both iOS and Android, as well as Progressive Web Apps (PWA) for cross-platform compatibility. Our mobile solutions include patient portals, doctor apps for accessing records on-the-go, and administrative tools for staff management.",
      category: "Mobile Solutions"
    },
    {
      id: 10,
      question: "What if we need additional features after the initial development?",
      answer: "We offer flexible enhancement packages and can add new features as your needs evolve. Our modular architecture makes it easy to add new functionality without disrupting existing operations. We also provide regular updates and new feature releases based on industry trends and client feedback.",
      category: "Future Enhancements"
    },
    {
      id: 11,
      question: "How do you ensure data backup and disaster recovery?",
      answer: "We implement comprehensive backup strategies including daily automated backups, off-site storage, and point-in-time recovery. Our disaster recovery plan includes RTO (Recovery Time Objective) of less than 4 hours and RPO (Recovery Point Objective) of less than 1 hour. All data is encrypted and stored in secure, geographically distributed data centers.",
      category: "Data Protection"
    },
    {
      id: 12,
      question: "Can you help with regulatory compliance and certifications?",
      answer: "Yes, we assist with various healthcare regulations including HIPAA, GDPR, FDA guidelines, and local Indian healthcare regulations. We provide compliance documentation, audit support, and can help you achieve necessary certifications. Our team stays updated with changing regulations to ensure ongoing compliance.",
      category: "Regulatory Compliance"
    }
  ];

  const categories = [
    { name: "All Questions", count: faqs.length },
    { name: "Development Timeline", count: faqs.filter(faq => faq.category === "Development Timeline").length },
    { name: "Security & Compliance", count: faqs.filter(faq => faq.category === "Security & Compliance").length },
    { name: "Pricing", count: faqs.filter(faq => faq.category === "Pricing").length },
    { name: "Integration", count: faqs.filter(faq => faq.category === "Integration").length },
    { name: "Support & Training", count: faqs.filter(faq => faq.category === "Support & Training").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Questions");

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = selectedCategory === "All Questions" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 168, 107, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to common questions about healthcare software development, 
            pricing, implementation, and support.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  {openItems.includes(faq.id) ? (
                    <Minus className="w-6 h-6 text-gray-500" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems.includes(faq.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="pl-12">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our healthcare software experts are here to help. Get personalized 
              answers to your specific questions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm text-blue-100">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm text-blue-100">{CONTACT_EMAIL}</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm text-blue-100">Available 24/7</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Start Live Chat
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}