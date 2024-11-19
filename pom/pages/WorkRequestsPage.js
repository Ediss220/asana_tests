import { step } from 'allure-js-commons';
import { expect } from '@playwright/test';

export default class ProjectPage {
    constructor(page) {
        this.page = page;
        this.laptopsetup = this.page.getByText('[Example] Laptop setup for new hire', { exact: true });
        this.passwordnotworking = this.page.getByText('[Example] Password not working');
        this.newkeycard = this.page.getByText('[Example] New keycard for Daniela V');

        this.verifyInProgresscolumn = this.page.getByRole('link', { name: 'Work Requests In Progress' });
        this.verifyNewRequestscolumn = this.page.getByRole('link', { name: 'Work Requests New Requests' });
        this.verifyCompletedcolumn = this.page.getByRole('link', { name: 'Work Requests Completed' });
        
        
        this.tagMediumpriority = this.page.getByLabel('Medium priority');
        this.tagLoweffort = this.page.getByLabel('Low effort');
        this.tagNewhardware = this.page.getByLabel('New hardware');
        this.tagNotStarted = this.page.getByLabel('Not Started');
        this.tagLowpriority = this.page.getByLabel('Low priority');
        this.tagPasswordreset = this.page.getByLabel('Password reset');
        this.tagWaiting = this.page.getByLabel('Waiting');
        this.tagHighPriority = this.page.getByLabel('High Priority');
        this.tagDone = this.page.getByLabel('Done');
        
        
               
    }

    async clickLaptopsetup(email) {
        await step('Open "Laptop setup for new hire"', async () => {
            await this.laptopsetup.click();
        });
    }

    async clickPasswordnotworking(email) {
        await step('Open "Password not working"', async () => {
            await this.passwordnotworking.click();
        });
    }

    async clickNewkeycard() {
        await step('Open "New keycard for Daniela V"', async () => {
            await this.newkeycard.click();
        });
    }

    async verifyMediumpriority() {
        await step('Verify Tag', async () => {
         await this.tagMediumpriority.waitFor({ state: 'visible', timeout: 10000 });
             await expect(this.tagMediumpriority).toBeVisible();
        });
    }
    
    async verifyLoweffort() {
        await step('Verify Tag', async () => {
         await this.tagLoweffort.waitFor({ state: 'visible', timeout: 10000 });
            await expect(this.tagLoweffort).toBeVisible();
        });
    }
    async verifytagNewhardware() {
        await step('Verify Tag', async () => {
         await this.tagNewhardware.waitFor({ state: 'visible', timeout: 10000 });
            await expect(this.tagNewhardware).toBeVisible();
        });
    }
    async verifytagNotStarted() {
        await this.tagNotStarted.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagNotStarted).toBeVisible();
        });
    }
    async verifytagLowpriority() {
        await this.tagLowpriority.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagLowpriority).toBeVisible();
        });
    }
    async verifytagPasswordreset() {
        await this.tagPasswordreset.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagPasswordreset).toBeVisible();
        });
    }

    async verifytagWaiting() {
        await this.tagWaiting.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagWaiting).toBeVisible();
        });
    }

    async verifytagHighPriority() {
        await this.tagHighPriority.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagHighPriority).toBeVisible();
        });
    }

    async verifytagDone() {
        await this.tagDone.waitFor({ state: 'visible', timeout: 10000 });
        await step('Verify Tag', async () => {
            await expect(this.tagDone).toBeVisible();
        });
    }
}