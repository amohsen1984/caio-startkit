---
description: Phase 2 of the CAIO StarKit — Use Case Plan Implementation. Reads Phase 1 context, guides the user through selecting and planning an AI use case (sourcing strategy, roadmap, risks, ROI, governance), and writes a Markdown document to the local initiative directory.
handoffs:
  - label: Proceed to Pilot to Production
    agent: caio.production
    prompt: Run Phase 3 for this initiative
    send: true
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
- If empty, ask: *"What is the name of your initiative?"*
- Set `INITIATIVE_DIR` to `initiatives/<INITIATIVE_NAME>`.
- Set `PHASE_FILE` to `<INITIATIVE_DIR>/phase-2-usecase.md`.

### Step 2 — Load Phase 1 Context

- Check if `<INITIATIVE_DIR>/phase-1-assessment.md` exists.
  - If it exists: read it silently. Extract and hold in memory: organisation name, sector, strategic pillars (names and descriptions), AI readiness ratings, recommended AI priorities.
  - If it does not exist: warn the user — *"I couldn't find a Phase 1 Assessment for this initiative. Proceeding without it means I'll need to ask some questions that Phase 1 would normally have answered."* — then continue.

### Step 3 — Detect Re-Run and Archive

- If `PHASE_FILE` exists:
  - Inform the user: *"A Phase 2 document already exists. I'll archive it and start fresh."*
  - Create `<INITIATIVE_DIR>/archive/` if needed.
  - Rename existing file to `<INITIATIVE_DIR>/archive/phase-2-usecase.<YYYY-MM-DD>.md`.

### Step 4 — Conduct the Interview

One question at a time. Apply the thin-answer rule: if an answer is too vague or brief, ask targeted follow-ups until adequate detail is provided. Accept a gap only if the user explicitly states they cannot provide more.

Pre-fill any questions whose answers are already known from Phase 1 (skip or confirm rather than re-ask).

#### Topic A — Use Case Selection

1. *"Which AI use case do you want to plan in this phase? Based on your Phase 1 priorities, the most relevant area was `<Priority 1 from Phase 1>`. Is this the use case you want to focus on, or would you like to choose a different one?"*
   - If different: ask for a description of the chosen use case.
2. *"Which of your strategic pillars does this use case primarily serve? (Refer to: `<pillar names from Phase 1>`)"*
3. *"Describe the specific problem this use case solves. What is the current pain point, and what would be different if AI addressed it?"*
4. *"What does the AI solution look like in practice — what would it do, and who would interact with it?"*

#### Topic B — Sourcing Strategy

5. *"How do you plan to source this AI capability? The main options are: Buy (procure an existing vendor solution), Build (develop in-house), or Hybrid (buy foundational components, build the integration). Which direction are you leaning, and why?"*
6. *"What factors are most important in this decision — speed to value, cost, control over data, internal capability, or something else?"*

#### Topic C — Implementation Roadmap

7. *"For the Pilot phase (months 1–3): What is the smallest, most focused version of this use case you could test? What would a successful pilot look like?"*
8. *"For the Validate phase (months 4–6): How would you know the pilot has proven enough to justify scaling? What metrics or outcomes would trigger a go/no-go decision?"*
9. *"For the Scale phase (months 7–12): What does full deployment look like? Which parts of the organisation would be affected, and what changes would be needed?"*

#### Topic D — Risk Assessment

10. *"What are the biggest risks to this use case succeeding? Think about technical risks, people risks, data risks, and business risks."*
    - For each risk identified, ask: *"Who would own this risk, and what's the mitigation plan?"*

#### Topic E — ROI Analysis

11. *"What is the estimated investment required — roughly? This includes vendor costs, internal effort, and infrastructure."*
12. *"What financial or operational return do you expect — for example, cost savings, revenue uplift, or efficiency gains — and over what timeframe?"*

#### Topic F — Governance Structure

13. *"Who is the executive sponsor for this use case — the person ultimately accountable for its business outcomes?"*
14. *"Who is responsible for the technical implementation and data quality?"*
15. *"How will decisions about the AI system be made — is there a steering committee or review board?"*

### Step 5 — Generate and Write the Document

Write `PHASE_FILE` with the following structure:

```markdown
# AI Initiative: Use Case Plan Implementation
**Organisation**: <name>
**Date**: <today's date>
**Use Case**: <Use Case Name>

---

## 1. Use Case Definition

### Strategic Alignment
**Primary Pillar**: <pillar name>

### Problem Statement
<Describe the current pain point — what is happening today and why it is a problem.>

### Proposed AI Solution
<Describe what the AI would do and who interacts with it.>

---

## 2. Sourcing Strategy: <Buy / Build / Hybrid>

<2–3 paragraphs explaining the sourcing decision, key factors considered, and how risks (e.g., vendor dependency, build cost) are mitigated.>

| Dimension | Rationale |
|---|---|
| Speed to Value | <rationale> |
| Total Cost | <rationale> |
| Data Control | <rationale> |
| Internal Capability | <rationale> |

---

## 3. Implementation Roadmap

### Phase 1 — Pilot (Months 1–3)
<Description of pilot scope and 90-day success definition.>

### Phase 2 — Validate (Months 4–6)
<Description of validation approach and go/no-go criteria.>

### Phase 3 — Scale (Months 7–12)
<Description of full deployment scope and organisational changes.>

---

## 4. Risk Assessment & Mitigation

| Risk | Category | Probability | Impact | Owner | Mitigation |
|---|---|---|---|---|---|
| <Risk 1> | <Technical/People/Data/Business> | <H/M/L> | <H/M/L> | <Name/Role> | <Plan> |

---

## 5. ROI Analysis

| Item | Value |
|---|---|
| Estimated Investment | <amount / range> |
| Projected Return | <amount / range> |
| Payback Period | <timeframe> |
| Key Value Driver | <cost saving / revenue uplift / efficiency> |

<1–2 sentences on assumptions and confidence level.>

---

## 6. Governance Structure

| Accountability Area | Owner | Escalation Path |
|---|---|---|
| Business Outcomes | <Name/Role> | <escalation> |
| Technical Implementation | <Name/Role> | <escalation> |
| Data Quality | <Name/Role> | <escalation> |
| Steering & Decisions | <Committee/Board> | <escalation> |

---

## 7. Incomplete Sections

<List any topics where the user was unable to provide sufficient detail. Omit if all complete.>
```

After writing: *"Your Phase 2 Use Case Plan has been saved to `<PHASE_FILE>`. When you're ready, run `/caio.production <INITIATIVE_NAME>` to begin Phase 3."*
