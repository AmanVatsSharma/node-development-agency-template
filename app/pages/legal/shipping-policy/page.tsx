import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Enterprise Hero - Vedpragya Bharat Private Limited",
  description: "Shipping Policy for Vedpragya Bharat Private Limited (Enterprise Hero). This policy explains that shipping is not applicable for our service-based business.",
  keywords: "shipping policy, service-based business, Vedpragya Bharat, Enterprise Hero, no shipping, digital services",
};

/**
 * @fileoverview Shipping Policy Page - Not Applicable for Service-Based Business
 * @description Professional page explaining that shipping policy is not applicable 
 * for our software development and digital services business
 * @author Development Agency
 * @version 1.0.0
 */

console.log('[Shipping-Policy] Page loaded - Service-based business policy');

export default function ShippingPolicyPage() {
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
              Shipping <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Information about shipping and delivery for Enterprise Hero's digital services.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Policy Content */}
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

            {/* Important Notice - Not Applicable */}
            <div className="mb-8">
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-orange-800 dark:text-orange-300 mb-2">
                      Shipping Policy Not Applicable
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Vedpragya Bharat Private Limited operates as a service-based business</strong>, providing 
                      enterprise-grade software development and digital solutions. We do not ship physical products, 
                      therefore this shipping policy is not applicable to our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What We Provide */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Our Service-Based Business</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Enterprise Hero is a globally recognized provider of enterprise-grade Node.js development services 
                and digital solutions. We deliver:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                <li><strong>Software Development Services:</strong> Custom web applications, APIs, and enterprise systems</li>
                <li><strong>3D Interactive Experiences:</strong> Immersive digital solutions and 3D visualization</li>
                <li><strong>Consulting Services:</strong> Technical consultation and architecture design</li>
                <li><strong>Digital Solutions:</strong> Web-based platforms, cloud applications, and SaaS products</li>
                <li><strong>Enterprise Software:</strong> Large-scale business solutions and integrations</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                All our services are delivered digitally through secure cloud platforms, direct deployments, 
                and client infrastructure integration.
              </p>
            </div>

            {/* Service Delivery Timeline */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Service Delivery Timeline</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Since we provide digital services (not physical products), our delivery works differently:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Delivery Process</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>Initial Consultation:</strong> 1-2 business days after project approval</li>
                  <li><strong>Project Kickoff:</strong> Within 3-5 business days of signed agreement</li>
                  <li><strong>Development Milestones:</strong> According to project timeline (communicated in proposal)</li>
                  <li><strong>Final Delivery:</strong> Code repository handover, documentation, and deployment support</li>
                  <li><strong>Post-Delivery Support:</strong> Ongoing maintenance and updates as per agreement</li>
                </ul>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                All services are delivered through secure channels, including code repositories (Git/GitHub/GitLab), 
                cloud platforms (AWS, Azure, GCP), or client-specified infrastructure.
              </p>
            </div>

            {/* What You Receive */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. What You Receive</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Upon completion of our services, you receive:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Complete source code and documentation</li>
                <li>Deployment instructions and setup guides</li>
                <li>API documentation and integration guides</li>
                <li>Testing reports and quality assurance documentation</li>
                <li>Admin access to deployed applications</li>
                <li>Database backups and migration scripts (if applicable)</li>
                <li>Ongoing support and maintenance services (based on agreement)</li>
              </ul>
            </div>

            {/* No Physical Shipping */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. No Physical Shipping Required</h2>
              <p className="text-gray-700 dark:text-gray-300">
                As a service-based business, Enterprise Hero does not ship any physical products. All our deliverables 
                are digital in nature and are transferred through secure online channels. You will not receive any 
                hardware, printed materials, or physical items as part of our service delivery.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Questions About Service Delivery</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about our service delivery process, timelines, or deliverables, 
                please contact us:
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
                  <strong>Email:</strong> info@enterprisehero.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Global Offices:</strong> India (HQ), Dubai, California, Toronto, Shenzhen
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Shipping Policy from time to time. We will notify you of any changes 
                by posting the updated policy on this page and updating the "Last updated" date. 
                Since this policy is not applicable to our services, any updates will primarily reflect 
                our commitment to transparency and legal compliance.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

