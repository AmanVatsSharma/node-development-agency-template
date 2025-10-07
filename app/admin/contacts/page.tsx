/**
 * Contact Submissions Management Page
 * 
 * View and manage contact form submissions
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Search,
  MessageSquare,
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  Filter,
  Eye,
  Trash2,
  Check,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  service?: string;
  budget?: string;
  timeline?: string;
  source?: string;
  status: 'pending' | 'contacted' | 'closed';
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export default function ContactsAdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [viewingSubmission, setViewingSubmission] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/contacts');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
      }
    } catch (error) {
      console.error('[Contacts] Error loading:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: ContactSubmission['status'], notes?: string) => {
    try {
      const response = await fetch('/api/admin/contacts', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status, notes }),
      });
      
      if (response.ok) {
        await loadSubmissions();
        setViewingSubmission(null);
      }
    } catch (error) {
      console.error('[Contacts] Error updating:', error);
      alert('Failed to update submission. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    try {
      const response = await fetch(`/api/admin/contacts?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await loadSubmissions();
        setViewingSubmission(null);
      }
    } catch (error) {
      console.error('[Contacts] Error deleting:', error);
      alert('Failed to delete submission. Please try again.');
    }
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusColors = {
    pending: 'warning',
    contacted: 'default',
    closed: 'secondary',
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-pink-600" />
          Contact Submissions
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          View and manage contact form submissions
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search submissions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
            <Badge variant="secondary">
              {filteredSubmissions.length} {filteredSubmissions.length === 1 ? 'Submission' : 'Submissions'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-pink-600 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading submissions...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredSubmissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {submission.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {submission.email}
                          </span>
                          {submission.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {submission.phone}
                            </span>
                          )}
                          {submission.company && (
                            <span className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              {submission.company}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(submission.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 line-clamp-2">
                          {submission.message}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-3">
                          <Badge variant={statusColors[submission.status] as any} className="text-xs">
                            {submission.status}
                          </Badge>
                          {submission.service && (
                            <Badge variant="outline" className="text-xs">
                              {submission.service}
                            </Badge>
                          )}
                          {submission.budget && (
                            <Badge variant="outline" className="text-xs">
                              Budget: {submission.budget}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setViewingSubmission(submission)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(submission.id)}
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

      {viewingSubmission && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Contact Submission Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="text-sm font-medium mt-1">{viewingSubmission.name}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-sm font-medium mt-1">{viewingSubmission.email}</p>
                </div>
              </div>

              {(viewingSubmission.company || viewingSubmission.phone) && (
                <div className="grid grid-cols-2 gap-4">
                  {viewingSubmission.company && (
                    <div>
                      <Label>Company</Label>
                      <p className="text-sm font-medium mt-1">{viewingSubmission.company}</p>
                    </div>
                  )}
                  {viewingSubmission.phone && (
                    <div>
                      <Label>Phone</Label>
                      <p className="text-sm font-medium mt-1">{viewingSubmission.phone}</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <Label>Message</Label>
                <p className="text-sm mt-1 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  {viewingSubmission.message}
                </p>
              </div>

              {(viewingSubmission.service || viewingSubmission.budget || viewingSubmission.timeline) && (
                <div className="grid grid-cols-3 gap-4">
                  {viewingSubmission.service && (
                    <div>
                      <Label>Service</Label>
                      <p className="text-sm font-medium mt-1">{viewingSubmission.service}</p>
                    </div>
                  )}
                  {viewingSubmission.budget && (
                    <div>
                      <Label>Budget</Label>
                      <p className="text-sm font-medium mt-1">{viewingSubmission.budget}</p>
                    </div>
                  )}
                  {viewingSubmission.timeline && (
                    <div>
                      <Label>Timeline</Label>
                      <p className="text-sm font-medium mt-1">{viewingSubmission.timeline}</p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={viewingSubmission.notes || ''}
                  onChange={(e) =>
                    setViewingSubmission({ ...viewingSubmission, notes: e.target.value })
                  }
                  placeholder="Add internal notes..."
                  rows={3}
                />
              </div>

              <div>
                <Label>Update Status</Label>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant={viewingSubmission.status === 'pending' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateStatus(viewingSubmission.id, 'pending', viewingSubmission.notes)}
                  >
                    Pending
                  </Button>
                  <Button
                    variant={viewingSubmission.status === 'contacted' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateStatus(viewingSubmission.id, 'contacted', viewingSubmission.notes)}
                  >
                    Contacted
                  </Button>
                  <Button
                    variant={viewingSubmission.status === 'closed' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateStatus(viewingSubmission.id, 'closed', viewingSubmission.notes)}
                  >
                    Closed
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setViewingSubmission(null)}
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
