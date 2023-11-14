# pages-ab-test

## Description

- pages-project has both a production and preview deployment using the `main` and `beta` branch respectively.
- When a request comes in on the `main` branch (indicating that it's the production deployment), there's a 50% chance to route to the preview deployment.
