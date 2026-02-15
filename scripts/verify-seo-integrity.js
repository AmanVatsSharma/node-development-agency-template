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
 * 8. Package scripts expose verify:seo and verify:seo:runtime.
 * 9. Build pipeline runs SEO integrity + runtime checks with safe failure semantics.
 * 10. CI workflow executes SEO integrity + runtime checks.
 * 11. Shared SEO policy constants are used across routes/robots modules.
 * 12. Company profile SEO identity (website/email) is valid and non-placeholder.
 * 13. Root layout metadata uses canonical SEO constants.
 * 14. Core SEO files are free of placeholder/legacy tokens.
 * 15. Sitemap/robots implementation invariants and policy baselines are preserved.
 * 16. SEO module docs stay aligned with implementation checkpoints.
 * 17. Private route no-index policy remains enforced (admin/login).
 * 18. OG image asset references are valid for metadata generation.
 * 19. Root structured data wiring stays aligned with company profile constants.
 * 20. Structured data component defaults align with shared SEO constants.
 * 21. Legacy static SEO generator files are not present.
 *
 * Usage:
 *   node scripts/verify-seo-integrity.js
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();
const APP_DIR = path.join(ROOT_DIR, 'app');
const PAGES_DIR = path.join(APP_DIR, 'pages');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const APP_LAYOUT_FILE = path.join(APP_DIR, 'layout.tsx');
const ADMIN_LAYOUT_FILE = path.join(APP_DIR, 'admin', 'layout.tsx');
const LOGIN_PAGE_FILE = path.join(APP_DIR, 'login', 'page.tsx');
const SEO_STRUCTURED_DATA_FILE = path.join(APP_DIR, 'components', 'SEO', 'StructuredData.tsx');
const SEO_CONSTANTS_FILE = path.join(APP_DIR, 'lib', 'seo', 'constants.ts');
const SEO_README_FILE = path.join(APP_DIR, 'lib', 'seo', 'README.md');
const SITEMAP_FILE = path.join(APP_DIR, 'sitemap.ts');
const NAVIGATION_FILE = path.join(APP_DIR, 'data', 'navigation.ts');
const ROBOTS_FILE = path.join(APP_DIR, 'robots.ts');
const SEO_ROUTES_FILE = path.join(APP_DIR, 'lib', 'seo', 'routes.ts');
const COMPANY_PROFILE_FILE = path.join(APP_DIR, 'data', 'companyProfile.ts');
const PACKAGE_JSON_PATH = path.join(ROOT_DIR, 'package.json');
const SEO_CI_WORKFLOW_PATH = path.join(ROOT_DIR, '.github', 'workflows', 'seo-integrity.yml');

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

function isHttpUrl(value) {
  return /^https?:\/\//.test(value);
}

function toPublicAssetPath(rootRelativePath) {
  return path.join(PUBLIC_DIR, rootRelativePath.replace(/^\/+/, ''));
}

