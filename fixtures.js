import { test as base } from "@playwright/test";

import LoginPage from "./pom/pages/LoginPage";
import ProjectPage from "./pom/pages/ProjectPage";
import HeaderComponent from "./pom/components/HeaderComponent";

export const test = base.extend({
  /** @type { LoginPage } */
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  /** @type { ProjectPage } */
  projectPage: async ({ page }, use) => {
    await use(new ProjectPage(page));
  },
  /** @type { HeaderComponent } */
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
});
