import { loginPage } from "../Page-Objects/Login_Page/LoginPage.js";

export class POManger {

    constructor(page) { 
        this.page = page;
        this.loginPage = new loginPage(this.page)

    }

    getLoginPage(){
        return this.loginPage;
    }

}