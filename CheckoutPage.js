import { expect } from '@playwright/test';
import { HelperBase } from '../helperBase';

/**
 * Page Object for the multi-step Checkout process.
 */
export class CheckoutPage extends HelperBase {
    /**
     * @param {import('@playwright/test').Page} page The Playwright page object.
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.firstNameInput = this.page.locator('[data-test="firstName"]');
        this.lastNameInput = this.page.locator('[data-test="lastName"]');
        this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
        this.continueButton = this.page.locator('[data-test="continue"]');
        this.finishButton = this.page.locator('[data-test="finish"]');
        this.summaryTotalLabel = this.page.locator('.summary_total_label');
        this.completeHeader = this.page.locator('.complete-header');
    }

    /**
     * Fills out the shipping information and continues to the next step.
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} postalCode
     */
    async fillShippingInfo(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    /**
     * Clicks the Finish button on the checkout overview page to complete the order.
     */
    async finishCheckout() {
        await this.finishButton.click();
    }
}