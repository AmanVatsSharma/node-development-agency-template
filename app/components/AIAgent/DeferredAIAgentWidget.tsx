'use client';

/**
 * @fileoverview DeferredAIAgentWidget
 * @description Defers loading AI chat widget to keep initial page smooth (especially on mobile).
 *
 * Strategy:
 * - Wait for browser idle time (requestIdleCallback) or a short timeout
 * - Load earlier on first user interaction (scroll/pointer/key)
 * - Respect Save-Data (still loads, but deferred longer)
 *
 * Notes:
 * - This intentionally keeps the heavy chat widget code out of the initial route bundle.
 * - The widget still fetches config from `/api/ai-agent/config` once mounted (handled inside AIAgentWidget).
 */

import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

interface ExtendedNavigator extends Navigator {
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

// Lazy-load the real widget bundle.
const AIAgentWidget = dynamic(() => import('./AIAgentWidget'), {
  ssr: false,
  loading: () => null,
});

export default function DeferredAIAgentWidget() {
  const [isReady, setIsReady] = useState(false);
  const idleHandleRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const nav = navigator as ExtendedNavigator;
    const saveData = Boolean(nav.connection?.saveData);
    const effectiveType = nav.connection?.effectiveType;
    const userAgent = nav.userAgent ?? '';
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    // Default delay: small on desktop, larger on mobile / save-data.
    const baseDelayMs = isMobile ? 4500 : 2000;
    const delayMs = saveData ? Math.max(baseDelayMs, 6000) : baseDelayMs;

    console.log('[DeferredAIAgentWidget] Init defer strategy', {
      isMobile,
      saveData,
      effectiveType,
      delayMs,
    });

    const win = window as IdleWindow;

    const markReady = (reason: string) => {
      console.log('[DeferredAIAgentWidget] Loading widget now', { reason });
      setIsReady(true);
    };

    // Load on first interaction (user intent).
    const onFirstInteraction = () => {
      cleanupListeners();
      markReady('first-interaction');
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', onFirstInteraction, { passive: true } as any);
      window.removeEventListener('pointerdown', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

    window.addEventListener('scroll', onFirstInteraction, { passive: true });
    window.addEventListener('pointerdown', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);

    // Idle callback first (best effort).
    if (win.requestIdleCallback) {
      idleHandleRef.current = win.requestIdleCallback(
        () => {
          cleanupListeners();
          markReady('idle-callback');
        },
        { timeout: delayMs },
      );
    }

    // Hard timeout fallback.
    timeoutRef.current = window.setTimeout(() => {
      cleanupListeners();
      markReady('timeout');
    }, delayMs);

    return () => {
      cleanupListeners();

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (idleHandleRef.current !== null && win.cancelIdleCallback) {
        win.cancelIdleCallback(idleHandleRef.current);
        idleHandleRef.current = null;
      }
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return <AIAgentWidget />;
}

