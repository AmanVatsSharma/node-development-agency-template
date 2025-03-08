"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import axios from 'axios';

// Import the BlogPost type
import { BlogPost } from '../../../types/blog';

interface BlogPostDetailResponse {
  post: BlogPost & {
    comments: Array<{
      id: string;
      content: string;
      name: string;
      website?: string;
      createdAt: string;
    }>;
  };
  relatedPosts: BlogPost[];
}

// Comment form state
interface CommentForm {
  name: string;
  email: string;
  website: string;
  content: string;
}

// Blog post page component
export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPostDetailResponse['post'] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Comment form state
  const [commentForm, setCommentForm] = useState<CommentForm>({
    name: '',
    email: '',
    website: '',
    content: '',
  });
  const [commentStatus, setCommentStatus] = useState<{
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitting: false,
    success: false,
    error: null,
  });
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Fetch post data based on slug
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get<BlogPostDetailResponse>(`/api/blog/${slug}`);
        setPost(response.data.post);
        setRelatedPosts(response.data.relatedPosts);
      } catch (err: any) {
        console.error('Error fetching blog post:', err);
        setError(err.response?.data?.error || 'Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [slug]);
  
  // Handle comment form input changes
  const handleCommentInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle comment submission
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!post) return;
    
    try {
      setCommentStatus({ submitting: true, success: false, error: null });
      
      // Validate form
      if (!commentForm.name || !commentForm.email || !commentForm.content) {
        setCommentStatus({
          submitting: false,
          success: false,
          error: 'Please fill out all required fields.',
        });
        return;
      }
      
      // Submit comment
      await axios.post('/api/blog/comments', {
        postId: post.id,
        name: commentForm.name,
        email: commentForm.email,
        website: commentForm.website,
        content: commentForm.content,
      });
      
      // Reset form
      setCommentForm({
        name: '',
        email: '',
        website: '',
        content: '',
      });
      
      setCommentStatus({
        submitting: false,
        success: true,
        error: null,
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setCommentStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (err: any) {
      console.error('Error submitting comment:', err);
      setCommentStatus({
        submitting: false,
        success: false,
        error: err.response?.data?.error || 'Failed to submit comment. Please try again.',
      });
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {error || "The blog post you're looking for doesn't exist or has been moved."}
          </p>
          <Link
            href="/pages/blog"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 flex items-center">
              <Link 
                href="/pages/blog" 
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <span className="mx-2 text-gray-500">|</span>
              <span className="text-blue-400">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 mr-3">
                {post.author.name.split(' ').map(name => name[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-gray-400">
                  {formatDate(post.publishedAt)} • {post.readTime} min read
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white opacity-30">Featured Image</h2>
              </div>
            </div>
            
            {/* Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </article>
            
            {/* Author Bio */}
            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg font-medium text-gray-700 dark:text-gray-300 mr-4">
                  {post.author.name.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.author.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {(post?.author as any)?.bio || `An experienced developer specializing in ${post.category} with a passion for creating innovative solutions for enterprise clients.`}
              </p>
            </div>
            
            {/* Comments Section */}
            <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Comments {post.comments && `(${post.comments.length})`}
              </h3>
              
              {/* Comment List */}
              {post.comments && post.comments.length > 0 ? (
                <div className="space-y-6 mb-10">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium mr-3">
                          {comment.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 dark:text-white">
                            {comment.name}
                            {comment.website && (
                              <a href={comment.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 ml-2 text-sm font-normal">
                                (website)
                              </a>
                            )}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {formatDate(comment.createdAt)}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {comment.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  No comments yet. Be the first to comment!
                </p>
              )}
              
              {/* Comment Form */}
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Leave a Comment
              </h4>
              
              {commentStatus.success && (
                <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6">
                  <p>Thank you for your comment! It has been submitted for review.</p>
                </div>
              )}
              
              {commentStatus.error && (
                <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6">
                  <p>{commentStatus.error}</p>
                </div>
              )}
              
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={commentForm.name}
                      onChange={handleCommentInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email * (will not be published)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={commentForm.email}
                      onChange={handleCommentInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Website (optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={commentForm.website}
                    onChange={handleCommentInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Comment *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={4}
                    value={commentForm.content}
                    onChange={handleCommentInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    disabled={commentStatus.submitting}
                  >
                    {commentStatus.submitting ? 'Submitting...' : 'Post Comment'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Share Links */}
            <div className="mt-8 flex items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium mr-4">Share:</span>
              <div className="flex space-x-2">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  {/* Post image */}
                  <div className="h-48 bg-blue-100 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold opacity-30">
                      {relatedPost.title.substring(0, 2)}
                    </div>
                  </div>
                  
                  {/* Post content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      <Link href={`/pages/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <Link 
                      href={`/pages/blog/${relatedPost.slug}`}
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Read article →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our expertise in {post.category} can help your business grow.
          </p>
          <Link 
            href="/pages/contact" 
            className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-full font-medium transition duration-300 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
} 