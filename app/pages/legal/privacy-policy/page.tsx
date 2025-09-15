import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Enterprise Hero - Vedpragya Bharat Private Limited",
  description: "Privacy Policy for Vedpragya Bharat Private Limited (Enterprise Hero). Learn how we protect your data and comply with international privacy standards.",
  keywords: "privacy policy, data protection, Vedpragya Bharat, Enterprise Hero, GDPR compliance, data security",
};

export default function PrivacyPolicyPage() {
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
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your privacy is our priority. Learn how Enterprise Hero protects your data across our global operations.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                Vedpragya Bharat Private Limited, operating as "Enterprise Hero" ("we," "our," or "us"), 
                is committed to protecting your privacy and personal information. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website or 
                use our services across our global operations.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                As a global enterprise-grade Node.js development agency serving clients across 6 countries, 
                we adhere to international data protection standards including GDPR, CCPA, and local privacy laws 
                in all jurisdictions where we operate.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Name, email address, phone number, and company information</li>
                <li>Business requirements and project specifications</li>
                <li>Communication preferences and feedback</li>
                <li>Payment and billing information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Technical Information</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We automatically collect certain technical information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>IP address, browser type, and device information</li>
                <li>Website usage patterns and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Performance metrics and error logs</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Providing enterprise-grade Node.js development and 3D solutions</li>
                <li>Communicating with you about our services and projects</li>
                <li>Improving our website and service offerings</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Protecting against fraud and ensuring security</li>
                <li>Marketing and business development (with your consent)</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>With trusted service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>

            {/* Global Operations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Global Operations and Data Transfers</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a global company with offices in India, Dubai, California, Toronto, and Shenzhen, 
                we may transfer your information across international borders. We ensure that such transfers 
                comply with applicable data protection laws and implement appropriate safeguards.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                  <strong>Email:</strong> privacy@enterprisehero.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Global Offices:</strong> India (HQ), Dubai, California, Toronto, Shenzhen
                </p>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}