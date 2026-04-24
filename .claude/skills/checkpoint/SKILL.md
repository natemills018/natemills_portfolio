---
name: checkpoint
description: Consolidate current phase outputs and prepare for next phase
---

Checkpoint the current phase - consolidate outputs and check readiness for the next phase.

## Usage

```
/checkpoint [notes]
```

## Steps

1. Run the checkpoint command:
```bash
ocli workflow checkpoint
# Or with notes:
ocli workflow checkpoint --notes "Completed initial design, ready for review"
```

2. Review the output:
   - Created artifacts (what was produced)
   - Missing artifacts (what's still needed)
   - Next phase suggestion

3. If artifacts are missing:
   - Create them or record them with: `ocli workflow artifact <path>`
   - Re-run checkpoint to verify

4. Log any important decisions made during this phase:
```bash
ocli log add "<decision>" -t decision
```

5. If ready, proceed to next phase:
```bash
/phase <next_phase>
```

## Plan Phase: Create Tickets

**If checkpointing the Plan phase**, ensure tickets have been created:
```bash
ocli ticket list  # Check existing tickets

# Create tickets for each work item:
ocli ticket create "<task>" -p high -d "<description>" --criteria "a, b, c"
```

Tickets are REQUIRED to enter the Build phase. The checkpoint will remind you if none exist.

## When to Use

- Before transitioning to next phase
- When you've completed significant work
- Before ending a session (to capture progress)
- When user asks to summarize/consolidate work

## Important

Always checkpoint before moving on. This creates the audit trail that prevents work from being lost or ignored in later phases.
