const { test, expect } = require('@playwright/test');

test('User success login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Add item to cart and validate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await page.waitForSelector('button[id="add-to-cart-sauce-labs-backpack"]', { timeout: 10000 });
  await page.click('button[id="add-to-cart-sauce-labs-backpack"]');
  
  const cartBadge = await page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
