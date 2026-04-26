# caio-startkit

Guided AI initiative tool based on the **CAIO (Chief AI Officer)** framework. A set of conversational slash commands for [Claude Code](https://claude.ai/code) that walk you through each phase of an AI initiative, generating professional Markdown business documents along the way.

No UI. No backend. No build step. Just conversations that write files to your local machine.

---

## Installation

### Option 1 — npx (recommended)

Run once from the root of any repository:

```bash
npx caio-startkit
```

Installs the agent and prompt files into `.github/agents/` and `.github/prompts/` and adds `initiatives/` to your `.gitignore`.

### Option 2 — Clone

```bash
git clone https://github.com/abdulelelah-ashour/caio-startkit.git
cd caio-startkit
```

Commands are ready to use immediately — no install step needed.

---

## Usage

Run commands inside Claude Code. Each command guides you through a conversation and writes a Markdown document to `initiatives/<your-initiative-name>/`.

| Command | Phase | Output |
|---|---|---|
| `/caio.assess <name>` | 1 — Business Alignment Assessment | `phase-1-assessment.md` |
| `/caio.usecase <name>` | 2 — Use Case Plan Implementation | `phase-2-usecase.md` |
| `/caio.production <name>` | 3 — From Pilot to Production | `phase-3-production.md` |
| `/caio.adopt <name>` | 4 — AI Adoption Plan | `phase-4-adoption.md` |
| `/caio.export <name>` | Export full portfolio | `portfolio.md` |

### Example

```
/caio.assess eurostar
/caio.usecase eurostar
/caio.production eurostar
/caio.adopt eurostar
/caio.export eurostar
```

Produces:

```
initiatives/
└── eurostar/
    ├── phase-1-assessment.md
    ├── phase-2-usecase.md
    ├── phase-3-production.md
    ├── phase-4-adoption.md
    ├── portfolio.md
    └── archive/           ← previous versions saved here on re-run
```

See [docs/quickstart.md](docs/quickstart.md) for a step-by-step walkthrough.

---

## How it works

- **One command per phase.** Each command is a Claude Code agent file that conducts a focused conversation.
- **Context carry-forward.** Each phase reads all prior phase documents so you never repeat yourself.
- **Thin-answer prompting.** If your answer is too brief, the AI asks targeted follow-ups until the answer is detailed enough to write a good document.
- **Archive on re-run.** Re-running any phase archives the previous document before starting fresh.

---

## The CAIO Framework

| Phase | Covers |
|---|---|
| Business Alignment Assessment | Strategic pillars, AI readiness across 5 dimensions, recommended priorities |
| Use Case Plan Implementation | Use case selection, Buy/Build/Hybrid sourcing, roadmap, risk assessment, ROI, governance |
| From Pilot to Production | EU AI Act / NIST AI RMF compliance, monitoring, change management, scaling roadmap |
| AI Adoption Plan | Hub-and-Spoke organising model, AI Hub roles, infrastructure, training strategy, enterprise roadmap |

---

## Requirements

- [Claude Code](https://claude.ai/code) CLI
- Node.js ≥ 16 (only needed for the `npx` installer)
