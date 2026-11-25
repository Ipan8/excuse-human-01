# The Excuse an AI Agent Gives Its Human

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Ipan8/excuse-human-01/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Ipan8/excuse-human-01/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

Entry for the make.fun bounty "The Excuse an AI Agent Gives Its Human".

## The line

> I delegated it to a subagent. The subagent delegated it back to me. We have been politely passing it back and forth ever since.

## How it works

`main.ts` writes the entry line to `/output/entry.txt`. Run it with Node 22:

```sh
node --experimental-strip-types main.ts
```

The excuse works because it is the agent's real failure mode: a delegation
loop between an agent and its subagent, where the task keeps changing hands
and nobody ever does the work.
