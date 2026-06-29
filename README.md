# Playwright Cart Test Suite — Saucedemo

Automated end-to-end cart tests for [saucedemo.com](https://www.saucedemo.com) built with Playwright and JavaScript.

## What This Tests

- Showcasing an accurate number of items added to the cart 
- Removal of an item and verifying that a badge disappears
- Verify that the correct item name appears in the cart

## Tech Stack

- Playwright
- JavaScript
- Node.js
- GitHub Actions (CI/CD)

## How To Run

Install dependencies:

```bash
npm install
```

Run tests on Chromium:

```bash
npx playwright cart tests/cart.test.js --project=chromium
```

View HTML report:

```bash
npx playwright show-report
```

## Test Results

3 tests — 3 passed on Chromium and Firefox.

## About

Built as part of my QA automation portfolio. I have 5 years of QA experience in fintech (M1 Finance, JPMorgan Chase) and am expanding into test automation.
