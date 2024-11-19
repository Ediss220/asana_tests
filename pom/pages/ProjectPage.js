import { step } from 'allure-js-commons';
import { expect } from '@playwright/test';

export default class ProjectPage {
    constructor(page) {
        this.page = page;
        this.draftprojectbrieft = this.page.getByText('Draft project brief', { exact: true });
        this.schedulekickoffmeeting = this.page.getByText('Schedule kickoff meeting');
        this.sharetimelinewithteammates = this.page.getByText('Share timeline with teammates');
        
        this.verifyToDocolumn = this.page.getByRole('link', { name: 'Cross-functional project plan, Project To do' });
        
        this.tagNonpriority = this.page.getByLabel('Priority Non-Priority');
        this.tagOntrack = this.page.getByLabel('Status On track');
        this.tagHigh = this.page.getByLabel('Priority High');
        this.tagOfftrack = this.page.getByLabel('Status Off track');
        this.tagMedium = this.page.getByLabel('Priority Medium');
        this.tagAtrisk = this.page.getByLabel('Status At risk');
        
               
    }

    async clickDraftproject(email) {
        await step('Open "Draft project brief', async () => {
            await this.draftprojectbrieft.click();
        });
    }

    async clickSchedulekickoff(email) {
        await step('Schedule kickoff meeting', async () => {
            await this.schedulekickoffmeeting.click();
        });
    }

    async clickSharetimeline() {
        await step('Share timeline with teammates', async () => {
            await this.sharetimelinewithteammates.click();
        });
    }

    async clickLogin() {
        await step('Click on "Log in" button.', async () => {
            await this.loginButton.click();
        });
    }

    async verifyTagNonpriority() {
        await step('Verify Tag', async () => {
         await this.tagNonpriority.waitFor({ state: 'visible', timeout: 10000 });
             await expect(this.tagNonpriority).toBeVisible();
        });
    }
    
    async verifyTagOntrack() {
        await step('Verify Tag', async () => {
         await this.tagOntrack.waitFor({ state: 'visible', timeout: 10000 });
            await expect(this.tagOntrack).toBeVisible();
        });
    }
    async verifyTagHigh() {
        await step('Verify Tag', async () => {
         await this.tagHigh.waitFor({ state: 'visible', timeout: 10000 });
            await expect(this.tagHigh).toBeVisible();
        });
    }
    async verifyTagOfftrack() {
        await this.tagOfftrack.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagOfftrack).toBeVisible();
        });
    }
    async verifyTagMedium() {
        await this.tagMedium.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagMedium).toBeVisible();
        });
    }
    async verifyTagAtrisk() {
        await this.tagAtrisk.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagAtrisk).toBeVisible();
        });
    }
}