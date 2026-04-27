// Sanitize landing-page screenshots:
//   * Replace personal photo (top-right avatar circle) with the procedural
//     Flowtr avatar_0.png in every screenshot that shows the in-app HUD.
//   * For profile page: also replace the larger heraldic-banner photo and
//     redact the email address with a coral pill.
//
// Output: ../public/screenshots-clean/<same name>
//
// Run: node scripts/sanitize-screenshots.mjs

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IN_DIR = path.join(ROOT, 'public', 'screenshots');
const OUT_DIR = path.join(ROOT, 'public', 'screenshots-clean');
const AVATAR_PATH = path.join(ROOT, 'public', '_assets', 'avatar_0.png');

// Reference design coords (1080x2340 native A35 screenshot)
const REF_WIDTH = 1080;
// Defensive blackout: cover any photo bleed (some HUD variants render the
// avatar as a square that extends well below the visible circular mask
// — shoulders/torso were leaking on map views).
const TOP_RIGHT_BLACKOUT = { x: 800, y: 0, w: 280, h: 360 };
const TOP_RIGHT_AVATAR = { x: 870, y: 50, size: 160 };
const PROFILE_CENTER_PHOTO = { x: 470, y: 175, size: 180 };
const PROFILE_EMAIL_BAR = { x: 240, y: 700, w: 600, h: 60 };

// Files that have NO top-right avatar (overlay covers it / not a map view)
const SKIP_TOP_RIGHT = new Set([
  'conquistado x m2.png',
  'territorio conquistado pagina com badges e dados da corrida.png',
  'escolha de territorio por reclamar, terminar etc.png',
]);

await fs.mkdir(OUT_DIR, { recursive: true });

const files = (await fs.readdir(IN_DIR)).filter(f =>
  /\.(jpe?g|png)$/i.test(f),
);

for (const file of files) {
  const inputPath = path.join(IN_DIR, file);
  const outputPath = path.join(OUT_DIR, file);

  const meta = await sharp(inputPath).metadata();
  const scale = meta.width / REF_WIDTH;
  const overlays = [];

  // 1. Top-right avatar swap (most map / HUD screens).
  // First paint a transparent-edged dark blackout that fully covers the
  // photo region (handles square-photo variants where the user image
  // extends below the circular mask), then drop the procedural avatar
  // circle on top so it still reads as an avatar UI element.
  if (!SKIP_TOP_RIGHT.has(file)) {
    const bw = Math.round(TOP_RIGHT_BLACKOUT.w * scale);
    const bh = Math.round(TOP_RIGHT_BLACKOUT.h * scale);
    const bx = Math.round(TOP_RIGHT_BLACKOUT.x * scale);
    const by = Math.round(TOP_RIGHT_BLACKOUT.y * scale);
    // Solid dark patch flush to the screen corner, with only the inner
    // (left) edge softly faded into the underlying map. Top/right/bottom
    // stay opaque so no skin tone can bleed through near the screen edge.
    const blackoutSvg = `
      <svg width="${bw}" height="${bh}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0%" y1="50%" x2="35%" y2="50%">
            <stop offset="0%" stop-color="#0a0a0a" stop-opacity="0"/>
            <stop offset="100%" stop-color="#0a0a0a" stop-opacity="1"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${bw}" height="${bh}" fill="url(#g)"/>
      </svg>`;
    overlays.push({ input: Buffer.from(blackoutSvg), left: bx, top: by });

    const sz = Math.round(TOP_RIGHT_AVATAR.size * scale);
    const ax = Math.round(TOP_RIGHT_AVATAR.x * scale);
    const ay = Math.round(TOP_RIGHT_AVATAR.y * scale);
    const buf = await sharp(AVATAR_PATH)
      .resize(sz, sz)
      .composite([
        {
          // Mask to circle shape so it matches the in-app circular avatar
          input: Buffer.from(
            `<svg width="${sz}" height="${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${sz/2}" fill="white"/></svg>`,
          ),
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer();
    overlays.push({ input: buf, left: ax, top: ay });
  }

  // 2. Profile page — center heraldic photo + email redaction
  if (file.toLowerCase().includes('profile')) {
    // Center photo (inside the gonfalon)
    const sz = Math.round(PROFILE_CENTER_PHOTO.size * scale);
    const cx = Math.round(PROFILE_CENTER_PHOTO.x * scale);
    const cy = Math.round(PROFILE_CENTER_PHOTO.y * scale);
    const centerBuf = await sharp(AVATAR_PATH)
      .resize(sz, sz)
      .composite([
        {
          input: Buffer.from(
            `<svg width="${sz}" height="${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${sz/2}" fill="white"/></svg>`,
          ),
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer();
    overlays.push({ input: centerBuf, left: cx, top: cy });

    // Email pill — coral rounded rectangle "(EMAIL OCULTO)"
    const ew = Math.round(PROFILE_EMAIL_BAR.w * scale);
    const eh = Math.round(PROFILE_EMAIL_BAR.h * scale);
    const ex = Math.round(PROFILE_EMAIL_BAR.x * scale);
    const ey = Math.round(PROFILE_EMAIL_BAR.y * scale);
    const emailSvg = `
      <svg width="${ew}" height="${eh}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="${ew}" height="${eh}" rx="${eh/2}" fill="#1a1a1a"/>
        <text x="50%" y="60%" font-family="sans-serif" font-size="${Math.round(28 * scale)}" font-weight="700" fill="#FF5733" text-anchor="middle" dominant-baseline="middle">EMAIL OCULTO</text>
      </svg>`;
    overlays.push({
      input: Buffer.from(emailSvg),
      left: ex,
      top: ey,
    });
  }

  let pipeline = sharp(inputPath);
  if (overlays.length > 0) pipeline = pipeline.composite(overlays);
  await pipeline.toFile(outputPath);
  console.log(`✓ ${file}  (overlays: ${overlays.length})`);
}

console.log('\nDone. Output:', OUT_DIR);
