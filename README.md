# KK26 Voting Receipts

Public static site for the KK26 voting receipts and outcome explanation.

This repository intentionally contains only deployable public files. The private
data-processing pipeline lives outside this repository.

## Local Preview

```sh
make serve
```

Then open `http://localhost:8000`.

## Check

```sh
make check
```

## Deploy

Pushes to `main` automatically publish the static site to the `gh-pages` branch
with GitHub Actions.
