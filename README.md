# pages-ab-test

## Description

- pages-project has both a production and preview deployment using the `main` and `beta` branch respectively.
- When a request comes in on the `main` branch (indicating that it's the production deployment), there's a 50% chance to route to the preview deployment.

## Usage

First, update the pages.dev domain in `_midleware.ts`

Deploy both branches:

```bash
git switch main
npm run deploy # A version
git switch beta
npm run deploy # B version
```

## Demo

https://pages-ab-test.pages.dev/
