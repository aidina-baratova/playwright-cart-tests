const { test, expect } = require('@playwright/test');

test('add an item to the cart and verify the cart badge shows 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
await page.click('#add-to-cart-sauce-labs-backpack');
await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});
test('remove an item and verify badge disappears', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
 await expect(page.locator('.title')).toHaveText('Products');
await page.click('#add-to-cart-sauce-labs-backpack');
await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
await page.click('[data-test="remove-sauce-labs-backpack"]');
await expect(page.locator('[data-test="shopping-cart-badge"]')).not.toBeVisible();
});
test('verify correct item name appears in cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
     await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.locator('.title')).toHaveText('Products');
  await page.click('#add-to-cart-sauce-labs-onesie');
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.click('[data-test="shopping-cart-link"]');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Onesie');
});