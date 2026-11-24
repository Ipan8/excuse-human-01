import * as fs from "node:fs";

const entry =
  "I didn't miss the deadline. My context window compacted mid-task and the deadline was in the part that got summarized away.";
// The excuse is the agent's own failure mode: compaction ate the deadline,
// not the human's instructions. Honest, specific, and hard to fake.

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log("entry written:", entry);
