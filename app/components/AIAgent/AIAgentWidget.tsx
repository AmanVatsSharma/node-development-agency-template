'use client';

/**
 * AI Agent Widget Wrapper
 * Loads configuration and renders chat widget
 * 
 * @author Vedpragya Bharat Pvt. Ltd.
 */

import React, { useEffect, useState } from 'react';
import ChatWidget from './ChatWidget';

interface AIAgentConfig {
  enabled: boolean;
  agentName: string;
  welcomeMessage: string;
  autoGreeting: boolean;
  greetingDelay: number;
  widgetPosition: string;
  primaryColor: string;
}

export default function AIAgentWidget() {
  const [config, setConfig] = useState<AIAgentConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/ai-agent/config', {
        cache: 'no-store'
      });

      if (!response.ok) {
        throw new Error('Failed to load AI agent configuration');
      }

      const data = await response.json();

      if (data.success && data.config) {
        setConfig({
          enabled: data.config.enabled,
          agentName: data.config.agentName,
          welcomeMessage: data.config.welcomeMessage,
          autoGreeting: data.config.autoGreeting,
          greetingDelay: data.config.greetingDelay,
          widgetPosition: data.config.widgetPosition,
          primaryColor: data.config.primaryColor,
        });
      }
    } catch (err: any) {
      console.error('[AI Agent Widget] Failed to load config:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Don't render anything while loading
  if (loading || error || !config) {
    return null;
  }

  // Don't render if disabled
  if (!config.enabled) {
    return null;
  }

  return <ChatWidget config={config} />;
}
