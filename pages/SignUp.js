import { expect } from '@playwright/test'
export class SignUp{
    constructor(page){
        this.page=page
        this.clickSignup=page.locator('#signin2')
        this.usernameField=page.locator('#sign-username')
        this.passwordField=page.locator('#sign-password')
        this.clickSign=page.locator("//button[@onclick='register()']")
        this.clickClose=page.locator("//div[@id='signInModal']//button[text()='Close']")
        
    }
    //methods create


    async navigateApplication(){
        await this.page.goto('https://www.demoblaze.com/')
        await this.clickSignup.click()
    }

    async applicationSingup(username,password){
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.clickSign.click()

    }

    async closeSignup(username,password){
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.clickClose.click()

    }

    //Assertion

    async verifySignupPage() { 
        await expect(this.usernameField).toBeVisible() 
        await expect(this.passwordField).toBeVisible() 
        await expect(this.clickSign).toBeVisible()
    } 
    
    async verifySignUpText(){
        await expect(this.clickSign).toHaveText('Sign up')
    }

}