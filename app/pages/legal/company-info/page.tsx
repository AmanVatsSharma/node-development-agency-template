import type { Metadata } from "next";
import { buildPageMetadata } from "@/app/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Company Information | Enterprise Hero - Vedpragya Bharat Private Limited",
  description:
    "Complete company information for Vedpragya Bharat Private Limited (Enterprise Hero). Legal details, registration information, and global operations.",
  path: "/pages/legal/company-info",
  keywords: [
    "company information",
    "Vedpragya Bharat",
    "Enterprise Hero",
    "legal details",
    "registration",
    "Aman Kumar Sharma",
    "global offices",
  ],
});

export default function CompanyInfoPage() {
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
              Company <span className="text-blue-600">Information</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete legal and business information for Vedpragya Bharat Private Limited, operating as Enterprise Hero.
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Legal Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Legal Registration Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Company Information</h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Legal Name:</strong> Vedpragya Bharat Private Limited</p>
                    <p><strong>Brand Name:</strong> Enterprise Hero</p>
                    <p><strong>Company Type:</strong> Private Limited Company</p>
                    <p><strong>Incorporation Date:</strong> April 28, 2025</p>
                    <p><strong>Registration State:</strong> Haryana, India</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Registration Numbers</h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>CIN:</strong> U47912HR2025PTC131357</p>
                    <p><strong>GST:</strong> 06AALCV0051A1ZV</p>
                    <p><strong>Authorized Capital:</strong> ₹0.10 million</p>
                    <p><strong>Paid-up Capital:</strong> ₹0.10 million</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">Founder & CEO</h3>
                  <p className="text-lg font-semibold mb-2">Aman Kumar Sharma</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Visionary leader and tech entrepreneur who founded Vedpragya Bharat Private Limited 
                    with a mission to deliver enterprise-grade Node.js development solutions globally.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Enterprise Architecture</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Global Operations</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Digital Transformation</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Company Directors</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Aman Kumar Sharma</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Founder & Managing Director</p>
                    </div>
                    <div>
                      <p className="font-semibold">Surya Kant</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Operations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Global Operations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* India */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🇮🇳</span>
                    <h3 className="text-xl font-bold">India (Headquarters)</h3>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Gurugram:</strong> Main corporate office</p>
                    <p><strong>Noida:</strong> Development center</p>
                    <p><strong>Bangalore:</strong> Innovation hub</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">
                      CIN: U47912HR2025PTC131357
                    </p>
                  </div>
                </div>

                {/* Dubai */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🇦🇪</span>
                    <h3 className="text-xl font-bold">Dubai</h3>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Role:</strong> Middle East operations</p>
                    <p><strong>Focus:</strong> Regional business development</p>
                    <p><strong>Status:</strong> Second major office</p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-3">
                      Serving MENA region
                    </p>
                  </div>
                </div>

                {/* California */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🇺🇸</span>
                    <h3 className="text-xl font-bold">California</h3>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Role:</strong> Tech research & development</p>
                    <p><strong>Focus:</strong> Innovation and R&D</p>
                    <p><strong>Status:</strong> Technology hub</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">
                      Leading tech innovation
                    </p>
                  </div>
                </div>

                {/* Toronto */}
                <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🇨🇦</span>
                    <h3 className="text-xl font-bold">Toronto</h3>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Role:</strong> North American operations</p>
                    <p><strong>Focus:</strong> Regional business</p>
                    <p><strong>Status:</strong> Canada office</p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-3">
                      Serving North America
                    </p>
                  </div>
                </div>

                {/* Shenzhen */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 dark:from-yellow-900/20 dark:to-red-900/20 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">🇨🇳</span>
                    <h3 className="text-xl font-bold">Shenzhen</h3>
                  </div>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Role:</strong> Asia-Pacific center</p>
                    <p><strong>Focus:</strong> Regional operations</p>
                    <p><strong>Status:</strong> China office</p>
                    <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-3">
                      Serving Asia-Pacific
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Business Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Business Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Core Services</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Enterprise Node.js development</li>
                    <li>• 3D interactive experiences</li>
                    <li>• Microservices architecture</li>
                    <li>• API development and integration</li>
                    <li>• Digital transformation</li>
                    <li>• Cloud migration services</li>
                    <li>• DevOps automation</li>
                    <li>• Technical consulting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Client Base</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Fortune 500 companies</li>
                    <li>• Innovative startups</li>
                    <li>• Enterprise organizations</li>
                    <li>• Government agencies</li>
                    <li>• Educational institutions</li>
                    <li>• Healthcare organizations</li>
                    <li>• Financial services</li>
                    <li>• E-commerce platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Compliance & Certifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Compliance & Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Legal Compliance</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Registered under Companies Act, India</li>
                    <li>• GST compliant (06AALCV0051A1ZV)</li>
                    <li>• International business standards</li>
                    <li>• Data protection compliance</li>
                    <li>• Intellectual property protection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Enterprise-grade security</li>
                    <li>• 99.9% uptime guarantee</li>
                    <li>• ISO compliance standards</li>
                    <li>• Agile development methodology</li>
                    <li>• Continuous integration/deployment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Email:</strong> info@enterprisehero.com</p>
                    <p><strong>Website:</strong> www.enterprisehero.com</p>
                    <p><strong>Business Hours:</strong> 24/7 Global Support</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Legal & Compliance</h3>
                  <div className="space-y-2 text-gray-700 dark:text-gray-300">
                    <p><strong>Legal Email:</strong> legal@enterprisehero.com</p>
                    <p><strong>Privacy:</strong> privacy@enterprisehero.com</p>
                    <p><strong>Compliance:</strong> compliance@enterprisehero.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}