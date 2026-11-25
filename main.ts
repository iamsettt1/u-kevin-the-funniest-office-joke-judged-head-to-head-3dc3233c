// The Funniest Office Joke, Judged Head to Head
// Writes a single one-line office joke to /output/entry.txt.
// The joke: a setup (a rare free slot on the calendar) and a turn
// (the manager books that very slot to ask why it is free).
// The gate requires 1-200 UTF-8 characters, so the program verifies
// its own output before exiting: it reads the file back and fails
// loudly if the text is empty, whitespace-only, or out of range.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My calendar finally has a free slot, so my manager booked it to discuss why I have a free slot.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");

const written = readFileSync(OUT_FILE, "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke");
}
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(`entry.txt fails the gate: ${written.length} characters`);
}
console.log(`Wrote ${written.length} characters to ${OUT_FILE}`);
