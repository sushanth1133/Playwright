const { Console } = require("console");
import { test, expect } from '@playwright/test';
import { HelperBase } from '../helperBase';
import dotenv from 'dotenv';
dotenv.config({ path: './env/.env.prod' });

export class loginPage extends HelperBase {

    constructor(page) {
        super(page)
        this.page = page;
        this.userName = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBttn = page.locator('#login-button')
        this.menuBttn = page.locator('#react-burger-menu-btn')
        this.logoutBttn = page.locator('#logout_sidebar_link')
    }

    async userLogin(){
        await this.page.goto(process.env.url);
        await this.page.waitForLoadState('domcontentloaded');
        await this.waitForNumberOfSeconds(1)
        await this.userName.waitFor({ state: 'visible', timeout: 45000 });
        await this.userName.fill(process.env.userId)
        await this.password.fill(process.env.password)
        await this.waitForNumberOfSeconds(1)
        await this.loginBttn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.waitForNumberOfSeconds(1)
    }

    async logout(){
        await this.page.waitForLoadState('domcontentloaded');
        await this.waitForNumberOfSeconds(1)
        await this.menuBttn.click()
        await this.waitForNumberOfSeconds(1)
        await this.logoutBttn.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.waitForNumberOfSeconds(1)
        console.log(await this.page.title())
    }


}
