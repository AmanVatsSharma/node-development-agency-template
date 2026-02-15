import type { Metadata } from "next";
import { buildPageMetadata } from "@/app/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | Enterprise Hero - Vedpragya Bharat Private Limited",
  description:
    "Terms of Service for Vedpragya Bharat Private Limited (Enterprise Hero). Legal terms and conditions for our enterprise-grade Node.js development services.",
  path: "/pages/legal/terms-of-service",
  keywords: [
    "terms of service",
    "legal terms",
    "Vedpragya Bharat",
    "Enterprise Hero",
    "service agreement",
    "legal compliance",
  ],
});

export default function TermsOfServicePage() {
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
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Legal terms and conditions for Enterprise Hero's enterprise-grade Node.js development services.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
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
                These Terms of Service ("Terms") govern your use of the services provided by Vedpragya Bharat Private Limited, 
                operating as "Enterprise Hero" ("Company," "we," "our," or "us"). By accessing our website or engaging our 
                services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Enterprise Hero is a globally recognized enterprise-grade Node.js development agency founded by Aman Kumar Sharma, 
                serving Fortune 500 companies and innovative startups across 6 countries.
              </p>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Our Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Enterprise Hero provides the following enterprise-grade services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Enterprise Node.js development and architecture</li>
                <li>3D interactive experiences and WebGL solutions</li>
                <li>Microservices architecture and API development</li>
                <li>Digital transformation and cloud migration</li>
                <li>Technical consulting and solution architecture</li>
                <li>DevOps automation and deployment services</li>
                <li>Performance optimization and scalability solutions</li>
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a client of Enterprise Hero, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Provide accurate and complete project requirements</li>
                <li>Respond promptly to requests for information and feedback</li>
                <li>Make timely payments according to agreed terms</li>
                <li>Respect intellectual property rights and confidentiality</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Provide necessary access to systems and resources</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Invoices are due within 30 days of receipt</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are exclusive of applicable taxes</li>
                <li>Currency will be specified in the service agreement</li>
                <li>Payment methods accepted include bank transfers and major credit cards</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Intellectual property rights are governed by the following principles:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Client retains ownership of their existing intellectual property</li>
                <li>Work product created specifically for the client is owned by the client</li>
                <li>Enterprise Hero retains rights to pre-existing tools, frameworks, and methodologies</li>
                <li>Open source components are subject to their respective licenses</li>
                <li>Confidential information must be protected by both parties</li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Both parties agree to maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Business strategies and proprietary information</li>
                <li>Technical specifications and implementation details</li>
                <li>Financial information and pricing</li>
                <li>Customer data and personal information</li>
                <li>Any information marked as confidential</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Enterprise Hero's liability is limited to the amount paid for services</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Force majeure events are excluded from liability</li>
                <li>Clients are responsible for backing up their data</li>
                <li>Third-party service failures are not our responsibility</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Either party may terminate services under the following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>With 30 days written notice for convenience</li>
                <li>Immediately for material breach of contract</li>
                <li>Upon completion of agreed deliverables</li>
                <li>For non-payment after grace period</li>
                <li>Mutual agreement between parties</li>
              </ul>
            </div>

            {/* Global Operations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Global Operations</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Enterprise Hero operates globally with offices in India, Dubai, California, Toronto, and Shenzhen. 
                Services may be provided by our global team members, and we ensure compliance with local laws and 
                regulations in all jurisdictions where we operate.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                These Terms are governed by the laws of India, specifically the state of Haryana, where Vedpragya Bharat 
                Private Limited is registered. Any disputes will be subject to the exclusive jurisdiction of the courts 
                in Haryana, India.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For questions about these Terms or our services, please contact us:
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
                  <strong>Email:</strong> legal@enterprisehero.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Global Offices:</strong> India (HQ), Dubai, California, Toronto, Shenzhen
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Updates to These Terms</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update these Terms from time to time. We will notify you of any material changes 
                by posting the new Terms on this page and updating the "Last updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated Terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}