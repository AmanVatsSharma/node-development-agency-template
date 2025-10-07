'use client';

/**
 * AI Sales Agent Chat Widget
 * Modern, animated floating chat interface
 * 
 * @author Vedpragya Bharat Pvt. Ltd.
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Minimize2, Sparkles, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface ChatWidgetProps {
  config: {
    enabled: boolean;
    agentName: string;
    welcomeMessage: string;
    autoGreeting: boolean;
    greetingDelay: number;
    widgetPosition: string;
    primaryColor: string;
  };
}

export default function ChatWidget({ config }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showGreeting, setShowGreeting] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Show widget only if enabled
  if (!config.enabled) {
    return null;
  }

  // Auto greeting
  useEffect(() => {
    if (config.autoGreeting && !isOpen) {
      const timer = setTimeout(() => {
        setShowGreeting(true);
      }, config.greetingDelay);
      return () => clearTimeout(timer);
    }
  }, [config.autoGreeting, config.greetingDelay, isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Handle open widget
  const handleOpen = () => {
    setIsOpen(true);
    setShowGreeting(false);
    setUnreadCount(0);
    
    // Add welcome message if first time
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: config.welcomeMessage,
        timestamp: new Date().toISOString()
      }]);
    }
  };

  // Handle send message
  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get current page info
      const pageUrl = window.location.href;
      const pagePath = window.location.pathname;
      const pageTitle = document.title;

      // Call AI agent API
      const response = await fetch('/api/ai-agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          message: userMessage.content,
          pageUrl,
          pagePath,
          pageTitle,
          conversationHistory: messages,
        })
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, assistantMessage]);
        setSessionId(data.sessionId);

        // If lead captured, track conversion
        if (data.leadCaptured) {
          // Fire Google Ads conversion event
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              send_to: 'AW-17606401808/ai_agent_lead_conversion',
              value: 1.0,
              currency: 'INR',
            });
          }
        }

        // Show unread indicator if minimized
        if (isMinimized) {
          setUnreadCount(prev => prev + 1);
        }
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('[Chat Widget] Error:', error);
      
      // Show error message
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact our team directly.',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Position classes
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  }[config.widgetPosition] || 'bottom-4 right-4';

  return (
    <>
      {/* Floating Greeting Bubble */}
      {showGreeting && !isOpen && (
        <div
          className={`fixed ${positionClasses} mb-20 z-[9998] animate-fade-in`}
          style={{ maxWidth: '300px' }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 relative border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setShowGreeting(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: config.primaryColor }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {config.agentName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {config.welcomeMessage}
                </p>
              </div>
            </div>
            <button
              onClick={handleOpen}
              className="mt-3 w-full py-2 px-4 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: config.primaryColor }}
            >
              Chat with {config.agentName}
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed ${positionClasses} z-[9999] animate-slide-up`}
          style={{
            width: '400px',
            maxWidth: 'calc(100vw - 2rem)',
            height: isMinimized ? 'auto' : '600px',
            maxHeight: 'calc(100vh - 2rem)',
          }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col h-full border border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800"
              style={{ backgroundColor: config.primaryColor }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{config.agentName}</h3>
                  <p className="text-white text-opacity-80 text-xs">Online • Ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`flex gap-2 max-w-[80%] ${
                          msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            msg.role === 'user'
                              ? 'bg-gray-200 dark:bg-gray-700'
                              : 'bg-opacity-20'
                          }`}
                          style={msg.role === 'assistant' ? { backgroundColor: config.primaryColor + '33' } : {}}
                        >
                          {msg.role === 'user' ? (
                            <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          ) : (
                            <Sparkles className="w-4 h-4" style={{ color: config.primaryColor }} />
                          )}
                        </div>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            msg.role === 'user'
                              ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                              : 'bg-opacity-10 text-gray-900 dark:text-white'
                          }`}
                          style={msg.role === 'assistant' ? { backgroundColor: config.primaryColor + '1A' } : {}}
                        >
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[80%]">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-opacity-20"
                          style={{ backgroundColor: config.primaryColor + '33' }}
                        >
                          <Sparkles className="w-4 h-4" style={{ color: config.primaryColor }} />
                        </div>
                        <div className="px-4 py-3 rounded-2xl bg-opacity-10" style={{ backgroundColor: config.primaryColor + '1A' }}>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex gap-2">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-opacity-50 text-gray-900 dark:text-white"
                      style={{ 
                        boxShadow: `0 0 0 2px ${config.primaryColor}20`,
                      }}
                      rows={1}
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim() || isLoading}
                      className="px-4 py-2 rounded-xl text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: config.primaryColor }}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    Powered by AI • Your data is secure
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className={`fixed ${positionClasses} z-[9999] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-fade-in`}
          style={{ backgroundColor: config.primaryColor }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      )}

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
