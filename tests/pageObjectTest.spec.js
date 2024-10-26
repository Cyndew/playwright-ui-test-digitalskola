const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');
const CartPage = require('../pages/cart.page');

test('SauceDemo Page Object Test - User success login and adds item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    // Login ke aplikasi
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  
    await dashboardPage.verifyOnDashboard();

    await cartPage.addItemToCart();
    await cartPage.verifyItemInCart();
});
