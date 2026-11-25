// The Funniest Office Joke, Judged Head to Head
// make.fun competition: u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// Writes one single-line joke about office life to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The meeting that could have been an email just sent a calendar invite for a follow-up about why it wasn't an email.";

// Enforce the competition gate ourselves: 1-200 characters, not only whitespace.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || !/\S/.test(JOKE)) {
  throw new Error(`Joke fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");

console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
