import { step } from "allure-js-commons";

export default class HeaderComponent {
  constructor(page) {
    this.page = page;
    this.myProfileButton = this.page.getByLabel("User settings");
    this.crossFunProjectButton = this.page.getByLabel(
      "Cross-functional project plan, Project, Project",
    );
    this.workRequestsButton = this.page.getByLabel("Work Requests");
  }

  async clickworkRequestsButton() {
    await step('Click on the "Work Requests', async () => {
      await this.workRequestsButton.click();
    });
  }

  async clickcrossFunProjectButton() {
    await step(
      'Click on the "Cross-functional project plan" button',
      async () => {
        await this.crossFunProjectButton.click();
      },
    );
  }
}
