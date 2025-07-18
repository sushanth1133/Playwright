import { page } from '@playwright/test'
import { test, expect } from '@playwright/test';
import { log } from 'console';

export class HelperBase {

    constructor(page) {
        this.page = page;
    }

    /**
     * 
     * @param {*} timeInSeconds -- Enter the time in seconds for it to wait
     */
    async waitForNumberOfSeconds(timeInSeconds) {
        await this.page.waitForTimeout(timeInSeconds * 1000);
    }

}