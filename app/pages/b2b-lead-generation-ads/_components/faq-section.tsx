import React from 'react';

/**
 * Server-rendered FAQ section using native <details>/<summary>.
 *
 * Why no "use client":
 * - Native HTML accordions need zero JavaScript to expand/collapse
 * - Every question and answer is in the initial HTML — Googlebot reads it
 *   on first crawl, which is exactly what FAQ-rich-results scoring requires
 * - The page-level layout.tsx already emits FAQPage JSON-LD for SERP
 *   FAQ rich results
 */
export function FAQSection() {
  const faqs = [
    {
      question: 'How do you ensure B2B lead quality?',
      answer:
        'We use advanced lead qualification systems including lead scoring, intent data analysis, and behavioral tracking. Our multi-step qualification process ensures only high-intent prospects reach your sales team, typically achieving 85% qualified lead rates.',
    },
    {
      question: "What's the typical ROAS for B2B lead generation?",
      answer:
        'Most B2B clients see 3-4× ROAS improvement within the first month, with full optimization reaching 7.2×+ ROAS within 4-6 months. Our average client achieves 7.2× ROAS, with some reaching 10×+ ROAS depending on their industry and sales cycle.',
    },
    {
      question: 'Do you work with complex B2B sales cycles?',
      answer:
        'Yes, we specialize in complex B2B sales cycles including long-term nurturing, multiple decision-makers, and high-value transactions. Our strategies are designed for B2B sales cycles ranging from 3-12 months with sophisticated lead nurturing sequences.',
    },
    {
      question: 'How do you target B2B decision-makers?',
      answer:
        'We use advanced B2B targeting including job title targeting, company size filtering, industry-specific audiences, and intent data. Our approach targets C-level executives, VPs, directors, and other key decision-makers in your target companies.',
    },
    {
      question: 'What kind of reporting do you provide for B2B leads?',
      answer:
        'We provide comprehensive B2B reporting including lead quality metrics, conversion rates by industry and company size, cost-per-lead analysis, sales pipeline impact, and ROI tracking. Reports include detailed lead scoring and qualification insights.',
    },
    {
      question: 'How do you handle B2B lead nurturing?',
      answer:
        'We implement sophisticated lead nurturing sequences including email automation, content marketing, retargeting campaigns, and personalized follow-up strategies. Our approach nurtures leads through the entire B2B sales funnel with industry-specific content and timing.',
    },
    {
      question: 'Can you integrate with our CRM system?',
      answer:
        'Absolutely. We integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, and custom solutions. This includes automated lead scoring, lead assignment, and seamless data flow between our campaigns and your sales team.',
    },
    {
      question: "What's your experience with different B2B industries?",
      answer:
        'We have extensive experience across all B2B verticals including technology, manufacturing, professional services, healthcare, finance, and consulting. Our team understands industry-specific challenges and implements tailored strategies for each vertical.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            B2B Lead Generation FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our B2B lead generation services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-6 hover:bg-gray-50 transition-colors duration-200">
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-2xl font-light text-gray-400 group-open:text-green-600 group-open:rotate-45 transition-transform duration-200"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our B2B team is here to answer any questions about our lead generation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Schedule B2B Call
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Download B2B Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
