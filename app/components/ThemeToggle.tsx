"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
    try {
      console.log("[ThemeToggle] Mounted. Current theme:", theme, "resolved:", resolvedTheme, "system:", systemTheme);
    } catch (e) {}
  }, [theme, resolvedTheme, systemTheme]);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <div className="w-5 h-5" />
      </button>
    );
  }

  const cycleTheme = () => {
    try {
      const current = theme ?? resolvedTheme ?? "light";
      console.log("[ThemeToggle] cycle from:", current);
      if (current === "light") {
        setTheme("dark");
      } else if (current === "dark") {
        setTheme("system");
      } else {
        setTheme("light");
      }
    } catch (err) {
      console.error("[ThemeToggle] Failed to set theme", err);
    }
  };

  const getIcon = () => {
    const current = theme ?? resolvedTheme ?? "light";
    switch (current) {
      case "light":
        return <Sun className="h-5 w-5" />;
      case "dark":
        return <Moon className="h-5 w-5" />;
      case "system":
        return <Monitor className="h-5 w-5" />;
      default:
        return <Sun className="h-5 w-5" />;
    }
  };

  const getLabel = () => {
    const current = theme ?? resolvedTheme ?? "light";
    switch (current) {
      case "light":
        return "Switch to dark mode";
      case "dark":
        return "Switch to system theme";
      case "system":
        return "Switch to light mode";
      default:
        return "Toggle theme";
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={getLabel()}
      title={`Current: ${(theme ?? resolvedTheme ?? "light")} mode`}
    >
      {getIcon()}
    </button>
  );
}
