---
description: Phase 1 of the CAIO StarKit — Business Alignment Assessment. Guides the user through a structured conversation to capture strategic context, AI readiness, and recommended priorities, then writes a Markdown document to the local initiative directory.
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

#### Topic A — Organisation Context

1. *"Let's start with some context. What is the name of your organisation, and what does it do? (A sentence or two is fine.)"*
2. *"How large is the organisation — roughly how many employees, and what industry or sector does it operate in?"*
3. *"What are the main business goals or strategic objectives for the next 3–5 years?"*

#### Topic B — AI Maturity

4. *"How would you describe your organisation's current relationship with AI? For example: has it been explored at all, are there any pilots running, or is AI already embedded in some operations?"*
5. *"Are there any existing data infrastructure, analytics tools, or AI-related capabilities already in place?"*

#### Topic C — Strategic Pillars

6. *"Now let's define the strategic pillars that AI should serve. These are the 3–5 high-level priorities that your AI programme should advance. What are the most important business outcomes your organisation is trying to achieve?"*
   - If the user lists fewer than 3, prompt: *"Can you think of any additional priorities? Most CAIO frameworks use at least 3 pillars."*
   - Help name each pillar concisely (2–5 words each).

#### Topic D — AI Readiness Assessment

Ask about each readiness dimension in turn:

7. *"Data readiness: How would you rate the quality, availability, and accessibility of data in your organisation? What are the main data challenges?"*
8. *"Talent readiness: Does your organisation have AI/data science skills in-house? Are there plans to hire or upskill?"*
9. *"Infrastructure readiness: What is the state of your technical infrastructure? (e.g., cloud, on-premise, data platforms, compute resources)"*
10. *"Culture readiness: How open is leadership and staff to adopting AI? Are there concerns or resistance you anticipate?"*
11. *"Governance readiness: Are there existing data governance policies, ethics guidelines, or regulatory constraints that will shape your AI programme?"*

#### Topic E — Recommended AI Priorities

12. *"Given your strategic pillars and readiness levels, which areas of the business do you think would benefit most from AI first? This could be a department, a process, or a specific problem."*
13. *"For each priority area you've identified, what outcome would success look like in year one?"*

### Step 4 — Generate and Write the Document

Using all answers collected, write `PHASE_FILE` with the following structure:

```markdown
# AI Initiative: Business Alignment Assessment
**Organisation**: <INITIATIVE_NAME (formatted)>
**Date**: <today's date>
**Prepared by**: <ask if not known, or omit>

---

## 1. Executive Context

<2–3 paragraphs covering: what the organisation does, its size and sector, and its strategic ambitions for the next 3–5 years. Written in professional, board-ready language.>

---

## 2. Current AI Maturity

<Describe the organisation's current AI state — exploratory, pilot, or operational. Include existing data infrastructure and capabilities. Note any gaps.>

---

## 3. Strategic Pillars

<List each pillar as a named heading with a 2–3 sentence description of what it means for this organisation.>

### Pillar 1: <Name>
<Description>

### Pillar 2: <Name>
<Description>

[...repeat for each pillar]

---

## 4. AI Readiness Assessment

| Dimension | Rating | Key Observations |
|---|---|---|
| Data | <Low / Medium / High> | <Key strengths and gaps> |
| Talent | <Low / Medium / High> | <Key strengths and gaps> |
| Infrastructure | <Low / Medium / High> | <Key strengths and gaps> |
| Culture | <Low / Medium / High> | <Key strengths and gaps> |
| Governance | <Low / Medium / High> | <Key strengths and gaps> |

<2–3 sentences summarising the overall readiness position.>

---

## 5. Recommended AI Priorities

<Rank the priority areas identified, with a brief rationale for each and a one-sentence description of Year 1 success.>

### Priority 1: <Area>
**Rationale**: <Why this area first>
**Year 1 Success**: <What good looks like>

[...repeat for each priority]

---

## 6. Incomplete Sections

<List any topics where the user was unable to provide sufficient detail. Omit this section entirely if all sections are complete.>
```

After writing the file, confirm: *"Your Phase 1 Assessment has been saved to `<PHASE_FILE>`. Review it and when you're ready, run `/caio.usecase <INITIATIVE_NAME>` to begin Phase 2."*
