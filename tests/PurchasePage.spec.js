import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { PurchasePage } from '../pages/PurchasePage'
import { AddToCartPage } from '../pages/AddToCartPage'
import data from '../Utils/TestCredential.json'






 test('Purchase a Phone',async({page})=>{

     //LOGIN
    const validusername=data.validusername
    const validpassword=data.validpassword
    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(validusername,validpassword)
    

    //SELECT PHONE PRODUCT AND ADD TO CART And Purchase it
    const purchasePage=new PurchasePage(page)
   
    await purchasePage.selectAnyPhone()
    await purchasePage.clickAddToCarts()
    await purchasePage.popupHandling()


    
    //Adding details

        const name=data.name
        const country=data.country
        const city=data.city
        const credirtcard=data.creditcard
        const month=data.month
        const year=data.year
        await purchasePage.navigateToCart()
        await purchasePage.placeOrder()
        await purchasePage.detailsAdding(name,country,city,credirtcard,month,year)
        await purchasePage.verifyPurchaseForm()
        await purchasePage.Purchase()
        await purchasePage.verifyPhoneSelected()

    


    })


    test('Purchase a Monitor',async({page})=>{
        //LOGIN
    const validusername=data.validusername
    const validpassword=data.validpassword
    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(validusername,validpassword)
    

    //SELECT Monitor PRODUCT AND ADD TO CART And Purchase it
    const purchasePage=new PurchasePage(page)
    await purchasePage.selectAnyMonitor()
     await purchasePage.clickAddToCarts()
     await purchasePage.popupHandling()

    
   
    //Adding details

        const name=data.name
        const country=data.country
        const city=data.city
        const credirtcard=data.creditcard
        const month=data.month
        const year=data.year
        await purchasePage.navigateToCart()
        await purchasePage.placeOrder()
        await purchasePage.detailsAdding(name,country,city,credirtcard,month,year)
        await purchasePage.verifyPurchaseForm()
        
        await purchasePage.Purchase()
        //await purchasePage.verifyMonitorSelected()

    


    })
   
    
 




