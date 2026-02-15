/**
 * @fileoverview SEO Integrity Verification Script
 * @description Validates technical SEO guardrails to prevent regressions.
 *
 * Checks performed:
 * 1. Every public route under app/pages has metadata coverage.
 * 2. Metadata definitions use the shared SEO metadata builder.
 * 3. Metadata canonical path aligns with the actual file route.
 * 4. Placeholder SEO tokens are not present in active metadata-bearing files.
 * 5. Legacy/placeholder domain tokens are not present in public route source code.
 * 6. Dynamic SEO routes exist (app/sitemap.ts and app/robots.ts).
 * 7. Navigation points to /sitemap.xml (not legacy /sitemap).
 * 8. Build pipeline runs SEO integrity + runtime checks.
 * 9. Legacy static SEO generator files are not present.
 *
 * Usage:
 *   node scripts/verify-seo-integrity.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();
const APP_DIR = path.join(ROOT_DIR, 'app');
const PAGES_DIR = path.join(APP_DIR, 'pages');
const NAVIGATION_FILE = path.join(APP_DIR, 'data', 'navigation.ts');
const PACKAGE_JSON_PATH = path.join(ROOT_DIR, 'package.json');

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

function verifyMetadataUsesSharedBuilder() {
  const metadataBearingFiles = walkFiles(PAGES_DIR).filter((filePath) =>
    /(metadata\.ts|layout\.tsx|page\.tsx)$/.test(filePath),
  );

  const violations = [];

  metadataBearingFiles.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    if (!/export const metadata/.test(fileContent)) {
      return;
    }

    const usesSharedBuilder = /buildPageMetadata\(/.test(fileContent);
    if (usesSharedBuilder) {
      return;
    }

    const metadataAliasImportMatch = fileContent.match(
      /import\s*\{\s*metadata\s+as\s+([A-Za-z0-9_$]+)\s*[^}]*\}\s*from\s*['"]\.\/metadata['"]/,
    );
    const metadataAlias = metadataAliasImportMatch ? metadataAliasImportMatch[1] : null;

    const reExportsMetadataFromSiblingFile =
      Boolean(metadataAlias) &&
      new RegExp(`export\\s+const\\s+metadata(?:\\s*:\\s*Metadata)?\\s*=\\s*${metadataAlias}\\s*;?`).test(
        fileContent,
      );

    if (reExportsMetadataFromSiblingFile) {
      return;
    }

    violations.push({
      file: path.relative(ROOT_DIR, filePath),
      reason: 'metadata export should use buildPageMetadata() or re-export from ./metadata',
    });
  });

  if (violations.length > 0) {
    logError('Metadata helper usage check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Metadata helper usage check passed');
  return { passed: true, violations: [] };
}

function expectedRouteFromMetadataFile(filePath) {
  const relativeDirectory = path.relative(PAGES_DIR, path.dirname(filePath));
  if (!relativeDirectory) {
    return '/pages';
  }

  return `/pages/${relativeDirectory.split(path.sep).join('/')}`;
}

function normalizeComparableRoute(routePath) {
  if (!routePath || typeof routePath !== 'string') {
    return routePath;
  }

  const withoutTrailingSlash =
    routePath.length > 1 ? routePath.replace(/\/$/, '') : routePath;

  return withoutTrailingSlash
    .replace(/\$\{[^}]+\}/g, '[dynamic]')
    .replace(/\[[^\]]+\]/g, '[dynamic]');
}

function verifyMetadataPathAlignment() {
  const metadataBuilderFiles = walkFiles(PAGES_DIR).filter((filePath) =>
    /(metadata\.ts|layout\.tsx|page\.tsx)$/.test(filePath),
  );

  const violations = [];
  let checkedCallCount = 0;

  metadataBuilderFiles.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (!/buildPageMetadata\(/.test(fileContent)) {
      return;
    }

    const expectedRoute = expectedRouteFromMetadataFile(filePath);
    const expectedComparableRoute = normalizeComparableRoute(expectedRoute);
    const metadataCallPattern = /buildPageMetadata\(\s*\{([\s\S]*?)\}\s*\)/g;
    const metadataCalls = [...fileContent.matchAll(metadataCallPattern)];

    metadataCalls.forEach((callMatch) => {
      checkedCallCount += 1;
      const metadataObjectBody = callMatch[1];
      const pathMatch = metadataObjectBody.match(/path\s*:\s*([`'"])(.*?)\1/);

      if (!pathMatch) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          expectedRoute,
          reason: 'Missing `path` field in buildPageMetadata options.',
        });
        return;
      }

      const pathValue = pathMatch[2];
      const actualComparableRoute = normalizeComparableRoute(pathValue);

      if (actualComparableRoute !== expectedComparableRoute) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          expectedRoute,
          actualPath: pathValue,
          reason: 'Metadata path does not align with file route.',
          line: findLineNumber(fileContent, pathMatch[0]),
        });
      }
    });
  });

  if (violations.length > 0) {
    logError('Metadata path alignment check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Metadata path alignment check passed', { checkedCallCount });
  return { passed: true, violations: [] };
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

function findLineNumber(content, token) {
  const firstMatchIndex = content.indexOf(token);
  if (firstMatchIndex < 0) {
    return -1;
  }

  return content.slice(0, firstMatchIndex).split('\n').length;
}

function verifyNoLegacyTokensInPublicCode() {
  const publicCodeFiles = walkFiles(PAGES_DIR).filter((filePath) =>
    /\.(ts|tsx|js|jsx)$/.test(filePath),
  );

  const violations = [];

  publicCodeFiles.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    PLACEHOLDER_PATTERNS.forEach((token) => {
      if (!fileContent.includes(token)) {
        return;
      }

      violations.push({
        file: path.relative(ROOT_DIR, filePath),
        token,
        line: findLineNumber(fileContent, token),
      });
    });
  });

  if (violations.length > 0) {
    logError('Legacy or placeholder tokens found in public route source', { violations });
    return { passed: false, violations };
  }

  logInfo('Public route source token check passed');
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

function verifySitemapNavigationLink() {
  if (!fs.existsSync(NAVIGATION_FILE)) {
    logError('Navigation configuration file missing', {
      file: path.relative(ROOT_DIR, NAVIGATION_FILE),
    });
    return { passed: false };
  }

  const navigationContent = fs.readFileSync(NAVIGATION_FILE, 'utf8');
  const hasSitemapXmlLink = /href:\s*['"]\/sitemap\.xml['"]/.test(navigationContent);
  const hasLegacySitemapLink = /href:\s*['"]\/sitemap['"]/.test(navigationContent);

  if (!hasSitemapXmlLink) {
    logError('Footer navigation is missing /sitemap.xml link');
    return { passed: false };
  }

  if (hasLegacySitemapLink) {
    logError('Legacy /sitemap footer link detected. Use /sitemap.xml only');
    return { passed: false };
  }

  logInfo('Sitemap navigation link check passed');
  return { passed: true };
}

function verifyBuildPipelineSeoChecks() {
  if (!fs.existsSync(PACKAGE_JSON_PATH)) {
    logError('package.json missing for build pipeline verification');
    return { passed: false };
  }

  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  const buildScript = packageJson?.scripts?.build;

  if (!buildScript || typeof buildScript !== 'string') {
    logError('Build script missing in package.json');
    return { passed: false };
  }

  const requiredScriptTokens = ['npm run verify:seo', 'npm run verify:seo:runtime'];
  const missingTokens = requiredScriptTokens.filter((token) => !buildScript.includes(token));

  if (missingTokens.length > 0) {
    logError('Build script missing required SEO verification steps', {
      missingTokens,
      buildScript,
    });
    return { passed: false, missingTokens };
  }

  logInfo('Build pipeline SEO check presence passed');
  return { passed: true, missingTokens: [] };
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
    verifyMetadataUsesSharedBuilder(),
    verifyMetadataPathAlignment(),
    verifyNoPlaceholderTokens(),
    verifyNoLegacyTokensInPublicCode(),
    verifyDynamicSeoFiles(),
    verifySitemapNavigationLink(),
    verifyBuildPipelineSeoChecks(),
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
