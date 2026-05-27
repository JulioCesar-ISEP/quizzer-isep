import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const DOCS_ROOT = path.join(ROOT, 'docs', 'system-documentation');

const US_START = 2;
const US_END = 40;

function padUs(n) {
  return `US${String(n).padStart(3, '0')}`;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeUtf8(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function stripFrontMatterLike(md) {
  return md.replace(/^\uFEFF/, '');
}

function extractLegacyBlock(implNotesMd) {
  const md = stripFrontMatterLike(implNotesMd);
  const marker = '## Conteúdo legado (antes da conversão para estrutura completa)';
  const idx = md.indexOf(marker);
  if (idx === -1) return null;
  const after = md.slice(idx + marker.length);
  // Find first US header inside legacy block
  const match = after.match(/\n\s*(#\s+US\d{3}[\s\S]*)$/m);
  if (!match) return null;
  return match[1].trimEnd();
}

function indexHeadings(md) {
  const re = /^##\s+(.+?)\s*$/gm;
  const headings = [];
  let m;
  while ((m = re.exec(md))) {
    headings.push({ title: m[1].trim(), index: m.index });
  }
  return headings;
}

function getSection(md, wantedTitles) {
  const headings = indexHeadings(md);
  const start = headings.find((h) => wantedTitles.includes(h.title));
  if (!start) return null;

  const startPos = start.index;
  const afterStart = md.slice(startPos);
  const next = headings
    .filter((h) => h.index > startPos)
    .sort((a, b) => a.index - b.index)[0];
  const endPos = next ? next.index : md.length;
  return md.slice(startPos, endPos).trimEnd();
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function extractCodeBlock(md, lang) {
  const re = new RegExp('```' + escapeRegExp(lang) + '\\s*\\n([\\s\\S]*?)\\n```', 'm');
  const m = md.match(re);
  return m ? m[1].trimEnd() : null;
}

function main() {
  for (let n = US_START; n <= US_END; n++) {
    const usId = padUs(n);
    if (usId === 'US001' || usId === 'US015') continue;

    const usDir = path.join(DOCS_ROOT, usId);
    const implNotesPath = path.join(usDir, 'implementation-notes.md');
    const legacyPath = path.join(usDir, 'legacy.md');
    let legacy = null;
    if (fs.existsSync(legacyPath)) {
      legacy = readUtf8(legacyPath).trimEnd();
    } else if (fs.existsSync(implNotesPath)) {
      const implNotesMd = readUtf8(implNotesPath);
      legacy = extractLegacyBlock(implNotesMd);
    }
    if (!legacy) continue;

    // Extract sections from legacy markdown
    const requirements = getSection(legacy, [
      'Requisitos (user story + critérios de aceitação)',
      'Requisitos',
    ]);

    const domain = getSection(legacy, ['Domínio (design)', 'Domínio']);
    const ports = getSection(legacy, ['Ports (hexagonal)', 'Ports']);
    const adapters = getSection(legacy, ['Adapters', 'Adapters (mapeamento)']);
    const contractsSection = getSection(legacy, ['Contracts (TypeScript)', 'Contracts']);
    const legacyImplNotes = getSection(legacy, [
      'Implementation notes (mapeamento para o código atual)',
      'Implementation notes (mapeamento)',
      'Implementation notes',
    ]);
    const legacyRefs = getSection(legacy, ['Referências (código atual)']);
    const legacySeeAlso = getSection(legacy, ['Ver também']);

    // Write requirements.md
    if (requirements) {
      writeUtf8(
        path.join(usDir, '01-requirements', 'requirements.md'),
        `# ${usId} — Requisitos\n\n${requirements.replace(/^##\s+Requisitos[^\n]*\n?/m, '').trim()}\n`
      );
    }

    // Write domain-rules.md
    if (domain) {
      writeUtf8(
        path.join(usDir, '02-domain', 'domain-rules.md'),
        `# ${usId} — Domínio\n\n${domain.replace(/^##\s+Domínio[^\n]*\n?/m, '').trim()}\n`
      );
    }

    // Write ports.md
    if (ports) {
      writeUtf8(
        path.join(usDir, '03-ports', 'ports.md'),
        `# ${usId} — Ports\n\n${ports.replace(/^##\s+Ports[^\n]*\n?/m, '').trim()}\n`
      );
    }

    // Write adapters.md
    if (adapters) {
      writeUtf8(
        path.join(usDir, '04-adapters', 'adapters.md'),
        `# ${usId} — Adapters\n\n${adapters.replace(/^##\s+Adapters[^\n]*\n?/m, '').trim()}\n`
      );
    }

    // Write interfaces.ts (best effort)
    if (contractsSection) {
      const tsBlock = extractCodeBlock(contractsSection, 'ts') || extractCodeBlock(contractsSection, 'typescript');
      if (tsBlock) {
        writeUtf8(path.join(usDir, '05-contracts', 'interfaces.ts'), tsBlock + '\n');
      }
    }

    // Archive legacy markdown into legacy.md
    // Ensure legacy archive exists
    if (!fs.existsSync(legacyPath)) writeUtf8(legacyPath, legacy.trimEnd() + '\n');

    // Rewrite implementation-notes.md to be clean
    const implParts = [];
    implParts.push(`# ${usId} — Implementation Notes`);
    implParts.push('');
    implParts.push('## Mapeamento para o código (quando implementado)');
    implParts.push('');
    implParts.push('- TODO: adicionar paths reais em `src/` quando houver implementação.');
    implParts.push('');
    if (legacyImplNotes) {
      implParts.push('## Notas herdadas (do draft anterior)');
      implParts.push('');
      implParts.push(legacyImplNotes.replace(/^##\s+Implementation notes[^\n]*\n?/m, '').trim());
      implParts.push('');
    }
    if (legacyRefs) {
      implParts.push('## Referências herdadas');
      implParts.push('');
      implParts.push(legacyRefs.replace(/^##\s+Referências[^\n]*\n?/m, '').trim());
      implParts.push('');
    }
    if (legacySeeAlso) {
      implParts.push('## Ver também');
      implParts.push('');
      implParts.push(legacySeeAlso.replace(/^##\s+Ver também[^\n]*\n?/m, '').trim());
      implParts.push('');
    }
    implParts.push('---');
    implParts.push('');
    implParts.push('## Arquivo');
    implParts.push('');
    implParts.push(`O draft anterior completo foi arquivado em \`./legacy.md\`.`);
    implParts.push('');

    // Ensure implementation-notes.md exists even if missing
    writeUtf8(implNotesPath, implParts.join('\n'));
  }

  console.log('Normalized US content into structured files for US002–US040 (excluding US001/US015).');
}

main();

