# Playwright UI Automation Framework (JavaScript)

This repository contains a Playwright-based UI automation framework built with JavaScript.  
It demonstrates a professional test architecture using:

- Page Object Model (POM)
- Fixtures
- Data-driven tests
- Multi-browser execution
- HTML reporting

The sample app under test is a simple local **Demo Login** page (`login-demo.html`) bundled inside this project.

---

## 🔧 Tech Stack

- **Language:** JavaScript (Node.js)
- **Test Runner:** `@playwright/test`
- **Browsers:** Chromium, Firefox, WebKit
- **Editor (recommended):** VS Code

---

## 📂 Project Structure

```text
playwright-demo
│  package.json
│  playwright.config.js
│  login-demo.html          # Local demo login page
│
├─tests
│  ├─ui
│  │    homepage.spec.js            # Sample test - Playwright site
│  │    login.spec.js               # Login tests (without POM)
│  │    login-pom.spec.js           # Login tests using Page Object Model
│  │    after-login.spec.js         # Tests using login fixture
│  │    data-driven-login.spec.js   # Data driven login tests
│  └─api
│       (API tests can be added here)
│
├─pages
│    HomePage.js          # Home page object (example)
│    LoginPage.js         # Login page object
│
├─fixtures
│    auth-fixture.js      # Custom fixtures (e.g. auto-login)
│
├─utils
│    helpers.js           # Reusable helper functions (optional)
│
└─test-data
     users.json           # Test data for data-driven tests
