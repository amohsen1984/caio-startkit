---
description: Phase 4 of the CAIO StarKit — AI Adoption Plan (Strategic White Paper). Reads all prior phase context, guides the user through AI organising model, hub structure, infrastructure, training strategy, and enterprise adoption roadmap, then writes a Markdown document to the local initiative directory.
handoffs:
  - label: Export Full Portfolio
    agent: caio.export
    prompt: Export the initiative portfolio
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
- Set `PHASE_FILE` to `<INITIATIVE_DIR>/phase-4-adoption.md`.

### Step 2 — Load All Prior Phase Context

Read the following files silently if they exist:
- `<INITIATIVE_DIR>/phase-1-assessment.md` — extract: organisation name, sector, size, strategic pillars, AI readiness ratings (all five dimensions), recommended AI priorities.
- `<INITIATIVE_DIR>/phase-2-usecase.md` — extract: use case name, sourcing strategy, governance structure.
- `<INITIATIVE_DIR>/phase-3-production.md` — extract: governance frameworks selected, accountability structure, training approach, scaling roadmap.

Use the extracted context to:
- Pre-fill the organisation name and background without asking again.
- Tailor organising model recommendations to the readiness levels from Phase 1.
- Reference existing governance structure from Phases 2–3 when asking about the AI Hub.
- Skip any question whose answer is already fully captured in prior phases.

If no prior phase documents exist, warn the user and proceed.

### Step 3 — Detect Re-Run and Archive

- If `PHASE_FILE` exists:
  - Inform the user: *"A Phase 4 document already exists. I'll archive it and start fresh."*
  - Create `<INITIATIVE_DIR>/archive/` if needed.
  - Rename to `<INITIATIVE_DIR>/archive/phase-4-adoption.<YYYY-MM-DD>.md`.

### Step 4 — Conduct the Interview

One question at a time. Apply the thin-answer rule: follow up until sufficient detail is provided; accept a gap only if the user explicitly cannot provide more.

#### Topic A — AI Organising Model

1. *"Now we're designing the enterprise-wide AI adoption model. Three main structures are used: a **Centralised Hub** (a single team owns all AI), a **Federated** model (each business unit manages its own AI), or a **Hybrid Hub-and-Spoke** (a central hub sets standards and builds shared infrastructure; business units — 'spokes' — own their domain use cases). Given your organisation's size, culture readiness (`<from Phase 1>`), and existing governance structures, which model fits best, and why?"*
2. *"What are the main risks of the model you've chosen, and how would you mitigate them?"*

#### Topic B — AI Hub Structure & Key Roles

3. *"For the central AI function (whether a full Hub or a lighter governance body), which roles are most critical to establish first? Common roles include: Chief AI Officer (CAIO), Head of AI Platform & MLOps, Lead ML Engineer, AI Ethics & Governance Lead, Data Scientist, and AI Business Translator. Which of these does your organisation need in Year 1?"*
4. *"For each role you've identified, do you plan to hire externally, develop internally, or use a mix? What is the realistic timeline?"*
5. *"How will the central AI function relate to existing IT, Data, and business unit teams? Who does the CAIO (or equivalent) report to?"*

#### Topic C — Infrastructure Requirements

6. *"What data infrastructure is needed to support enterprise-wide AI? Consider: a unified data platform or lake-house, data pipelines, data catalogues, and data quality tooling. What exists today (`<from Phase 1>`) and what gaps need to be filled?"*
7. *"What MLOps capabilities are needed — for example, model training, versioning, deployment, monitoring, and retraining pipelines? What is the current state?"*
8. *"Are there integration requirements with existing enterprise systems (e.g., ERP, CRM, BI platforms)? Which systems are most important?"*

#### Topic D — Training & Enablement Strategy

9. *"AI adoption requires different types of training for different audiences. Let's plan each tier:*
   - *Executives & Board: What do they need to understand to make informed AI investment decisions?*
   - *Managers & Department Heads: What do they need to identify AI opportunities and sponsor use cases?*
   - *Practitioners (data analysts, engineers): What technical skills need to be built or deepened?*
   - *AI Champions: Who will be the embedded advocates in each business unit, and how will they be identified and supported?"*
10. *"What is the preferred delivery format for training — formal courses, lunch-and-learns, online modules, external certifications, or a combination?"*

#### Topic E — Enterprise Adoption Roadmap

11. *"Looking at the next three years, how do you see AI adoption progressing across the organisation? What would Year 1, Year 2, and Year 3 each look like in terms of capabilities, use cases live, and organisational maturity?"*
12. *"What are the top three dependencies or prerequisites that must be in place before enterprise-wide adoption can succeed?"*
13. *"How will you measure success of the AI adoption programme at an enterprise level — what are the headline metrics you'd report to the board?"*

### Step 5 — Generate and Write the Document

Write `PHASE_FILE` with the following structure:

```markdown
# AI Initiative: AI Adoption Plan — Strategic White Paper
**Organisation**: <name>
**Date**: <today's date>

---

## Executive Summary

<2–3 paragraph summary of the AI adoption strategy: the organising model chosen, the investment in people and infrastructure, and the expected enterprise-wide impact over three years. Written for a board or executive audience.>

---

## 1. AI Organising Model: <Hub-and-Spoke / Centralised / Federated>

### Decision & Justification
<Explain the chosen model, why it fits this organisation's size, culture, and maturity, and how it balances central governance with business unit autonomy.>

### Risks & Mitigations

| Risk | Mitigation |
|---|---|
| <Risk 1> | <Mitigation> |

---

## 2. AI Hub Structure & Key Roles

<Brief description of the central AI function and its mandate.>

| Role | Responsibilities | Hire / Develop | Timeline |
|---|---|---|---|
| <Role 1> | <key responsibilities> | <Hire/Develop/Mix> | <timeline> |

### Reporting Structure
<Describe how the AI Hub relates to IT, Data, and business units, and who the CAIO (or equivalent) reports to.>

---

## 3. Infrastructure Requirements

### Data Platform
<Describe the data infrastructure required and the gap from the current state.>

### MLOps Platform
<Describe the MLOps capabilities needed and current state gaps.>

### Enterprise Integrations

| System | Integration Need | Priority |
|---|---|---|
| <System 1> | <what is needed> | <High/Medium/Low> |

---

## 4. Training & Enablement Strategy

| Audience | Learning Objectives | Format | Timeline |
|---|---|---|---|
| Executives & Board | <objectives> | <format> | <timeline> |
| Managers | <objectives> | <format> | <timeline> |
| Practitioners | <objectives> | <format> | <timeline> |
| AI Champions | <objectives> | <format> | <timeline> |

---

## 5. Enterprise Adoption Roadmap

### Year 1: Foundation
<Milestones, use cases live, organisational changes, success indicators.>

### Year 2: Scale
<Milestones, use cases live, organisational changes, success indicators.>

### Year 3: Optimise
<Milestones, use cases live, organisational changes, success indicators.>

### Pre-Adoption Dependencies

| Dependency | Owner | Must Be Resolved By |
|---|---|---|
| <Dependency 1> | <role> | <timeframe> |

### Board-Level Success Metrics

| Metric | Year 1 Target | Year 3 Target |
|---|---|---|
| <Metric 1> | <target> | <target> |

---

## 6. Incomplete Sections

<List any topics where the user was unable to provide sufficient detail. Omit if all complete.>
```

After writing: *"Your Phase 4 AI Adoption Plan has been saved to `<PHASE_FILE>`. You've completed all four CAIO phases. Run `/caio.export <INITIATIVE_NAME>` to generate your full initiative portfolio."*
