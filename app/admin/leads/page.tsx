/**
 * Comprehensive Leads Management Page
 * Full sales pipeline with contactStatus, Zoho CRM status, lead scores, quick-action buttons
 */

'use client';

import React, { useEffect, useState } from 'react';
import {
  Search,
  Download,
  Eye,
  Trash2,
  Phone,
  MessageCircle,
  FileText,
  Calendar,
  Mail,
  Building,
  RefreshCw,
  RotateCcw,
  ExternalLink,
  Flame,
  TrendingUp,
  Minus,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';

type ContactStatus = 'new' | 'contacted' | 'interested' | 'converted' | 'ignored' | 'fake';

type Lead = {
  id: string;
  tableSource: 'contact' | 'lead';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  source?: string;
  contactStatus: ContactStatus;
  contactNotes?: string;
  zohoStatus?: string;
  zohoLeadId?: string;
  leadScore?: number;
  qualificationLevel?: string;
  priority?: string;
  leadSource?: string;
  campaign?: string;
  conversionType?: 'form' | 'call' | 'whatsapp';
  createdAt: string;
  updatedAt: string;
};

const CONTACT_STATUS_CONFIG: Record<ContactStatus, { label: string; color: string; bg: string; border: string }> = {
  new:        { label: 'New',        color: 'text-blue-700 dark:text-blue-300',   bg: 'bg-blue-100 dark:bg-blue-900/30',   border: 'border-blue-300 dark:border-blue-700' },
  contacted:  { label: 'Contacted',  color: 'text-amber-700 dark:text-amber-300', bg: 'bg-amber-100 dark:bg-amber-900/30', border: 'border-amber-300 dark:border-amber-700' },
  interested: { label: 'Interested', color: 'text-purple-700 dark:text-purple-300', bg: 'bg-purple-100 dark:bg-purple-900/30', border: 'border-purple-300 dark:border-purple-700' },
  converted:  { label: 'Converted',  color: 'text-green-700 dark:text-green-300', bg: 'bg-green-100 dark:bg-green-900/30',  border: 'border-green-300 dark:border-green-700' },
  ignored:    { label: 'Ignored',    color: 'text-slate-500 dark:text-slate-400', bg: 'bg-slate-100 dark:bg-slate-800',    border: 'border-slate-300 dark:border-slate-600' },
  fake:       { label: 'Fake',       color: 'text-red-700 dark:text-red-300',    bg: 'bg-red-100 dark:bg-red-900/30',     border: 'border-red-300 dark:border-red-700' },
};

const ALL_STATUSES: ContactStatus[] = ['new', 'contacted', 'interested', 'converted', 'ignored', 'fake'];

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [viewingLead, setViewingLead] = useState<Lead | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [retryingId, setRetryingId] = useState<string | null>(null);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/leads');
      if (response.ok) {
        const data = await response.json();
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

  const updateLead = async (id: string, tableSource: string, updates: Partial<Lead>) => {
    setUpdatingId(id);
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, tableSource, ...updates }),
      });
      if (response.ok) {
        setLeads(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
        if (viewingLead?.id === id) setViewingLead(prev => prev ? { ...prev, ...updates } : null);
      } else {
        alert('Failed to update lead');
      }
    } catch (error) {
      console.error('[Leads Admin] Update error:', error);
      alert('Error updating lead');
    } finally {
      setUpdatingId(null);
    }
  };

  const retryZohoPush = async (leadId: string) => {
    setRetryingId(leadId);
    try {
      const response = await fetch('/api/admin/leads/retry-zoho', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId }),
      });
      const data = await response.json();
      if (response.ok) {
        await loadLeads();
        alert(`Successfully pushed to Zoho CRM! ID: ${data.zohoLeadId}`);
      } else {
        alert(`Retry failed: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('[Leads Admin] Retry Zoho error:', error);
      alert('Error retrying Zoho push');
    } finally {
      setRetryingId(null);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Delete this lead permanently?')) return;
    try {
      const response = await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' });
      if (response.ok) {
        setLeads(prev => prev.filter(l => l.id !== id));
        setViewingLead(null);
      } else {
        alert('Failed to delete lead');
      }
    } catch (error) {
      console.error('[Leads Admin] Delete error:', error);
      alert('Error deleting lead');
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Message', 'Service', 'Budget', 'Source', 'Contact Status', 'Zoho Status', 'Zoho Lead ID', 'Lead Score', 'Notes', 'Created At'];
    const rows = filteredLeads.map(lead => [
      lead.id, lead.name, lead.email, lead.phone || '', lead.company || '',
      lead.message || '', lead.service || '', lead.budget || '',
      lead.source || lead.leadSource || '', lead.contactStatus,
      lead.zohoStatus || '', lead.zohoLeadId || '',
      lead.leadScore?.toString() || '', lead.contactNotes || '',
      new Date(lead.createdAt).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch =
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone?.includes(searchTerm) ||
      lead.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.message?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.contactStatus === statusFilter;
    const matchesSource = sourceFilter === 'all' || (lead.source || lead.leadSource || '').includes(sourceFilter);
    return matchesSearch && matchesStatus && matchesSource;
  });

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.contactStatus === 'new').length,
    contacted: leads.filter(l => l.contactStatus === 'contacted').length,
    interested: leads.filter(l => l.contactStatus === 'interested').length,
    converted: leads.filter(l => l.contactStatus === 'converted').length,
    zohoPending: leads.filter(l => l.zohoStatus === 'pending').length,
    zohoFailed: leads.filter(l => l.zohoStatus === 'failed').length,
  };

  const getLeadScoreBadge = (score?: number, level?: string) => {
    if (!score) return null;
    if (score >= 80) return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 flex items-center gap-1"><Flame className="h-3 w-3" /> Hot {score}</Badge>;
    if (score >= 60) return <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Warm {score}</Badge>;
    return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 flex items-center gap-1"><Minus className="h-3 w-3" /> Cold {score}</Badge>;
  };

  const getZohoStatusBadge = (status?: string) => {
    if (!status) return null;
    if (status === 'pushed') return <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs flex items-center gap-1"><CheckCircle2 className="h-3 w-3" />CRM: Pushed</Badge>;
    if (status === 'failed') return <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-xs flex items-center gap-1"><XCircle className="h-3 w-3" />CRM: Failed</Badge>;
    return <Badge className="bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 text-xs flex items-center gap-1"><Clock className="h-3 w-3" />CRM: Pending</Badge>;
  };

  const getConversionIcon = (type?: string) => {
    if (type === 'call') return <Phone className="h-4 w-4" />;
    if (type === 'whatsapp') return <MessageCircle className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">All Leads</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Sales pipeline — manage and track every lead</p>
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
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {[
          { label: 'Total', value: stats.total, color: 'text-slate-900 dark:text-white' },
          { label: 'New', value: stats.new, color: 'text-blue-600' },
          { label: 'Contacted', value: stats.contacted, color: 'text-amber-600' },
          { label: 'Interested', value: stats.interested, color: 'text-purple-600' },
          { label: 'Converted', value: stats.converted, color: 'text-green-600' },
          { label: 'CRM Pending', value: stats.zohoPending, color: 'text-slate-500' },
          { label: 'CRM Failed', value: stats.zohoFailed, color: 'text-red-600' },
        ].map(s => (
          <Card key={s.label}>
            <CardContent className="pt-4 pb-4">
              <div className="text-center">
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-5 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
              className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="interested">Interested</option>
              <option value="converted">Converted</option>
              <option value="ignored">Ignored</option>
              <option value="fake">Fake</option>
            </select>
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
            >
              <option value="all">All Sources</option>
              <option value="business-website">Business Website</option>
              <option value="ai-voice-agents">AI Voice Agents</option>
              <option value="ai_agent">AI Chatbot</option>
              <option value="healthcare">Healthcare</option>
              <option value="next-js-development">Next.js Dev</option>
              <option value="whatsapp-business-api">WhatsApp API</option>
            </select>
          </div>
          <div className="mt-3">
            <Badge variant="secondary">{filteredLeads.length} {filteredLeads.length === 1 ? 'Lead' : 'Leads'}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Leads List */}
      {loading ? (
        <div className="text-center py-12">
          <RefreshCw className="h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto animate-spin" />
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading leads...</p>
        </div>
      ) : filteredLeads.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-slate-300 mb-3" />
            <p className="text-slate-500">No leads found matching your filters.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredLeads.map((lead) => {
            const statusCfg = CONTACT_STATUS_CONFIG[lead.contactStatus] || CONTACT_STATUS_CONFIG.new;
            const isUpdating = updatingId === lead.id;
            const isRetrying = retryingId === lead.id;

            return (
              <Card key={lead.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4 pb-4">
                  <div className="flex flex-col gap-3">
                    {/* Top row: name + badges + action buttons */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{lead.name}</h3>
                          {/* Pipeline status badge */}
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${statusCfg.color} ${statusCfg.bg} ${statusCfg.border}`}>
                            {statusCfg.label}
                          </span>
                          {getLeadScoreBadge(lead.leadScore, lead.qualificationLevel)}
                          {lead.zohoStatus && getZohoStatusBadge(lead.zohoStatus)}
                          {lead.source === 'ai_agent' && (
                            <Badge variant="outline" className="text-xs">AI Chat</Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" />{lead.email}</span>
                          {lead.phone && <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" />{lead.phone}</span>}
                          {lead.company && <span className="flex items-center gap-1"><Building className="h-3.5 w-3.5" />{lead.company}</span>}
                          <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(lead.createdAt).toLocaleDateString()}</span>
                          {(lead.source || lead.leadSource) && (
                            <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{lead.source || lead.leadSource}</span>
                          )}
                        </div>
                        {lead.message && (
                          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{lead.message}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Button variant="outline" size="sm" onClick={() => setViewingLead(lead)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => deleteLead(lead.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Quick-action pipeline status buttons */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs text-slate-400 mr-1">Pipeline:</span>
                      {ALL_STATUSES.map(s => {
                        const cfg = CONTACT_STATUS_CONFIG[s];
                        const isActive = lead.contactStatus === s;
                        return (
                          <button
                            key={s}
                            disabled={isUpdating}
                            onClick={() => !isActive && updateLead(lead.id, lead.tableSource, { contactStatus: s })}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all ${
                              isActive
                                ? `${cfg.color} ${cfg.bg} ${cfg.border} ring-1 ring-offset-1 ring-current`
                                : 'text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 bg-transparent cursor-pointer'
                            } ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            {cfg.label}
                          </button>
                        );
                      })}
                      {/* Zoho retry button */}
                      {lead.zohoStatus === 'failed' && (
                        <button
                          disabled={isRetrying}
                          onClick={() => retryZohoPush(lead.id)}
                          className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium border border-orange-300 text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400 hover:bg-orange-100 flex items-center gap-1 disabled:opacity-50"
                        >
                          <RotateCcw className={`h-3 w-3 ${isRetrying ? 'animate-spin' : ''}`} />
                          {isRetrying ? 'Retrying...' : 'Retry Zoho'}
                        </button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Lead Detail Modal */}
      {viewingLead && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="w-full max-w-2xl bg-white dark:bg-slate-900 my-4">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>Lead Details</span>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium border ${CONTACT_STATUS_CONFIG[viewingLead.contactStatus]?.color} ${CONTACT_STATUS_CONFIG[viewingLead.contactStatus]?.bg} ${CONTACT_STATUS_CONFIG[viewingLead.contactStatus]?.border}`}>
                  {CONTACT_STATUS_CONFIG[viewingLead.contactStatus]?.label}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[80vh] overflow-y-auto">
              {/* Contact info */}
              <div className="grid grid-cols-2 gap-4">
                <div><Label>Name</Label><p className="text-sm font-medium mt-1">{viewingLead.name}</p></div>
                <div><Label>Email</Label><p className="text-sm font-medium mt-1">{viewingLead.email}</p></div>
              </div>
              {(viewingLead.phone || viewingLead.company) && (
                <div className="grid grid-cols-2 gap-4">
                  {viewingLead.phone && <div><Label>Phone</Label><p className="text-sm font-medium mt-1">{viewingLead.phone}</p></div>}
                  {viewingLead.company && <div><Label>Company</Label><p className="text-sm font-medium mt-1">{viewingLead.company}</p></div>}
                </div>
              )}
              {viewingLead.message && (
                <div><Label>Message</Label><p className="text-sm mt-1 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">{viewingLead.message}</p></div>
              )}
              {(viewingLead.budget || viewingLead.service || viewingLead.timeline) && (
                <div className="grid grid-cols-3 gap-3">
                  {viewingLead.service && <div><Label>Service</Label><p className="text-sm font-medium mt-1">{viewingLead.service}</p></div>}
                  {viewingLead.budget && <div><Label>Budget</Label><p className="text-sm font-medium mt-1">{viewingLead.budget}</p></div>}
                  {viewingLead.timeline && <div><Label>Timeline</Label><p className="text-sm font-medium mt-1">{viewingLead.timeline}</p></div>}
                </div>
              )}

              {/* Metadata row */}
              <div className="flex flex-wrap gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                {(viewingLead.source || viewingLead.leadSource) && (
                  <div className="text-xs"><span className="text-slate-500">Source: </span><span className="font-medium">{viewingLead.source || viewingLead.leadSource}</span></div>
                )}
                {viewingLead.campaign && (
                  <div className="text-xs"><span className="text-slate-500">Campaign: </span><span className="font-medium">{viewingLead.campaign}</span></div>
                )}
                {viewingLead.leadScore && (
                  <div className="text-xs"><span className="text-slate-500">Lead Score: </span><span className="font-medium">{viewingLead.leadScore} ({viewingLead.qualificationLevel})</span></div>
                )}
                {viewingLead.zohoStatus && (
                  <div className="text-xs"><span className="text-slate-500">CRM Status: </span><span className="font-medium">{viewingLead.zohoStatus}</span></div>
                )}
                {viewingLead.zohoLeadId && (
                  <div className="text-xs"><span className="text-slate-500">Zoho ID: </span><span className="font-medium font-mono">{viewingLead.zohoLeadId}</span></div>
                )}
                {viewingLead.source === 'ai_agent' && viewingLead.campaign && (
                  <a href={`/admin/conversations?path=${encodeURIComponent(viewingLead.campaign)}`} target="_blank" className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" /> View AI Conversation
                  </a>
                )}
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea
                  id="notes"
                  value={viewingLead.contactNotes || ''}
                  onChange={(e) => setViewingLead({ ...viewingLead, contactNotes: e.target.value })}
                  placeholder="Add internal notes..."
                  rows={3}
                  className="mt-1"
                />
              </div>

              {/* Pipeline Status Selector */}
              <div>
                <Label>Pipeline Status</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {ALL_STATUSES.map(s => {
                    const cfg = CONTACT_STATUS_CONFIG[s];
                    const isActive = viewingLead.contactStatus === s;
                    return (
                      <button
                        key={s}
                        onClick={() => setViewingLead({ ...viewingLead, contactStatus: s })}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                          isActive ? `${cfg.color} ${cfg.bg} ${cfg.border} ring-2 ring-offset-1 ring-current` : 'text-slate-500 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                        }`}
                      >
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Zoho retry in modal */}
              {viewingLead.zohoStatus === 'failed' && (
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Zoho CRM push failed</p>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Click retry to re-push this lead to Zoho CRM</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => retryZohoPush(viewingLead.id)} disabled={retryingId === viewingLead.id}>
                    <RotateCcw className={`h-4 w-4 mr-2 ${retryingId === viewingLead.id ? 'animate-spin' : ''}`} />
                    Retry Zoho Push
                  </Button>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-3 border-t">
                <Button
                  className="flex-1"
                  onClick={() => updateLead(viewingLead.id, viewingLead.tableSource, { contactStatus: viewingLead.contactStatus, contactNotes: viewingLead.contactNotes })}
                  disabled={updatingId === viewingLead.id}
                >
                  {updatingId === viewingLead.id ? 'Saving...' : 'Save Changes'}
                </Button>
                <Button variant="outline" onClick={() => setViewingLead(null)}>Close</Button>
                <Button variant="destructive" onClick={() => deleteLead(viewingLead.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
