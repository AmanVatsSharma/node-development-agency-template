#!/usr/bin/env node
/**
 * Generates public/og-default.jpg — a 1200x630 landscape OG image.
 *
 * Uses the company brand colors (vp-brand-deep navy background, vp-accent
 * orange for tagline) and the existing public/logo.png. Run this after any
 * brand refresh to keep OG images in sync.
 */
const path = require('node:path');
const sharp = require('sharp');

const BRAND_DEEP = '#0C1B33';
const BRAND_ACCENT = '#D4870A';
const TEXT_LIGHT = '#F4F4F5';
const WIDTH = 1200;
const HEIGHT = 630;

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const LOGO_PATH = path.join(PUBLIC_DIR, 'logo.png');
const OUTPUT_PATH = path.join(PUBLIC_DIR, 'og-default.jpg');

async function main() {
  // 1. Build the background SVG: navy fill, centered logo, tagline.
  //    Using SVG-as-source keeps text crisp at any resolution.
  const svgBackground = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${BRAND_DEEP}"/>
      <text
        x="600"
        y="510"
        font-family="-apple-system, system-ui, 'Segoe UI', sans-serif"
        font-size="44"
        font-weight="600"
        fill="${TEXT_LIGHT}"
        text-anchor="middle"
        letter-spacing="0.5"
      >Building Digital Excellence</text>
      <text
        x="600"
        y="555"
        font-family="-apple-system, system-ui, 'Segoe UI', sans-serif"
        font-size="22"
        font-weight="400"
        fill="${BRAND_ACCENT}"
        text-anchor="middle"
        letter-spacing="2"
      >VEDPRAGYA</text>
    </svg>
  `;

  // 2. Compose: SVG background + logo centered.
  //    Logo is 770x459 — fit within ~480px width to leave breathing room.
  const logoWidth = 480;
  const logoHeight = Math.round(459 * (logoWidth / 770));
  const logoBuffer = await sharp(LOGO_PATH)
    .resize({ width: logoWidth, withoutEnlargement: true })
    .toBuffer();

  let pipeline = sharp(Buffer.from(svgBackground)).composite([
    {
      input: logoBuffer,
      // Center horizontally, position vertically so logo + tagline stack nicely.
      top: Math.round((HEIGHT - logoHeight - 160) / 2),
      left: Math.round((WIDTH - logoWidth) / 2),
    },
  ]);

  // Try mozjpeg first (smaller files), fall back to standard JPEG if libvips
  // wasn't built with mozjpeg support.
  try {
    await pipeline
      .clone()
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(OUTPUT_PATH);
  } catch (err) {
    console.warn(`[generate-og-default] mozjpeg unavailable (${err.message}); using default JPEG encoder`);
    await pipeline
      .jpeg({ quality: 90 })
      .toFile(OUTPUT_PATH);
  }

  console.log(`[generate-og-default] wrote ${OUTPUT_PATH} (${WIDTH}x${HEIGHT} JPEG)`);
}

main().catch((err) => {
  console.error(`[generate-og-default] FAILED: ${err.message}`);
  process.exit(1);
});
