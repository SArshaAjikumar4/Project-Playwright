import { test,expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../Utils/TestCredential.json'
import{AddToCartPage} from '../pages/AddToCartPage'



test('Add a product to Cart',async({page})=>{
    const validusername=data.validusername
    const validpassword=data.validpassword


    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(validusername,validpassword)
    
    const addToCartPage=new AddToCartPage(page)
    await addToCartPage.clickProduct()
    await addToCartPage.verifyProductPage()

    await addToCartPage.clickAddToCarts()
    await addToCartPage.popupHandling()
    






})