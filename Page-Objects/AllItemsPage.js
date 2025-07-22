import { HelperBase } from './helperBase.js';
import dotenv from 'dotenv';
dotenv.config({ path: './env/.env.prod' });

/**
 * Page Object for the All Items page (the main page after login).
 * Contains locators and methods for interacting with the product list.
 */
export class AllItemsPage extends HelperBase {
    /**
     * @param {import('@playwright/test').Page} page The Playwright page object.
     */
    constructor(page) {
        super(page)
        this.page = page;
        this.addToCartSauceLabsBackpack = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addToCartSauceLabsBikeLight = this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addToCartSauceLabsBoltTShirt = this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.addToCartSauceLabsFleeceJacket = this.page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.addToCartSauceLabsOnesie = this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.addToCartTestAllTheThingsTShirt = this.page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.shoppingCart = this.page.locator('.shopping_cart_link');
    }

    /**
     * Adds a specified item to the shopping cart by clicking its corresponding 'Add to cart' button.
     * @param {string} itemName The name of the product to add to the cart.
     * @throws {Error} if the provided itemName is not found.
     */
    async addItemToCart(itemName) {
        const itemMap = {
            'Sauce Labs Backpack': this.addToCartSauceLabsBackpack,
            'Sauce Labs Bike Light': this.addToCartSauceLabsBikeLight,
            'Sauce Labs Bolt T-Shirt': this.addToCartSauceLabsBoltTShirt,
            'Sauce Labs Fleece Jacket': this.addToCartSauceLabsFleeceJacket,
            'Sauce Labs Onesie': this.addToCartSauceLabsOnesie,
            'Test.allTheThings() T-Shirt (Red)': this.addToCartTestAllTheThingsTShirt
        };

        const itemLocator = itemMap[itemName];
        if (itemLocator) {
            await itemLocator.click();
        } else {
            throw new Error(`Item "${itemName}" not found.`);
        }
    }

    /**
     * Navigates to the shopping cart page.
     */
    async navigateToCart() {
        await this.shoppingCart.click();
    }
}