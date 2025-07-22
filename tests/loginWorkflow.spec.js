import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../Page-Objects/pageObjectManager.js';


test.describe('Test Suite for Login Workflow', () => {
    let pom;
    let page;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        pom = new PageObjectManager(page);
    });

    test('should login successfully', async () => {
        await pom.getLoginPage().userLogin();
        await expect(page).toHaveTitle("Swag Labs");
        await expect(page).toHaveURL(/.*inventory.html/);
    })

    test('should logout successfully', async () => {
        await pom.getLoginPage().userLogin();
        await pom.getLoginPage().logout();
        await expect(pom.getLoginPage().loginButton).toBeVisible();
    })

    test('should fail to login with invalid credentials', async () => {
        const loginPage = pom.getLoginPage();
        await loginPage.page.goto(process.env.url);
        await loginPage.userNameInput.fill('invalid_user');
        await loginPage.passwordInput.fill('invalid_password');
        await loginPage.loginButton.click();

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    });
})