import Image from "next/image";

export default function AboutPage() {
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
              About <span className="text-blue-600">Enterprise Hero</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Founded by <strong className="text-blue-600">Aman Kumar Sharma</strong>, we are a globally recognized enterprise-grade Node.js development agency.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Operating across <strong>6 countries</strong> with offices in India, Dubai, California, Toronto, and Shenzhen, 
              we deliver world-class digital solutions to Fortune 500 companies and innovative startups worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                <strong>Mission:</strong> To revolutionize global businesses through enterprise-grade Node.js development and cutting-edge 3D solutions. 
                Founded by Aman Kumar Sharma, Vedpragya Bharat Private Limited operates as Enterprise Hero, delivering mission-critical 
                applications that power Fortune 500 companies across 6 countries.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                <strong>Vision:</strong> To be the world's leading Node.js development agency, recognized for our technical excellence, 
                global presence, and commitment to digital transformation. We envision a future where every enterprise leverages 
                our innovative solutions to achieve unprecedented growth and efficiency.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Legal Compliance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>CIN:</strong> U47912HR2025PTC131357 | <strong>GST:</strong> 06AALCV0051A1ZV<br/>
                  Registered in Haryana, India | Fully compliant with international business standards
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, from code quality to client communication. Our commitment to delivering premium solutions drives us to continuously improve and innovate.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in the power of collaboration, both within our team and with our clients. By working together, we create solutions that truly address business needs and exceed expectations.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Innovation is at the heart of what we do. We constantly explore new technologies and approaches to deliver cutting-edge solutions that help our clients stay ahead in their industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Global Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* India Offices */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">India Headquarters</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Gurugram (HQ):</strong> Main corporate office<br/>
                <strong>Noida:</strong> Development center<br/>
                <strong>Bangalore:</strong> Innovation hub
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                CIN: U47912HR2025PTC131357 | GST: 06AALCV0051A1ZV
              </p>
            </div>
            
            {/* International Offices */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">International Offices</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Dubai:</strong> Middle East operations<br/>
                <strong>California:</strong> Tech research & development<br/>
                <strong>Toronto:</strong> North American hub<br/>
                <strong>Shenzhen:</strong> Asia-Pacific center
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400">
                Serving clients across 6 countries
              </p>
            </div>
            
            {/* Leadership */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Founder & CEO:</strong> Aman Kumar Sharma<br/>
                <strong>Global Operations:</strong> 6 countries<br/>
                <strong>Team Size:</strong> 50+ professionals<br/>
                <strong>Experience:</strong> Enterprise-grade solutions
              </p>
              <p className="text-sm text-green-600 dark:text-green-400">
                Leading digital transformation worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Founder</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Aman Kumar Sharma</h3>
                    <p className="text-blue-200">Founder & CEO</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Visionary Leader & Tech Entrepreneur</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Aman Kumar Sharma founded Vedpragya Bharat Private Limited with a vision to create a globally recognized 
                    Node.js development agency that delivers enterprise-grade solutions to clients worldwide. Under his leadership, 
                    Enterprise Hero has expanded to 6 countries, serving Fortune 500 companies and innovative startups.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    His expertise in enterprise architecture, digital transformation, and global business operations has positioned 
                    Enterprise Hero as a trusted partner for mission-critical applications and cutting-edge 3D experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">Enterprise Architecture</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">Global Operations</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">Digital Transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Partner with Enterprise Hero</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Join Fortune 500 companies worldwide who trust <strong>Vedpragya Bharat Private Limited</strong> 
            for their enterprise-grade Node.js development and 3D solutions. 
            Our global team across <strong>6 countries</strong> is ready to transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 transform hover:scale-105">
              Contact Our Global Team
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 