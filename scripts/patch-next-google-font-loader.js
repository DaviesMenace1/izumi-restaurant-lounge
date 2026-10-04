"use strict";

const fs = require("node:fs");
const path = require("node:path");

const nextRoot = path.resolve(__dirname, "../node_modules/next");
const loaderPath = path.join(
  nextRoot,
  "dist/compiled/@next/font/dist/google/loader.js",
);

if (!fs.existsSync(loaderPath)) {
  console.log("Next.js font loader not found; skipping the Google Fonts compatibility patch.");
  process.exit(0);
}

const vulnerableLine =
  "const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];";
const safeLine =
  "const ext = /\\.(woff|woff2|eot|ttf|otf)(\\?.*)?$/i.exec(googleFontFileUrl)?.[1] ?? 'woff2';";
const loader = fs.readFileSync(loaderPath, "utf8");

if (loader.includes(safeLine)) {
  console.log("Next.js Google Fonts extension fallback is already present.");
  process.exit(0);
}

if (!loader.includes(vulnerableLine)) {
  console.log(
    "Next.js Google Fonts loader no longer matches the known vulnerable code; no patch applied.",
  );
  process.exit(0);
}

fs.writeFileSync(loaderPath, loader.replace(vulnerableLine, safeLine));
console.log("Patched Next.js Google Fonts loader to handle extensionless URLs as woff2.");
