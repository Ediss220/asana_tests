import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { loginUser } from '../helpers/preconditions';
import {URL_ENDPOINT } from '../testData';

test.beforeEach(async ({ page,headerComponent, loginPage }) => {
    await loginUser(page, headerComponent, loginPage);
    await headerComponent.workRequestsButton.waitFor({ state: 'visible', timeout: 20000 });
    await headerComponent.clickworkRequestsButton();
    await expect(page).toHaveURL(URL_ENDPOINT.WorkRequests);
});
test.describe('Work Requests', () => {
    test('TC_04  |  Verify "[Example] Laptop setup for new hire" is in "New Requests" column and tags', async (
        {workRequestsPage}) => {
        test.slow();
        await workRequestsPage.clickLaptopsetup();
        await expect(workRequestsPage.verifyNewRequestscolumn).toBeVisible;
        await workRequestsPage.verifytagLowpriority();
        await workRequestsPage.verifyLoweffort();
        await workRequestsPage.verifytagNewhardware();
        await workRequestsPage.tagNotStarted();
    });

    test('TC_05  |  Verify "[Example] Password not working" is in "In Progress" column and tags.', async (
        {workRequestsPage}) => {
        test.slow();
        await workRequestsPage.clickPasswordnotworking();
        await expect(workRequestsPage.verifyInProgresscolumn).toBeVisible;
        await workRequestsPage.verifyLoweffort();
        await workRequestsPage.verifytagLowpriority();
        await workRequestsPage.verifytagPasswordreset();
        await workRequestsPage.verifytagWaiting();
    });

    test('TC_06  |  Verify "[Example] New keycard for Daniela V" is in "Completed" column and tags.', async (
        {workRequestsPage}) => {
            test.slow();
            await workRequestsPage.clickNewkeycard();
            await expect(workRequestsPage.verifyCompletedcolumn).toBeVisible;
            await workRequestsPage.verifytagHighPriority();
            await workRequestsPage.verifyLoweffort();
            await workRequestsPage.verifytagNewhardware();
            await workRequestsPage.verifytagDone();
    });
});