import { expect } from '@playwright/test'
export class AddToCartPage{
    constructor(page){
        this.page=page
        this.clickAnyPoduct=page.locator("//a[text()='Iphone 6 32gb']")
        this.clickAddToCart=page.locator("//a[text()='Add to cart']")
        this.clickOk=page.locator("//button[text()='OK']")
        
    }

     async clickProduct(){
        await this.clickAnyPoduct.click()
    }

    async clickAddToCarts(){
        await this.clickAddToCart.click()
    }

    async popupHandling(){
        this.page.once('dialog',async dialog=>{
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()

        await this.clickOk.click()

    })
    }

    async verifyProductPage(){
        await expect(this.clickAddToCart).toBeAttached()
        await expect(this.clickAddToCart).toHaveText('Add to cart') 
    
    }
}