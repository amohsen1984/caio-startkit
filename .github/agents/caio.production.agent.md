---
description: Phase 3 of the CAIO StarKit — From Pilot to Production. Reads prior phase context, guides the user through governance frameworks, regulatory compliance, operational monitoring, change management, and scaling roadmap, then writes a Markdown document to the local initiative directory.
handoffs:
  - label: Proceed to AI Adoption Plan
    agent: caio.adopt
    prompt: Run Phase 4 for this initiative
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
- Set `PHASE_FILE` to `<INITIATIVE_DIR>/phase-3-production.md`.

### Step 2 — Load Prior Phase Context

Read the following files silently if they exist:
- `<INITIATIVE_DIR>/phase-1-assessment.md` — extract: organisation name, sector, governance readiness, culture readiness.
- `<INITIATIVE_DIR>/phase-2-usecase.md` — extract: use case name and description, sourcing strategy (Buy/Build/Hybrid), governance structure, identified risks.

If neither exists, warn the user and continue.

Use the extracted context to pre-fill relevant questions and avoid repetition.

### Step 3 — Detect Re-Run and Archive

- If `PHASE_FILE` exists:
  - Inform the user: *"A Phase 3 document already exists. I'll archive it and start fresh."*
  - Create `<INITIATIVE_DIR>/archive/` if needed.
  - Rename to `<INITIATIVE_DIR>/archive/phase-3-production.<YYYY-MM-DD>.md`.

### Step 4 — Conduct the Interview

One question at a time. Apply the thin-answer rule throughout.

#### Topic A — Governance & Regulatory Framework

1. *"Your use case is `<use case from Phase 2>`. Given this, which regulatory frameworks are most relevant? The main ones to consider are: EU AI Act, NIST AI Risk Management Framework, GDPR, and OWASP LLM Top 10. Which of these apply to your context, and why?"*
2. *"Under the EU AI Act (if applicable): how would you classify your AI system's risk level — Minimal Risk, Limited Risk, High Risk, or Unacceptable Risk? What is the basis for that classification?"*
3. *"What are the top three governance risks you need to manage as you move this from pilot to production? (e.g., model hallucination, data privacy, model drift, prompt injection)"*
4. *"How will accountability be structured? Who is ultimately responsible for the AI system's outputs and for regulatory compliance?"*
5. *"What human-in-the-loop safeguards will be in place — for example, when does a human review or override the AI's output?"*

#### Topic B — Operational Monitoring

6. *"What metrics will you monitor to know the AI system is performing correctly in production? Think about accuracy, fairness, latency, and business outcomes."*
7. *"What thresholds would trigger an alert or intervention? For example, if accuracy drops below a certain level, what happens?"*
8. *"What is the business continuity plan if the AI system fails or produces harmful outputs — is there a kill-switch or fallback process?"*

#### Topic C — People & Change Management

9. *"Who are the key stakeholder groups affected by this AI deployment — employees, customers, partners? Which groups are most likely to resist the change?"*
10. *"What is your plan for communicating the deployment to affected groups? What messaging will address concerns about job impact or trust in AI?"*
11. *"What training or upskilling will be provided to the people who will work alongside this AI system?"*

#### Topic D — Scaling Roadmap

12. *"Your pilot focused on `<pilot scope from Phase 2>`. What is the sequence for expanding to full production — which teams, geographies, or processes come next?"*
13. *"What dependencies must be resolved before full-scale deployment — for example, data infrastructure, regulatory approvals, or organisational changes?"*
14. *"What does 'done' look like for the Scale phase — how will you know the system is fully in production and delivering its intended value?"*

### Step 5 — Generate and Write the Document

Write `PHASE_FILE` with the following structure:

```markdown
# AI Initiative: From Pilot to Production
**Organisation**: <name>
**Date**: <today's date>
**Use Case**: <use case name>

---

## 1. Governance & Regulatory Framework

### Applicable Frameworks
<List each applicable framework with a brief rationale for its relevance.>

### Risk Classification
**EU AI Act Classification**: <Minimal / Limited / High / Unacceptable Risk>
**Rationale**: <explanation>

### Top Governance Risks

| Risk | Category | Mitigation Approach |
|---|---|---|
| <Risk 1> | <Hallucination/Privacy/Drift/Security/etc.> | <approach> |

### Accountability Structure
<Describe who is ultimately accountable and how regulatory compliance is owned.>

### Human-in-the-Loop Safeguards
<Describe when and how humans review or override AI outputs.>

---

## 2. Operational Monitoring Strategy

### Key Performance Metrics

| Metric | Target | Alert Threshold | Owner |
|---|---|---|---|
| <Metric 1> | <target> | <threshold> | <role> |

### Business Continuity & Kill-Switch
<Describe the fallback process if the AI system fails or produces harmful outputs.>

---

## 3. People & Change Management Plan

### Stakeholder Map

| Group | Impact | Likely Resistance | Engagement Approach |
|---|---|---|---|
| <Group 1> | <High/Medium/Low> | <concern> | <approach> |

### Communication Plan
<Describe the communication strategy, key messages, and timing.>

### Training & Upskilling Programme
<Describe what training will be provided, to whom, and in what format.>

---

## 4. Scaling Roadmap

### Expansion Sequence
<Describe the step-by-step sequence for rolling out from pilot to full production.>

### Pre-Scale Dependencies

| Dependency | Owner | Target Resolution Date |
|---|---|---|
| <Dependency 1> | <role> | <date or timeframe> |

### Definition of "Fully in Production"
<Describe the measurable criteria that confirm the system is fully deployed and delivering value.>

---

## 5. Incomplete Sections

<List any topics where the user was unable to provide sufficient detail. Omit if all complete.>
```

After writing: *"Your Phase 3 Production Plan has been saved to `<PHASE_FILE>`. When you're ready, run `/caio.adopt <INITIATIVE_NAME>` to begin Phase 4."*
