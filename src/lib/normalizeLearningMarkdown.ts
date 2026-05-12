/**
 * DOCX→Text liefert oft keine echten Markdown-Überschriften/-tabellen.
 * Wird vor react-markdown angewandt, damit Kapitel lesbar und tabellarisch darstellbar sind.
 */

/** Erste Tabellenzeile: echte Tabellenköpfe aus DOCX sind kurz; Fließtext-Zeilen sind länger. */
const MAX_FIRST_ROW_CELL_LEN = 72;
/** Längere Zellen nur in Datenzeilen; Fließtext-Absätze typ. deutlich länger. */
const MAX_BODY_CELL_LEN = 720;

function escapeMdCell(s: string): string {
  return s.trim().replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function isSingleLineBlock(block: string): boolean {
  const t = block.trim();
  return t.length > 0 && !t.includes("\n") && !t.startsWith("|");
}

/** „Chancen“ / „Risiken“-Gegenüberstellung aus Modul 1 (zwei Spalten, je Zeile ein Block). */
function tryChancenRisikenTable(batch: string[]): string | null {
  const cells = batch.map((b) => b.trim());
  if (cells.length < 4 || cells.length % 2 !== 0) return null;
  if (cells[0] !== "Chancen" || cells[1] !== "Risiken") return null;
  for (let k = 2; k < cells.length; k++) {
    if (cells[k].length > 2000) return null;
  }
  const body = cells.slice(2);
  const rows = [];
  for (let k = 0; k < body.length; k += 2) {
    rows.push(`| ${escapeMdCell(body[k])} | ${escapeMdCell(body[k + 1])} |`);
  }
  return ["| Chancen | Risiken |", "| --- | --- |", ...rows].join("\n");
}

/** Drei einzeilige Blöcke pro Tabellenzeile (DOCX-Export). */
function tryTripletTable(batch: string[]): string | null {
  const cells = batch.map((b) => b.trim());
  if (cells.length < 6 || cells.length % 3 !== 0) return null;
  for (let k = 0; k < cells.length; k += 3) {
    const limit = k === 0 ? MAX_FIRST_ROW_CELL_LEN : MAX_BODY_CELL_LEN;
    if (cells[k].length > limit || cells[k + 1].length > limit || cells[k + 2].length > limit) {
      return null;
    }
  }
  const lines: string[] = [];
  for (let k = 0; k < cells.length; k += 3) {
    lines.push(`| ${escapeMdCell(cells[k])} | ${escapeMdCell(cells[k + 1])} | ${escapeMdCell(cells[k + 2])} |`);
  }
  return [lines[0], "| --- | --- | --- |", ...lines.slice(1)].join("\n");
}

function mergeSingleLineBlockTables(md: string): string {
  const blocks = md.split(/\n{2,}/);
  const out: string[] = [];
  let i = 0;
  while (i < blocks.length) {
    const raw = blocks[i];
    if (!isSingleLineBlock(raw)) {
      out.push(raw);
      i++;
      continue;
    }
    let j = i;
    const batch: string[] = [];
    while (j < blocks.length && isSingleLineBlock(blocks[j])) {
      batch.push(blocks[j]);
      j++;
    }
    const ch = tryChancenRisikenTable(batch);
    if (ch) {
      out.push(ch);
      i = j;
      continue;
    }
    const tr = tryTripletTable(batch);
    if (tr) {
      out.push(tr);
      i = j;
      continue;
    }
    out.push(blocks[i]);
    i++;
  }
  return out.join("\n\n");
}

/** Nummerierte Abschnittszeilen („3. Rechtliche…“, „3.1 DSGVO…“) als echte Überschriften. */
function promoteNumberedSectionHeadings(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    const prevBlank = i === 0 || lines[i - 1].trim() === "";
    const nextBlank = i === lines.length - 1 || lines[i + 1].trim() === "";
    const standalone = prevBlank && nextBlank;

    if (standalone && /^\d+\.\d+\.\d+\s+\S/.test(t)) {
      out.push(`#### ${t}`);
    } else if (standalone && /^\d+\.\d+\s+\S/.test(t)) {
      out.push(`### ${t}`);
    } else if (standalone && /^\d+\.\s+\S/.test(t)) {
      out.push(`## ${t}`);
    } else {
      out.push(line);
    }
  }
  return out.join("\n");
}

/**
 * Pipeline für Kapitel-Markdown aus Handbuch-Exports.
 */
export function normalizeLearningMarkdown(md: string): string {
  const trimmed = md.trim();
  let s = mergeSingleLineBlockTables(trimmed);
  s = promoteNumberedSectionHeadings(s);
  return s;
}
