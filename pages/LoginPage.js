import { expect } from '@playwright/test'
export class LoginPage{
    constructor(page){
        this.page=page
        this.clickLoginPage=page.locator('#login2')
        this.usernameField=page.locator('#loginusername')
        this.passwordField=page.locator('#loginpassword')
        this.clickLogin=page.locator("//button[text()='Log in']")

    }

    async naviagteApplication(){
         await this.page.goto('https://www.demoblaze.com/')
         await this.clickLoginPage.click()

    }

    async loginApplication(username,password){
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        this.clickLogin.click()

    }

    async verifyingApplication(){
        await expect(this.usernameField).toBeAttached() 
        await expect(this.passwordField).toBeAttached()
        await expect(this.clickLogin).toHaveText('Log in')

    }
}