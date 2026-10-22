# Test Plan — Web Application QA Portfolio

## 1. Objective
Demonstrate a structured QA process: planning, test design, execution, defect reporting, regression checks, and basic automation.

## 2. Scope
### In scope
- Homepage content and page title
- Visible headings and links
- Basic navigation and browser compatibility checks
- Test documentation and defect workflow
- Playwright smoke tests for stable public pages

### Out of scope
- Security penetration testing
- Load/performance certification
- Testing private accounts or personal data
- Claiming production coverage without evidence

## 3. Test approach
- Smoke testing: confirm the site loads and key elements appear.
- Functional testing: verify links and expected user actions.
- Exploratory testing: investigate unusual layouts, broken links, and edge cases.
- Compatibility testing: repeat selected checks across browsers/devices where available.
- Regression testing: rerun existing checks after changes.
- Automation: automate stable, repeatable checks with Playwright.

## 4. Test environment
- OS: record your actual OS and version
- Browser: record browser and version
- Node.js: record installed version
- Playwright: record installed version
- URL under test: https://example.com (starter target; replace with your chosen practice app if desired)

## 5. Entry criteria
- Test target is reachable.
- Requirements or expected behavior are written down.
- Test environment is available.

## 6. Exit criteria
- Planned test cases have a recorded status.
- Critical/high-severity defects are documented and communicated.
- Failed tests have reproducible steps or an explanation.
- Automation suite passes, or known failures are documented.

## 7. Defect severity guide
- Critical: blocks a core workflow or causes severe data/security impact.
- High: major feature unavailable with no reasonable workaround.
- Medium: feature is impaired but a workaround exists.
- Low: minor visual/content issue with limited impact.

## 8. Deliverables
- Test plan
- Manual test cases and execution results
- Defect reports with evidence
- Playwright tests and HTML report
- GitHub issues, branches, commits, and pull requests
