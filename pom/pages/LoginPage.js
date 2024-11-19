import { step } from 'allure-js-commons';
import { expect } from '@playwright/test';

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailAddressInput = this.page.getByLabel('Email address');
        this.Continue = this.page.getByRole('button', { name: 'Continue', exact: true })
        this.passwordInput = this.page.getByLabel('Password', { exact: true });
        this.loginButton = this.page.getByRole('button', { name: 'Log in' });
               
    }

    async fillEmailAddressInput(email) {
        await step('Fill in "Email" input field.', async () => {
            await this.emailAddressInput.fill(email);
        });
    }

    async fillPasswordInput(password) {
        await step('Fill in "Password" input field.', async () => {
            await this.passwordInput.fill(password);
        });
    }

    async clickContinue() {
        await step('Click on "Continue" button.', async () => {
            await this.Continue.click();
        });
    }

    async clickLogin() {
        await step('Click on "Log in" button.', async () => {
            await this.loginButton.click();
        });
    }

    async verifyLogin() {
        await step('Verify that user login', async () => {
            await expect(this.homeTitle).toBeVisible();
            await expect(this.userSettingsButton).toBeVisible();
        });
    }

    async clickForgotPassword() {
        await step('Click on "Forgot password?" link.', async () => {
            await this.forgotPasswordLink.click();
        });
    }
}
