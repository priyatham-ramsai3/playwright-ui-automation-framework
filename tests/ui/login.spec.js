const { test, expect } = require('@playwright/test');
const path = require('path');

// Build file:// URL to the local HTML page (works on Windows)
const filePath = path.resolve(__dirname, '../../login-demo.html');
const loginPageUrl = 'file:///' + filePath.replace(/\\/g, '/');

test.describe('Demo Login Page', () => {
  test('successful login with valid credentials', async ({ page }) => {
    await page.goto(loginPageUrl);

    await expect(page).toHaveTitle(/Demo Login/);

    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin@123');
    await page.click('button[type="submit"]');

    const message = page.locator('#message');
    await expect(message).toHaveText('Login successful');
  });

  test('shows error for invalid credentials', async ({ page }) => {
    await page.goto(loginPageUrl);

    await page.fill('#username', 'wrong');
    await page.fill('#password', 'wrong');
    await page.click('button[type="submit"]');

    const message = page.locator('#message');
    await expect(message).toHaveText('Invalid username or password');
  });
});
