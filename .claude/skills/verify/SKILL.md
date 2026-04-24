---
name: verify
description: Compare current work against spec/design artifacts
---

Verify that current implementation aligns with the design spec and logged decisions.

## Usage

```
/verify
```

## Steps

1. Run the verify command to see what to check against:
```bash
ocli workflow verify
```

2. The command will display:
   - Spec artifacts to verify against
   - Logged design decisions
   - Relevant memories

3. Read each spec artifact listed and compare against current implementation.

4. For any gaps or deviations:
   - If intentional, log the decision:
     ```bash
     ocli log add "Deviated from spec because: <reason>" -t decision
     ```
   - If unintentional, fix the implementation

5. Document compliance status if needed in docs/compliance-report.md

## Checklist

- [ ] Read all design/spec artifacts
- [ ] Review all logged decisions
- [ ] Compare implementation to spec point by point
- [ ] Document gaps in compliance-report.md
- [ ] Log decisions for intentional deviations

## Important

This is the critical step that prevents the "research ignored during implementation" problem. Take time to actually read and compare.
