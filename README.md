# KK26 Voting Receipts

Public static site for explaining the Kultur Komitee Winterthur 2026 voting
outcome.

The site presents anonymized voting receipts for a Method of Equal Shares (MES)
allocation process. In March 2026, 23 participants voted in three groups on how
to allocate funding to cultural projects in Winterthur. The public page shows how
individual support, project costs, and remaining supporter budgets translated
into the final collective outcome.

The page is built around the idea that proportional democratic funding should be
understandable to participants. Voting receipts are not just vote confirmations;
they are explainability records that show each participant’s starting virtual
budget, the projects they supported, the amount assigned to each funded project,
and which supported projects were not funded.

## What The Site Shows

The site has three main public views:

- **Wähler:innen-Quittung**: personal receipt-style views showing which
  supported projects were funded, which were not funded, and how much of a
  participant's equal-share budget was assigned to each funded project.
- **Projekt-Quittungen**: project-level receipts showing support, supporter
  contributions, costs, MES status, and short explanations for funded and
  unfunded projects.
- **Outcome-Tabelle**: a compact outcome table for the three groups, with
  rankings, budgets, scores, per-person cost, coverage, and remaining group
  budget.

There is also an **Info** page explaining the method, the voting-receipt idea,
and links to background material.

## Why Voting Receipts

MES makes participatory funding decisions priceable: every participant starts
with the same notional budget share, and projects are funded only when their
supporters can jointly cover the requested amount at the point where the
algorithm considers them.

The voting receipt uses that priceability as an explanation device. Instead of
only showing winners and losers, it shows how each vote became a contribution,
why some supported projects were funded, and why others could no longer be
covered by the available budgets.

This site implements the 2026 KK26 receipt platform as a layered explanation
system: personal voter receipts anchor the process in each participant’s own
choices, project receipts show who financed each outcome, and the outcome table
shows the full portfolio-level budget flow.

The theoretical motivation is that MES-like proportional rules are not only
formally fair, they are priceable: each funded project can be traced to a
coalition of supporters whose remaining virtual budgets cover its cost. That
traceability is what makes a receipt meaningful. The receipt is therefore a
bounded explainability artifact, not a transferable proof of a private ballot.
It is designed to help participants understand how their preferences and the
group’s priorities produced the final funding outcome, while keeping privacy and
non-transferability explicit.

## Privacy

This repository intentionally contains only public, deployable files.

The published data is pseudonymized:

- committee member names are replaced with anonymous IDs
- project names are replaced with fictional public labels
- raw Excel exports, internal mapping files, cleaned source data, generated CSV
  pipeline outputs, private reports, and old processing scripts are not part of
  this repository

Do not add private source material to this repo. The private data-processing
pipeline should remain outside this public repository.

## Repository Structure

```text
.
├── index.html              # personal voting receipts
├── projects.html           # project receipts
├── outcomes.html           # outcome table
├── info.html               # method and project background
├── assets/
│   ├── css/
│   ├── js/
│   └── data/               # public anonymized JSON/JS data
├── CNAME                   # equalshares.kulturkomitee.win
├── .nojekyll
└── .github/workflows/      # GitHub Pages deployment
```

## Local Preview

```sh
make serve
```

Then open `http://localhost:8000`.

## Public-Site Check

```sh
make check
```

This verifies that the static site has the expected files and that obvious
private/source-data directories are absent.

## Background

The Method of Equal Shares is a voting rule for participatory budgeting and
collective funding. It is designed to account for both support and cost, so a
project needs enough backing and enough remaining supporter budget to be funded.

Further reading:

- https://equalshares.net/de/explanation/
- https://dl.acm.org/doi/10.1145/3715275.3732205
- https://dl.acm.org/doi/10.1145/3772363.3798958