function verifyMetadataImageAssets() {
  const violations = [];

  if (!fs.existsSync(SEO_CONSTANTS_FILE)) {
    logError('SEO constants file missing for image asset validation', {
      file: path.relative(ROOT_DIR, SEO_CONSTANTS_FILE),
    });
    return { passed: false };
  }

  const seoConstantsContent = fs.readFileSync(SEO_CONSTANTS_FILE, 'utf8');
  const defaultImageMatch = seoConstantsContent.match(
    /SEO_DEFAULT_OG_IMAGE_PATH\s*=\s*([`'"])(.*?)\1/,
  );

  if (!defaultImageMatch) {
    violations.push({
      file: path.relative(ROOT_DIR, SEO_CONSTANTS_FILE),
      reason: 'SEO_DEFAULT_OG_IMAGE_PATH constant missing or not a string literal',
    });
  } else {
    const defaultImagePath = defaultImageMatch[2];
    if (isHttpUrl(defaultImagePath)) {
      // Absolute URLs are allowed and intentionally skipped for local file checks.
    } else if (!defaultImagePath.startsWith('/')) {
      violations.push({
        file: path.relative(ROOT_DIR, SEO_CONSTANTS_FILE),
        reason: 'SEO_DEFAULT_OG_IMAGE_PATH must be root-relative or absolute URL',
        value: defaultImagePath,
      });
    } else {
      const defaultImageAssetPath = toPublicAssetPath(defaultImagePath);
      if (!fs.existsSync(defaultImageAssetPath)) {
        violations.push({
          file: path.relative(ROOT_DIR, SEO_CONSTANTS_FILE),
          reason: 'SEO_DEFAULT_OG_IMAGE_PATH points to missing public asset',
          value: defaultImagePath,
          expectedAsset: path.relative(ROOT_DIR, defaultImageAssetPath),
        });
      }
    }
  }

  const metadataBuilderFiles = walkFiles(PAGES_DIR).filter((filePath) =>
    /(metadata\.ts|layout\.tsx|page\.tsx)$/.test(filePath),
  );
  const metadataCallPattern = /buildPageMetadata\(\s*\{([\s\S]*?)\}\s*\)/g;

  metadataBuilderFiles.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (!/buildPageMetadata\(/.test(fileContent)) {
      return;
    }

    const metadataCalls = [...fileContent.matchAll(metadataCallPattern)];
    metadataCalls.forEach((callMatch) => {
      const metadataObjectBody = callMatch[1];
      const imagePathMatch = metadataObjectBody.match(/imagePath\s*:\s*([`'"])(.*?)\1/);
      if (!imagePathMatch) {
        return;
      }

      const imagePathValue = imagePathMatch[2];
      if (isHttpUrl(imagePathValue)) {
        return;
      }

      if (!imagePathValue.startsWith('/')) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          reason: 'imagePath must be root-relative or absolute URL',
          value: imagePathValue,
          line: findLineNumber(fileContent, imagePathMatch[0]),
        });
        return;
      }

      const imageAssetPath = toPublicAssetPath(imagePathValue);
      if (!fs.existsSync(imageAssetPath)) {
        violations.push({
          file: path.relative(ROOT_DIR, filePath),
          reason: 'imagePath points to missing public asset',
          value: imagePathValue,
          expectedAsset: path.relative(ROOT_DIR, imageAssetPath),
          line: findLineNumber(fileContent, imagePathMatch[0]),
        });
      }
    });
  });

  if (violations.length > 0) {
    logError('Metadata image asset verification failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Metadata image asset verification passed');
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

  const verifySeoIndex = buildScript.indexOf('npm run verify:seo');
  const verifySeoRuntimeIndex = buildScript.indexOf('npm run verify:seo:runtime');
  if (verifySeoIndex > verifySeoRuntimeIndex) {
    logError('Build script should run verify:seo before verify:seo:runtime', { buildScript });
    return { passed: false };
  }

  const hasScopedWasmFallback =
    /\(npm run build:wasm\s*\|\|\s*echo\s+['"]⚠️ WASM build skipped['"]\)/.test(buildScript);
  if (!hasScopedWasmFallback) {
    logError('Build script should scope wasm fallback so SEO verification failures cannot be masked', {
      buildScript,
      expectedPattern: "(npm run build:wasm || echo '⚠️ WASM build skipped')",
    });
    return { passed: false };
  }

  logInfo('Build pipeline SEO check presence passed');
  return { passed: true, missingTokens: [] };
}

function verifySeoScriptsRegistered() {
  if (!fs.existsSync(PACKAGE_JSON_PATH)) {
    logError('package.json missing for script registration verification');
    return { passed: false };
  }

  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
  const scripts = packageJson?.scripts;

  if (!scripts || typeof scripts !== 'object') {
    logError('Scripts section missing in package.json');
    return { passed: false };
  }

  const requiredScriptKeys = ['verify:seo', 'verify:seo:runtime'];
  const missingScriptKeys = requiredScriptKeys.filter((key) => !scripts[key]);

  if (missingScriptKeys.length > 0) {
    logError('Required SEO verification scripts are missing in package.json', {
      missingScriptKeys,
    });
    return { passed: false, missingScriptKeys };
  }

  logInfo('SEO script registration check passed');
  return { passed: true, missingScriptKeys: [] };
}

function verifySeoCiWorkflow() {
  if (!fs.existsSync(SEO_CI_WORKFLOW_PATH)) {
    logError('SEO CI workflow file missing', {
      file: path.relative(ROOT_DIR, SEO_CI_WORKFLOW_PATH),
    });
    return { passed: false };
  }

  const workflowContent = fs.readFileSync(SEO_CI_WORKFLOW_PATH, 'utf8');
  const requiredWorkflowTokens = ['npm run verify:seo', 'npm run verify:seo:runtime'];
  const missingWorkflowTokens = requiredWorkflowTokens.filter(
    (token) => !workflowContent.includes(token),
  );

  if (!/push:/m.test(workflowContent) || !/pull_request:/m.test(workflowContent)) {
    logError('SEO workflow should run on both push and pull_request events');
    return { passed: false };
  }

  if (missingWorkflowTokens.length > 0) {
    logError('SEO CI workflow missing required verification commands', {
      missingWorkflowTokens,
      file: path.relative(ROOT_DIR, SEO_CI_WORKFLOW_PATH),
    });
    return { passed: false, missingWorkflowTokens };
  }

  logInfo('SEO CI workflow verification passed');
  return { passed: true, missingWorkflowTokens: [] };
}

function verifySharedSeoPolicyConstantsUsage() {
  const violations = [];

  if (!fs.existsSync(ROBOTS_FILE)) {
    violations.push({
      file: path.relative(ROOT_DIR, ROBOTS_FILE),
      reason: 'robots.ts file missing',
    });
  } else {
    const robotsContent = fs.readFileSync(ROBOTS_FILE, 'utf8');
    if (!/SEO_ROBOTS_DISALLOW_PATHS/.test(robotsContent)) {
      violations.push({
        file: path.relative(ROOT_DIR, ROBOTS_FILE),
        reason: 'robots.ts should use SEO_ROBOTS_DISALLOW_PATHS from shared constants',
      });
    }
  }

  if (!fs.existsSync(SEO_ROUTES_FILE)) {
    violations.push({
      file: path.relative(ROOT_DIR, SEO_ROUTES_FILE),
      reason: 'routes.ts file missing',
    });
  } else {
    const routesContent = fs.readFileSync(SEO_ROUTES_FILE, 'utf8');
    if (!/SEO_BLOCKED_ROUTE_PREFIXES/.test(routesContent)) {
      violations.push({
        file: path.relative(ROOT_DIR, SEO_ROUTES_FILE),
        reason: 'routes.ts should use SEO_BLOCKED_ROUTE_PREFIXES from shared constants',
      });
    }
  }

  if (violations.length > 0) {
    logError('Shared SEO policy constant usage check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Shared SEO policy constant usage check passed');
  return { passed: true, violations: [] };
}

function verifyCompanyProfileSeoIdentity() {
  if (!fs.existsSync(COMPANY_PROFILE_FILE)) {
    logError('Company profile file missing', {
      file: path.relative(ROOT_DIR, COMPANY_PROFILE_FILE),
    });
    return { passed: false };
  }

  const companyProfileContent = fs.readFileSync(COMPANY_PROFILE_FILE, 'utf8');

  const websiteMatch = companyProfileContent.match(/websiteUrl:\s*["']([^"']+)["']/);
  const contactEmailMatch = companyProfileContent.match(/contactEmail:\s*["']([^"']+)["']/);

  if (!websiteMatch) {
    logError('companyProfile.websiteUrl is missing or malformed');
    return { passed: false };
  }

  if (!contactEmailMatch) {
    logError('companyProfile.contactEmail is missing or malformed');
    return { passed: false };
  }

  const websiteUrl = websiteMatch[1].trim();
  const contactEmail = contactEmailMatch[1].trim();

  const websiteHasPlaceholderToken = PLACEHOLDER_PATTERNS.some((token) => websiteUrl.includes(token));
  if (websiteHasPlaceholderToken) {
    logError('companyProfile.websiteUrl contains placeholder/legacy token', { websiteUrl });
    return { passed: false, websiteUrl };
  }

  if (!websiteUrl.startsWith('https://')) {
    logError('companyProfile.websiteUrl must use HTTPS', { websiteUrl });
    return { passed: false, websiteUrl };
  }

  const hasValidEmailShape = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail);
  if (!hasValidEmailShape) {
    logError('companyProfile.contactEmail appears invalid', { contactEmail });
    return { passed: false, contactEmail };
  }

  const emailHasPlaceholderToken = PLACEHOLDER_PATTERNS.some((token) => contactEmail.includes(token));
  if (emailHasPlaceholderToken) {
    logError('companyProfile.contactEmail contains placeholder/legacy token', { contactEmail });
    return { passed: false, contactEmail };
  }

  logInfo('Company profile SEO identity check passed', { websiteUrl, contactEmail });
  return { passed: true, websiteUrl, contactEmail };
}

function verifyRootLayoutMetadataConfiguration() {
  if (!fs.existsSync(APP_LAYOUT_FILE)) {
    logError('Root layout file missing for metadata verification', {
      file: path.relative(ROOT_DIR, APP_LAYOUT_FILE),
    });
    return { passed: false };
  }

  const layoutContent = fs.readFileSync(APP_LAYOUT_FILE, 'utf8');
  const violations = [];

  if (!/export const metadata\s*:\s*Metadata\s*=/.test(layoutContent)) {
    violations.push('Root layout must export typed metadata');
  }

  if (!/metadataBase:\s*new URL\(SEO_SITE_URL\)/.test(layoutContent)) {
    violations.push('Root metadata should set metadataBase using SEO_SITE_URL');
  }

  if (!/alternates:\s*\{[\s\S]*canonical:\s*['"`]\/['"`]/.test(layoutContent)) {
    violations.push('Root metadata should define canonical "/" in alternates');
  }

  if (!/toAbsoluteSeoUrl\(SEO_DEFAULT_OG_IMAGE_PATH\)/.test(layoutContent)) {
    violations.push('Root metadata should use SEO_DEFAULT_OG_IMAGE_PATH via toAbsoluteSeoUrl');
  }

  if (violations.length > 0) {
    logError('Root layout metadata configuration check failed', {
      file: path.relative(ROOT_DIR, APP_LAYOUT_FILE),
      violations,
    });
    return { passed: false, violations };
  }

  logInfo('Root layout metadata configuration check passed');
  return { passed: true, violations: [] };
}

function verifyCoreSeoFilesNoPlaceholderTokens() {
  const coreSeoFiles = [APP_LAYOUT_FILE, SEO_STRUCTURED_DATA_FILE, SEO_CONSTANTS_FILE];
  const violations = [];

  coreSeoFiles.forEach((filePath) => {
    if (!fs.existsSync(filePath)) {
      violations.push({
        file: path.relative(ROOT_DIR, filePath),
        reason: 'Required SEO core file missing',
      });
      return;
    }

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
    logError('Core SEO files contain placeholder/legacy tokens', { violations });
    return { passed: false, violations };
  }

  logInfo('Core SEO file placeholder check passed');
  return { passed: true, violations: [] };
}

function verifySeoModuleDocsConsistency() {
  if (!fs.existsSync(SEO_README_FILE)) {
    logError('SEO module README is missing', {
      file: path.relative(ROOT_DIR, SEO_README_FILE),
    });
    return { passed: false };
  }

  const readmeContent = fs.readFileSync(SEO_README_FILE, 'utf8');
  const requiredDocTokens = [
    'flowchart TD',
    'buildPageMetadata',
    '/sitemap.xml',
    '/robots.txt',
    'npm run verify:seo',
    'npm run verify:seo:runtime',
    'SEO_BLOCKED_ROUTE_PREFIXES',
    'SEO_ROBOTS_DISALLOW_PATHS',
    'SEO_DEFAULT_DESCRIPTION',
  ];

  const missingDocTokens = requiredDocTokens.filter((token) => !readmeContent.includes(token));

  if (missingDocTokens.length > 0) {
    logError('SEO module README is missing required implementation references', {
      file: path.relative(ROOT_DIR, SEO_README_FILE),
      missingDocTokens,
    });
    return { passed: false, missingDocTokens };
  }

  logInfo('SEO module docs consistency check passed');
  return { passed: true, missingDocTokens: [] };
}

function verifyPrivateRouteNoIndexPolicy() {
  const violations = [];

  if (!fs.existsSync(ADMIN_LAYOUT_FILE)) {
    violations.push({
      file: path.relative(ROOT_DIR, ADMIN_LAYOUT_FILE),
      reason: 'Admin layout file missing',
    });
  } else {
    const adminLayoutContent = fs.readFileSync(ADMIN_LAYOUT_FILE, 'utf8');
    if (!/name=["']robots["']\s+content=["']noindex,\s*nofollow["']/.test(adminLayoutContent)) {
      violations.push({
        file: path.relative(ROOT_DIR, ADMIN_LAYOUT_FILE),
        reason: 'Admin layout should include <meta name="robots" content="noindex, nofollow" />',
      });
    }
  }

  if (!fs.existsSync(LOGIN_PAGE_FILE)) {
    violations.push({
      file: path.relative(ROOT_DIR, LOGIN_PAGE_FILE),
      reason: 'Login page file missing',
    });
  } else {
    const loginPageContent = fs.readFileSync(LOGIN_PAGE_FILE, 'utf8');
    if (!/robots:\s*\{[\s\S]*index:\s*false[\s\S]*follow:\s*false[\s\S]*\}/.test(loginPageContent)) {
      violations.push({
        file: path.relative(ROOT_DIR, LOGIN_PAGE_FILE),
        reason: 'Login page metadata should enforce robots index:false and follow:false',
      });
    }
  }

  if (violations.length > 0) {
    logError('Private route no-index policy check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Private route no-index policy check passed');
  return { passed: true, violations: [] };
}

function verifyRootStructuredDataWiring() {
  if (!fs.existsSync(APP_LAYOUT_FILE)) {
    logError('Root layout file missing for structured data wiring check', {
      file: path.relative(ROOT_DIR, APP_LAYOUT_FILE),
    });
    return { passed: false };
  }

  const layoutContent = fs.readFileSync(APP_LAYOUT_FILE, 'utf8');
  const requiredPatterns = [
    {
      pattern: /OrganizationStructuredData,\s*WebsiteStructuredData/,
      reason: 'Root layout should import OrganizationStructuredData and WebsiteStructuredData',
    },
    {
      pattern: /<OrganizationStructuredData[\s\S]*name=\{companyProfile\.brandName\}/,
      reason: 'Organization structured data should use companyProfile.brandName',
    },
    {
      pattern: /<OrganizationStructuredData[\s\S]*url=\{companyProfile\.websiteUrl\}/,
      reason: 'Organization structured data should use companyProfile.websiteUrl',
    },
    {
      pattern: /contactPoint=\{\{\s*contactType:\s*["']customer service["'],\s*email:\s*companyProfile\.contactEmail\s*\}\}/,
      reason: 'Organization structured data contact email should come from companyProfile.contactEmail',
    },
    {
      pattern: /<WebsiteStructuredData[\s\S]*url=\{companyProfile\.websiteUrl\}/,
      reason: 'Website structured data should use companyProfile.websiteUrl',
    },
    {
      pattern: /publisher=\{companyProfile\.legalName\}/,
      reason: 'Website structured data publisher should use companyProfile.legalName',
    },
  ];

  const violations = requiredPatterns
    .filter(({ pattern }) => !pattern.test(layoutContent))
    .map(({ reason }) => ({
      file: path.relative(ROOT_DIR, APP_LAYOUT_FILE),
      reason,
    }));

  if (violations.length > 0) {
    logError('Root structured data wiring check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Root structured data wiring check passed');
  return { passed: true, violations: [] };
}

function verifyStructuredDataComponentInvariants() {
  if (!fs.existsSync(SEO_STRUCTURED_DATA_FILE)) {
    logError('Structured data component file missing for invariant checks', {
      file: path.relative(ROOT_DIR, SEO_STRUCTURED_DATA_FILE),
    });
    return { passed: false };
  }

  const structuredDataContent = fs.readFileSync(SEO_STRUCTURED_DATA_FILE, 'utf8');
  const requiredPatterns = [
    {
      pattern: /import\s*\{\s*SEO_DEFAULT_DESCRIPTION\s*\}\s*from\s*['"]@\/app\/lib\/seo\/constants['"]/,
      reason: 'StructuredData component should import SEO_DEFAULT_DESCRIPTION from SEO constants',
    },
    {
      pattern: /description\s*=\s*SEO_DEFAULT_DESCRIPTION/,
      reason: 'WebsiteStructuredData default description should use SEO_DEFAULT_DESCRIPTION',
    },
    {
      pattern: /name:\s*companyProfile\.brandName/,
      reason: 'StructuredData default organization name should use companyProfile.brandName',
    },
    {
      pattern: /url:\s*companyProfile\.websiteUrl/,
      reason: 'StructuredData default organization URL should use companyProfile.websiteUrl',
    },
    {
      pattern: /email:\s*companyProfile\.contactEmail/,
      reason: 'StructuredData default contact email should use companyProfile.contactEmail',
    },
  ];

  const violations = requiredPatterns
    .filter(({ pattern }) => !pattern.test(structuredDataContent))
    .map(({ reason }) => ({
      file: path.relative(ROOT_DIR, SEO_STRUCTURED_DATA_FILE),
      reason,
    }));

  if (violations.length > 0) {
    logError('Structured data component invariant check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Structured data component invariant check passed');
  return { passed: true, violations: [] };
}

function verifySitemapImplementationInvariants() {
  if (!fs.existsSync(SITEMAP_FILE)) {
    logError('Sitemap implementation file missing', {
      file: path.relative(ROOT_DIR, SITEMAP_FILE),
    });
    return { passed: false };
  }

  const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8');
  const requiredPatterns = [
    {
      pattern: /getStaticSeoRoutes\(/,
      reason: 'sitemap should source static routes from getStaticSeoRoutes()',
    },
    {
      pattern: /toAbsoluteSeoUrl\(/,
      reason: 'sitemap should canonicalize URLs via toAbsoluteSeoUrl()',
    },
    {
      pattern: /new Map<string,\s*MetadataRoute\.Sitemap\[number\]>/,
      reason: 'sitemap should deduplicate URLs using a Map',
    },
    {
      pattern: /Array\.from\(dedupedByUrl\.values\(\)\)\.sort\(/,
      reason: 'sitemap output should be sorted deterministically',
    },
    {
      pattern: /fallbackBlogPosts/,
      reason: 'sitemap should keep blog fallback source for DB outage scenarios',
    },
    {
      pattern: /if \(path === '\/'\) return 1\.0;/,
      reason: 'sitemap priority helper should keep homepage priority baseline at 1.0',
    },
    {
      pattern: /if \(path === '\/pages\/services'\) return 0\.95;/,
      reason: 'sitemap priority helper should keep services priority baseline at 0.95',
    },
    {
      pattern: /if \(path === '\/pages\/contact'\) return 0\.92;/,
      reason: 'sitemap priority helper should keep contact priority baseline at 0.92',
    },
    {
      pattern: /priority:\s*0\.78/,
      reason: 'sitemap blog detail entries should keep priority baseline at 0.78',
    },
    {
      pattern: /if \(path === '\/pages\/blog'\) return 'daily';/,
      reason: 'sitemap changeFrequency helper should keep blog listing baseline at daily',
    },
    {
      pattern: /if \(path\.startsWith\('\/pages\/blog\/'\)\) return 'weekly';/,
      reason: 'sitemap changeFrequency helper should keep blog detail baseline at weekly',
    },
    {
      pattern: /return 'monthly';/,
      reason: 'sitemap changeFrequency helper should keep default baseline at monthly',
    },
  ];

  const violations = requiredPatterns
    .filter(({ pattern }) => !pattern.test(sitemapContent))
    .map(({ reason }) => ({
      file: path.relative(ROOT_DIR, SITEMAP_FILE),
      reason,
    }));

  if (violations.length > 0) {
    logError('Sitemap implementation invariant check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Sitemap implementation invariant check passed');
  return { passed: true, violations: [] };
}

function verifyRobotsImplementationInvariants() {
  if (!fs.existsSync(ROBOTS_FILE)) {
    logError('Robots implementation file missing', {
      file: path.relative(ROOT_DIR, ROBOTS_FILE),
    });
    return { passed: false };
  }

  const robotsContent = fs.readFileSync(ROBOTS_FILE, 'utf8');
  const requiredPatterns = [
    {
      pattern: /userAgent:\s*['"`]\*['"`]/,
      reason: 'robots should keep wildcard userAgent rule for global crawler policy',
    },
    {
      pattern: /allow:\s*['"`]\/['"`]/,
      reason: 'robots should explicitly allow root path for wildcard crawler rule',
    },
    {
      pattern: /disallow:\s*\[\.\.\.SEO_ROBOTS_DISALLOW_PATHS\]/,
      reason: 'robots should derive disallow list from SEO_ROBOTS_DISALLOW_PATHS',
    },
    {
      pattern: /sitemap:\s*toAbsoluteSeoUrl\(['"`]\/sitemap\.xml['"`]\)/,
      reason: 'robots should publish canonical sitemap URL via toAbsoluteSeoUrl',
    },
    {
      pattern: /host:\s*SEO_SITE_URL/,
      reason: 'robots host should be derived from SEO_SITE_URL',
    },
  ];

  const violations = requiredPatterns
    .filter(({ pattern }) => !pattern.test(robotsContent))
    .map(({ reason }) => ({
      file: path.relative(ROOT_DIR, ROBOTS_FILE),
      reason,
    }));

  if (violations.length > 0) {
    logError('Robots implementation invariant check failed', { violations });
    return { passed: false, violations };
  }

  logInfo('Robots implementation invariant check passed');
  return { passed: true, violations: [] };
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
    verifyMetadataImageAssets(),
    verifyNoPlaceholderTokens(),
    verifyNoLegacyTokensInPublicCode(),
    verifyDynamicSeoFiles(),
    verifySitemapNavigationLink(),
    verifySeoScriptsRegistered(),
    verifyBuildPipelineSeoChecks(),
    verifySeoCiWorkflow(),
    verifySharedSeoPolicyConstantsUsage(),
    verifyCompanyProfileSeoIdentity(),
    verifyRootLayoutMetadataConfiguration(),
    verifyCoreSeoFilesNoPlaceholderTokens(),
    verifySitemapImplementationInvariants(),
    verifyRobotsImplementationInvariants(),
    verifySeoModuleDocsConsistency(),
    verifyPrivateRouteNoIndexPolicy(),
    verifyRootStructuredDataWiring(),
    verifyStructuredDataComponentInvariants(),
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
