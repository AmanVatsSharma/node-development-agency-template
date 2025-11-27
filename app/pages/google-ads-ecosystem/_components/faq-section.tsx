'use client';

/**
 * @fileoverview FAQ Section - Common questions and answers
 * @description Component addressing common objections and questions about Google Ads services
 * @author Rajapragya Bharat Pvt. Ltd.
 * @version 1.0.0
 * 
 * FEATURES:
 * - Interactive accordion FAQ
 * - Search functionality
 * - Category-based organization
 * - Mobile-optimized responsive design
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown,
  Search,
  HelpCircle,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  isPopular?: boolean;
}

const faqs: FAQ[] = [
  {
    id: 'how-soon-results',
    question: 'How soon can I see results from Google Ads?',
    answer: 'Most clients start seeing improvements within 2-4 weeks after campaign launch. Some see results as early as week 1, especially for search campaigns. However, it typically takes 30-90 days to see the full potential of your campaigns as we gather data and optimize based on performance.',
    category: 'Timeline',
    isPopular: true
  },
  {
    id: 'ad-spend-included',
    question: 'Is the ad spend included in your management fee?',
    answer: 'No, ad spend is separate from our management fee. You pay Google directly for your ad spend, which ensures complete transparency. Our management fee covers our expertise, campaign optimization, reporting, and account management. This approach gives you full control over your ad budget and complete visibility into where your money goes.',
    category: 'Pricing',
    isPopular: true
  },
  {
    id: 'account-access',
    question: 'Will I have access to my Google Ads account?',
    answer: 'Absolutely! You maintain full ownership and access to your Google Ads account at all times. We work as your trusted partner, managing campaigns on your behalf while keeping you informed about all changes and optimizations. You can view performance, make changes, or revoke access anytime.',
    category: 'Account Management',
    isPopular: true
  },
  {
    id: 'what-makes-different',
    question: 'What makes you different from other Google Ads agencies?',
    answer: 'Our key differentiators include: 1) ROI-obsessed approach focusing on profitable campaigns, 2) 48-hour optimization cycles for rapid improvements, 3) AI-powered automation for peak efficiency, 4) Complete transparency with data ownership, 5) Industry-specific expertise across 15+ sectors, 6) 98% client retention rate, and 7) No long-term contracts or hidden fees.',
    category: 'Company',
    isPopular: true
  },
  {
    id: 'minimum-budget',
    question: 'What is the minimum budget required to work with you?',
    answer: 'We work with businesses spending ₹25K+ per month on Google Ads management. For ad spend, we recommend a minimum of ₹30K-50K per month to see meaningful results. However, we can work with smaller budgets for specific projects like audits or landing page optimization.',
    category: 'Pricing'
  },
  {
    id: 'contract-terms',
    question: 'Do you require long-term contracts?',
    answer: 'No, we work on a month-to-month basis with no long-term contracts required. We believe our results should speak for themselves. You can cancel anytime with 15 days notice. This flexibility ensures we stay focused on delivering value and maintaining high performance.',
    category: 'Contract'
  },
  {
    id: 'reporting-frequency',
    question: 'How often do you provide reports?',
    answer: 'We provide detailed reports based on your service tier: Starter plans get weekly reports, Professional plans get bi-weekly reports, and Enterprise plans get weekly reports plus monthly strategy calls. All clients have access to our real-time dashboard for 24/7 performance monitoring.',
    category: 'Reporting'
  },
  {
    id: 'industry-expertise',
    question: 'Do you have experience in my industry?',
    answer: 'We have successfully worked with clients across 15+ industries including Real Estate, Healthcare, E-commerce, B2B Services, SaaS, Education, Automotive, and Technology. Our team includes industry specialists who understand the unique challenges and opportunities in each sector.',
    category: 'Industry'
  },
  {
    id: 'campaign-types',
    question: 'What types of Google Ads campaigns do you manage?',
    answer: 'We manage all Google Ads campaign types including Search, Display, Shopping, Video (YouTube), Performance Max, Local, and App campaigns. Our expertise covers the complete Google Ads ecosystem, ensuring we can create the optimal mix of campaigns for your business goals.',
    category: 'Services'
  },
  {
    id: 'optimization-process',
    question: 'How do you optimize campaigns?',
    answer: 'Our optimization process includes: 1) Daily performance monitoring, 2) Bi-weekly optimization cycles, 3) A/B testing of ad copy and landing pages, 4) Bid strategy adjustments, 5) Keyword refinement, 6) Audience targeting optimization, 7) Budget reallocation, and 8) Continuous testing and improvement based on data insights.',
    category: 'Process'
  },
  {
    id: 'landing-page-required',
    question: 'Do I need a landing page for Google Ads?',
    answer: 'While not always required, having optimized landing pages typically improves conversion rates by 3-5x compared to directing traffic to your homepage. We can help you create conversion-focused landing pages or optimize existing ones as part of our services.',
    category: 'Requirements'
  },
  {
    id: 'competitor-analysis',
    question: 'Do you analyze competitors?',
    answer: 'Yes, competitor analysis is a key part of our strategy. We research competitor keywords, ad copy, landing pages, and positioning to identify opportunities and ensure your campaigns stand out. This analysis helps us create more effective campaigns and avoid costly mistakes.',
    category: 'Strategy'
  },
  {
    id: 'emergency-support',
    question: 'What if I need urgent support?',
    answer: 'We offer different support levels based on your plan. Enterprise clients get 24/7 priority support, Professional clients get business hours support with 4-hour response times, and Starter clients get email support with 24-hour response times. All clients can reach us via phone for urgent matters.',
    category: 'Support'
  },
  {
    id: 'data-ownership',
    question: 'Who owns the campaign data and insights?',
    answer: 'You own all your data, insights, and campaign assets. We provide you with complete access to your Google Ads account, analytics data, and all reports. If you decide to work with another agency or manage campaigns in-house, all your data remains with you.',
    category: 'Data'
  },
  {
    id: 'roi-guarantee',
    question: 'Do you guarantee ROI improvements?',
    answer: 'While we can\'t guarantee specific ROI numbers due to various factors outside our control, we do guarantee our commitment to optimization and improvement. Our average client sees 3-5x ROAS improvement within 90 days. We\'re confident in our approach and offer month-to-month contracts so you can evaluate our performance.',
    category: 'Guarantees'
  }
];

const categories = ['All', 'Timeline', 'Pricing', 'Account Management', 'Company', 'Contract', 'Reporting', 'Industry', 'Services', 'Process', 'Requirements', 'Strategy', 'Support', 'Data', 'Guarantees'];

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFAQClick = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
    console.log(`[FAQSection] FAQ toggled: ${faqId}`);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    console.log(`[FAQSection] Search query: ${query}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log(`[FAQSection] Category changed: ${category}`);
  };

  const handleContactClick = (contactType: string) => {
    console.log(`[FAQSection] Contact clicked: ${contactType}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'faq_contact_click', {
        contact_type: contactType,
        page_location: window.location.pathname
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions About
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hire Google Ads Ecosystem Expert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            we receive about our Google Ads ecosystem services.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => handleFAQClick(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {faq.isPopular && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No FAQs Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Still Have Questions?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Get in touch with us and we'll answer 
            any questions you have about our Google Ads ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+919876543210"
              onClick={() => handleContactClick('phone')}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>
            
            <Link
              href="mailto:info@rajapragyabharat.com"
              onClick={() => handleContactClick('email')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2 border border-white/30"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Link>
            
            <Link
              href="#roi-calculator"
              onClick={() => handleContactClick('calculator')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Calculate ROI
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;