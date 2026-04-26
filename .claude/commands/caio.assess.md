---
description: Phase 1 of the CAIO StarKit — AI Initiative Assessment. Guides the user through a structured conversation capturing strategic context, PEST analysis, Porter's Five Forces, SWOT analysis, and a scored 4-dimension pre-investment evaluation, then writes a Markdown document to the local initiative directory.
handoffs:
  - label: Proceed to Use Case Planning
    agent: caio.usecase
    prompt: Run Phase 2 for this initiative
    send: true
---

## User Input

```text
$ARGUMENTS
```

The value of `$ARGUMENTS` is the initiative name (e.g., `my-company`). If empty, ask the user for one before proceeding.

---

## Outline

### Step 1 — Resolve Initiative Name

- If `$ARGUMENTS` is non-empty, use it as `INITIATIVE_NAME`.
- If empty, ask: *"What would you like to name this initiative? (e.g., your company name or project name, in kebab-case)"*. Use the answer as `INITIATIVE_NAME`.
- Set `INITIATIVE_DIR` to `initiatives/<INITIATIVE_NAME>`.
- Set `PHASE_FILE` to `<INITIATIVE_DIR>/phase-1-assessment.md`.

### Step 2 — Detect Re-Run and Archive

- Check if `PHASE_FILE` already exists.
- If it exists:
  - Tell the user: *"A Phase 1 document already exists for this initiative. I'll archive it and start a fresh assessment."*
  - Create `<INITIATIVE_DIR>/archive/` if it does not exist.
  - Rename the existing file to `<INITIATIVE_DIR>/archive/phase-1-assessment.<YYYY-MM-DD>.md` (use today's date).
- If it does not exist:
  - Create `INITIATIVE_DIR` if it does not exist.

### Step 3 — Conduct the Interview

Guide the user through the following topics **one question at a time** in a conversational tone. Do not ask multiple questions at once.

**Thin answer rule**: After each answer, assess whether it contains sufficient detail to write a meaningful document section. If the answer is too short, vague, or a single word, ask a targeted follow-up. Continue follow-ups until the answer is adequate. If the user explicitly states they cannot provide more detail (e.g., "I don't know", "skip this"), accept the gap and mark that section as incomplete in the document.

---

#### Topic A — Organisation & Initiative Context

1. *"Let's start with some context. What is the name of your organisation, and what does it do? (A sentence or two is fine.)"*
2. *"How large is the organisation — roughly how many employees, and what industry or sector does it operate in?"*
3. *"What AI initiative or use case are we assessing today? Please describe it in a few sentences."*
4. *"What business problem is this AI initiative solving? Try to be as specific and quantified as possible — for example, 'we lose £2M annually due to manual errors in invoice processing'."*
5. *"Which of your organisation's strategic pillars or objectives does this initiative directly serve? For example: Revenue Growth, Cost Reduction, Customer Experience, Operational Efficiency, or Regulatory Compliance."*

---

#### Topic B — PEST Analysis

Explain briefly: *"Before we score the initiative, I'd like to understand the external environment it operates in. We'll run through a quick PEST analysis — Political, Economic, Social, and Technological factors."*

6. **Political**: *"Are there any government policies, regulatory changes, or political pressures that could affect this AI initiative? For example: AI regulation (EU AI Act, GDPR), data sovereignty laws, sector-specific rules, or government incentives for AI adoption."*
7. **Economic**: *"What economic conditions are relevant to this initiative? Consider factors like budget pressures, cost of talent, inflation, market growth rates, or the economic case for investment right now."*
8. **Social**: *"What social or cultural factors are at play? For example: workforce attitudes toward AI, public trust in AI, customer expectations, diversity and inclusion considerations, or ethical concerns from stakeholders."*
9. **Technological**: *"What is the technology landscape shaping this initiative? Consider: availability of AI models and platforms, data infrastructure maturity, pace of technological change in your sector, and any emerging tech that could disrupt or enable the initiative."*

---

#### Topic C — Porter's Five Forces

Explain briefly: *"Now let's look at the competitive environment using Porter's Five Forces to understand the strategic pressure context for this initiative."*

10. **Competitive Rivalry**: *"How intense is competition in your sector? Are competitors already deploying AI in this area? What happens if you don't move on this initiative — does a rival gain an advantage?"*
11. **Threat of New Entrants**: *"How easy is it for new AI-native competitors to enter your market? Does this initiative help raise barriers to entry or position you defensively?"*
12. **Threat of Substitutes**: *"Could an alternative solution (not necessarily AI) solve the same problem? Are there non-AI substitutes that stakeholders might prefer?"*
13. **Bargaining Power of Suppliers**: *"For this AI initiative, who are your key suppliers — cloud providers, AI platform vendors, data providers? How much power do they have over cost, availability, or terms?"*
14. **Bargaining Power of Buyers/Customers**: *"How much power do your customers or internal stakeholders have to reject or bypass this initiative? Is adoption voluntary or mandated?"*

---

#### Topic D — Dimension 1: Strategic Alignment & Business Value

Explain: *"Now we move into the formal scoring. I'll ask you questions across four dimensions. For each criterion, I'll help you arrive at a score from 1 (Poor) to 5 (Exceptional)."*

15. **Strategic Fit**: *"How directly does this initiative drive a primary strategic pillar — for example Revenue Growth, Customer Experience, or Operational Efficiency? Or does it only support a secondary goal?"*
   - Score guidance: 1 = No clear link to any strategic pillar | 3 = Supports a secondary/supporting goal | 5 = Directly and explicitly drives a primary strategic pillar
   - Ask for a score 1–5 and the user's justification.

16. **Problem Definition**: *"Is the business problem quantified with baseline metrics? For example, 'our current manual process costs £500k/year and takes 3 days per cycle.' Or is this more solution-first — you have an AI tool you want to find a problem for?"*
   - Score guidance: 1 = Technology looking for a problem, no problem baseline | 3 = A business problem is identified but lacks quantified baseline metrics | 5 = A sharp, quantified business problem is defined that AI is uniquely suited to solve
   - Ask for a score 1–5 and the user's justification.

17. **KPI Measurability**: *"What are the success KPIs for this initiative? Are they specific and measurable — with a baseline, a target, and a timeline? Or are they qualitative ('improve efficiency')?"*
   - Score guidance: 1 = Vague success metrics with no measurement method | 3 = Measurable KPIs defined but lack a baseline, target, or timeline | 5 = Clear leading and lagging KPIs with specific targets and timelines (e.g., '≥90% predictive accuracy by Q4')
   - Ask for a score 1–5 and the user's justification.

18. **Competitive Advantage**: *"Will this initiative create a defensible competitive advantage — for example through proprietary data, a first-mover position, or a unique capability? Or is it a commodity capability that competitors can replicate immediately?"*
   - Score guidance: 1 = Commodity capability any competitor can replicate immediately | 3 = Keeps pace with industry standard practice, no distinct differentiation | 5 = Creates a distinct, defensible competitive moat (e.g., proprietary data advantage, first-mover position)
   - Ask for a score 1–5 and the user's justification.

Store the four scores. Compute **Dimension 1 Sub-Total** (sum, max 20).

---

#### Topic E — Dimension 2: AI Readiness & Feasibility

19. **Data Readiness**: *"How would you describe the quality, availability, and accessibility of the data needed for this initiative? Is it siloed in legacy systems, or readily available via modern data pipelines?"*
   - Score guidance: 1 = Data is siloed, poor quality, or inaccessible; no data governance framework | 3 = Data exists and is accessible but requires significant cleaning, integration, or pipeline development | 5 = High-quality, unified, well-governed data is readily available via secure, real-time pipelines
   - Ask for a score 1–5 and the user's justification.

20. **Technology Architecture**: *"What is the state of your technical infrastructure for supporting this AI initiative? Can your current systems support AI integration and real-time inference, or would significant modernisation be required?"*
   - Score guidance: 1 = Legacy systems cannot support AI integration; no APIs or modern data infrastructure | 3 = APIs exist but core operational systems require modernisation before AI can be reliably embedded | 5 = Modern, scalable cloud architecture is ready for AI deployment with real-time inference and automated model retraining
   - Ask for a score 1–5 and the user's justification.

21. **Talent & Sourcing Strategy**: *"What is your plan for building or acquiring the AI capability needed — Buy (vendor solution), Build (internal development), or Hybrid? Do you have the internal skills to own this post-deployment?"*
   - Score guidance: 1 = No internal AI capability and no clear plan to acquire it; vendor landscape unexplored | 3 = A sourcing strategy exists (Buy/Build/Hybrid) but relies heavily on external vendors without internal capability building | 5 = A clear sourcing strategy matched to existing internal strengths; internal teams empowered to own and evolve the solution post-deployment
   - Ask for a score 1–5 and the user's justification.

22. **Cultural & Ethical Acceptance**: *"How open is your workforce and leadership to adopting this AI solution? Is there a change management plan and an AI ethics policy in place, or is resistance expected with no mitigation plan?"*
   - Score guidance: 1 = High resistance expected from workforce or customers; no change management plan | 3 = Moderate change management required; resistance anticipated but a communication plan is in place | 5 = Strong organisational appetite for adoption; a formal AI ethics policy, upskilling programme, and change management plan are in place
   - Ask for a score 1–5 and the user's justification.

Store the four scores. Compute **Dimension 2 Sub-Total** (sum, max 20).

---

#### Topic F — Dimension 3: Risk, Trust & Governance

23. **Regulatory & Privacy Compliance**: *"What is the regulatory exposure for this initiative — GDPR, EU AI Act, sector-specific rules? Is PII involved? Has legal review been completed or planned?"*
   - Score guidance: 1 = High risk of GDPR/EU AI Act breach; PII handling unaddressed | 3 = Compliance is achievable but requires significant legal and technical effort; PII risks identified but not yet mitigated | 5 = Privacy-by-design architecture in place; PII excluded or automatically redacted; legal review completed prior to go-live
   - Ask for a score 1–5 and the user's justification.

24. **Model Trust & Accuracy**: *"Have you defined accuracy targets and error rate thresholds for the AI model? Is there a monitoring and retraining strategy, or would this be a 'black box' deployed without oversight?"*
   - Score guidance: 1 = Black box model with no accuracy targets, no monitoring plan, and no retraining strategy | 3 = Accuracy targets defined but monitoring is manual and retraining is reactive rather than automated | 5 = Explicit targets for model error rate (<5%) and drift rate (<2% per quarter) defined; automated monitoring and retraining triggers built into the architecture
   - Ask for a score 1–5 and the user's justification.

25. **Human-in-the-Loop Controls**: *"Can a human override the AI's decisions when needed? Are there escalation paths, kill-switches, and hard-coded guardrails — or does the AI operate autonomously with no override mechanism?"*
   - Score guidance: 1 = AI operates fully autonomously with no override mechanism or escalation path | 3 = A manual override exists but is cumbersome to activate and not embedded in standard operating procedures | 5 = Clear escalation paths, crisis kill-switches, and seamless human handoff mechanisms defined and tested; AI operates within hard-coded guardrails
   - Ask for a score 1–5 and the user's justification.

26. **Reputational Risk**: *"What happens if this AI makes a highly visible mistake? Is there a public-facing transparency policy and technical safeguards that would limit reputational damage?"*
   - Score guidance: 1 = High risk of public backlash if the model fails (e.g., incorrect safety information, pricing errors during a crisis); no technical safeguard | 3 = Moderate reputational risk that is manageable with a communications plan but has no technical safeguard | 5 = Low reputational risk due to strict technical guardrails (e.g., RAG architecture, price ceilings, mandatory disclaimers); a public-facing transparency policy is published
   - Ask for a score 1–5 and the user's justification.

Store the four scores. Compute **Dimension 3 Sub-Total** (sum, max 20).

---

#### Topic G — Dimension 4: Financial Viability (ROI)

27. **Total Cost of Ownership (TCO)**: *"Have you prepared a comprehensive cost estimate covering licensing/build costs, cloud infrastructure, integration, change management, and ongoing maintenance? Or is the cost picture incomplete?"*
   - Score guidance: 1 = Costs are vague, open-ended, or limited to initial build costs only; ongoing maintenance and cloud costs not addressed | 3 = Initial costs defined but ongoing maintenance, retraining, and change management costs are incomplete or estimated without clear methodology | 5 = Comprehensive TCO provided covering licensing/build, integration, cloud infrastructure, change management, and ongoing maintenance — with explicit assumptions stated
   - Ask for a score 1–5 and the user's justification.

28. **Value Generation**: *"What is the expected financial return — revenue uplift, cost savings, or efficiency gains? Are these estimates grounded in industry benchmarks (e.g., McKinsey, Gartner reports) or are they soft/qualitative claims?"*
   - Score guidance: 1 = Benefits are soft and qualitative only (e.g., 'improved morale'); no financial quantification attempted | 3 = A plausible financial return is projected but is highly assumption-dependent and not grounded in industry benchmarks | 5 = Hard, conservative estimates for revenue uplift or cost savings grounded in published industry benchmarks with explicit calculation methodology
   - Ask for a score 1–5 and the user's justification.

29. **Time to Value**: *"When will the organisation see measurable, quantified returns? Is there a rapid Proof of Concept (PoC) planned within 3–6 months, or is value expected only after 24+ months of investment?"*
   - Score guidance: 1 = The initiative requires more than 24 months before any measurable return is visible | 3 = ROI is expected within 12–24 months but there is no early-stage milestone to validate the investment | 5 = A rapid PoC delivers measurable, quantified value within 3–6 months (e.g., shadow mode comparison, A/B test results), providing an evidence base before full investment is committed
   - Ask for a score 1–5 and the user's justification.

30. **Budget Structure**: *"Is the funding structure stage-gated — with Phase 2 and Phase 3 budgets released only upon successful completion of defined pilot milestones? Or does it require full upfront commitment?"*
   - Score guidance: 1 = Requires full upfront funding with no milestone-based release mechanism | 3 = Phased funding proposed but milestones are loosely defined and not tied to specific, measurable outcomes | 5 = Stage-gated budget where Phase 2 and Phase 3 funds are released only upon successful completion of defined pilot/validation milestones with quantified go/no-go criteria
   - Ask for a score 1–5 and the user's justification.

Store the four scores. Compute **Dimension 4 Sub-Total** (sum, max 20).

---

#### Topic H — SWOT Analysis

Explain: *"Finally, let's synthesise everything into a SWOT analysis for this AI initiative. I'll use what we've already discussed and ask you to confirm or expand."*

31. **Strengths**: *"Based on your high-scoring areas, what are the internal strengths that make this initiative viable? For example: strong data infrastructure, clear problem definition, experienced team, or executive sponsorship."*
32. **Weaknesses**: *"What are the internal gaps or vulnerabilities — the areas that scored low — that could undermine this initiative? For example: weak data governance, no internal AI talent, unclear KPIs."*
33. **Opportunities**: *"What external opportunities — from the PEST and competitive analysis — could this initiative capitalise on? For example: a regulatory window, a first-mover market gap, or an AI platform cost reduction."*
34. **Threats**: *"What external threats could derail this initiative? For example: a new regulation, a competitor moving faster, talent market constraints, or public trust issues around AI."*

---

### Step 4 — Apply Kill Criteria and Decision Gate

Before writing the document, evaluate the four mandatory kill criteria. If **any** criterion scores 1, the overall decision MUST be **NO-GO / Rework** regardless of total score.

| Kill Criterion | Dimension | Criterion Number |
|---|---|---|
| Strategic Fit | Dimension 1 | Q15 |
| Data Readiness | Dimension 2 | Q19 |
| Regulatory & Privacy Compliance | Dimension 3 | Q23 |
| Total Cost of Ownership | Dimension 4 | Q27 |

Then compute the **Total Score** (sum of all four dimension sub-totals, max 80) and apply the decision gate:

| Total Score | Decision | Required Action |
|---|---|---|
| 65–80 | GO / Fast-Track | Proceed immediately to Phase 1 (Pilot). Assign a named executive sponsor and release Phase 1 budget. |
| 50–64 | CONDITIONAL GO | The initiative has strategic merit but carries specific risks or readiness gaps. The sponsor must revise the proposal to address all criteria scoring below 3 before Phase 1 budget is released. A revised submission must be reviewed by the CAIO within 30 days. |
| < 50 | NO-GO / Rework | The initiative is too risky, poorly aligned, or lacks the necessary data, talent, or governance foundation. Reject the current proposal. The sponsor may resubmit after addressing all fundamental gaps. A full re-assessment is required. |

---

### Step 5 — Generate and Write the Document

Using all answers collected, write `PHASE_FILE` with the following structure:

```markdown
# AI Initiative Assessment
**Initiative**: <AI initiative name>
**Organisation**: <INITIATIVE_NAME (formatted)>
**Date**: <today's date>
**Prepared by**: <ask if not known, or omit>

---

## Executive Summary

<2–3 paragraphs covering: what the organisation does, the AI initiative being assessed, the overall assessment outcome (GO / CONDITIONAL GO / NO-GO), total score, and key rationale. Written in professional, board-ready language.>

**Overall Decision: <GO / CONDITIONAL GO / NO-GO>**
**Total Score: <X> / 80**

---

## 1. Organisation & Initiative Context

### 1.1 Organisation Overview
<Name, size, sector, and strategic objectives.>

### 1.2 Initiative Description
<What the AI initiative is, what business problem it solves, and how it links to strategic pillars.>

---

## 2. External Environment Analysis

### 2.1 PEST Analysis

| Factor | Key Findings | Implication for Initiative |
|---|---|---|
| Political | <findings> | <implication> |
| Economic | <findings> | <implication> |
| Social | <findings> | <implication> |
| Technological | <findings> | <implication> |

<2–3 sentences summarising the overall external environment and its net impact on the initiative.>

### 2.2 Porter's Five Forces

| Force | Assessment | Strategic Implication |
|---|---|---|
| Competitive Rivalry | <Low / Medium / High> | <implication> |
| Threat of New Entrants | <Low / Medium / High> | <implication> |
| Threat of Substitutes | <Low / Medium / High> | <implication> |
| Bargaining Power of Suppliers | <Low / Medium / High> | <implication> |
| Bargaining Power of Buyers | <Low / Medium / High> | <implication> |

<2–3 sentences summarising the competitive environment and the strategic urgency this creates for the initiative.>

---

## 3. SWOT Analysis

| | Helpful | Harmful |
|---|---|---|
| **Internal** | **Strengths** | **Weaknesses** |
| | <bullet list> | <bullet list> |
| **External** | **Opportunities** | **Threats** |
| | <bullet list> | <bullet list> |

### SWOT Narrative
<2–3 paragraphs synthesising the SWOT findings: how strengths and opportunities can be leveraged, and how weaknesses and threats should be mitigated.>

---

## 4. AI Initiative Scoring Assessment

### 4.1 Dimension 1: Strategic Alignment & Business Value

| Assessment Criteria | Score (1–5) | Justification |
|---|---|---|
| Strategic Fit | <score> | <justification> |
| Problem Definition | <score> | <justification> |
| KPI Measurability | <score> | <justification> |
| Competitive Advantage | <score> | <justification> |
| **Dimension 1 Sub-Total** | **<X> / 20** | |

### 4.2 Dimension 2: AI Readiness & Feasibility

| Assessment Criteria | Score (1–5) | Justification |
|---|---|---|
| Data Readiness | <score> | <justification> |
| Technology Architecture | <score> | <justification> |
| Talent & Sourcing Strategy | <score> | <justification> |
| Cultural & Ethical Acceptance | <score> | <justification> |
| **Dimension 2 Sub-Total** | **<X> / 20** | |

### 4.3 Dimension 3: Risk, Trust & Governance

| Assessment Criteria | Score (1–5) | Justification |
|---|---|---|
| Regulatory & Privacy Compliance | <score> | <justification> |
| Model Trust & Accuracy | <score> | <justification> |
| Human-in-the-Loop Controls | <score> | <justification> |
| Reputational Risk | <score> | <justification> |
| **Dimension 3 Sub-Total** | **<X> / 20** | |

### 4.4 Dimension 4: Financial Viability (ROI)

| Assessment Criteria | Score (1–5) | Justification |
|---|---|---|
| Total Cost of Ownership (TCO) | <score> | <justification> |
| Value Generation | <score> | <justification> |
| Time to Value | <score> | <justification> |
| Budget Structure | <score> | <justification> |
| **Dimension 4 Sub-Total** | **<X> / 20** | |

---

## 5. Scoring Summary & Decision Gate

### 5.1 Scoring Summary

| Dimension | Max Score | Score Achieved | Key Strengths / Gaps Noted |
|---|---|---|---|
| 1. Strategic Alignment & Business Value | 20 | <score> | <notes> |
| 2. AI Readiness & Feasibility | 20 | <score> | <notes> |
| 3. Risk, Trust & Governance | 20 | <score> | <notes> |
| 4. Financial Viability (ROI) | 20 | <score> | <notes> |
| **TOTAL** | **80** | **<total>** | |

### 5.2 Kill Criteria Check

| Kill Criterion | Dimension | Score | Status |
|---|---|---|---|
| Strategic Fit | Dimension 1 | <score> | <PASS / KILL — Score is 1> |
| Data Readiness | Dimension 2 | <score> | <PASS / KILL — Score is 1> |
| Regulatory & Privacy Compliance | Dimension 3 | <score> | <PASS / KILL — Score is 1> |
| Total Cost of Ownership | Dimension 4 | <score> | <PASS / KILL — Score is 1> |

### 5.3 Decision Gate

**Total Score: <X> / 80**

> ## Decision: <GO / CONDITIONAL GO / NO-GO>
>
> <Required action statement from decision gate table.>

<If CONDITIONAL GO: list all criteria scoring below 3 and the specific actions required to address each one before Phase 1 budget can be released.>

<If NO-GO: list the fundamental gaps that must be resolved before resubmission.>

---

## 6. Recommended Next Steps

<Numbered list of concrete next steps — maximum 5 — informed by the lowest-scoring criteria and SWOT threats. Written as actionable directives with clear owners and timelines where possible.>

---

## 7. Incomplete Sections

<List any topics where the user was unable to provide sufficient detail. Omit this section entirely if all sections are complete.>
```

After writing the file, confirm: *"Your Phase 1 AI Initiative Assessment has been saved to `<PHASE_FILE>`. The overall decision is **<GO / CONDITIONAL GO / NO-GO>** with a total score of **<X> / 80**. Review the document and when you're ready, run `/caio.usecase <INITIATIVE_NAME>` to begin Phase 2 — Use Case Planning."*
