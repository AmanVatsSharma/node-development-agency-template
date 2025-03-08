"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';

// Import the BlogPost type
import { BlogPost } from '../../types/blog';

// Categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'development', name: 'Development' },
  { id: '3d', name: '3D & Animation' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'devops', name: 'DevOps' },
  { id: 'cloud', name: 'Cloud' },
];

interface BlogPostResponse {
  posts: BlogPost[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasMore: boolean;
  };
}

export default function BlogPage() {
  // State for search query, current page, selected category
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogData, setBlogData] = useState<BlogPostResponse | null>(null);
  
  // Posts per page
  const postsPerPage = 6;
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Fetch blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Build API URL with query parameters
        let url = `/api/blog?page=${currentPage}&pageSize=${postsPerPage}`;
        
        if (selectedCategory !== 'all') {
          url += `&category=${selectedCategory}`;
        }
        
        if (searchQuery.trim()) {
          url += `&search=${encodeURIComponent(searchQuery.trim())}`;
        }
        
        const response = await axios.get<BlogPostResponse>(url);
        setBlogData(response.data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, [searchQuery, selectedCategory, currentPage, postsPerPage]);
  
  // Get featured posts for display in the featured section
  const featuredPosts = blogData?.posts.filter(post => post.featured).slice(0, 2) || [];
  
  // Paginate to a specific page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Go to next page
  const nextPage = () => {
    if (blogData && currentPage < blogData.pagination.totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-xl text-gray-300 mb-10">
              Expert insights, technical guides, and resources to help you build better digital experiences.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for topics..."
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
      
      {/* Featured Articles */}
      {featuredPosts.length > 0 && !searchQuery && selectedCategory === 'all' && currentPage === 1 && (
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-xl"
                >
                  {/* Post image */}
                  <div className="h-60 bg-blue-100 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-30">
                      {post.title.substring(0, 2)}
                    </div>
                  </div>
                  
                  {/* Post content */}
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-800 dark:text-gray-300 mr-3">
                        {post.author.name.split(' ').map(name => name[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {post.readTime} min read
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                      <Link href={`/pages/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-5">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/pages/blog/${post.slug}`}
                      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Read article
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Blog Posts */}
      <div className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Categories</h3>
              <ul className="space-y-2 mb-8">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {category.name}
                      {selectedCategory === category.id && (
                        <span className="float-right">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">Newsletter</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Subscribe to get the latest articles and resources delivered straight to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 mb-3 text-gray-700 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Status indicators */}
            {loading && (
              <div className="flex justify-center py-12">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-8">
                <p>{error}</p>
              </div>
            )}
            
            {/* Search results title */}
            {searchQuery && !loading && (
              <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                Search results for "{searchQuery}"
              </h2>
            )}
            
            {/* Category title */}
            {selectedCategory !== 'all' && !searchQuery && !loading && (
              <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
                {categories.find(c => c.id === selectedCategory)?.name} Articles
              </h2>
            )}
            
            {/* Results info */}
            {!loading && blogData && blogData.posts.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We couldn't find any articles matching your search criteria. Try different keywords or browse by category.
                </p>
              </div>
            ) : (
              <>
                {/* Posts grid */}
                {!loading && blogData && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {blogData.posts.map((post) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
                      >
                        {/* Post image */}
                        <div className="h-48 bg-blue-100 dark:bg-gray-800 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-30">
                            {post.title.substring(0, 2)}
                          </div>
                        </div>
                        
                        {/* Post content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {formatDate(post.publishedAt)}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                            <Link href={`/pages/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300 mr-2">
                                {post.author.name.split(' ').map(name => name[0]).join('')}
                              </div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {post.readTime} min read
                              </span>
                            </div>
                            
                            <Link 
                              href={`/pages/blog/${post.slug}`}
                              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                            >
                              Read more →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {/* Pagination */}
                {!loading && blogData && blogData.pagination.totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <nav className="flex space-x-2">
                      <button 
                        onClick={prevPage} 
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === 1 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        ← Prev
                      </button>
                      
                      {Array.from({ length: blogData.pagination.totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`px-3 py-1 rounded-md ${
                            currentPage === number
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {number}
                        </button>
                      ))}
                      
                      <button 
                        onClick={nextPage} 
                        disabled={currentPage === blogData.pagination.totalPages}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === blogData.pagination.totalPages 
                            ? 'text-gray-400 cursor-not-allowed' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        Next →
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help you build scalable, innovative solutions that drive business growth.
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