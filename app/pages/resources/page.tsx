"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';

// Import resource type
import { Resource } from '../../types/blog';

// Resource type icons
const resourceTypeIcons: Record<Resource['type'], React.ReactNode> = {
  ebook: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  whitepaper: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  template: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  video: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  webinar: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
};

// Resource type colors
const resourceTypeColors: Record<Resource['type'], { bg: string; text: string }> = {
  ebook: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-800 dark:text-blue-300' },
  whitepaper: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-800 dark:text-purple-300' },
  template: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-800 dark:text-green-300' },
  video: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-800 dark:text-red-300' },
  webinar: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-800 dark:text-orange-300' }
};

interface ResourcesResponse {
  resources: Resource[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState<Resource['type'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resourcesData, setResourcesData] = useState<ResourcesResponse | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 9;
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Fetch resources
  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Build API URL with query parameters
        let url = `/api/resources?page=${page}&pageSize=${pageSize}`;
        
        if (selectedType !== 'all') {
          url += `&type=${selectedType}`;
        }
        
        if (searchQuery.trim()) {
          url += `&search=${encodeURIComponent(searchQuery.trim())}`;
        }
        
        const response = await axios.get<ResourcesResponse>(url);
        setResourcesData(response.data);
      } catch (err) {
        console.error('Error fetching resources:', err);
        setError('Failed to load resources. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchResources();
  }, [selectedType, searchQuery, page, pageSize]);
  
  // Get featured resources
  const featuredResources = resourcesData?.resources.filter(resource => resource.featured) || [];
  const shouldShowFeatured = selectedType === 'all' && !searchQuery.trim() && page === 1;
  
  // Handle newsletter signup
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null,
  });
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    try {
      setNewsletterStatus({ submitting: true, success: false, error: null });
      
      // In a real app, you would send the email to your API
      // await axios.post('/api/newsletter', { email });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setEmail('');
      setNewsletterStatus({
        submitting: false,
        success: true,
        error: null,
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setNewsletterStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (err: any) {
      setNewsletterStatus({
        submitting: false,
        success: false,
        error: err.response?.data?.error || 'Failed to subscribe. Please try again.',
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl text-gray-300 mb-10">
              Download free resources to help you build better solutions and stay ahead of the curve.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-gray-700 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 space-x-4">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              All Resources
            </button>
            
            {Object.keys(resourceTypeIcons).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as Resource['type'])}
                className={`px-4 py-2 rounded-full flex items-center whitespace-nowrap ${
                  selectedType === type
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="mr-2">
                  {resourceTypeIcons[type as Resource['type']]}
                </span>
                {type.charAt(0).toUpperCase() + type.slice(1)}s
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Loading state */}
      {loading && (
        <div className="flex justify-center py-12">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error message */}
      {error && (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
            <p>{error}</p>
          </div>
        </div>
      )}
      
      {/* Featured Resources */}
      {!loading && shouldShowFeatured && featuredResources.length > 0 && (
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Featured Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {featuredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-xl shadow-xl bg-white dark:bg-gray-900"
                >
                  {/* Background */}
                  <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-90"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col md:flex-row items-start gap-6">
                    {/* Resource Icon/Image */}
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm text-white">
                      {resourceTypeIcons[resource.type]}
                    </div>
                    
                    <div className="flex-1">
                      {/* Resource Type Badge */}
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white mb-3">
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </span>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {resource.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/80 mb-6">
                        {resource.description}
                      </p>
                      
                      {/* Download Button */}
                      <a 
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* All Resources */}
      <div className="py-16 container mx-auto px-4">
        {searchQuery && !loading && (
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Search results for "{searchQuery}"
          </h2>
        )}
        
        {selectedType !== 'all' && !searchQuery && !loading && (
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}s
          </h2>
        )}
        
        {/* No results message */}
        {!loading && resourcesData && resourcesData.resources.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">No resources found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We couldn't find any resources matching your criteria. Try different keywords or categories.
            </p>
          </div>
        ) : (
          <>
            {!loading && resourcesData && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {resourcesData.resources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-800"
                  >
                    {/* Resource Type Badge */}
                    <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${resourceTypeColors[resource.type].bg} ${resourceTypeColors[resource.type].text}`}>
                        <span className="mr-1.5">
                          {resourceTypeIcons[resource.type]}
                        </span>
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(resource.publishedAt)}
                      </span>
                    </div>
                    
                    {/* Resource Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                        {resource.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                        {resource.description}
                      </p>
                      
                      <a 
                        href={resource.downloadUrl}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {!loading && resourcesData && resourcesData.pagination && resourcesData.pagination.totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button 
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-md ${
                      page === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: resourcesData.pagination.totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => setPage(number)}
                      className={`px-4 py-2 rounded-md ${
                        page === number
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  
                  <button 
                    onClick={() => setPage(prev => Math.min(prev + 1, resourcesData.pagination.totalPages))}
                    disabled={page === resourcesData.pagination.totalPages}
                    className={`px-4 py-2 rounded-md ${
                      page === resourcesData.pagination.totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Newsletter Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to receive new resources, articles, and updates directly in your inbox.
            </p>
            
            {newsletterStatus.success && (
              <div className="mb-6 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg">
                <p>Thank you for subscribing to our newsletter!</p>
              </div>
            )}
            
            {newsletterStatus.error && (
              <div className="mb-6 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
                <p>{newsletterStatus.error}</p>
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg text-gray-700 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                disabled={newsletterStatus.submitting}
              >
                {newsletterStatus.submitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you build scalable, innovative solutions tailored to your specific needs.
          </p>
          <Link
            href="/pages/contact"
            className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium inline-block transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 