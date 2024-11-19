import { step } from 'allure-js-commons';
import { expect } from '@playwright/test';
import {URL_ENDPOINT } from '../testData';

export const loginUser = async (page, headerComponent, loginPage) => {
    await step('Preconditions: Login as a registered user', async () => {
        await page.goto(process.env.URL + URL_ENDPOINT.login);
        await loginPage.fillEmailAddressInput(process.env.USER_EMAIL);
        await loginPage.clickContinue();
        await loginPage.fillPasswordInput(process.env.USER_PASSWORD);
        await loginPage.clickLogin();
        await headerComponent.myProfileButton.waitFor({ state: 'visible', timeout: 20000 });
        await expect(headerComponent.myProfileButton).toBeVisible();
    });
};