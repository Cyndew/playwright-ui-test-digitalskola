const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async visualAssertion() {
        await expect(this.page).toHaveScreenshot('login-page-snapshot.png');
    }
}

module.exports = LoginPage;
