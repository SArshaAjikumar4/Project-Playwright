import { expect } from '@playwright/test'
export class PurchasePage{
    constructor(page){
        this.page=page
         this.clickAddToCart=page.locator("//a[text()='Add to cart']")

        this.clickCategoryPhone=page.locator("//a[text()='Phones']")
        this.selectPhone=page.locator("//a[text()='Samsung galaxy s6']")
        this.clickCart=page.locator("//a[text()='Cart']")
        this.clickPlaceOrder=page.locator("//button[text()='Place Order']")
        this.nameField=page.locator('#name')
        this.countryField=page.locator('#country')
        this.cityField=page.locator('#city')
        this.creditcardField=page.locator('#card')
        this.monthField=page.locator('#month')
        this.yearField=page.locator('#year')
        this.clickPurchase=page.locator("//button[text()='Purchase']")
        this.clickOk=page.locator("//button[text()='OK']")
        this.clickCategoryMonitor=page.locator("//a[text()='Monitors']")
        this.selectMonitor=page.locator("//a[text()='Apple monitor 24']")
        this.clickOk=page.locator("//button[text()='OK']")


        

    }

    
    

   /*async verifyingApplication(){
        await expect(this.page).toHaveURL('https://www.demoblaze.com/')

    }*/


    async clickAddToCarts(){
        await this.clickAddToCart.click()
    }
    

    async selectAnyPhone(){
        await this.clickCategoryPhone.click()
        await this.selectPhone.click()
    }

    async popupHandling(){
        this.page.once('dialog',async dialog=>{
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()

        await this.clickOk.click()

    })
    }

    async navigateToCart(){
        await this.clickCart.click()
    }

    async placeOrder(){
        await this.clickPlaceOrder.click()
    }

    async detailsAdding(name,country,city,credirtcard,month,year){
        await this.nameField.fill(name)
        await this.countryField.fill(country)
        await this.cityField.fill(city)
        await this.creditcardField.fill(credirtcard)
        await this.monthField.fill(month)
        await this.yearField.fill(year)
    }


    async Purchase(){
        await this.clickPurchase.click()
        await this.clickOk.click()

    }

    async selectAnyMonitor(){
        await this.clickCategoryMonitor.click()
        await this.selectMonitor.click()
    }

    async verifyPurchaseForm(){
    await expect(this.nameField).toBeAttached()
    await expect(this.countryField).toBeAttached()
    await expect(this.cityField).toBeAttached()
    await expect(this.creditcardField).toBeAttached()
    await expect(this.monthField).toBeAttached()
    await expect(this.yearField).toBeAttached()
    await expect(this.clickPurchase).toBeAttached()
    await expect(this.clickPurchase).toHaveText('Purchase')
    }

    async verifyPhoneSelected(){
    await expect(this.selectPhone).toHaveText('Samsung galaxy s6')
    }

    /*async verifyMonitorSelected(){
    await expect(this.selectMonitor).toHaveText('Apple monitor 24')
    }*/



}