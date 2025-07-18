import { test, expect } from '@playwright/test';
import { POManger } from '../Page-Objects/pageObjectManager.spec.js';


test.describe('Test Suite for Login Workflow', () => {
    test('login', async ({ browser }) => {
        const context = await browser.newContext();
        await context.clearCookies();
        const page = await context.newPage();
        const pom = new POManger(page);
        await pom.getLoginPage().userLogin();
        await expect(page).toHaveTitle("Swag Labs");
    })

    test('logout', async ({ browser }) => {
        const context = await browser.newContext();
        await context.clearCookies();
        const page = await context.newPage();
        const pom = new POManger(page);
        await pom.getLoginPage().userLogin();
        await pom.getLoginPage().logout();
    })

})