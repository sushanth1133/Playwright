import { HelperBase } from '../helperBase';
import dotenv from 'dotenv';
dotenv.config({ path: './env/.env.prod' });

export class LoginPage extends HelperBase {

    constructor(page) {
        super(page)
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async userLogin(){
        await this.page.goto(process.env.url);
        await this.userNameInput.fill(process.env.userId);
        await this.passwordInput.fill(process.env.password);
        await this.loginButton.click();
    }

    async logout(){
        await this.menuButton.click();
        await this.logoutButton.click();
    }


}
