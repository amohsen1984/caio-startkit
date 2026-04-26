---
description: CAIO StarKit portfolio export. Concatenates all completed phase documents for an initiative into a single stakeholder-ready Markdown file (portfolio.md).
handoffs: []
---

## User Input

```text
$ARGUMENTS
```

The value of `$ARGUMENTS` is the initiative name. If empty, ask the user before proceeding.

---

## Outline

### Step 1 — Resolve Initiative Name

- If `$ARGUMENTS` is non-empty, use it as `INITIATIVE_NAME`.
- If empty, ask: *"Which initiative would you like to export? Please provide the initiative name."*
- Set `INITIATIVE_DIR` to `initiatives/<INITIATIVE_NAME>`.
- Set `PORTFOLIO_FILE` to `<INITIATIVE_DIR>/portfolio.md`.

### Step 2 — Scan for Phase Documents

Check for the existence of each phase document:

| Phase | File |
|---|---|
| Phase 1 — Business Alignment Assessment | `<INITIATIVE_DIR>/phase-1-assessment.md` |
| Phase 2 — Use Case Plan Implementation | `<INITIATIVE_DIR>/phase-2-usecase.md` |
| Phase 3 — From Pilot to Production | `<INITIATIVE_DIR>/phase-3-production.md` |
| Phase 4 — AI Adoption Plan | `<INITIATIVE_DIR>/phase-4-adoption.md` |

- If **no phase documents exist at all**: stop and inform the user — *"No phase documents were found for `<INITIATIVE_NAME>`. Please run at least one phase command (e.g. `/caio.assess <INITIATIVE_NAME>`) before exporting."*
- If **some documents are missing**: proceed with those that exist; note the missing phases clearly in the portfolio.
- If **all four exist**: produce a complete portfolio.

### Step 3 — Assemble the Portfolio

Construct `PORTFOLIO_FILE` with the following structure:

```markdown
# AI Initiative Portfolio: <INITIATIVE_NAME (formatted)>
**Exported**: <today's date>
**Phases included**: <list of included phases>
**Phases missing**: <list of missing phases, or "None — portfolio is complete">

---

## Table of Contents

1. [Phase 1 — Business Alignment Assessment](#phase-1--business-alignment-assessment) <or "(not completed)" if missing>
2. [Phase 2 — Use Case Plan Implementation](#phase-2--use-case-plan-implementation) <or "(not completed)" if missing>
3. [Phase 3 — From Pilot to Production](#phase-3--from-pilot-to-production) <or "(not completed)" if missing>
4. [Phase 4 — AI Adoption Plan](#phase-4--ai-adoption-plan) <or "(not completed)" if missing>

---

<For each phase document that exists, insert a section divider and the full content of that document:>

## Phase 1 — Business Alignment Assessment

<full contents of phase-1-assessment.md>

---

## Phase 2 — Use Case Plan Implementation

<full contents of phase-2-usecase.md>

---

## Phase 3 — From Pilot to Production

<full contents of phase-3-production.md>

---

## Phase 4 — AI Adoption Plan

<full contents of phase-4-adoption.md>

---

<If any phases are missing, append:>

## Missing Phases

The following phases have not yet been completed and are not included in this portfolio:

- **Phase N — <Name>**: Run `/caio.<command> <INITIATIVE_NAME>` to complete this phase.
```

### Step 4 — Write and Confirm

- Write the assembled content to `PORTFOLIO_FILE`.
- Confirm to the user:
  *"Your portfolio has been saved to `<PORTFOLIO_FILE>`.*
  *Phases included: <list>.*
  *<If incomplete: 'To complete the portfolio, run: <missing commands>.'>*"
