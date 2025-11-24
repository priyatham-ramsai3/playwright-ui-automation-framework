const { test, expect } = require('@playwright/test');

test('Sample Test: Playwright Homepage', async ({ page }) => {
  await page.goto('/'); // baseURL from config

  await expect(page).toHaveTitle(/Playwright/);

  const header = page.getByText('Playwright', { exact: false }).first();
  await expect(header).toBeVisible();
});
