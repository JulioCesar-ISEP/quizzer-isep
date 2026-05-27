import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const SRC_ROOT = path.join(ROOT, 'src');
const DOCS_ROOT = path.join(ROOT, 'docs', 'system-documentation');

function listFiles(dir, exts) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listFiles(p, exts));
    else if (exts.includes(path.extname(e.name))) out.push(p);
  }
  return out;
}

function listDocsTextFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listDocsTextFiles(p));
    else if (/\.(md|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

function normalizeSlash(p) {
  return p.replaceAll('\\', '/');
}

function main() {
  const srcFiles = listFiles(SRC_ROOT, ['.js', '.jsx', '.ts', '.tsx'])
    .map((abs) => normalizeSlash(path.relative(ROOT, abs)));

  const docFiles = listDocsTextFiles(DOCS_ROOT);
  const docsText = docFiles
    .map((f) => fs.readFileSync(f, 'utf8'))
    .join('\n');

  const missing = [];
  for (const f of srcFiles) {
    if (!docsText.includes(f)) missing.push(f);
  }

  console.log(`Total src files: ${srcFiles.length}`);
  console.log(`Referenced in docs: ${srcFiles.length - missing.length}`);
  console.log(`Missing references: ${missing.length}`);
  if (missing.length) {
    console.log('\n--- Missing ---');
    missing.forEach((m) => console.log(m));
  }
}

main();

