const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const path = require('path');

const filePath = path.resolve(__dirname, '../../login-demo.html');
const loginPageUrl = 'file:///' + filePath.replace(/\\/g, '/');

let login;

test.describe('Login Test Using POM', () => {

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.goto(loginPageUrl);
  });

  test('valid login', async () => {
    await login.login('admin', 'Admin@123');

    await expect(login.message).toHaveText('Login successful');
  });

  test('invalid login', async () => {
    await login.login('wrong', 'wrong');

    await expect(login.message).toHaveText('Invalid username or password');
  });

});
