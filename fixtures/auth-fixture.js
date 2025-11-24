const base = require('@playwright/test').test;

exports.test = base.extend({
    
  loginAsAdmin: async ({ page }, use) => {
    await page.goto('file:///' + require('path')
      .resolve(__dirname, '../login-demo.html')
      .replace(/\\/g, '/')
    );

    await page.fill('#username', 'admin');
    await page.fill('#password', 'Admin@123');
    await page.click('button[type="submit"]');

    await use(page);
  },

});
