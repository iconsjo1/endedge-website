/**
 * Generates favicon.ico + PNGs Google/Search can crawl from app/icon.svg.
 * Run: npm run generate:favicons
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "app/icon.svg"));

const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const png48 = await sharp(svg).resize(48, 48).png().toBuffer();

writeFileSync(join(root, "app/favicon.ico"), await toIco([png16, png32, png48]));

await sharp(svg).resize(48, 48).png().toFile(join(root, "public/favicon-48.png"));
await sharp(svg).resize(192, 192).png().toFile(join(root, "public/icon-192.png"));
await sharp(svg).resize(512, 512).png().toFile(join(root, "public/icon-512.png"));

console.log(
  "Generated app/favicon.ico, public/favicon-48.png, public/icon-192.png, public/icon-512.png",
);
