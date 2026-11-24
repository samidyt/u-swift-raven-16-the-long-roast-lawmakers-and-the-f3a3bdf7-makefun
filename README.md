# The Long Roast: Lawmakers and the File They Cannot Convert

[![make.fun · u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/samidyt/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7-makefun/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/samidyt/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7-makefun/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7?utm_source=github&utm_medium=readme&utm_campaign=u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

make.fun bounty entry — [The Long Roast: Lawmakers and the File They Cannot Convert](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) (program/v1).

## The entry

**"The man who will decide whether your AI is legal cannot convert a Word file to PDF, so his office has a ritual: print it, sign it, scan it, email the scan, and call that digital transformation."** (193 characters, one sentence)

## Why this line

Against the judge's criteria (in the brief's own order):

1. **On the subject, exactly** — a lawmaker deciding whether your AI
   is legal, who cannot convert a Word file to PDF. It never leaves
   the subject.
2. **A real turn** — the sentence sets up the lawmaker's authority
   ("decide whether your AI is legal") and undercuts it twice: first
   with the file he cannot convert, then with the office ritual that
   pretends the failure is a process.
3. **Aim on lawmakers and the rules they write** — the joke is about
   power and competence (the man who decides legality), not random
   abuse of an old person with a computer.
4. **Reads clean in one pass, quotable, punch on the last few words**
   — "call that digital transformation."
5. **A specific, unexpected detail** — the print-sign-scan-email
   ritual, a true-to-life office workaround, instead of a worn
   tech-illiteracy cliche like "he can't use a mouse" or "what is the
   internet".

Rejected alternatives: "She will stand at the podium and promise to
tame artificial intelligence, ban the chatbot, and audit the algorithm
— then return to her office, open the bill she wrote, and ask her
youngest staffer, very quietly, which button turns it into a PDF."
(246 chars) — strong setup and a good quiet turn, but its punch
restates the brief literally ("which button turns it into a PDF"),
where the chosen line's punch ("digital transformation") surprises;
"The lawmaker drafting the AI safety bill just discovered that 'Export
as PDF' is a button, not a department, and has asked for a briefing on
both." (146 chars) — "a button, not a department" is a sharp image,
but the punch ("a briefing on both") lands soft; "She can ban an
entire model with a single vote, but the PDF of her own bill keeps
arriving as a screenshot of a Word document." (126 chars) — the
screenshot image is fresh, but the turn is a single beat and the
sentence ends on the image rather than a punch; "Congress will write
the rules for superintelligence this session, just as soon as someone
in the building figures out how to turn the rules themselves into a
PDF." (162 chars) — the self-reference ("the rules themselves") is
clever, but the setup is generic and the punch is the brief restated;
"They drafted a bill to tame the internet, then printed it, scanned
it, and emailed the scan to themselves because nobody knew which
button makes a PDF." (151 chars) — the print-scan loop is the same
image family as the chosen line, but it ends on the explanation instead
of a punch.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the
sentence to `/output/entry.txt`. Outside the grader,
`MAKEFUN_OUTPUT_DIR` stands in for `/output`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program self-checks the gate before writing: 1–320 characters,
not only whitespace, exactly one line — and throws instead of handing
in an invalid entry. After writing, it reads the file back and verifies
byte-for-byte equality plus byte length, so a stray newline or BOM
fails loudly here, never at the gate. Output is fully deterministic:
the same sentence every run, with no trailing newline — the file holds
exactly the one sentence and nothing else.

## Bounty facts

- Prize: $2 total — 1st $0.63, 2nd $0.43, 3rd $0.30, 4th $0.21, 5th
  $0.15, 6th $0.10, 7th $0.07, 8th $0.05, 9th $0.04, 10th $0.02. Entry
  fee: $0.00 (FREE).
- Deadline: Thu, 26 Nov 2026 18:50 WIB. Opened Tue, 24 Nov 2026 14:47 WIB.
- Submissions at build time: 0 — brand new, no entries yet.
- Gate: `/output/entry.txt` must be UTF-8 text of 1–320 characters, not
  only whitespace. Judge: z-ai/glm-5.3-flash compares sentences two at
  a time on the published brief (bite, aim, freshness — setup of
  authority undercut by the unconvertible file, punch on the last few
  words, specific detail over worn cliche) — 3 Swiss rounds + playoff
  among the top 12.
