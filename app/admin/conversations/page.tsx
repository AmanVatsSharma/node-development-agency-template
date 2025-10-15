'use client';

/**
 * Admin Conversations List Page
 * Displays AI agent conversation history with filters and stats
 */

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { MessageSquare, TrendingUp, BarChart3, Filter, RefreshCw, AlertCircle, CheckCircle2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Input } from '@/app/components/ui/input';
import { Separator } from '@/app/components/ui/separator';

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
  const [limit, setLimit] = useState<number>(parseInt(searchParams.get('limit') || '50'));

  // Selection + detail state for split-view
  const initialSelected = searchParams.get('id') || null;
  const [selectedId, setSelectedId] = useState<string | null>(initialSelected);
  const [selectedLoading, setSelectedLoading] = useState(false);
  const [selectedError, setSelectedError] = useState<string | null>(null);
  const [selectedConversation, setSelectedConversation] = useState<any | null>(null);

  const buildQueryParams = useMemo(() => {
    const params = new URLSearchParams();
    params.set('limit', String(limit));
    if (statusFilter) params.set('status', statusFilter);
    if (leadFilter === 'leads') params.set('leadCaptured', 'true');
    if (leadFilter === 'no_leads') params.set('leadCaptured', 'false');
    return params.toString();
  }, [statusFilter, leadFilter, limit]);

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

  const pushQueryToUrl = useCallback((nextSelectedId: string | null) => {
    const params = new URLSearchParams();
    if (statusFilter) params.set('status', statusFilter);
    if (leadFilter) params.set('lead', leadFilter);
    if (limit && limit !== 50) params.set('limit', String(limit));
    if (nextSelectedId) params.set('id', nextSelectedId);
    const qs = params.toString();
    const next = qs ? `/admin/conversations?${qs}` : '/admin/conversations';
    router.replace(next);
  }, [router, statusFilter, leadFilter, limit]);

  const loadSelectedConversation = useCallback(async (id: string) => {
    console.log('[Admin Conversations] Loading conversation detail', { id });
    setSelectedLoading(true);
    setSelectedError(null);
    try {
      const res = await fetch(`/api/ai-agent/conversations/${id}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to load conversation');
      }
      setSelectedConversation(data.conversation);
    } catch (err: any) {
      console.error('[Admin Conversations] Failed to load detail', err);
      setSelectedError(err.message || 'Failed to load conversation');
      setSelectedConversation(null);
    } finally {
      setSelectedLoading(false);
    }
  }, []);

  // When conversations load, default select
  useEffect(() => {
    if (!selectedId && conversations.length > 0) {
      const firstId = conversations[0].id;
      setSelectedId(firstId);
      pushQueryToUrl(firstId);
      loadSelectedConversation(firstId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations]);

  // When selectedId changes explicitly (via click), load details and sync URL
  useEffect(() => {
    if (selectedId) {
      pushQueryToUrl(selectedId);
      loadSelectedConversation(selectedId);
    }
  }, [selectedId, pushQueryToUrl, loadSelectedConversation]);

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

  const onSelectRow = (id: string) => {
    console.log('[Admin Conversations] Selecting conversation', { id });
    setSelectedId(id);
  };

  const selectedIndex = filteredConversations.findIndex((c) => c.id === selectedId);
  const selectPrev = () => {
    if (selectedIndex > 0) setSelectedId(filteredConversations[selectedIndex - 1].id);
  };
  const selectNext = () => {
    if (selectedIndex >= 0 && selectedIndex < filteredConversations.length - 1) setSelectedId(filteredConversations[selectedIndex + 1].id);
  };

  // Keyboard navigation (ArrowUp/Down)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectPrev();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectNext();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, filteredConversations]);

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
          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-slate-500">Showing first {limit} results</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => { setLimit((l) => l + 50); }}>
                Load more
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Split view: List (left) + Detail (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversation History</CardTitle>
            <CardDescription>Showing {filteredConversations.length} of {conversations.length}</CardDescription>
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
              <div className="max-h-[70vh] overflow-auto">
                <ul className="space-y-2">
                  {filteredConversations.map((c) => {
                    const isSelected = c.id === selectedId;
                    return (
                      <li key={c.id}>
                        <button
                          onClick={() => onSelectRow(c.id)}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            isSelected
                              ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20'
                              : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                          }`}
                          aria-selected={isSelected}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="min-w-0">
                              <div className="font-medium text-slate-900 dark:text-white truncate">
                                {c.pageTitle || c.pagePath || 'Untitled Page'}
                              </div>
                              <div className="text-xs text-slate-500 truncate">{c.pagePath || c.pageUrl}</div>
                              <div className="mt-1 text-xs text-slate-500">
                                <span className="capitalize">{c.status}</span>
                                {' • '}{c.messageCount} messages
                                {c.leadCaptured && ' • ✅ Lead'}
                              </div>
                            </div>
                            <div className="text-[11px] text-slate-500 whitespace-nowrap">
                              {new Date(c.createdAt).toLocaleString()}
                            </div>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div className="mt-3 flex justify-center">
              <Link href={selectedId ? `/admin/conversations/${selectedId}` : '#'} className={`text-xs inline-flex items-center gap-1 ${selectedId ? 'text-blue-600' : 'text-slate-400 pointer-events-none'}`}>
                Open selected in new page <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Detail panel */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">Conversation Detail</CardTitle>
              <CardDescription>{selectedId ? `ID: ${selectedId}` : 'Select a conversation to view details'}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={selectPrev} disabled={selectedIndex <= 0}>
                <ChevronLeft className="h-4 w-4" /> Prev
              </Button>
              <Button variant="outline" size="sm" onClick={selectNext} disabled={selectedIndex < 0 || selectedIndex >= filteredConversations.length - 1}>
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {!selectedId ? (
              <div className="text-center py-10 text-slate-500">Select a conversation on the left</div>
            ) : selectedLoading ? (
              <div className="text-center py-10 text-slate-500">
                <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
                Loading conversation...
              </div>
            ) : selectedError ? (
              <div className="text-center py-10 text-red-600">
                <AlertCircle className="h-6 w-6 mx-auto mb-2" />
                {selectedError}
              </div>
            ) : !selectedConversation ? (
              <div className="text-center py-10 text-slate-500">No data</div>
            ) : (
              <div className="space-y-6">
                {/* Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="p-3 rounded border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-600">Status</div>
                    <div className="font-medium capitalize">{selectedConversation.status}</div>
                  </div>
                  <div className="p-3 rounded border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-600">Lead Captured</div>
                    <div className="font-medium">{selectedConversation.leadCaptured ? 'Yes' : 'No'}</div>
                  </div>
                  <div className="p-3 rounded border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-600">Messages</div>
                    <div className="font-medium">{selectedConversation.messageCount}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-600">Page</div>
                    <div className="font-medium truncate">{selectedConversation.pageTitle || selectedConversation.pagePath || 'Untitled Page'}</div>
                    <div className="text-xs text-slate-500 truncate">{selectedConversation.pagePath || selectedConversation.pageUrl}</div>
                  </div>
                  <div className="p-3 rounded border border-slate-200 dark:border-slate-800">
                    <div className="text-slate-600">Session</div>
                    <div className="font-medium truncate">{selectedConversation.sessionId}</div>
                  </div>
                </div>

                <Separator />

                {/* Messages */}
                <div className="max-h-[60vh] overflow-auto">
                  {Array.isArray(selectedConversation.messages) && selectedConversation.messages.length > 0 ? (
                    <ul className="space-y-2">
                      {selectedConversation.messages.map((m: any, i: number) => (
                        <li key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                          <div className={`max-w-[80%] rounded-lg p-3 ${m.role === 'user' ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'bg-blue-600 text-white'}`}>
                            <div className="flex items-center gap-2 mb-1 text-[11px] opacity-80">
                              <span className="capitalize">{m.role}</span>
                              {m.timestamp && (
                                <span>{new Date(m.timestamp).toLocaleString()}</span>
                              )}
                            </div>
                            <div className="whitespace-pre-line text-sm leading-relaxed">{m.content}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center text-slate-500 py-8">No messages</div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
