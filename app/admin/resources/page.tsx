/**
 * Resources Management Page
 * 
 * Manage downloadable resources (ebooks, whitepapers, templates, etc.)
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
  BookOpen,
  Download,
  FileText,
  Video,
  FileCode,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';

type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'ebook' | 'whitepaper' | 'template' | 'video' | 'webinar';
  downloadUrl: string;
  imageUrl: string;
  publishedAt: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
};

const resourceTypes = [
  { value: 'ebook', label: 'E-book', icon: BookOpen },
  { value: 'whitepaper', label: 'Whitepaper', icon: FileText },
  { value: 'template', label: 'Template', icon: FileCode },
  { value: 'video', label: 'Video', icon: Video },
  { value: 'webinar', label: 'Webinar', icon: Video },
];

export default function ResourcesAdminPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadResources();
  }, []);

  const loadResources = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/resources');
      if (response.ok) {
        const data = await response.json();
        setResources(data.resources || []);
      }
    } catch (error) {
      console.error('[Resources] Error loading:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (resource: Resource) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/resources', {
        method: resource.id && resource.id !== 'new' ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resource),
      });
      
      if (response.ok) {
        await loadResources();
        setEditingResource(null);
        setCreating(false);
      }
    } catch (error) {
      console.error('[Resources] Error saving:', error);
      alert('Failed to save resource. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;
    
    try {
      const response = await fetch(`/api/admin/resources?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadResources();
      }
    } catch (error) {
      console.error('[Resources] Error deleting:', error);
      alert('Failed to delete resource. Please try again.');
    }
  };

  const handleCreate = () => {
    setCreating(true);
    setEditingResource({
      id: 'new',
      title: '',
      description: '',
      type: 'ebook',
      downloadUrl: '',
      imageUrl: '',
      publishedAt: new Date().toISOString().split('T')[0],
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type: string) => {
    const typeObj = resourceTypes.find((t) => t.value === type);
    return typeObj ? typeObj.icon : BookOpen;
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-green-600" />
            Resources Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage downloadable content and learning materials
          </p>
        </div>
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Resource
        </Button>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="all">All Types</option>
              {resourceTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <Badge variant="secondary">
              {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Resources Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading resources...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource) => {
            const TypeIcon = getTypeIcon(resource.type);
            return (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <TypeIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
                          {resource.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {new Date(resource.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {resource.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {resourceTypes.find((t) => t.value === resource.type)?.label}
                      </Badge>
                      {resource.featured && (
                        <Badge variant="default" className="text-xs flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setEditingResource(resource)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(resource.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Edit/Create Modal */}
      {editingResource && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {creating ? 'Create New Resource' : 'Edit Resource'}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingResource(null);
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
                  value={editingResource.title}
                  onChange={(e) =>
                    setEditingResource({ ...editingResource, title: e.target.value })
                  }
                  placeholder="Enterprise Node.js Architecture Guide"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingResource.description}
                  onChange={(e) =>
                    setEditingResource({ ...editingResource, description: e.target.value })
                  }
                  placeholder="Comprehensive guide to building scalable Node.js applications..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="type">Resource Type</Label>
                  <select
                    id="type"
                    value={editingResource.type}
                    onChange={(e) =>
                      setEditingResource({
                        ...editingResource,
                        type: e.target.value as Resource['type'],
                      })
                    }
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900"
                  >
                    {resourceTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="publishedAt">Published Date</Label>
                  <Input
                    id="publishedAt"
                    type="date"
                    value={editingResource.publishedAt}
                    onChange={(e) =>
                      setEditingResource({ ...editingResource, publishedAt: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="downloadUrl">Download URL</Label>
                <Input
                  id="downloadUrl"
                  value={editingResource.downloadUrl}
                  onChange={(e) =>
                    setEditingResource({ ...editingResource, downloadUrl: e.target.value })
                  }
                  placeholder="/resources/guide.pdf or https://..."
                />
              </div>

              <div>
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  value={editingResource.imageUrl}
                  onChange={(e) =>
                    setEditingResource({ ...editingResource, imageUrl: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={editingResource.featured}
                  onChange={(e) =>
                    setEditingResource({ ...editingResource, featured: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-slate-300"
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured Resource
                </Label>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Button
                  onClick={() => handleSave(editingResource)}
                  disabled={saving}
                  className="flex-1"
                >
                  {saving ? 'Saving...' : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Resource
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingResource(null);
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
