/**
 * @fileoverview SEO Integrity Verification Script
 * @description Validates technical SEO guardrails to prevent regressions.
 *
 * Checks performed:
 * 1. Every public route under app/pages has metadata coverage.
 * 2. Placeholder SEO tokens are not present in active metadata-bearing files.
 * 3. Dynamic SEO routes exist (app/sitemap.ts and app/robots.ts).
 * 4. Legacy static SEO generator files are not present.
 *
 * Usage:
 *   node scripts/verify-seo-integrity.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();
const APP_DIR = path.join(ROOT_DIR, 'app');
const PAGES_DIR = path.join(APP_DIR, 'pages');

const DYNAMIC_SEO_FILES = [path.join(APP_DIR, 'sitemap.ts'), path.join(APP_DIR, 'robots.ts')];
const LEGACY_SEO_FILES = [
  path.join(ROOT_DIR, 'scripts', 'generate-seo-files.js'),
  path.join(ROOT_DIR, 'utils', 'sitemap.ts'),
];

const PLACEHOLDER_PATTERNS = [
  'yourdomain.com',
  'yourwebsite.com',
  'Your Agency Name',
  'your-google-verification-code',
  'your-google-site-verification-code',
  'rajapragya.com',
  'mumbaiwebdev.com',
  'vedpragyabharat.com',
];

function logInfo(message, data = undefined) {
  if (data) {
    console.log(`[SEO-VERIFY] ${message}`, data);
    return;
  }
  console.log(`[SEO-VERIFY] ${message}`);
}

function logError(message, data = undefined) {
  if (data) {
    console.error(`[SEO-VERIFY] ${message}`, data);
    return;
  }
  console.error(`[SEO-VERIFY] ${message}`);
}

function walkFiles(directoryPath) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
  const filePaths = [];

  entries.forEach((entry) => {
    const fullPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      filePaths.push(...walkFiles(fullPath));
      return;
    }
    filePaths.push(fullPath);
  });

  return filePaths;
}

function routeFromPageFile(filePath) {
  return filePath.replace(PAGES_DIR, '').replace(/\/page\.(tsx|ts|jsx|js|mdx)$/, '');
}

function hasMetadataForRoute(routeDirectoryPath) {
  const candidates = [
    path.join(routeDirectoryPath, 'metadata.ts'),
    path.join(routeDirectoryPath, 'layout.tsx'),
    path.join(routeDirectoryPath, 'page.tsx'),
  ];

  for (const candidate of candidates) {
    if (!fs.existsSync(candidate)) {
      continue;
    }
    const fileContent = fs.readFileSync(candidate, 'utf8');
    if (
      /export const metadata/.test(fileContent) ||
      /export async function generateMetadata/.test(fileContent)
    ) {
      return true;
    }
  }

  return false;
}

function verifyMetadataCoverage() {
  const pageFiles = walkFiles(PAGES_DIR).filter((filePath) =>
    /\/page\.(tsx|ts|jsx|js|mdx)$/.test(filePath),
  );

  const missingRoutes = [];

  pageFiles.forEach((pageFilePath) => {
    const routePath = routeFromPageFile(pageFilePath);
    const routeDirectoryPath = path.dirname(pageFilePath);
    const hasMetadata = hasMetadataForRoute(routeDirectoryPath);
    if (!hasMetadata) {
      missingRoutes.push(routePath || '/');
    }
  });

  if (missingRoutes.length > 0) {
    logError('Missing metadata coverage for routes', { missingRoutes });
    return { passed: false, missingRoutes };
  }

  logInfo('Metadata coverage check passed', { routeCount: pageFiles.length });
  return { passed: true, missingRoutes: [] };
}

function verifyNoPlaceholderTokens() {
  const relevantFiles = walkFiles(PAGES_DIR).filter((filePath) =>
    /(metadata\.ts|layout\.tsx|page\.tsx)$/.test(filePath),
  );

  const violations = [];

  relevantFiles.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    if (!/metadata|generateMetadata|application\/ld\+json/.test(fileContent)) {
      return;
    }

    PLACEHOLDER_PATTERNS.forEach((placeholderToken) => {
      if (fileContent.includes(placeholderToken)) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          placeholderToken,
        });
      }
    });
  });

  if (violations.length > 0) {
    logError('Placeholder SEO tokens found', { violations });
    return { passed: false, violations };
  }

  logInfo('Placeholder token check passed');
  return { passed: true, violations: [] };
}

function verifyDynamicSeoFiles() {
  const missingFiles = DYNAMIC_SEO_FILES.filter((filePath) => !fs.existsSync(filePath));

  if (missingFiles.length > 0) {
    logError('Dynamic SEO files missing', {
      missingFiles: missingFiles.map((filePath) => path.relative(ROOT_DIR, filePath)),
    });
    return { passed: false, missingFiles };
  }

  logInfo('Dynamic SEO file presence check passed');
  return { passed: true, missingFiles: [] };
}

function verifyLegacyFilesRemoved() {
  const foundLegacyFiles = LEGACY_SEO_FILES.filter((filePath) => fs.existsSync(filePath));

  if (foundLegacyFiles.length > 0) {
    logError('Legacy SEO generator files still present', {
      foundLegacyFiles: foundLegacyFiles.map((filePath) => path.relative(ROOT_DIR, filePath)),
    });
    return { passed: false, foundLegacyFiles };
  }

  logInfo('Legacy SEO file removal check passed');
  return { passed: true, foundLegacyFiles: [] };
}

function main() {
  logInfo('Starting SEO integrity verification');

  const checks = [
    verifyMetadataCoverage(),
    verifyNoPlaceholderTokens(),
    verifyDynamicSeoFiles(),
    verifyLegacyFilesRemoved(),
  ];

  const failedChecks = checks.filter((check) => !check.passed);

  if (failedChecks.length > 0) {
    logError('SEO integrity verification failed', { failedChecks: failedChecks.length });
    process.exit(1);
  }

  logInfo('SEO integrity verification passed successfully');
}

try {
  main();
} catch (error) {
  logError('Unexpected error during SEO verification', {
    error: error instanceof Error ? error.message : String(error),
  });
  process.exit(1);
}
