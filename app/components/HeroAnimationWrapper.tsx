"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

type HeroQuality = "static" | "lite" | "full";

interface DeviceCapabilityDecision {
  quality: HeroQuality;
  reasons: string[];
  metrics: {
    isMobile: boolean;
    hasWebGL: boolean;
    prefersReducedMotion: boolean;
    saveDataEnabled: boolean;
    hardwareConcurrency: number;
    deviceMemory: number;
  };
}

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: IdleRequestCallback,
    options?: IdleRequestOptions,
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

interface ExtendedNavigator extends Navigator {
  deviceMemory?: number;
  connection?: {
    saveData?: boolean;
    effectiveType?: string;
  };
}

// Fallback while deciding which hero profile to mount.
const AnimationFallback = () => (
  <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Static fallback for constrained devices and robust error fallback.
const StaticHeroBackground = ({ reason }: { reason?: string }) => (
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#07132b] to-slate-950 overflow-hidden">
    <div className="absolute inset-0 opacity-35" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,255,255,0.18) 1px, transparent 0)",
      backgroundSize: "34px 34px",
      animation: "grid-flow 30s linear infinite",
    }} />
    <div className="absolute -top-24 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
    <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
    {reason ? (
      <div className="absolute bottom-4 left-4 text-[11px] text-cyan-300/70 font-mono bg-black/35 border border-cyan-400/25 rounded-md px-2 py-1">
        Hero mode: static ({reason})
      </div>
    ) : null}
  </div>
);

// Dynamic imports keep heavy bundles out of the initial critical path.
const HeroAnimationWorldClass = dynamic(() => import("../animations/HeroAnimationWorldClass"), {
  ssr: false,
  loading: () => <AnimationFallback />,
});

const HeroAnimationLite = dynamic(() => import("../animations/HeroAnimationLite"), {
  ssr: false,
  loading: () => <AnimationFallback />,
});

function supportsWebGL(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch (error) {
    console.error("[HeroAnimationWrapper] WebGL capability test failed", error);
    return false;
  }
}

function detectDeviceCapability(): DeviceCapabilityDecision {
  const nav = navigator as ExtendedNavigator;
  const userAgent = nav.userAgent ?? "";
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const hasWebGL = supportsWebGL();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveDataEnabled = Boolean(nav.connection?.saveData);
  const hardwareConcurrency = nav.hardwareConcurrency ?? 4;
  const deviceMemory = nav.deviceMemory ?? 4;

  const reasons: string[] = [];

  if (prefersReducedMotion) {
    reasons.push("prefers-reduced-motion");
  }
  if (saveDataEnabled) {
    reasons.push("save-data");
  }
  if (!hasWebGL) {
    reasons.push("no-webgl");
  }
  if (isMobile) {
    reasons.push("mobile-device");
  }

  let score = 0;
  score += isMobile ? -2 : 1;
  score += hardwareConcurrency >= 8 ? 2 : hardwareConcurrency >= 4 ? 1 : -1;
  score += deviceMemory >= 8 ? 2 : deviceMemory >= 4 ? 1 : -1;

  if (!hasWebGL || prefersReducedMotion || saveDataEnabled) {
    return {
      quality: "static",
      reasons: reasons.length > 0 ? reasons : ["safety-fallback"],
      metrics: {
        isMobile,
        hasWebGL,
        prefersReducedMotion,
        saveDataEnabled,
        hardwareConcurrency,
        deviceMemory,
      },
    };
  }

  if (isMobile && (deviceMemory < 8 || hardwareConcurrency < 8)) {
    return {
      quality: "static",
      reasons: [...reasons, "mobile-conservative-profile"],
      metrics: {
        isMobile,
        hasWebGL,
        prefersReducedMotion,
        saveDataEnabled,
        hardwareConcurrency,
        deviceMemory,
      },
    };
  }

  if (score >= 5) {
    return {
      quality: "full",
      reasons: [...reasons, "high-capability-device"],
      metrics: {
        isMobile,
        hasWebGL,
        prefersReducedMotion,
        saveDataEnabled,
        hardwareConcurrency,
        deviceMemory,
      },
    };
  }

  return {
    quality: "lite",
    reasons: [...reasons, "balanced-profile"],
    metrics: {
      isMobile,
      hasWebGL,
      prefersReducedMotion,
      saveDataEnabled,
      hardwareConcurrency,
      deviceMemory,
    },
  };
}

// Error boundary for Three.js render issues with robust fallback.
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    console.error("[HeroAnimationWrapper] ErrorBoundary caught hero render error");
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("[HeroAnimationWrapper] Hero crashed, switching to static fallback", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default function HeroAnimationWrapper() {
  const [isMounted, setIsMounted] = useState(false);
  const [targetQuality, setTargetQuality] = useState<HeroQuality>("lite");
  const [activeQuality, setActiveQuality] = useState<HeroQuality>("lite");
  const [decisionReasons, setDecisionReasons] = useState<string[]>([]);
  const upgradeTimerRef = useRef<number | null>(null);
  const idleCallbackRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    console.log("[HeroAnimationWrapper] Mounted: starting capability detection");

    return () => {
      const win = window as IdleWindow;

      if (upgradeTimerRef.current !== null) {
        window.clearTimeout(upgradeTimerRef.current);
        upgradeTimerRef.current = null;
      }

      if (idleCallbackRef.current !== null && win.cancelIdleCallback) {
        win.cancelIdleCallback(idleCallbackRef.current);
        idleCallbackRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    try {
      const decision = detectDeviceCapability();
      setTargetQuality(decision.quality);
      setDecisionReasons(decision.reasons);

      console.log("[HeroAnimationWrapper] Capability decision", decision);
    } catch (error) {
      // Fallback to lite instead of full for safety.
      console.error("[HeroAnimationWrapper] Capability detection failed, using lite profile", error);
      setTargetQuality("lite");
      setDecisionReasons(["detection-error"]);
    }
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const win = window as IdleWindow;

    if (upgradeTimerRef.current !== null) {
      window.clearTimeout(upgradeTimerRef.current);
      upgradeTimerRef.current = null;
    }

    if (idleCallbackRef.current !== null && win.cancelIdleCallback) {
      win.cancelIdleCallback(idleCallbackRef.current);
      idleCallbackRef.current = null;
    }

    if (targetQuality !== "full") {
      setActiveQuality(targetQuality);
      return;
    }

    // Safety strategy: first paint with lite, upgrade to full during idle.
    setActiveQuality("lite");
    const upgradeToFull = () => {
      console.log("[HeroAnimationWrapper] Upgrading hero from lite to full");
      setActiveQuality("full");
    };

    if (win.requestIdleCallback) {
      idleCallbackRef.current = win.requestIdleCallback(() => {
        upgradeToFull();
      }, { timeout: 2000 });
      return;
    }

    upgradeTimerRef.current = window.setTimeout(() => {
      upgradeToFull();
    }, 900);
  }, [isMounted, targetQuality]);

  if (!isMounted) {
    return <AnimationFallback />;
  }

  const debugReason = decisionReasons[0];
  const staticFallback = <StaticHeroBackground reason={debugReason} />;

  const heroNode = (() => {
    if (activeQuality === "static") {
      return staticFallback;
    }

    if (activeQuality === "full") {
      return <HeroAnimationWorldClass />;
    }

    return <HeroAnimationLite />;
  })();

  return (
    <ErrorBoundary fallback={staticFallback}>
      {heroNode}
    </ErrorBoundary>
  );
}