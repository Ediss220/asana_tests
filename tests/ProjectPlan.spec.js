import { step } from 'allure-js-commons';
import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { loginUser } from '../helpers/preconditions';
import {URL_ENDPOINT } from '../testData';

test.beforeEach(async ({ page,headerComponent, loginPage }) => {
    await loginUser(page, headerComponent, loginPage);
    await headerComponent.crossFunProjectButton.waitFor({ state: 'visible', timeout: 20000 });
    await headerComponent.clickcrossFunProjectButton();
    await expect(page).toHaveURL(URL_ENDPOINT.Project);
});
test.describe('ProjectPlan', () => {
    test('TC_01  |  Verify "Draft project brief" is in the "To do" column and tags.', async (
        {projectPage}) => {
        test.slow();
        await projectPage.clickDraftproject();
        await expect(projectPage.verifyToDocolumn).toBeVisible
        await projectPage.verifyTagNonpriority();
        await projectPage.verifyTagOntrack();
    });

    test('TC_02  |  Verify "Schedule kickoff meeting" is in the "To do" column and tags.', async (
        {page,projectPage}) => {
        test.slow();
        await projectPage.clickSchedulekickoff();
        await expect(projectPage.verifyToDocolumn).toBeVisible;
        await projectPage.verifyTagMedium();
        await projectPage.verifyTagAtrisk();
    });

    test('TC_03  |  Verify "Share timeline with teammates" column and tags.', async (
        {page,projectPage}) => {
        test.slow();
        await projectPage.clickSharetimeline();
        await expect(projectPage.verifyToDocolumn).toBeVisible;
        await projectPage.verifyTagHigh();
        await projectPage.verifyTagOfftrack();
    });
});
