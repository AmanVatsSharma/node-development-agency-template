/**
 * Blog Management Page
 * 
 * Manage blog posts with full CRUD operations
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Star,
  Save,
  X,
  FileText,
  User,
  Calendar,
  Tag,
  Eye,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};

type Author = {
  id: string;
  name: string;
  title: string;
};

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [postsRes, authorsRes] = await Promise.all([
        fetch('/api/admin/blog'),
        fetch('/api/admin/blog/authors'),
      ]);
      
      if (postsRes.ok) {
        const postsData = await postsRes.json();
        setPosts(postsData.posts || []);
      }
      
      if (authorsRes.ok) {
        const authorsData = await authorsRes.json();
        setAuthors(authorsData.authors || []);
      }
    } catch (error) {
      console.error('[Blog] Error loading:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (post: BlogPost) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/blog', {
        method: post.id && post.id !== 'new' ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      });
      
      if (response.ok) {
        await loadData();
        setEditingPost(null);
        setCreating(false);
      }
    } catch (error) {
      console.error('[Blog] Error saving:', error);
      alert('Failed to save blog post. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    
    try {
      const response = await fetch(`/api/admin/blog?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadData();
      }
    } catch (error) {
      console.error('[Blog] Error deleting:', error);
      alert('Failed to delete blog post. Please try again.');
    }
  };

  const handleCreate = () => {
    setCreating(true);
    setEditingPost({
      id: 'new',
      slug: '',
      title: '',
      excerpt: '',
      content: '',
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: 5,
      category: 'Development',
      tags: [],
      imageUrl: '',
      featured: false,
      authorId: authors[0]?.id || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <FileText className="h-8 w-8 text-blue-600" />
            Blog Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Create and manage blog posts and articles
          </p>
        </div>
        <Button onClick={handleCreate} className="gap-2" disabled={authors.length === 0}>
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Badge variant="secondary">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'Post' : 'Posts'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading posts...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {post.imageUrl && (
                    <div className="w-32 h-32 bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-3">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge variant="default" className="text-xs flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.readTime} min
                          </Badge>
                          <Badge variant="outline" className="text-xs flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </Badge>
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingPost(post)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Edit/Create Modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="w-full max-w-4xl my-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {creating ? 'Create New Blog Post' : 'Edit Blog Post'}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingPost(null);
                    setCreating(false);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editingPost.title}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, title: e.target.value })
                  }
                  placeholder="How to Build Scalable Applications"
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={editingPost.slug}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, slug: e.target.value })
                  }
                  placeholder="build-scalable-applications"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={editingPost.excerpt}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, excerpt: e.target.value })
                  }
                  placeholder="Brief summary..."
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="content">Content (Markdown supported)</Label>
                <Textarea
                  id="content"
                  value={editingPost.content}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, content: e.target.value })
                  }
                  placeholder="Full article content..."
                  rows={10}
                  className="font-mono text-sm"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={editingPost.category}
                    onChange={(e) =>
                      setEditingPost({ ...editingPost, category: e.target.value })
                    }
                    placeholder="Development"
                  />
                </div>
                <div>
                  <Label htmlFor="readTime">Read Time (minutes)</Label>
                  <Input
                    id="readTime"
                    type="number"
                    value={editingPost.readTime}
                    onChange={(e) =>
                      setEditingPost({ ...editingPost, readTime: parseInt(e.target.value) || 5 })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="publishedAt">Publish Date</Label>
                  <Input
                    id="publishedAt"
                    type="date"
                    value={editingPost.publishedAt}
                    onChange={(e) =>
                      setEditingPost({ ...editingPost, publishedAt: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={editingPost.tags.join(', ')}
                  onChange={(e) =>
                    setEditingPost({
                      ...editingPost,
                      tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                    })
                  }
                  placeholder="React, Node.js, DevOps"
                />
              </div>

              <div>
                <Label htmlFor="imageUrl">Featured Image URL</Label>
                <Input
                  id="imageUrl"
                  value={editingPost.imageUrl}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, imageUrl: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label htmlFor="authorId">Author</Label>
                <select
                  id="authorId"
                  value={editingPost.authorId}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, authorId: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900"
                >
                  {authors.map((author) => (
                    <option key={author.id} value={author.id}>
                      {author.name} - {author.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={editingPost.featured}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, featured: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-slate-300"
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured Post
                </Label>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Button
                  onClick={() => handleSave(editingPost)}
                  disabled={saving}
                  className="flex-1"
                >
                  {saving ? 'Saving...' : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Post
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingPost(null);
                    setCreating(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
