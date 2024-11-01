const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = '.shopping_cart_badge';
    }

    async visualAssertion() {
        // Visual assertion to compare cart page with stored snapshot
        await expect(this.page).toHaveScreenshot('cart-page-snapshot.png');
    }

    async verifyItemInCart() {
        await expect(this.page.locator(this.cartBadge)).toHaveText('1');
    }
}

module.exports = CartPage;
