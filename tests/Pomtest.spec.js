const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../testdata/loginData.json');

for (const { username, password } of loginData) {
    test(`login with username: ${username}`, async ({ page }) => {
        const login = new LoginPage(page);
        await login.gotoLoginPage();
        await login.login(username, password);
    });
}
