import{test,expect} from '@playwright/test'
import { SignUp } from '../pages/SignUp'
import data from '../Utils/TestCredential.json'

test('Signup with valid data',async({page})=>{
        await page.waitForLoadState('networkidle')

    //await page.goto('https://www.demoblaze.com/')
 const username=data.username
 const password=data.password
 const SignUpPage=new SignUp(page)
 await SignUpPage.navigateApplication()
 await SignUpPage.verifySignupPage()
 await SignUpPage.verifySignUpText()
 await SignUpPage.applicationSingup(username,password)
 
})

test('Close Signup without regestering',async({page})=>{
    await page.waitForLoadState('networkidle')
     const username=data.username
     const password=data.password
     const ClosePage=new SignUp(page)
     await ClosePage.navigateApplication()
     await ClosePage.closeSignup(username,password)


})



