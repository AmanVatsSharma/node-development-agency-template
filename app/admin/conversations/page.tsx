'use client';

/**
 * Admin Conversations List Page
 * Displays AI agent conversation history with filters and stats
 */

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { MessageSquare, TrendingUp, BarChart3, Filter, RefreshCw, AlertCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Input } from '@/app/components/ui/input';

export default function AdminConversationsListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [conversations, setConversations] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  const [statusFilter, setStatusFilter] = useState<string>(searchParams.get('status') || '');
  const [leadFilter, setLeadFilter] = useState<string>(searchParams.get('lead') || '');
  const [query, setQuery] = useState<string>('');

  const buildQueryParams = useMemo(() => {
    const params = new URLSearchParams();
    params.set('limit', '50');
    if (statusFilter) params.set('status', statusFilter);
    if (leadFilter === 'leads') params.set('leadCaptured', 'true');
    if (leadFilter === 'no_leads') params.set('leadCaptured', 'false');
    return params.toString();
  }, [statusFilter, leadFilter]);

  useEffect(() => {
    loadConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, leadFilter]);

  const loadConversations = async () => {
    console.log('[Admin Conversations] Loading conversations with filters', { statusFilter, leadFilter });
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/ai-agent/conversations?${buildQueryParams}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error('[Admin Conversations] Failed to load conversations', data);
        throw new Error(data.error || 'Failed to load conversations');
      }
      console.log('[Admin Conversations] Conversations loaded', { count: data.conversations?.length || 0, stats: data.stats });
      setConversations(data.conversations || []);
      setStats(data.stats || {});
    } catch (err: any) {
      console.error('[Admin Conversations] Error:', err);
      setError(err.message || 'Failed to load conversations');
    } finally {
      setLoading(false);
    }
  };

  const filteredConversations = useMemo(() => {
    if (!query) return conversations;
    const q = query.toLowerCase();
    return conversations.filter((c) =>
      (c.pageTitle || '').toLowerCase().includes(q) ||
      (c.pagePath || '').toLowerCase().includes(q) ||
      (c.pageUrl || '').toLowerCase().includes(q) ||
      (c.sessionId || '').toLowerCase().includes(q)
    );
  }, [conversations, query]);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            Conversations
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">View and analyze AI agent conversations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={loadConversations}>
            <RefreshCw className="h-4 w-4 mr-2" /> Refresh
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Conversations Today</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats?.totalToday || 0}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Leads Captured</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">{stats?.conversionsToday || 0}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-1">{stats?.conversionRate || 0}%</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-600" /> Filters
          </CardTitle>
          <CardDescription>Filter by status and lead capture, or search</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="abandoned">Abandoned</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Lead Capture</label>
              <Select value={leadFilter} onValueChange={setLeadFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All conversations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All</SelectItem>
                  <SelectItem value="leads">Leads only</SelectItem>
                  <SelectItem value="no_leads">Without leads</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Search</label>
              <Input
                placeholder="Search by page title, path, URL, or session ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* List */}
      <Card>
        <CardHeader>
          <CardTitle>Conversation History</CardTitle>
          <CardDescription>Showing {filteredConversations.length} of {conversations.length} results</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-10 text-slate-500">
              <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
              Loading conversations...
            </div>
          ) : error ? (
            <div className="text-center py-10 text-red-600">
              <AlertCircle className="h-6 w-6 mx-auto mb-2" />
              {error}
            </div>
          ) : filteredConversations.length === 0 ? (
            <div className="text-center py-10 text-slate-500">
              <MessageSquare className="h-10 w-10 mx-auto mb-2 opacity-60" />
              No conversations found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-left text-slate-600 dark:text-slate-400 border-b">
                  <tr>
                    <th className="py-2 pr-4">Page</th>
                    <th className="py-2 pr-4">Status</th>
                    <th className="py-2 pr-4">Lead</th>
                    <th className="py-2 pr-4">Messages</th>
                    <th className="py-2 pr-4">Sentiment</th>
                    <th className="py-2 pr-4">Lead Score</th>
                    <th className="py-2 pr-4">Started</th>
                    <th className="py-2 pr-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredConversations.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="py-2 pr-4">
                        <div className="max-w-[340px]">
                          <div className="font-medium text-slate-900 dark:text-white truncate">{c.pageTitle || c.pagePath || 'Untitled Page'}</div>
                          <div className="text-xs text-slate-500 truncate">{c.pagePath || c.pageUrl}</div>
                        </div>
                      </td>
                      <td className="py-2 pr-4 capitalize">{c.status}</td>
                      <td className="py-2 pr-4">
                        {c.leadCaptured ? (
                          <span className="inline-flex items-center gap-1 text-green-600">
                            <CheckCircle2 className="h-4 w-4" /> Lead
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-slate-500">No</span>
                        )}
                      </td>
                      <td className="py-2 pr-4">{c.messageCount}</td>
                      <td className="py-2 pr-4">{typeof c.sentimentScore === 'number' ? c.sentimentScore.toFixed(2) : '-'}</td>
                      <td className="py-2 pr-4">{typeof c.leadScore === 'number' ? c.leadScore : '-'}</td>
                      <td className="py-2 pr-4 text-xs text-slate-500">{new Date(c.createdAt).toLocaleString()}</td>
                      <td className="py-2 pr-4 text-right">
                        <Link href={`/admin/conversations/${c.id}`} className="text-blue-600 hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
