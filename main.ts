import { mkdirSync, writeFileSync } from "node:fs";

// A vending machine's pickup line for a passing human.
const line = "I only accept exact change, but you? I'd accept you exactly as you are.";

const chars = [...line].length;
if (chars < 1 || chars > 200) throw new Error(`line is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, line);
