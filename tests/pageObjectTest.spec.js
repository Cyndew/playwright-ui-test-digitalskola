const { test, expect } = require('@playwright/test'); // Pastikan test dan expect diimpor
const path = require('path');
const LoginPage = require(path.resolve(__dirname, './pages/login.page.js'));
const DashboardPage = require(path.resolve(__dirname, './pages/dashboard.page.js'));
const CartPage = require(path.resolve(__dirname, './pages/cart.page.js'));

test('Visual assertion for each page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    await loginPage.visualAssertion();
    await dashboardPage.visualAssertion();
    await cartPage.visualAssertion();
});
