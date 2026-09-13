/**
 * One-time backfill: converts a LinkedIn data export's Shares.csv into
 * src/content/linkedin/*.md files.
 *
 * How to get the export:
 *   LinkedIn → Settings & Privacy → Data privacy → Get a copy of your data
 *   → "Want something in particular?" → check "Posts" (Shares) → Request archive.
 *   LinkedIn emails a zip; unzip it and find Shares.csv.
 *
 * Usage:
 *   node scripts/import-linkedin-export.js /path/to/Shares.csv
 *
 * All imported notes are written with `draft: true` — review src/content/linkedin/
 * and flip drafts to false (or delete files) for the ones you want published.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUTPUT_DIR = join(__dirname, '../src/content/linkedin');

function parseCsv(text) {
  // Minimal CSV parser that handles quoted fields with embedded commas/newlines.
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.length > 1 || r[0] !== '');
}

function slugify(text, fallback) {
  const s = (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return s || fallback;
}

function escapeYamlString(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function main() {
  const csvPath = process.argv[2];
  if (!csvPath) {
    console.error('Usage: node scripts/import-linkedin-export.js /path/to/Shares.csv');
    process.exit(1);
  }
  if (!existsSync(csvPath)) {
    console.error(`File not found: ${csvPath}`);
    process.exit(1);
  }

  const raw = readFileSync(csvPath, 'utf-8');
  const rows = parseCsv(raw);
  if (rows.length < 2) {
    console.log('No rows found in export.');
    return;
  }

  const header = rows[0].map((h) => h.trim());
  const dateIdx = header.findIndex((h) => /date/i.test(h));
  const urlIdx = header.findIndex((h) => /link|url/i.test(h));
  const textIdx = header.findIndex((h) => /commentary|text|share/i.test(h));

  if (textIdx === -1) {
    console.error('Could not find a text/commentary column in the CSV header:', header);
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  let written = 0;
  let skipped = 0;

  for (const row of rows.slice(1)) {
    const text = (row[textIdx] || '').trim();
    const dateRaw = dateIdx !== -1 ? (row[dateIdx] || '').trim() : '';
    const url = urlIdx !== -1 ? (row[urlIdx] || '').trim() : '';

    // Skip empty rows and pure reshares with no commentary of your own.
    if (!text) {
      skipped++;
      continue;
    }

    const date = dateRaw ? new Date(dateRaw) : new Date();
    const isoDate = isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : date.toISOString().slice(0, 10);
    const title = text.split('\n')[0].slice(0, 80).trim() || 'LinkedIn post';
    const slug = `${isoDate}-${slugify(title, `post-${written + 1}`)}`;
    const filePath = join(OUTPUT_DIR, `${slug}.md`);

    if (existsSync(filePath)) {
      skipped++;
      continue;
    }

    const frontmatter = [
      '---',
      `title: "${escapeYamlString(title)}"`,
      `date: "${isoDate}"`,
      url ? `canonicalUrl: "${url}"` : null,
      'draft: true',
      '---',
      '',
      text,
      '',
    ]
      .filter((line) => line !== null)
      .join('\n');

    writeFileSync(filePath, frontmatter, 'utf-8');
    written++;
  }

  console.log(`✅ Imported ${written} post(s) as drafts into ${OUTPUT_DIR}`);
  console.log(`   Skipped ${skipped} empty/duplicate row(s).`);
  console.log('   Review each file and set draft: false to publish it.');
}

main();
