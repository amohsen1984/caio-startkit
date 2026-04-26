# Quickstart: caio-startkit

## What is this?

`caio-startkit` is a set of Claude Code slash commands that guide you through the four phases of the CAIO (Chief AI Officer) framework, generating professional Markdown business documents at each step.

## Requirements

- Claude Code CLI installed and running locally
- The `.github/agents/caio.*.agent.md` files present in your repository

## Running Your First Initiative

### Step 1 — Business Alignment Assessment

```
/caio.assess my-company
```

The AI will guide you through a conversation covering your organisation's strategic context, AI readiness, and priorities. At the end, it writes:

```
initiatives/my-company/phase-1-assessment.md
```

### Step 2 — Use Case Plan Implementation

```
/caio.usecase my-company
```

Builds on Phase 1 context. Covers use case selection, sourcing strategy (Buy/Build/Hybrid), implementation roadmap, risks, and ROI.

```
initiatives/my-company/phase-2-usecase.md
```

### Step 3 — From Pilot to Production

```
/caio.production my-company
```

Covers governance frameworks, regulatory compliance, operational monitoring, change management, and scaling roadmap.

```
initiatives/my-company/phase-3-production.md
```

### Step 4 — AI Adoption Plan

```
/caio.adopt my-company
```

Covers your AI organising model, hub structure, infrastructure, training strategy, and enterprise adoption roadmap.

```
initiatives/my-company/phase-4-adoption.md
```

### Export the Full Portfolio

```
/caio.export my-company
```

Consolidates all four phase documents into a single stakeholder-ready Markdown file:

```
initiatives/my-company/portfolio.md
```

## Tips

- You can run phases on different days — just use the same initiative name each time.
- If you want to redo a phase, re-run its command. Your previous document is automatically archived to `initiatives/my-company/archive/`.
- Provide detailed answers during the conversation — the AI will ask follow-up questions if your answer is too short.
- You can run `/caio.export` at any point to get a partial portfolio of completed phases.
