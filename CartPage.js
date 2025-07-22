import { expect } from '@playwright/test';
import { HelperBase } from '../helperBase';

/**
 * Page Object for the Shopping Cart page.
 */
export class CartPage extends HelperBase {
    /**
     * @param {import('@playwright/test').Page} page The Playwright page object.
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
        this.continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
    }

    /**
     * Proceeds to the checkout information page.
     */
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}