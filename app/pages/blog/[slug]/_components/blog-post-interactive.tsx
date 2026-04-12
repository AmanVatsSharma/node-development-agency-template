'use client';

import { useState } from 'react';
import axios from 'axios';

interface Comment {
  id: string;
  content: string;
  name: string;
  website?: string;
  createdAt: string;
}

interface CommentForm {
  name: string;
  email: string;
  website: string;
  content: string;
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function BlogPostShareButtons({ title }: { title: string }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="mt-8 flex items-center">
      <span className="text-gray-700 dark:text-gray-300 font-medium mr-4">Share:</span>
      <div className="flex space-x-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function BlogPostCommentForm({ postId, comments }: { postId: string; comments: Comment[] }) {
  const [commentForm, setCommentForm] = useState<CommentForm>({ name: '', email: '', website: '', content: '' });
  const [commentStatus, setCommentStatus] = useState<{ submitting: boolean; success: boolean; error: string | null }>({
    submitting: false,
    success: false,
    error: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommentForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.email || !commentForm.content) {
      setCommentStatus({ submitting: false, success: false, error: 'Please fill out all required fields.' });
      return;
    }
    try {
      setCommentStatus({ submitting: true, success: false, error: null });
      await axios.post('/api/blog/comments', {
        postId,
        name: commentForm.name,
        email: commentForm.email,
        website: commentForm.website,
        content: commentForm.content,
      });
      setCommentForm({ name: '', email: '', website: '', content: '' });
      setCommentStatus({ submitting: false, success: true, error: null });
      setTimeout(() => setCommentStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (err: unknown) {
      const msg = axios.isAxiosError<{ error?: string }>(err)
        ? err.response?.data?.error
        : null;
      setCommentStatus({ submitting: false, success: false, error: msg || 'Failed to submit comment. Please try again.' });
    }
  };

  return (
    <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Comments ({comments.length})
      </h3>

      {comments.length > 0 ? (
        <div className="space-y-6 mb-10">
          {comments.map((comment) => (
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
                  <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(comment.createdAt)}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 mb-8">No comments yet. Be the first to comment!</p>
      )}

      <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Leave a Comment</h4>

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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
            <input
              type="text" id="name" name="name" value={commentForm.name} onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email * (will not be published)</label>
            <input
              type="email" id="email" name="email" value={commentForm.email} onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website (optional)</label>
          <input
            type="url" id="website" name="website" value={commentForm.website} onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Comment *</label>
          <textarea
            id="content" name="content" rows={4} value={commentForm.content} onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
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
  );
}
