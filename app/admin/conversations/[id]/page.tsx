'use client';

/**
 * Admin Conversation Detail Page
 * Shows full message history and metadata for a conversation
 */

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MessageSquare, RefreshCw, AlertCircle, Info, Bot, User, Clock, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export default function AdminConversationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const conversationId = params?.id as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [conversation, setConversation] = useState<any | null>(null);

  useEffect(() => {
    if (!conversationId) return;
    loadConversation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId]);

  const loadConversation = async () => {
    console.log('[Admin Conversation Detail] Loading conversation', { conversationId });
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/ai-agent/conversations/${conversationId}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error('[Admin Conversation Detail] Failed to load conversation', data);
        throw new Error(data.error || 'Failed to load conversation');
      }
      console.log('[Admin Conversation Detail] Conversation loaded', { id: data.conversation?.id, messages: data.conversation?.messageCount });
      setConversation(data.conversation);
    } catch (err: any) {
      console.error('[Admin Conversation Detail] Error:', err);
      setError(err.message || 'Failed to load conversation');
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = (msg: any, index: number) => {
    const isUser = msg.role === 'user';
    return (
      <div key={index} className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-3`}>
        <div className={`max-w-[80%] rounded-lg p-3 ${isUser ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100' : 'bg-blue-600 text-white'}`}>
          <div className="flex items-center gap-2 mb-1 text-xs opacity-80">
            {isUser ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
            <span className="capitalize">{msg.role}</span>
            {msg.timestamp && (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {new Date(msg.timestamp).toLocaleString()}
              </span>
            )}
          </div>
          <div className="whitespace-pre-line text-sm leading-relaxed">{msg.content}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/conversations">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-blue-600" /> Conversation Detail
          </h1>
        </div>
        <div>
          <Button variant="outline" size="sm" onClick={loadConversation}>
            <RefreshCw className="h-4 w-4 mr-2" /> Refresh
          </Button>
        </div>
      </div>

      {loading ? (
        <Card>
          <CardContent className="py-10 text-center text-slate-500">
            <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2" />
            Loading conversation...
          </CardContent>
        </Card>
      ) : error ? (
        <Card>
          <CardContent className="py-10 text-center text-red-600">
            <AlertCircle className="h-6 w-6 mx-auto mb-2" />
            {error}
          </CardContent>
        </Card>
      ) : !conversation ? (
        <Card>
          <CardContent className="py-10 text-center text-slate-500">Conversation not found</CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: metadata */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Overview</CardTitle>
                <CardDescription>Conversation metadata</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-600">Status</span><span className="capitalize font-medium">{conversation.status}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Lead Captured</span><span>{conversation.leadCaptured ? 'Yes' : 'No'}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Messages</span><span>{conversation.messageCount}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Sentiment</span><span>{typeof conversation.sentimentScore === 'number' ? conversation.sentimentScore.toFixed(2) : '-'}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Lead Score</span><span>{typeof conversation.leadScore === 'number' ? conversation.leadScore : '-'}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Created</span><span>{new Date(conversation.createdAt).toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-slate-600">Last Message</span><span>{new Date(conversation.lastMessageAt).toLocaleString()}</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Page Context</CardTitle>
                <CardDescription>Where this conversation happened</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between gap-3"><span className="text-slate-600">Title</span><span className="text-right truncate max-w-[60%]">{conversation.pageTitle || 'Untitled Page'}</span></div>
                <div className="flex justify-between gap-3"><span className="text-slate-600">Path</span><span className="text-right truncate max-w-[60%]">{conversation.pagePath || '-'}</span></div>
                <div className="flex justify-between gap-3"><span className="text-slate-600">URL</span>
                  <a href={conversation.pageUrl} target="_blank" rel="noreferrer" className="text-blue-600 inline-flex items-center gap-1 truncate max-w-[60%]">
                    {conversation.pageUrl || '-'} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="flex justify-between gap-3"><span className="text-slate-600">Session</span><span className="text-right truncate max-w-[60%]">{conversation.sessionId}</span></div>
              </CardContent>
            </Card>

            {conversation.conversionData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Captured Lead</CardTitle>
                  <CardDescription>Lead data captured during chat</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-xs bg-slate-100 dark:bg-slate-900/50 p-3 rounded overflow-x-auto">
{JSON.stringify(conversation.conversionData, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right: messages */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Messages</CardTitle>
                <CardDescription>Timeline of user and assistant messages</CardDescription>
              </CardHeader>
              <CardContent>
                {Array.isArray(conversation.messages) && conversation.messages.length > 0 ? (
                  <div className="max-h-[70vh] overflow-auto pr-2">
                    {conversation.messages.map((m: any, i: number) => renderMessage(m, i))}
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-10">No messages available</div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
