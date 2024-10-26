// dashboard.page.js
class DashboardPage {
  constructor(page) {
      this.page = page;
  }

  async validateUserIsOnDashboard() {
      await this.page.waitForSelector('.inventory_list');
  }

  async addSpecificItemToCart(itemName) {

      await this.page.click(`text=${itemName} >> xpath=../.. >> button:has-text("Add to cart")`);
  }

  async goToCart() {
      await this.page.click('.shopping_cart_link');
  }
}

module.exports = DashboardPage;
