'use client';

/**
 * Admin Conversations List Page - WhatsApp-like Interface
 * Displays AI agent conversation history with WhatsApp-style UI
 * 
 * Features:
 * - WhatsApp-like left sidebar with conversation list
 * - Real-time conversation preview
 * - Search and filtering
 * - Responsive design
 * - Comprehensive error handling
 * - Console logging for debugging
 */

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Clock,
  User,
  Bot,
  Phone,
  Mail,
  Calendar,
  MoreVertical,
  Archive,
  Star,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Input } from '@/app/components/ui/input';
import { Separator } from '@/app/components/ui/separator';
import { Badge } from '@/app/components/ui/badge';

export default function AdminConversationsListPage() {
  console.log('[Admin Conversations] Component initialized - WhatsApp-like interface');
  
  const router = useRouter();
  const searchParams = useSearchParams();

  // State management with comprehensive logging
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [conversations, setConversations] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);

  // Filter states
  const [statusFilter, setStatusFilter] = useState<string>(searchParams.get('status') || '');
  const [leadFilter, setLeadFilter] = useState<string>(searchParams.get('lead') || '');
  const [query, setQuery] = useState<string>('');
  const [limit, setLimit] = useState<number>(parseInt(searchParams.get('limit') || '50'));

  // UI state
  const listRef = React.useRef<HTMLDivElement>(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  // Selection + detail state for split-view
  const initialSelected = searchParams.get('id') || null;
  const [selectedId, setSelectedId] = useState<string | null>(initialSelected);
  const [selectedLoading, setSelectedLoading] = useState(false);
  const [selectedError, setSelectedError] = useState<string | null>(null);
  const [selectedConversation, setSelectedConversation] = useState<any | null>(null);

  // Build query parameters with logging
  const buildQueryParams = useMemo(() => {
    console.log('[Admin Conversations] Building query params', { statusFilter, leadFilter, limit });
    const params = new URLSearchParams();
    params.set('limit', String(limit));
    if (statusFilter) params.set('status', statusFilter);
    if (leadFilter === 'leads') params.set('leadCaptured', 'true');
    if (leadFilter === 'no_leads') params.set('leadCaptured', 'false');
    return params.toString();
  }, [statusFilter, leadFilter, limit]);

  // Load conversations with comprehensive error handling
  const loadConversations = async () => {
    console.log('[Admin Conversations] Loading conversations with filters', { statusFilter, leadFilter, limit });
    setLoading(true);
    setError(null);
    
    try {
      const url = `/api/ai-agent/conversations?${buildQueryParams}`;
      console.log('[Admin Conversations] Fetching from URL:', url);
      
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies for authentication
      });
      
      console.log('[Admin Conversations] Response status:', res.status);
      console.log('[Admin Conversations] Response headers:', Object.fromEntries(res.headers.entries()));
      
      const data = await res.json();
      console.log('[Admin Conversations] Response data:', data);
      
      if (!res.ok || !data.success) {
        console.error('[Admin Conversations] API Error:', { status: res.status, data });
        throw new Error(data.error || `HTTP ${res.status}: Failed to load conversations`);
      }
      
      console.log('[Admin Conversations] Successfully loaded conversations', { 
        count: data.conversations?.length || 0, 
        stats: data.stats 
      });
      
      setConversations(data.conversations || []);
      setStats(data.stats || {});
    } catch (err: any) {
      console.error('[Admin Conversations] Error loading conversations:', err);
      setError(err.message || 'Failed to load conversations. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  // Load conversations on mount and filter changes
  useEffect(() => {
    console.log('[Admin Conversations] Effect triggered - loading conversations');
    loadConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, leadFilter]);

  // Infinite scroll observer
  useEffect(() => {
    const el = listRef.current;
    if (!el) {
      console.log('[Admin Conversations] No scroll element found');
      return;
    }

    console.log('[Admin Conversations] Setting up infinite scroll observer');

    const onScroll = async () => {
      if (isFetchingMore || loading || error) {
        console.log('[Admin Conversations] Scroll ignored - busy state:', { isFetchingMore, loading, error });
        return;
      }
      
      const threshold = 120; // px from bottom
      const scrollPosition = el.scrollTop + el.clientHeight;
      const scrollHeight = el.scrollHeight;
      
      console.log('[Admin Conversations] Scroll check:', { scrollPosition, scrollHeight, threshold });
      
      if (scrollPosition >= scrollHeight - threshold) {
        console.log('[Admin Conversations] Triggering infinite scroll load');
        setIsFetchingMore(true);
        
        try {
          const nextLimit = limit + 50;
          const params = new URLSearchParams();
          params.set('limit', String(nextLimit));
          if (statusFilter) params.set('status', statusFilter);
          if (leadFilter === 'leads') params.set('leadCaptured', 'true');
          if (leadFilter === 'no_leads') params.set('leadCaptured', 'false');
          
          const res = await fetch(`/api/ai-agent/conversations?${params.toString()}`, {
            credentials: 'include',
          });
          const data = await res.json();
          
          if (res.ok && data.success) {
            console.log('[Admin Conversations] Infinite scroll success:', { newLimit: nextLimit });
            setLimit(nextLimit);
            setConversations(data.conversations || []);
            setStats(data.stats || {});
          } else {
            console.error('[Admin Conversations] Infinite scroll failed:', data);
          }
        } catch (e) {
          console.error('[Admin Conversations] Infinite scroll error:', e);
        } finally {
          setIsFetchingMore(false);
        }
      }
    };

    el.addEventListener('scroll', onScroll);
    return () => {
      console.log('[Admin Conversations] Cleaning up scroll listener');
      el.removeEventListener('scroll', onScroll);
    };
  }, [limit, statusFilter, leadFilter, isFetchingMore, loading, error]);

  // URL synchronization
  const pushQueryToUrl = useCallback((nextSelectedId: string | null) => {
    console.log('[Admin Conversations] Updating URL with selection:', nextSelectedId);
    const params = new URLSearchParams();
    if (statusFilter) params.set('status', statusFilter);
    if (leadFilter) params.set('lead', leadFilter);
    if (limit && limit !== 50) params.set('limit', String(limit));
    if (nextSelectedId) params.set('id', nextSelectedId);
    const qs = params.toString();
    const next = qs ? `/admin/conversations?${qs}` : '/admin/conversations';
    console.log('[Admin Conversations] New URL:', next);
    router.replace(next);
  }, [router, statusFilter, leadFilter, limit]);

  // Load selected conversation details
  const loadSelectedConversation = useCallback(async (id: string) => {
    console.log('[Admin Conversations] Loading conversation detail:', id);
    setSelectedLoading(true);
    setSelectedError(null);
    
    try {
      const res = await fetch(`/api/ai-agent/conversations/${id}`, {
        credentials: 'include',
      });
      const data = await res.json();
      
      console.log('[Admin Conversations] Conversation detail response:', { status: res.status, data });
      
      if (!res.ok || !data.success) {
        throw new Error(data.error || `HTTP ${res.status}: Failed to load conversation`);
      }
      
      console.log('[Admin Conversations] Conversation detail loaded successfully');
      setSelectedConversation(data.conversation);
    } catch (err: any) {
      console.error('[Admin Conversations] Failed to load conversation detail:', err);
      setSelectedError(err.message || 'Failed to load conversation details');
      setSelectedConversation(null);
    } finally {
      setSelectedLoading(false);
    }
  }, []);

  // Auto-select first conversation when conversations load
  useEffect(() => {
    if (!selectedId && conversations.length > 0) {
      const firstId = conversations[0].id;
      console.log('[Admin Conversations] Auto-selecting first conversation:', firstId);
      setSelectedId(firstId);
      pushQueryToUrl(firstId);
      loadSelectedConversation(firstId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations]);

  // Load details when selectedId changes
  useEffect(() => {
    if (selectedId) {
      console.log('[Admin Conversations] Selected ID changed, loading details:', selectedId);
      pushQueryToUrl(selectedId);
      loadSelectedConversation(selectedId);
    }
  }, [selectedId, pushQueryToUrl, loadSelectedConversation]);

  // Filter conversations based on search query
  const filteredConversations = useMemo(() => {
    if (!query) return conversations;
    const q = query.toLowerCase();
    const filtered = conversations.filter((c) =>
      (c.pageTitle || '').toLowerCase().includes(q) ||
      (c.pagePath || '').toLowerCase().includes(q) ||
      (c.pageUrl || '').toLowerCase().includes(q) ||
      (c.sessionId || '').toLowerCase().includes(q)
    );
    console.log('[Admin Conversations] Filtered conversations:', { query, total: conversations.length, filtered: filtered.length });
    return filtered;
  }, [conversations, query]);

  // Selection handlers
  const onSelectRow = (id: string) => {
    console.log('[Admin Conversations] Selecting conversation:', id);
    setSelectedId(id);
  };

  const selectedIndex = filteredConversations.findIndex((c) => c.id === selectedId);
  const selectPrev = () => {
    if (selectedIndex > 0) {
      const prevId = filteredConversations[selectedIndex - 1].id;
      console.log('[Admin Conversations] Selecting previous conversation:', prevId);
      setSelectedId(prevId);
    }
  };
  const selectNext = () => {
    if (selectedIndex >= 0 && selectedIndex < filteredConversations.length - 1) {
      const nextId = filteredConversations[selectedIndex + 1].id;
      console.log('[Admin Conversations] Selecting next conversation:', nextId);
      setSelectedId(nextId);
    }
  };

  // Keyboard navigation
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

  // Format conversation preview text
  const getConversationPreview = (conversation: any) => {
    if (!conversation.messages || !Array.isArray(conversation.messages)) {
      return 'No messages';
    }
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    if (!lastMessage) return 'No messages';
    return lastMessage.content?.substring(0, 100) + (lastMessage.content?.length > 100 ? '...' : '');
  };

  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 168) { // 7 days
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <MessageSquare className="h-7 w-7 text-green-600" />
              AI Conversations
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">WhatsApp-style conversation management</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={loadConversations} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 dark:text-green-400">Today's Chats</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{stats?.totalToday || 0}</p>
              </div>
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400">Leads Captured</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats?.conversionsToday || 0}</p>
              </div>
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 dark:text-purple-400">Conversion Rate</p>
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{stats?.conversionRate || 0}%</p>
              </div>
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search conversations..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
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
          <Select value={leadFilter} onValueChange={setLeadFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All leads" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              <SelectItem value="leads">Leads only</SelectItem>
              <SelectItem value="no_leads">Without leads</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content - WhatsApp-like Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Conversation List */}
        <div className="w-1/3 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="font-semibold text-slate-900 dark:text-white">
              Conversations ({filteredConversations.length})
            </h2>
          </div>
          
          <div ref={listRef} className="flex-1 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <RefreshCw className="h-6 w-6 animate-spin text-slate-400" />
                <span className="ml-2 text-slate-500">Loading conversations...</span>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-32 p-4">
                <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
                <p className="text-red-600 text-sm text-center">{error}</p>
                <Button variant="outline" size="sm" onClick={loadConversations} className="mt-2">
                  Try Again
                </Button>
              </div>
            ) : filteredConversations.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-32 p-4">
                <MessageSquare className="h-8 w-8 text-slate-400 mb-2" />
                <p className="text-slate-500 text-sm text-center">No conversations found</p>
              </div>
            ) : (
              <div className="space-y-1 p-2">
                {filteredConversations.map((conversation) => {
                  const isSelected = conversation.id === selectedId;
                  const preview = getConversationPreview(conversation);
                  const time = formatTime(conversation.lastMessageAt || conversation.createdAt);
                  
                  return (
                    <div
                      key={conversation.id}
                      onClick={() => onSelectRow(conversation.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-slate-900 dark:text-white truncate">
                              {conversation.pageTitle || conversation.pagePath || 'Untitled Page'}
                            </h3>
                            {conversation.leadCaptured && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                                Lead
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400 truncate mb-1">
                            {preview}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="capitalize">{conversation.status}</span>
                            <span>•</span>
                            <span>{conversation.messageCount} messages</span>
                          </div>
                        </div>
                        <div className="text-xs text-slate-500 ml-2">
                          {time}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {isFetchingMore && (
                  <div className="flex items-center justify-center py-3">
                    <RefreshCw className="h-4 w-4 animate-spin text-slate-400" />
                    <span className="ml-2 text-sm text-slate-500">Loading more...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Conversation Detail */}
        <div className="flex-1 bg-white dark:bg-slate-900 flex flex-col">
          {!selectedId ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Select a conversation
                </h3>
                <p className="text-slate-500">Choose a conversation from the list to view details</p>
              </div>
            </div>
          ) : selectedLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <RefreshCw className="h-8 w-8 animate-spin text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">Loading conversation...</p>
              </div>
            </div>
          ) : selectedError ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  Error loading conversation
                </h3>
                <p className="text-red-600 mb-4">{selectedError}</p>
                <Button variant="outline" onClick={() => loadSelectedConversation(selectedId)}>
                  Try Again
                </Button>
              </div>
            </div>
          ) : !selectedConversation ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <AlertCircle className="h-8 w-8 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">No conversation data available</p>
              </div>
            </div>
          ) : (
            <>
              {/* Conversation Header */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {selectedConversation.pageTitle || selectedConversation.pagePath || 'Untitled Page'}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {selectedConversation.pagePath || selectedConversation.pageUrl}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={selectPrev} disabled={selectedIndex <= 0}>
                      ← Prev
                    </Button>
                    <Button variant="outline" size="sm" onClick={selectNext} disabled={selectedIndex < 0 || selectedIndex >= filteredConversations.length - 1}>
                      Next →
                    </Button>
                    <Link href={`/admin/conversations/${selectedId}`}>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Open
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Conversation Stats */}
                <div className="flex items-center gap-4 mt-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Badge variant={selectedConversation.status === 'active' ? 'default' : 'secondary'}>
                      {selectedConversation.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <MessageSquare className="h-4 w-4" />
                    {selectedConversation.messageCount} messages
                  </div>
                  {selectedConversation.leadCaptured && (
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Lead captured
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <Clock className="h-4 w-4" />
                    {formatTime(selectedConversation.lastMessageAt || selectedConversation.createdAt)}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4">
                {Array.isArray(selectedConversation.messages) && selectedConversation.messages.length > 0 ? (
                  <div className="space-y-4">
                    {selectedConversation.messages.map((message: any, index: number) => {
                      const isUser = message.role === 'user';
                      return (
                        <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-lg p-3 ${
                            isUser 
                              ? 'bg-green-500 text-white' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                          }`}>
                            <div className="flex items-center gap-2 mb-1 text-xs opacity-80">
                              {isUser ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                              <span className="capitalize">{message.role}</span>
                              {message.timestamp && (
                                <span>{formatTime(message.timestamp)}</span>
                              )}
                            </div>
                            <div className="whitespace-pre-wrap text-sm leading-relaxed">
                              {message.content}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                      <MessageSquare className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-500">No messages in this conversation</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}