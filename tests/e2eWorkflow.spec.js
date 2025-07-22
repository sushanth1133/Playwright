import { test, expect } from '@playwright/test';
import { PageObjectManager } from '../Page-Objects/pageObjectManager.js';

test.describe('End-to-End Workflow Tests', () => {

    let pom;
    let page;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        pom = new PageObjectManager(page);
        await pom.getLoginPage().userLogin();
    });

    test('should add a single product to cart and checkout', async () => {
        const allItemsPage = pom.getAllItemsPage();
        const cartPage = pom.getCartPage();
        const checkoutPage = pom.getCheckoutPage();

        await allItemsPage.addItemToCart('Sauce Labs Backpack');
        await allItemsPage.navigateToCart();
        await cartPage.proceedToCheckout();
        await checkoutPage.fillShippingInfo('John', 'Doe', '12345');

        // On Checkout: Overview page, then complete
        await expect(checkoutPage.summaryTotalLabel).toContainText('Total: $32.39');
        await checkoutPage.finishCheckout();

        // On Checkout: Complete! page
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });

    test('should add multiple items to cart and then checkout', async () => {
        const allItemsPage = pom.getAllItemsPage();
        const cartPage = pom.getCartPage();
        const checkoutPage = pom.getCheckoutPage();

        await allItemsPage.addItemToCart('Sauce Labs Backpack');
        await allItemsPage.addItemToCart('Sauce Labs Bike Light');
        await allItemsPage.addItemToCart('Sauce Labs Bolt T-Shirt');
        await allItemsPage.navigateToCart();
        await cartPage.proceedToCheckout();
        await checkoutPage.fillShippingInfo('Jane', 'Smith', '54321');

        // On Checkout: Overview page, then complete
        await expect(checkoutPage.summaryTotalLabel).toContainText('Total: $60.45');
        await checkoutPage.finishCheckout();

        // On Checkout: Complete! page
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });

    test('should remove an item from the cart', async () => {
        const allItemsPage = pom.getAllItemsPage();
        const cartPage = pom.getCartPage();
        const itemName = 'Sauce Labs Backpack';

        // Add two items to the cart
        await allItemsPage.addItemToCart(itemName);
        await allItemsPage.addItemToCart('Sauce Labs Bike Light');
        await allItemsPage.navigateToCart();

        // Verify both items are present
        await expect(cartPage.cartItems).toHaveCount(2);

        // Remove one item
        await cartPage.removeItemFromCart(itemName);

        // Verify only one item remains and the correct one was removed
        await expect(cartPage.cartItems).toHaveCount(1);
        await expect(cartPage.page.getByText(itemName)).not.toBeVisible();
    });

    test('should display an error when checking out with no information', async () => {
        const allItemsPage = pom.getAllItemsPage();
        const cartPage = pom.getCartPage();
        const checkoutPage = pom.getCheckoutPage();

        await allItemsPage.addItemToCart('Sauce Labs Fleece Jacket');
        await allItemsPage.navigateToCart();
        await cartPage.proceedToCheckout();

        await checkoutPage.continueButton.click();

        await expect(checkoutPage.errorMessage).toContainText('Error: First Name is required');
    });
});