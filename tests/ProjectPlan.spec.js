import { step } from "allure-js-commons";
import { expect } from "@playwright/test";
import { test } from "../fixtures";
import { loginUser, selectProject } from "../helpers/preconditions";
import { testCases } from "../testData";

test.beforeEach(async ({ page, headerComponent, loginPage }) => {
  await loginUser(page, headerComponent, loginPage);
});

test.describe("ProjectPlan", () => {
  for (const testCase of testCases) {
    test(testCase.name, async ({ page, projectPage, headerComponent }) => {
      await step(`Select "${testCase.project}"`, async () => {
        await selectProject(page, headerComponent, testCase.project);
      });
      await step(`Click on "${testCase.taskName}"`, async () => {
        await projectPage.clickTask(testCase.taskName);
        await page.waitForTimeout(2000);
      });

      await step(`Verify task is in "${testCase.column}" column`, async () => {
        await expect(
          projectPage.getColumnLocator(testCase.verifycolumn),
        ).toBeVisible();
      });

      if (Array.isArray(testCase.tags)) {
        await test.step(`Verify tags for "${testCase.taskName}"`, async () => {
          for (const tag of testCase.tags) {
            await projectPage.verifyTag(tag);
          }
        });
      } else if (testCase.tags) {
        await projectPage.verifyTag(testCase.tags);
      } else {
        console.warn(`No tags found for test case: ${testCase.taskName}`);
      }
    });
  }
});
