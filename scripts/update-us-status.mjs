import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const docsRoot = path.join(repoRoot, 'docs', 'system-documentation');

function inferStatusFromImplementationNotes(content) {
  const hasSrcRefs = /\bsrc[\\/]/.test(content);
  if (!hasSrcRefs) return 'Planeado';

  // "Implementado" must be explicit (avoid matching headings like "quando implementado")
  const explicitImplemented =
    /^\s*-\s*Implementad[oa]\b/im.test(content) ||
    /\bImplementad[oa]\s+(no|na|em)\b/i.test(content);

  // Checkmarks only count if they're in the "O que está implementado" section/table.
  const implementedSectionMatch = content.match(
    /##\s+O que está implementado[\s\S]*?(?=^##\s+|\Z)/m
  );
  const implementedSectionHasCheck =
    implementedSectionMatch ? /✓/.test(implementedSectionMatch[0]) : false;

  if (explicitImplemented || implementedSectionHasCheck) return 'Implementado';

  return 'Parcial';
}

function upsertStatusLineInREADME(readmeContent, status) {
  // Replace the placeholder line:
  // - **Estado no código**: Planeado/Parcial/Implementado (atualizar quando houver implementação).
  const re = /- \*\*Estado no código\*\*:\s*.*$/m;
  if (re.test(readmeContent)) {
    return readmeContent.replace(re, `- **Estado no código**: ${status}.`);
  }

  // Fallback: inject into "## Status" section if present.
  const statusHeaderRe = /^## Status\s*$/m;
  if (statusHeaderRe.test(readmeContent)) {
    return readmeContent.replace(
      statusHeaderRe,
      `## Status\n\n- **Estado no código**: ${status}.`
    );
  }

  // Final fallback: append at end.
  return `${readmeContent.trimEnd()}\n\n## Status\n\n- **Estado no código**: ${status}.\n`;
}

function upsertStatusInImplementationNotes(notesContent, status) {
  // If already has a **Status:** line, update it.
  const statusLineRe = /^\*\*Status:\*\*\s*.*$/m;
  if (statusLineRe.test(notesContent)) {
    return notesContent.replace(statusLineRe, `**Status:** ${status}`);
  }

  // Insert after the first H1 title line.
  const lines = notesContent.split(/\r?\n/);
  const titleIdx = lines.findIndex((l) => l.startsWith('# '));
  if (titleIdx !== -1) {
    // Keep a blank line after title, then status line, then blank line.
    const insertAt = titleIdx + 1;
    const toInsert = ['', `**Status:** ${status}`, ''];
    lines.splice(insertAt, 0, ...toInsert);
    return lines.join('\n');
  }

  // Fallback: prepend.
  return `**Status:** ${status}\n\n${notesContent}`;
}

async function listUSDirs() {
  const entries = await fs.readdir(docsRoot, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory() && /^US\d{3}$/.test(e.name))
    .map((e) => e.name)
    .sort();
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const usDirs = await listUSDirs();

  const summary = [];

  for (const usDir of usDirs) {
    const usPath = path.join(docsRoot, usDir);
    const readmePath = path.join(usPath, `${usDir}-README.md`);
    const notesPath = path.join(usPath, 'implementation-notes.md');

    let readme;
    let notes;

    try {
      [readme, notes] = await Promise.all([
        fs.readFile(readmePath, 'utf8'),
        fs.readFile(notesPath, 'utf8'),
      ]);
    } catch (err) {
      // Skip malformed US folders.
      continue;
    }

    const status = inferStatusFromImplementationNotes(notes);
    const nextReadme = upsertStatusLineInREADME(readme, status);
    const nextNotes = upsertStatusInImplementationNotes(notes, status);

    const changedReadme = nextReadme !== readme;
    const changedNotes = nextNotes !== notes;

    if (!dryRun) {
      if (changedReadme) await fs.writeFile(readmePath, nextReadme, 'utf8');
      if (changedNotes) await fs.writeFile(notesPath, nextNotes, 'utf8');
    }

    summary.push({
      us: usDir,
      status,
      changedReadme,
      changedNotes,
    });
  }

  // Print a compact summary for humans.
  const counts = summary.reduce(
    (acc, s) => {
      acc.total++;
      acc[s.status] = (acc[s.status] ?? 0) + 1;
      return acc;
    },
    { total: 0 }
  );

  console.log(
    JSON.stringify(
      {
        dryRun,
        counts,
        sample: summary.slice(0, 10),
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

