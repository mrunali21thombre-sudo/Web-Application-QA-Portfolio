# Web Application QA Testing Portfolio

A practical portfolio project for demonstrating Manual QA, test documentation, defect reporting, Git/GitHub workflow, and introductory Playwright automation.

> **Portfolio honesty:** This repository is a learning/portfolio project. Add dates, results, screenshots, defects, and commits as you complete the work. Do not claim three months of prior project work unless you actually completed it during that period.

## Project goals
- Create a test plan and test cases.
- Practice smoke, functional, regression, compatibility, and exploratory testing.
- Record reproducible defects with expected vs. actual results.
- Automate a small set of browser checks using Playwright and TypeScript.
- Use Git branches, commits, pull requests, issues, and a project board.

## Tech stack
- Manual QA documentation: Markdown / CSV
- Automation: Playwright + TypeScript
- Version control: Git and GitHub

## Quick start
1. Install Node.js LTS.
2. In this folder, run:
   ```bash
   npm install
   npx playwright install
   ```
3. Run automated tests:
   ```bash
   npx playwright test
   ```
4. View the HTML report:
   ```bash
   npx playwright show-report
   ```

The starter automated test uses `https://example.com` so it can run without a separate local application. Website content can change, so update assertions if needed.

## Repository structure
- `tests/` — Playwright tests
- `test-docs/test-plan.md` — scope, approach, and entry/exit criteria
- `test-docs/test-cases.csv` — manual test case tracker
- `test-docs/bug-report-template.md` — reusable defect template
- `.github/ISSUE_TEMPLATE/` — GitHub issue template

## Suggested Git workflow
1. Create an issue for a task or defect.
2. Create a branch, e.g. `feature/add-navigation-tests`.
3. Make a small, meaningful change.
4. Run tests and record the result.
5. Commit with a clear message.
6. Push the branch and open a pull request.
7. Update the README or test evidence where useful.

Example commit messages:
- `docs: add initial test plan`
- `test: add homepage title check`
- `docs: add login test cases`
- `test: cover navigation links`

## Three-month learning roadmap
See `test-docs/three-month-roadmap.md`. Follow it week by week and record your real progress and evidence.
