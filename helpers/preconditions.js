import { step } from "allure-js-commons";
import { expect } from "@playwright/test";
import { URL_ENDPOINT, testCases } from "../testData";

export const loginUser = async (page, headerComponent, loginPage) => {
  await step("Preconditions: Login as a registered user", async () => {
    await page.goto(process.env.URL + URL_ENDPOINT.login);
    await loginPage.fillEmailAddressInput(process.env.USER_EMAIL);
    await loginPage.clickContinue();
    await loginPage.fillPasswordInput(process.env.USER_PASSWORD);
    await loginPage.clickLogin();
    await headerComponent.myProfileButton.waitFor({ state: "visible" });
    await expect(headerComponent.myProfileButton).toBeVisible();
    await page.waitForTimeout(2000);
  });
};

export const selectProject = async (page, headerComponent, projectName) => {
  await step(`Select project: ${projectName}`, async () => {
    switch (projectName) {
      case "Cross-functional project plan":
        await headerComponent.clickcrossFunProjectButton();
        await expect(page).toHaveURL(URL_ENDPOINT.Project);
        break;
      case "Work Requests":
        await headerComponent.clickworkRequestsButton();
        await expect(page).toHaveURL(URL_ENDPOINT.WorkRequests);
        break;
      default:
        throw new Error(`Unknown project: ${projectName}`);
    }
  });
};
