import { execFileSync } from 'node:child_process';
import path from 'node:path';

/**
 * Maximum age (in days) we allow for a `lastmod` value. Beyond this, we
 * fall back to a recent date so Google sees a "freshness" signal without us
 * claiming an unrealistically old page is brand new.
 */
export const MAX_LASTMOD_AGE_DAYS = 90;

/**
 * Routes whose `lastmod` is overridden to a fixed date because the file was
 * substantially changed in a known SEO pass. Keep this list short — prefer
 * the `git log` lookup whenever possible.
 */
const MANUAL_LASTMOD_OVERRIDES: Record<string, string> = {
  // City pages got inline lead-capture forms in late April 2026.
  '/pages/web-development-mumbai': '2026-04-29',
  '/pages/web-development-delhi': '2026-04-29',
  '/pages/web-development-bangalore': '2026-04-29',
  '/pages/web-development-gurgaon': '2026-04-29',
  '/pages/web-development-pune': '2026-04-29',
  '/pages/web-development-hyderabad': '2026-04-29',
  '/pages/web-development-noida': '2026-04-29',
};

/**
 * Fallback date used when git log is unavailable (CI, fresh checkout).
 * Set to "today - 30 days" so Google sees a realistic "recently updated" signal.
 */
function fallbackDate(): Date {
  const date = new Date();
  date.setDate(date.getDate() - 30);
  return date;
}

/**
 * Resolves the filesystem path for a route (best-effort).
 * Returns null if the path cannot be determined.
 */
function routeToFilesystemPath(route: string): string | null {
  if (route === '/' || route === '') {
    return path.join(process.cwd(), 'app', 'page.tsx');
  }
  if (!route.startsWith('/pages/')) {
    return null;
  }
  const segments = route.replace(/^\/pages\//, '').split('/');
  return path.join(process.cwd(), 'app', 'pages', ...segments, 'page.tsx');
}

/**
 * Returns the most recent git commit date for the file backing `route`.
 * Returns null if git is unavailable, the file is untracked, or no commits
 * touch the file.
 */
function getGitLastModified(fsPath: string): Date | null {
  try {
    const stdout = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', fsPath],
      { cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim();
    if (!stdout) return null;
    const parsed = new Date(stdout);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Derive the `lastmod` Date for a route.
 *
 * Resolution order:
 * 1. Manual override (known SEO pass with fixed date)
 * 2. `git log` of the route's page.tsx (source of truth)
 * 3. Fallback: today - 30 days
 *
 * Guarantees:
 * - Never returns a future date
 * - Never returns a date older than MAX_LASTMOD_AGE_DAYS days
 *   (clamped to that ceiling if git log says older)
 */
export function getRouteLastModified(route: string): Date {
  // 1. Manual override
  const override = MANUAL_LASTMOD_OVERRIDES[route];
  if (override) {
    const date = new Date(override);
    if (!Number.isNaN(date.getTime())) {
      return clampToRecent(date);
    }
  }

  // 2. Git log
  const fsPath = routeToFilesystemPath(route);
  if (fsPath) {
    const gitDate = getGitLastModified(fsPath);
    if (gitDate) {
      return clampToRecent(gitDate);
    }
  }

  // 3. Fallback
  return clampToRecent(fallbackDate());
}

function clampToRecent(date: Date): Date {
  const now = Date.now();
  const maxAgeMs = MAX_LASTMOD_AGE_DAYS * 24 * 60 * 60 * 1000;
  const oldestAllowed = now - maxAgeMs;
  if (date.getTime() > now) {
    return new Date(now);
  }
  if (date.getTime() < oldestAllowed) {
    return new Date(oldestAllowed);
  }
  return date;
}