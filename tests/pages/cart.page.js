const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = 'button[id="add-to-cart-sauce-labs-backpack"]';
    this.cartBadge = '.shopping_cart_badge';
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async verifyItemInCart() {
    await expect(this.page.locator(this.cartBadge)).toHaveText('1');
  }
}

module.exports = CartPage;
