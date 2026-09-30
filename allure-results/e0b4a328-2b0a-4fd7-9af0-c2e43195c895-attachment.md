# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchasePage.spec.js >> Purchase a Phone
- Location: tests\PurchasePage.spec.js:12:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | export class LoginPage{
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.clickLoginPage=page.locator('#login2')
  6  |         this.usernameField=page.locator('#loginusername')
  7  |         this.passwordField=page.locator('#loginpassword')
  8  |         this.clickLogin=page.locator("//button[text()='Log in']")
  9  | 
  10 |     }
  11 | 
  12 |     async naviagteApplication(){
> 13 |          await this.page.goto('https://www.demoblaze.com/')
     |                          ^ Error: page.goto: Target page, context or browser has been closed
  14 |          await this.clickLoginPage.click()
  15 | 
  16 |     }
  17 | 
  18 |     async loginApplication(username,password){
  19 |         await this.usernameField.fill(username)
  20 |         await this.passwordField.fill(password)
  21 |         this.clickLogin.click()
  22 | 
  23 |     }
  24 | 
  25 |     async verifyingApplication(){
  26 |         await expect(this.usernameField).toBeAttached() 
  27 |         await expect(this.passwordField).toBeAttached()
  28 |         await expect(this.clickLogin).toHaveText('Log in')
  29 | 
  30 |     }
  31 | }
```