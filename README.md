# Playwright Test Suite

This repository holds a sample Playwright test suite for the [Sauce Labs application](https://www.saucedemo.com/). I've added these instructions to make it easy to get up and running.

## 🚀 Getting Started

Here’s what you need and how to install the project.

### Prerequisites

*   **Node.js**: Version 18 or higher is recommended.
*   **Package Manager**: npm, pnpm, or yarn.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sushanth1133/Playwright.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Playwright
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Install Playwright browsers:**
    This step downloads the browsers (Chromium, Firefox, WebKit) that Playwright needs to run the tests.
    ```bash
    npx playwright install
    ```

## 🧪 Running Tests

The test suite covers the main features of the TodoMVC app, including adding, editing, completing, and deleting todos.

**To run the entire test suite**, use the following command. This will execute the tests in headless mode across all configured browsers.
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

This suite includes a comprehensive set of tests for the TodoMVC application, covering functionalities like adding, editing, completing, and deleting todos.

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

-   `tests-examples/`: Contains the test files.
    -   `demo-todo-app.spec.js`: The main test file for the TodoMVC application.
-   `playwright.config.js`: The main configuration file for Playwright.
-   `playwright-report/`: This directory contains the HTML report generated after a test run. It should typically be added to `.gitignore`.
-   `package.json`: Defines project metadata and dependencies.