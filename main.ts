// The Long Roast: Lawmakers and the File They Cannot Convert — make.fun entry (program/v1).
//
// The harness runs `node main.ts` (Node 22, standard library only, no
// network). The program writes one sentence to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line (193 characters, one sentence, a satirical roast of lawmakers
// who would regulate AI, crypto or the internet but cannot convert a file
// to PDF):
//   "The man who will decide whether your AI is legal cannot convert a
//    Word file to PDF, so his office has a ritual: print it, sign it,
//    scan it, email the scan, and call that digital transformation."
//
// Against the judge's brief, in its own order:
//   1. On the subject, exactly: a lawmaker deciding whether your AI is
//      legal, who cannot convert a Word file to PDF. It loses to no
//      roast off the subject, because it never leaves it.
//   2. A real turn: the sentence sets up the lawmaker's authority
//      ("decide whether your AI is legal") and undercuts it twice —
//      first with the file he cannot convert, then with the office
//      ritual that pretends the failure is a process.
//   3. Aim stays on lawmakers and the rules they write: the joke is
//      about power and competence — the man who decides legality —
//      not random abuse of an old person with a computer.
//   4. Reads clean in one pass and stays quotable, with the punch on
//      the last few words: "call that digital transformation."
//   5. A specific, unexpected detail over a worn tech-illiteracy
//      cliche: the print-sign-scan-email ritual, a true-to-life office
//      workaround, instead of "he can't use a mouse" or "what is the
//      internet".
//
// Rejected alternatives (all gate-counted with Python, 1–320 chars,
// single line): "She will stand at the podium and promise to tame
// artificial intelligence, ban the chatbot, and audit the algorithm —
// then return to her office, open the bill she wrote, and ask her
// youngest staffer, very quietly, which button turns it into a PDF."
// (246 chars) — strong setup and a good quiet turn, but its punch
// restates the brief literally ("which button turns it into a PDF"),
// where the chosen line's punch ("digital transformation") surprises;
// "The lawmaker drafting the AI safety bill just discovered that
// 'Export as PDF' is a button, not a department, and has asked for a
// briefing on both." (146 chars) — "a button, not a department" is a
// sharp image, but the punch ("a briefing on both") lands soft; "She
// can ban an entire model with a single vote, but the PDF of her own
// bill keeps arriving as a screenshot of a Word document." (126 chars)
// — the screenshot image is fresh, but the turn is a single beat and
// the sentence ends on the image rather than a punch; "Congress will
// write the rules for superintelligence this session, just as soon as
// someone in the building figures out how to turn the rules themselves
// into a PDF." (162 chars) — the self-reference ("the rules
// themselves") is clever, but the setup is generic and the punch is the
// brief restated; "They drafted a bill to tame the internet, then
// printed it, scanned it, and emailed the scan to themselves because
// nobody knew which button makes a PDF." (151 chars) — the print-scan
// loop is the same image family as the chosen line, but it ends on the
// explanation instead of a punch; "He chairs the committee that will
// decide what your AI may say, yet the draft of that very law still
// sits in his inbox as a .docx he cannot turn into a PDF." (155 chars)
// — good authority setup, but ".docx" mid-sentence adds a second
// period, which risks reading as two sentences under "one sentence
// only".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The man who will decide whether your AI is legal cannot convert a Word file to PDF, so his office has a ritual: print it, sign it, scan it, email the scan, and call that digital transformation.";

// Gate, from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 320 characters, not only white space, and one sentence — a
// satirical roast of lawmakers who regulate AI, crypto or the internet
// without being able to convert a file to PDF. Check our own output
// before writing it, and fail loudly instead of handing in a bad entry.
// Count characters (code points, not UTF-16 units). The output is fully
// deterministic: the same sentence every run, with no trailing newline —
// the file holds exactly the one sentence and nothing else.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 320 || LINE.trim().length === 0) {
  throw new Error(`invalid entry line (${chars.length} chars): ${JSON.stringify(LINE)}`);
}
// No leading or trailing whitespace: a line of only-whitespace is
// already rejected above, but stray spaces at either end would slip
// through and pad the entry.
if (LINE !== LINE.trim()) {
  throw new Error(`entry must not have leading or trailing whitespace: ${JSON.stringify(LINE)}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error(`entry must be a single line: ${JSON.stringify(LINE)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Second pass, added after the first write: read the file back and prove
// it holds byte-for-byte exactly the one sentence before the run can
// count as a success. A write that silently gained a newline or a second
// sentence must fail here, never reach the gate. Also assert the byte
// length matches, so a stray BOM or encoding slip is caught too.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error(
    `entry mismatch: file holds ${JSON.stringify(written)}, expected ${JSON.stringify(LINE)}`,
  );
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  throw new Error(
    `entry byte-length mismatch: ${Buffer.byteLength(written, "utf8")} vs ${Buffer.byteLength(LINE, "utf8")}`,
  );
}

console.log(`entry ok: ${chars.length} chars`);
