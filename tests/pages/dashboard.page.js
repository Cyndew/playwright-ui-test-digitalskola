const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = 'text=Add to cart';
    }

    async visualAssertion() {
        // Visual assertion to compare dashboard page with stored snapshot
        await expect(this.page).toHaveScreenshot('dashboard-page-snapshot.png');
    }

    async addItemToCart() {
        await this.page.click(this.addToCartButton);
    }
}

module.exports = DashboardPage;
