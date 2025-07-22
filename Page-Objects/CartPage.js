import { HelperBase } from './helperBase.js';

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
        this.page = page;
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
        this.continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
        this.cartItems = this.page.locator('.cart_item');
    }

    /**
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    /**
     * Removes a specified item from the shopping cart by locating it via its name.
     * @param {string} itemName The name of the product to remove.
     */
    async removeItemFromCart(itemName) {
        const itemContainer = this.page.locator('.cart_item', { hasText: itemName });
        await itemContainer.getByRole('button', { name: 'Remove' }).click();
    }

    /**
      * Proceeds to the checkout information page.
      */
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}