/**
 * Comprehensive Leads Management Page
 * Shows ALL leads from ContactSubmission and Lead tables
 * Filter by source, type, status, search, export to CSV
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Search,
  Download,
  Filter,
  Eye,
  Trash2,
  Phone,
  MessageCircle,
  FileText,
  Calendar,
  Mail,
  Building,
  User,
  TrendingUp,
  Database,
  RefreshCw,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  source?: string;
  status: string;
  notes?: string;
  leadSource?: string;
  campaign?: string;
  conversionType?: 'form' | 'call' | 'whatsapp';
  createdAt: string;
  updatedAt: string;
};

export default function LeadsAdminPage() {
  console.log('[Leads Admin] Page loaded');

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [conversionFilter, setConversionFilter] = useState<string>('all');
  const [viewingLead, setViewingLead] = useState<Lead | null>(null);

  useEffect(() => {
    console.log('[Leads Admin] Loading all leads...');
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    try {
      console.log('[Leads Admin] Fetching from /api/admin/leads');
      const response = await fetch('/api/admin/leads');
      
      if (response.ok) {
        const data = await response.json();
        console.log('[Leads Admin] Loaded leads:', data.leads?.length || 0);
        setLeads(data.leads || []);
      } else {
        console.error('[Leads Admin] Failed to load leads:', response.status);
      }
    } catch (error) {
      console.error('[Leads Admin] Error loading leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLead = async (id: string, updates: Partial<Lead>) => {
    try {
      console.log('[Leads Admin] Updating lead:', id, updates);
      const response = await fetch('/api/admin/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      });

      if (response.ok) {
        console.log('[Leads Admin] Lead updated successfully');
        await loadLeads();
        setViewingLead(null);
      } else {
        console.error('[Leads Admin] Update failed:', response.status);
        alert('Failed to update lead');
      }
    } catch (error) {
      console.error('[Leads Admin] Update error:', error);
      alert('Error updating lead');
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead permanently?')) return;

    try {
      console.log('[Leads Admin] Deleting lead:', id);
      const response = await fetch(`/api/admin/leads?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('[Leads Admin] Lead deleted');
        await loadLeads();
        setViewingLead(null);
      } else {
        console.error('[Leads Admin] Delete failed:', response.status);
        alert('Failed to delete lead');
      }
    } catch (error) {
      console.error('[Leads Admin] Delete error:', error);
      alert('Error deleting lead');
    }
  };

  const exportToCSV = () => {
    console.log('[Leads Admin] Exporting to CSV...');
    
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Message', 'Service', 'Budget', 'Source', 'Conversion Type', 'Status', 'Created At'];
    const rows = filteredLeads.map(lead => [
      lead.id,
      lead.name,
      lead.email,
      lead.phone || '',
      lead.company || '',
      lead.message || '',
      lead.service || '',
      lead.budget || '',
      lead.source || lead.leadSource || '',
      lead.conversionType || '',
      lead.status,
      new Date(lead.createdAt).toLocaleString(),
    ]);

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    console.log('[Leads Admin] CSV export complete:', filteredLeads.length, 'leads');
  };

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone?.includes(searchTerm) ||
      lead.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesSource = sourceFilter === 'all' || (lead.source || lead.leadSource || '').includes(sourceFilter);
    const matchesConversion = conversionFilter === 'all' || lead.conversionType === conversionFilter;

    return matchesSearch && matchesStatus && matchesSource && matchesConversion;
  });

  // Stats
  const stats = {
    total: leads.length,
    pending: leads.filter(l => l.status === 'pending').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    formSubmits: leads.filter(l => l.conversionType === 'form').length,
    callClicks: leads.filter(l => l.conversionType === 'call').length,
    whatsappClicks: leads.filter(l => l.conversionType === 'whatsapp').length,
  };

  const getConversionIcon = (type?: string) => {
    switch (type) {
      case 'call': return <Phone className="h-4 w-4" />;
      case 'whatsapp': return <MessageCircle className="h-4 w-4" />;
      case 'form': return <FileText className="h-4 w-4" />;
      default: return <Database className="h-4 w-4" />;
    }
  };

  const getConversionColor = (type?: string) => {
    switch (type) {
      case 'call': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
      case 'whatsapp': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
      case 'form': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Database className="h-8 w-8 text-blue-600" />
            All Leads
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Comprehensive view of all leads from all sources
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={loadLeads} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button onClick={exportToCSV} disabled={filteredLeads.length === 0}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Total Leads</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{stats.contacted}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Contacted</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{stats.formSubmits}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Forms</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{stats.callClicks}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Calls</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{stats.whatsappClicks}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">WhatsApp</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search leads..."
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
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="all">All Sources</option>
              <option value="business-website">Business Website</option>
              <option value="ai-voice-agents">AI Voice Agents</option>
              <option value="next-js-development">Next.js Dev</option>
              <option value="reactjs-development">React Dev</option>
              <option value="whatsapp-business-api">WhatsApp API</option>
              <option value="ai-chatbot-development">AI Chatbot</option>
            </select>
            <select
              value={conversionFilter}
              onChange={(e) => setConversionFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
            >
              <option value="all">All Types</option>
              <option value="form">Form Submit</option>
              <option value="call">Call Click</option>
              <option value="whatsapp">WhatsApp Click</option>
            </select>
          </div>
          <div className="mt-3">
            <Badge variant="secondary">
              {filteredLeads.length} {filteredLeads.length === 1 ? 'Lead' : 'Leads'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      {loading ? (
        <div className="text-center py-12">
          <RefreshCw className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto animate-spin" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading leads...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${getConversionColor(lead.conversionType)}`}>
                    {getConversionIcon(lead.conversionType)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {lead.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {lead.email}
                          </span>
                          {lead.phone && (
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              {lead.phone}
                            </span>
                          )}
                          {lead.company && (
                            <span className="flex items-center gap-1">
                              <Building className="h-4 w-4" />
                              {lead.company}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(lead.createdAt).toLocaleString()}
                          </span>
                        </div>
                        {lead.message && (
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 line-clamp-2">
                            {lead.message}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-2 mt-3">
                          <Badge variant={lead.status === 'pending' ? 'default' : 'secondary'}>
                            {lead.status}
                          </Badge>
                          {lead.conversionType && (
                            <Badge variant="outline">
                              {lead.conversionType}
                            </Badge>
                          )}
                          {lead.source && (
                            <Badge variant="outline">
                              {lead.source}
                            </Badge>
                          )}
                          {lead.service && (
                            <Badge variant="outline">
                              {lead.service}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={() => setViewingLead(lead)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => deleteLead(lead.id)}>
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

      {/* View/Edit Modal */}
      {viewingLead && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle>Lead Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="text-sm font-medium mt-1">{viewingLead.name}</p>
                </div>
                <div>
                  <Label>Email</Label>
                  <p className="text-sm font-medium mt-1">{viewingLead.email}</p>
                </div>
              </div>

              {(viewingLead.phone || viewingLead.company) && (
                <div className="grid grid-cols-2 gap-4">
                  {viewingLead.phone && (
                    <div>
                      <Label>Phone</Label>
                      <p className="text-sm font-medium mt-1">{viewingLead.phone}</p>
                    </div>
                  )}
                  {viewingLead.company && (
                    <div>
                      <Label>Company</Label>
                      <p className="text-sm font-medium mt-1">{viewingLead.company}</p>
                    </div>
                  )}
                </div>
              )}

              {viewingLead.message && (
                <div>
                  <Label>Message</Label>
                  <p className="text-sm mt-1 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    {viewingLead.message}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {viewingLead.source && (
                  <div>
                    <Label>Source</Label>
                    <p className="text-sm font-medium mt-1">{viewingLead.source}</p>
                  </div>
                )}
                {viewingLead.conversionType && (
                  <div>
                    <Label>Conversion Type</Label>
                    <p className="text-sm font-medium mt-1">{viewingLead.conversionType}</p>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={viewingLead.notes || ''}
                  onChange={(e) =>
                    setViewingLead({ ...viewingLead, notes: e.target.value })
                  }
                  placeholder="Add internal notes..."
                  rows={3}
                />
              </div>

              <div>
                <Label>Update Status</Label>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant={viewingLead.status === 'pending' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateLead(viewingLead.id, { status: 'pending', notes: viewingLead.notes })}
                  >
                    Pending
                  </Button>
                  <Button
                    variant={viewingLead.status === 'contacted' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateLead(viewingLead.id, { status: 'contacted', notes: viewingLead.notes })}
                  >
                    Contacted
                  </Button>
                  <Button
                    variant={viewingLead.status === 'closed' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateLead(viewingLead.id, { status: 'closed', notes: viewingLead.notes })}
                  >
                    Closed
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t">
                <Button variant="outline" className="flex-1" onClick={() => setViewingLead(null)}>
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