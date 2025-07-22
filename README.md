# Playwright E2E Test Suite for Sauce Labs Demo

This repository contains a robust and scalable end-to-end test suite built with [Playwright](https://playwright.dev/) for the [Sauce Labs "Swag Labs" demo application](https://www.saucedemo.com/).

The primary goal of this project is to demonstrate a professional approach to test automation, focusing on best practices like the Page Object Model (POM), clean code, and maintainability.

## ✨ Key Features

*   **Page Object Model (POM):** The suite is structured using the POM design pattern, which makes the code cleaner, more reusable, and easier to maintain by separating page-specific logic from test cases.
*   **Comprehensive Test Coverage:** Includes a variety of tests covering critical user workflows:
    *   Successful and unsuccessful login/logout.
    *   End-to-end checkout with single and multiple items.
    *   Shopping cart management (adding/removing items).
    *   Form validation for the checkout process.
*   **Cross-Browser Compatibility:** Configured to run tests across major browsers (Chromium, Firefox, WebKit) to ensure consistent application behavior.
*   **CI/CD Ready:** The configuration is optimized for integration into Continuous Integration pipelines.
*   **Detailed HTML Reporting:** Generates an interactive HTML report after each run, complete with test results, traces, and screenshots for easy debugging.
*   **Environment-Based Configuration:** Uses `.env` files to manage sensitive data like credentials, keeping them separate from the codebase.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher is recommended)
*   An NPM client (npm, pnpm, or yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Playwright
    ```
3.  **Install project dependencies:**
    ```bash
    npm install
    ```
4.  **Install Playwright browsers:**
    This command downloads the browser binaries required for testing.
    ```bash
    npx playwright install
    ```
5.  **Set up environment variables:**
    Create a file named `.env.prod` in the `/env` directory. This file will store the application credentials.
    ```
    # ./env/.env.prod

    url=https://www.saucedemo.com/
    userId=standard_user
    password=secret_sauce
    ```

## 🧪 Running Tests

To run the entire test suite in headless mode across all configured browsers, use the following command:
```bash
npm test
```

### Running in Headed Mode

To watch the tests execute in a browser window, which is great for debugging, use the `--headed` flag:
```bash
npx playwright test --headed
```

### Running a Specific Test

If you only want to run a single test file, you can specify its path:
```bash
npx playwright test tests-examples/demo-todo-app.spec.js
```

## 📊 Viewing the Test Report

After a test run, an HTML report is generated in the `playwright-report` directory. To view it, simply run:
```bash
npm run test:report
```
This will start a local web server and open the interactive report in your browser, where you can see detailed results, traces, and screenshots for each test.

## 📂 Project Structure

A quick overview of the key files and directories in this project:

-   `tests-examples/`: Contains all the test files (`.spec.js`).
    -   `demo-todo-app.spec.js`: The example test file demonstrating tests against the TodoMVC app.
-   `playwright.config.js`: The main Playwright configuration file. This is where you control browsers, test directories, reporters, and more.
-   `package.json`: Defines project dependencies and contains the helpful `scripts` for running tests and reports.
-   `playwright-report/`: This directory is automatically created to store the HTML test report. It is included in the `.gitignore` file as it should not be committed to version control.

This repository contains an example Playwright test suite for the [TodoMVC application](https://demo.playwright.dev/todomvc).

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher is recommended)
- npm, pnpm, or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sushanth1133/Playwright.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Playwright
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## 🧪 Running Tests

This suite includes a comprehensive set of tests for the Sauce Labs application, covering functionalities

To run the entire test suite, use the following command:

```bash
npm test
```

This will execute the tests in a headless mode across Chromium, Firefox, and WebKit as configured in `playwright.config.js`.

### Running in Headed Mode

To watch the tests execute in a browser, use the `--headed` flag:

```bash
npx playwright test --headed
```

### Running a Specific Test

To run a single test file:

```bash
npx playwright test tests-examples/demo-todo-app.spec.js
```

## 📊 Viewing the Test Report

After the tests have been executed, an HTML report is generated. To view it, run:

```bash
npm run test:report
```

This will open a web server and display a detailed, interactive report of the test results.

## 📂 Project Structure

-   `tests/`: Contains the test files.
    -   `loginWorkflow.spec.js`: The main test file for the login workflow of the application.
-   `playwright.config.js`: The main configuration file for Playwright.
-   `playwright-report/`: This directory contains the HTML report generated after a test run. It should typically be added to `.gitignore`.
-   `package.json`: Defines project metadata and dependencies.
