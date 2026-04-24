---
name: phase
description: Transition to a new workflow phase - enforces gates and loads context
---

Transition to a new workflow phase. This skill enforces phase ordering and loads context from previous phases.

## Usage

```
/phase <phase_name>
```

## Available Phases

**Build workflow:** discovery → design → plan → build → verify
**Write workflow:** research → outline → draft → edit → polish
**Research workflow:** question → literature → methodology → analysis → synthesis

## Steps

1. First, check current workflow status:
```bash
ocli workflow status
```

2. If user specified a phase, transition to it:
```bash
ocli workflow phase <phase_name>
```

3. After transitioning, sync context:
```bash
ocli workflow sync
```

4. Review the artifacts from previous phases that were displayed.

5. Search for relevant decisions and memories:
```bash
ocli log list -t decision
ocli memory search "<current_phase>"
```

## Gates

### Entering Build/Execute Phase (HARD GATE)

**Tickets are REQUIRED before entering build phase.**

The Plan phase must produce tickets that break down the work:
```bash
ocli ticket create "<task>" -p high -d "<description>" --criteria "criterion 1, criterion 2"
```

If no open tickets exist, the transition will be blocked. This ensures:
- Work is properly planned and scoped
- Progress can be tracked
- Nothing gets forgotten

### Ticket Workflow During Build

1. `ocli ticket list` - See all work items
2. `ocli ticket start <id>` - Begin work on a ticket
3. `ocli ticket comment <id> "progress"` - Log progress
4. `ocli ticket resolve <id> "summary"` - Complete ticket

## Important

- If the transition fails, explain why (usually need to complete current phase first)
- Always review previous phase artifacts before starting work
- **Create tickets during Plan phase** - they're required for Build
- Use `--force` only if explicitly requested by user
