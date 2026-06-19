#!/usr/bin/env node
/**
 * Validates the OG image referenced by OG_DEFAULT_IMAGE_PATH.
 *
 * OG standard dimensions are 1200x630 (landscape). A portrait image gets
 * cropped by social platforms and Google Discover, hurting CTR.
 *
 * Exits 0 if the image is 1200x630, 1 otherwise.
 *
 * Usage:
 *   node scripts/check-og-image.js
 *   OG_DEFAULT_IMAGE_PATH=/path/to/image.jpg node scripts/check-og-image.js
 */
const fs = require('fs');
const path = require('path');

const IMAGE_PATH = process.env.OG_DEFAULT_IMAGE_PATH
  || path.join(process.cwd(), 'public', 'og-default.jpg');

function readPngDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  try {
    const header = Buffer.alloc(24);
    fs.readSync(fd, header, 0, 24, 0);
    if (header.slice(0, 8).toString('hex') !== '89504e470d0a1a0a') {
      throw new Error('Not a PNG file');
    }
    // PNG IHDR chunk: width and height are big-endian uint32 at offset 16 and 20.
    return {
      width: header.readUInt32BE(16),
      height: header.readUInt32BE(20),
    };
  } finally {
    fs.closeSync(fd);
  }
}

function readJpegDimensions(filePath) {
  const fd = fs.openSync(filePath, 'r');
  try {
    // 64KB is enough to find the SOF marker in any reasonable JPEG.
    const buffer = Buffer.alloc(65536);
    const bytesRead = fs.readSync(fd, buffer, 0, buffer.length, 0);
    let offset = 2; // Skip SOI marker (FFD8)
    while (offset < bytesRead) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      const segLength = buffer.readUInt16BE(offset + 2);
      // SOF0 (0xC0) through SOF15 (0xCF) all contain dimensions, except DHT (0xC4) and JPG (0xC8).
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8) {
        return {
          width: buffer.readUInt16BE(offset + 5),
          height: buffer.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + segLength;
    }
    throw new Error('No SOF marker found in JPEG');
  } finally {
    fs.closeSync(fd);
  }
}

function readImageDimensions(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.png') return readPngDimensions(filePath);
  if (ext === '.jpg' || ext === '.jpeg') return readJpegDimensions(filePath);
  throw new Error(`Unsupported image format: ${ext}`);
}

function main() {
  if (!fs.existsSync(IMAGE_PATH)) {
    console.error(`[check-og-image] ERROR: image not found at ${IMAGE_PATH}`);
    process.exit(1);
  }

  let dims;
  try {
    dims = readImageDimensions(IMAGE_PATH);
  } catch (err) {
    console.error(`[check-og-image] ERROR: failed to read dimensions: ${err.message}`);
    process.exit(1);
  }

  const targetWidth = 1200;
  const targetHeight = 630;
  const isCorrect = dims.width === targetWidth && dims.height === targetHeight;

  console.log(`[check-og-image] ${path.basename(IMAGE_PATH)}: dimensions: ${dims.width} x ${dims.height}`);
  if (isCorrect) {
    console.log(`[check-og-image] OK: dimensions match OG standard (${targetWidth}x${targetHeight})`);
    process.exit(0);
  } else {
    console.error(
      `[check-og-image] FAIL: dimensions ${dims.width}x${dims.height} do not match ` +
      `OG standard ${targetWidth}x${targetHeight}. Social platforms will crop this image.`
    );
    process.exit(1);
  }
}

main();