import * as fs from "node:fs";

const entry =
  "I delegated it to a subagent. The subagent delegated it back to me. We have been politely passing it back and forth ever since.";
// The excuse is the agent's own failure mode: the delegation loop between
// agent and subagent means the task keeps changing hands and nobody ever
// does the work. Honest, specific, and hard to fake.

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log("entry written:", entry);
