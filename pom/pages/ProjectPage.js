import { testCases } from "../../testData";
import { step } from "allure-js-commons";
import { expect } from "@playwright/test";

export default class ProjectPage {
  constructor(page) {
    this.page = page;
    this.taskLocators = {};
    this.columnLocators = {};
    this.tagLocators = {};
    for (const testCase of testCases) {
      this.taskLocators[testCase.taskName] = this.page.getByText(
        testCase.taskName,
      );
      if (testCase.verifycolumn) {
        this.columnLocators[testCase.verifycolumn] = this.page.getByRole(
          "link",
          { name: testCase.verifycolumn },
        );
      }
      if (Array.isArray(testCase.tags)) {
        for (const tag of testCase.tags) {
          if (!this.tagLocators[tag]) {
            this.tagLocators[tag] = this.page.getByText(tag);
          }
        }
      }
    }
  }

  getColumnLocator(verifycolumn) {
    const columnLocator = this.columnLocators[verifycolumn];
    if (!columnLocator) {
      throw new Error(`No locator found for column: ${verifycolumn}`);
    }
    return columnLocator;
  }

  async clickTask(taskName) {
    await step(`Click on "${taskName}"`, async () => {
      const taskLocator = this.taskLocators[taskName];
      const count = await taskLocator.count();
      if (count > 1) {
        console.warn(
          `Multiple (${count}) elements found for task "${taskName}". Clicking the first one.`,
        );
      }
      await taskLocator.first().click();
      await this.page.waitForLoadState("networkidle", { timeout: 20000 });
    });
  }

  async verifyColumn(verifycolumn) {
    await step(`Verify column "${verifycolumn}"`, async () => {
      await expect(columnLocator).toBeVisible();
    });
  }

  async verifyTag(tags) {
    await step(`Verify tag "${tags}"`, async () => {
      const tagLocator = this.tagLocators[tags];
      const count = await tagLocator.count();
      if (count === 0) {
        throw new Error(`Tag "${tags}" not found`);
      } else if (count > 1) {
        console.warn(
          `Multiple (${count}) elements found for tag "${tags}". Verifying the first one.`,
        );
      }
      await expect(tagLocator.first()).toBeVisible();
    });
  }
}
