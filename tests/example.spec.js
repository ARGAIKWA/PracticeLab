
const { test } = require('@playwright/test');

test('Open URL', async ({ page }) => {
  await page.goto('https://www.google.com');
});
