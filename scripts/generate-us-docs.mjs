import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const DOCS_ROOT = path.join(ROOT, 'docs', 'system-documentation');

const US_START = 2;
const US_END = 40;

const SUBFILES = [
  { rel: path.join('01-requirements', 'requirements.md'), title: 'Requisitos' },
  { rel: path.join('02-domain', 'domain-rules.md'), title: 'Domínio' },
  { rel: path.join('03-ports', 'ports.md'), title: 'Ports' },
  { rel: path.join('04-adapters', 'adapters.md'), title: 'Adapters' },
  { rel: path.join('05-contracts', 'interfaces.ts'), title: 'Contracts' },
  { rel: 'implementation-notes.md', title: 'Implementation Notes' },
];

function padUs(n) {
  return `US${String(n).padStart(3, '0')}`;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readIfExists(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

function writeFileIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) return;
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function writeFileOverwrite(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function makeIndexReadme(usId, existingTitleLine) {
  const title = existingTitleLine?.trim() || `${usId}`;
  return [
    title.startsWith('#') ? title : `# ${title}`,
    '',
    '## Links Rápidos',
    '',
    ...SUBFILES.map((f) => `- [${f.title}](./${f.rel.replaceAll('\\', '/')})`),
    '',
    '## Status',
    '',
    '- **Estado no código**: Planeado/Parcial/Implementado (atualizar quando houver implementação).',
    '',
  ].join('\n');
}

function extractFirstHeaderLine(markdown) {
  if (!markdown) return null;
  const line = markdown.split(/\r?\n/).find((l) => l.trim().startsWith('#'));
  return line || null;
}

function main() {
  if (!fs.existsSync(DOCS_ROOT)) {
    console.error(`Docs root not found: ${DOCS_ROOT}`);
    process.exit(1);
  }

  for (let n = US_START; n <= US_END; n++) {
    const usId = padUs(n);
    const usDir = path.join(DOCS_ROOT, usId);

    // Skip US001 and US015 (already have full structure)
    if (usId === 'US001' || usId === 'US015') continue;

    ensureDir(usDir);

    const readmePath = path.join(usDir, `${usId}-README.md`);
    const existingReadme = readIfExists(readmePath);
    const headerLine = extractFirstHeaderLine(existingReadme);

    // Move existing single-file content into implementation-notes (append, keep)
    const implNotesPath = path.join(usDir, 'implementation-notes.md');
    if (existingReadme && !fs.existsSync(implNotesPath)) {
      writeFileOverwrite(
        implNotesPath,
        [
          `# ${usId} — Implementation Notes`,
          '',
          '## Conteúdo legado (antes da conversão para estrutura completa)',
          '',
          existingReadme.trimEnd(),
          '',
        ].join('\n')
      );
    }

    // Create missing subfiles with placeholders
    writeFileIfMissing(
      path.join(usDir, '01-requirements', 'requirements.md'),
      `# ${usId} — Requisitos\n\n- TODO: user story + critérios de aceitação.\n`
    );
    writeFileIfMissing(
      path.join(usDir, '02-domain', 'domain-rules.md'),
      `# ${usId} — Domínio\n\n- TODO: regras de domínio e invariantes.\n`
    );
    writeFileIfMissing(
      path.join(usDir, '03-ports', 'ports.md'),
      `# ${usId} — Ports\n\n- TODO: portas de entrada/saída e responsabilidades.\n`
    );
    writeFileIfMissing(
      path.join(usDir, '04-adapters', 'adapters.md'),
      `# ${usId} — Adapters\n\n- TODO: mapeamento para UI/persistência/conteúdo.\n`
    );
    writeFileIfMissing(
      path.join(usDir, '05-contracts', 'interfaces.ts'),
      `// ${usId} — Contracts\n// TODO: definir contratos TypeScript (source-of-truth deve ficar em src/ports/**/contracts.ts)\nexport {};\n`
    );
    writeFileIfMissing(
      implNotesPath,
      `# ${usId} — Implementation Notes\n\n- TODO: decisões e mapeamento para caminhos em src/.\n`
    );

    // Rewrite README as index with links
    writeFileOverwrite(readmePath, makeIndexReadme(usId, headerLine));
  }

  console.log('US docs structure generated/normalized for US002–US040 (excluding US001/US015).');
}

main();

