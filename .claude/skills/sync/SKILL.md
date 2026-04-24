---
name: sync
description: Pull all relevant context for the current workflow phase
---

Sync context for the current phase - shows progress, loads artifacts from previous phases, and surfaces relevant decisions and memories.

## Usage

```
/sync
```

## Steps

1. Show workflow status and progress:
```bash
ocli workflow sync
```

2. Read artifacts from previous phases that are shown.

3. Pull logged decisions:
```bash
ocli log list -t decision
```

4. Search memory for phase-relevant context:
```bash
ocli memory search "<current_phase>"
```

5. Summarize for the user:
   - Current phase and what it involves
   - Key context from previous phases
   - Relevant decisions that should guide work
   - Expected outputs for this phase

## When to Use

- Starting a new session
- Feeling lost about what should be done
- Before starting significant work
- When context seems missing

## Important

This is the "Am I aligned?" check. Use it proactively to ensure you're working with full context, not just what's in the current conversation.
