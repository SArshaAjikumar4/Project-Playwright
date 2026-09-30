import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../Utils/TestCredential.json'



test('login with Valid username and password',async({page})=>{
    await page.waitForLoadState('networkidle')
    const validusername=data.validusername
    const validpassword=data.validpassword

    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(validusername,validpassword)
    await loginPage.verifyingApplication()

    
})

test('login with valid username and invalid password',async({page})=>{
    const validusername=data.validusername
    const invalidpassword=data.invalidpassword
    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(validusername,invalidpassword)
})

test('login with invalid username and valid password',async({page})=>{
    const invalidusername=data.invalidusername
    const validpassword=data.validpassword
    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(invalidusername,validpassword)
})

test('login with invalid username and invalid password',async({page})=>{
    const invalidusername=data.invalidusername
    const invalidpassword=data.invalidpassword
    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(invalidusername,invalidpassword)
})
