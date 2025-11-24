const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const users = require('../../test-data/users.json');
const path = require('path');

const filePath = path.resolve(__dirname, '../../login-demo.html');
const loginPageUrl = 'file:///' + filePath.replace(/\\/g, '/');

test.describe('Data Driven Login Tests', () => {

  for (const user of users) {

    test(`Login test – username: "${user.username}"`, async ({ page }) => {
      
      const login = new LoginPage(page);

      await login.goto(loginPageUrl);
      await login.login(user.username, user.password);

      await expect(login.message).toHaveText(user.expected);
    });

  }
});
