import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import{LogoutPage} from '../pages/LogoutPage'

import data from '../Utils/TestCredential.json'

test('logout ',async({page})=>{
     //LOGIN
    const validusername=data.validusername
    const validpassword=data.validpassword
    const loginPage=new LoginPage(page)
    await loginPage.naviagteApplication()
    await loginPage.loginApplication(validusername,validpassword)


    //LOGOUT
    const logoutPage=new LogoutPage(page)
    await logoutPage.Logout()
    await logoutPage.verifyLogout()
})