# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SignUp.spec.js >> click close button in signup
- Location: tests\SignUp.spec.js:17:5

# Error details

```
ReferenceError: ClickClose is not defined
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { SignUp } from '../pages/Signup'
  3  | import data from '../Utils/SignupCredential.json'
  4  | 
  5  | test('SignUp click ok',async({page})=>{
  6  |         await page.waitForLoadState('networkidle')
  7  | 
  8  |     //await page.goto('https://www.demoblaze.com/')
  9  |  const username=data.username
  10 |  const password=data.password
  11 |  const SignUpPage=new SignUp(page)
  12 |  await SignUpPage.navigateApplication()
  13 |  await SignUpPage.applicationSingup(username,password)
  14 | 
  15 | })
  16 | 
  17 | test('click close button in signup',async({page})=>{
  18 |     await page.waitForLoadState('networkidle')
  19 |      const username=data.username
  20 |      const password=data.password
> 21 |      const ClickClosePage=new ClickClose(page)
     |                           ^ ReferenceError: ClickClose is not defined
  22 |      await SignUpPage.navigateApplication()
  23 |      await SignUpPage.applicationSingup(username,password)
  24 | 
  25 | 
  26 | })
  27 | 
  28 | 
  29 | 
  30 | 
```