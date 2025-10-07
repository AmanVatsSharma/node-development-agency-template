/**
 * Services Management Page
 * 
 * Enterprise-grade CRUD interface for managing service offerings
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
  Wrench,
  Eye,
  EyeOff,
  ArrowUpDown,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';

type Service = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  icon: string;
  imageUrl?: string;
  order: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export default function ServicesAdminPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [creating, setCreating] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data.services || []);
      }
    } catch (error) {
      console.error('[Services] Error loading:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (service: Service) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/services', {
        method: service.id && service.id !== 'new' ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(service),
      });
      
      if (response.ok) {
        await loadServices();
        setEditingService(null);
        setCreating(false);
      }
    } catch (error) {
      console.error('[Services] Error saving:', error);
      alert('Failed to save service. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    try {
      const response = await fetch(`/api/admin/services?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadServices();
      }
    } catch (error) {
      console.error('[Services] Error deleting:', error);
      alert('Failed to delete service. Please try again.');
    }
  };

  const handleCreate = () => {
    setCreating(true);
    setEditingService({
      id: 'new',
      title: '',
      slug: '',
      summary: '',
      description: '',
      icon: 'Wrench',
      imageUrl: '',
      order: services.length,
      featured: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Wrench className="h-8 w-8 text-orange-600" />
            Services Management
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage your service offerings and descriptions
          </p>
        </div>
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Service
        </Button>
      </div>

      {/* Search & Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Badge variant="secondary">
              {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Services List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading services...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Wrench className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {service.summary}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <Badge variant="secondary" className="text-xs">
                            Order: {service.order}
                          </Badge>
                          {service.featured && (
                            <Badge variant="default" className="text-xs flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            /{service.slug}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingService(service)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(service.id)}
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
      {editingService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {creating ? 'Create New Service' : 'Edit Service'}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingService(null);
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
                  value={editingService.title}
                  onChange={(e) =>
                    setEditingService({ ...editingService, title: e.target.value })
                  }
                  placeholder="Web Development Services"
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={editingService.slug}
                  onChange={(e) =>
                    setEditingService({ ...editingService, slug: e.target.value })
                  }
                  placeholder="web-development"
                />
              </div>

              <div>
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  value={editingService.summary}
                  onChange={(e) =>
                    setEditingService({ ...editingService, summary: e.target.value })
                  }
                  placeholder="Brief summary of the service..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingService.description}
                  onChange={(e) =>
                    setEditingService({ ...editingService, description: e.target.value })
                  }
                  placeholder="Full description of the service..."
                  rows={6}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="icon">Icon Name</Label>
                  <Input
                    id="icon"
                    value={editingService.icon}
                    onChange={(e) =>
                      setEditingService({ ...editingService, icon: e.target.value })
                    }
                    placeholder="Wrench"
                  />
                </div>

                <div>
                  <Label htmlFor="order">Display Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={editingService.order}
                    onChange={(e) =>
                      setEditingService({ ...editingService, order: parseInt(e.target.value) || 0 })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="imageUrl">Image URL (Optional)</Label>
                <Input
                  id="imageUrl"
                  value={editingService.imageUrl || ''}
                  onChange={(e) =>
                    setEditingService({ ...editingService, imageUrl: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={editingService.featured}
                  onChange={(e) =>
                    setEditingService({ ...editingService, featured: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-slate-300"
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Featured Service
                </Label>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Button
                  onClick={() => handleSave(editingService)}
                  disabled={saving}
                  className="flex-1"
                >
                  {saving ? 'Saving...' : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Service
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingService(null);
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
