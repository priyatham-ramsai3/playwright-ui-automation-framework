const { expect } = require('@playwright/test');
const { test } = require('../../fixtures/auth-fixture');

test('Auto login using fixture', async ({ loginAsAdmin }) => {

  const msg = loginAsAdmin.locator('#message');

  await expect(msg).toHaveText('Login successful');
  
});
