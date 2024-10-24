const { test, expect } = require('@playwright/test');

test('User success login', async ({ page }) => {
  // Go to saucedemo login page
  await page.goto('https://www.saucedemo.com/');

  // Fill username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login button
  await page.click('#login-button');

  // Validate user is on the dashboard
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Add item to cart and validate', async ({ page }) => {
  // User already logged in, directly navigate to inventory page
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Tunggu manual selama 2 detik untuk memastikan halaman sudah dimuat
  await page.waitForTimeout(2000);

  // Klik tombol Add to Cart pada item pertama
  await page.click('.inventory_item:nth-child(1) button');

  // Validate item successfully added to cart
  const cartBadge = await page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
