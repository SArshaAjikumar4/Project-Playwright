import { expect } from '@playwright/test'
export class LogoutPage{
    constructor(page){
        this.page=page
        this.clickLogout=page.locator('#logout2')
        this.clickLogin=page.locator('#login2')
    }

    async Logout(){
        await this.clickLogout.click()
    }
    async verifyLogout(){
        await expect(this.clickLogin).toBeAttached()
    }
}