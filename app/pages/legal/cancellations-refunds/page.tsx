import type { Metadata } from "next";
import { buildPageMetadata } from "@/app/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Cancellations & Refunds Policy | Enterprise Hero - Vedpragya Bharat Private Limited",
  description:
    "Cancellations and Refunds Policy for Vedpragya Bharat Private Limited (Enterprise Hero). Comprehensive refund terms for software development and digital services.",
  path: "/pages/legal/cancellations-refunds",
  keywords: [
    "refund policy",
    "cancellation policy",
    "service refunds",
    "Vedpragya Bharat",
    "Enterprise Hero",
    "refund terms",
  ],
});

/**
 * @fileoverview Cancellations & Refunds Policy Page
 * @description Comprehensive refund and cancellation policy for software development services
 * @author Development Agency
 * @version 1.0.0
 * 
 * REFUND TIERS:
 * - Before project start: 100% refund
 * - Within 7 days: 75% refund
 * - After work begins: 50% refund
 * - After milestone: No refund
 * - After delivery: No refund
 */

console.log('[Cancellations-Refunds] Page loaded - Comprehensive refund policy');

export default function CancellationsRefundsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
                Vedpragya Bharat Private Limited | CIN: U47912HR2025PTC131357
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cancellations & <span className="text-blue-600">Refunds</span> Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Clear terms for cancellations and refunds on our software development services.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Refunds Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            {/* Company Information */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Company Information</h2>
              <div className="text-gray-700 dark:text-gray-300">
                <p><strong>Legal Name:</strong> Vedpragya Bharat Private Limited</p>
                <p><strong>Brand Name:</strong> Enterprise Hero</p>
                <p><strong>CIN:</strong> U47912HR2025PTC131357</p>
                <p><strong>GST:</strong> 06AALCV0051A1ZV</p>
                <p><strong>Registered Address:</strong> Haryana, India</p>
                <p><strong>Founder:</strong> Aman Kumar Sharma</p>
                <p><strong>Global Offices:</strong> India, Dubai, California, Toronto, Shenzhen</p>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This Cancellations and Refunds Policy ("Policy") governs the cancellation and refund terms for 
                services provided by Vedpragya Bharat Private Limited, operating as "Enterprise Hero" ("Company," 
                "we," "our," or "us").
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We are committed to providing enterprise-grade Node.js development and digital solutions. This policy 
                outlines the terms and conditions for service cancellations and refunds to ensure transparency and 
                fair dealings with our clients.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Service Cancellation Policy</h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">Cancellation Timeline and Refunds</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 font-bold mr-3">100%</span>
                    <div>
                      <strong>Before Project Start:</strong> Full refund (100%) if canceled before work begins and 
                      initial requirements gathering is complete but development has not started.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 font-bold mr-3">75%</span>
                    <div>
                      <strong>Within 7 Days of Project Start:</strong> 75% refund if canceled within seven (7) calendar 
                      days from the project start date, with minimal work completed.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-600 dark:text-yellow-400 font-bold mr-3">50%</span>
                    <div>
                      <strong>After Work Begins (In Progress):</strong> 50% refund if development work has commenced 
                      and significant progress has been made, but no milestones have been delivered yet.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 font-bold mr-3">0%</span>
                    <div>
                      <strong>After Milestone Delivery:</strong> No refund if any project milestone has been completed 
                      and delivered to the client.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 dark:text-red-400 font-bold mr-3">0%</span>
                    <div>
                      <strong>After Final Delivery:</strong> No refund if project has been completed and final 
                      deliverables have been handed over to the client.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Refund Request Process</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                <li>Send a written refund request to <strong>refunds@enterprisehero.com</strong> including:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Project name or reference number</li>
                    <li>Reason for cancellation</li>
                    <li>Date of service purchase</li>
                    <li>Current project status</li>
                  </ul>
                </li>
                <li>Our team will review your request within 5 business days</li>
                <li>We will contact you to discuss the cancellation and assess refund eligibility</li>
                <li>If approved, refund will be processed within 15-30 business days</li>
                <li>Refund will be credited to the original payment method</li>
              </ol>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Note:</strong> Processing timeline may vary based on payment method and banking procedures. 
                  International transfers may require additional time.
                </p>
              </div>
            </div>

            {/* Non-Refundable Items */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Non-Refundable Items</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The following items are non-refundable regardless of cancellation timing:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Third-Party Licenses and Software:</strong> Any costs incurred for third-party licenses, 
                  software subscriptions, or tools purchased specifically for your project.</li>
                <li><strong>Hosting and Domain Costs:</strong> Annual or monthly hosting fees, domain registration 
                  costs, SSL certificates, and cloud infrastructure costs.</li>
                <li><strong>Custom Development After Client Approval:</strong> Any custom features or functionality 
                  developed after receiving explicit written approval from the client.</li>
                <li><strong>Consulting Hours Consumed:</strong> Time spent on meetings, strategy sessions, and 
                  technical consultations that have already been delivered.</li>
                <li><strong>Project Management Fees:</strong> Administrative costs and project management time 
                  incurred up to the cancellation point.</li>
              </ul>
            </div>

            {/* Milestone-Based Projects */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Milestone-Based Projects</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For projects delivered in milestones:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Refunds apply only to unused/unpaid milestones</li>
                <li>Delivered milestones are non-refundable</li>
                <li>Development work already completed remains the property of the client</li>
                <li>Any custom code or solutions developed up to cancellation point will be delivered to the client</li>
              </ul>
            </div>

            {/* Payment Refund Methods */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Refund Processing and Methods</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Approved refunds will be processed as follows:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>Processing Timeline:</strong> 15-30 business days from approval</li>
                  <li><strong>Refund Method:</strong> Original payment method (credit card, bank transfer, etc.)</li>
                  <li><strong>Processing Fees:</strong> Administrative fees (if any) deducted from refund amount</li>
                  <li><strong>International Transfers:</strong> May incur additional bank charges</li>
                  <li><strong>Tax Refunds:</strong> Refunded amount may be subject to tax adjustments based on your jurisdiction</li>
                </ul>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Dispute Resolution</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have concerns about our refund decision:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Contact our support team at <strong>support@enterprisehero.com</strong> to discuss your concerns</li>
                <li>We will review your case with senior management within 7 business days</li>
                <li>If unresolved, we are open to mediation through an independent third party</li>
                <li>Disputes will be governed by the laws of India (Jurisdiction: Haryana courts)</li>
              </ol>
            </div>

            {/* Special Circumstances */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Special Circumstances</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Refund eligibility may be considered under special circumstances:
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>Force Majeure:</strong> Natural disasters, pandemics, or government actions preventing service delivery</li>
                  <li><strong>Company Inability to Deliver:</strong> Our failure to provide agreed services within specified timelines</li>
                  <li><strong>Quality Issues:</strong> Significant quality concerns that cannot be resolved through revisions</li>
                  <li><strong>Breach of Contract:</strong> Violation of agreed terms by Enterprise Hero</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4 text-sm">
                  Special circumstances will be evaluated on a case-by-case basis with fair consideration 
                  and documentation required.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us for Refund Requests</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For refund requests, cancellation inquiries, or questions about this policy:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Vedpragya Bharat Private Limited (Enterprise Hero)</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Founder:</strong> Aman Kumar Sharma
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>CIN:</strong> U47912HR2025PTC131357
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>GST:</strong> 06AALCV0051A1ZV
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Refund Email:</strong> refunds@enterprisehero.com
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Support Email:</strong> support@enterprisehero.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Global Offices:</strong> India (HQ), Dubai, California, Toronto, Shenzhen
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Updates to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Cancellations and Refunds Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

