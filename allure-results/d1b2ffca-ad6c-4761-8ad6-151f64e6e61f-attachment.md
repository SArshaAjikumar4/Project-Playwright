# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchasePage.spec.js >> Adding product to the cart
- Location: tests\PurchasePage.spec.js:8:5

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - text:             
  - navigation [ref=f2e2]:
    - generic [ref=f2e3]:
      - link "PRODUCT STORE" [ref=f2e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f2e7]:
        - listitem [ref=f2e8]:
          - link "Home (current)" [ref=f2e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f2e10]: (current)
        - listitem [ref=f2e11]:
          - link "Contact" [ref=f2e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e13]:
          - link "About us" [ref=f2e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e15]:
          - link "Cart" [ref=f2e16] [cursor=pointer]:
            - /url: cart.html
        - listitem
        - listitem [ref=f2e17]:
          - link "Log out" [ref=f2e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f2e19]:
          - link "Welcome arsha123" [ref=f2e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f2e22]:
    - generic [ref=f2e25]:
      - list [ref=f2e26]:
        - listitem [ref=f2e27] [cursor=pointer]
        - listitem [ref=f2e28] [cursor=pointer]
        - listitem [ref=f2e29] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
    - generic [ref=f2e32]:
      - heading "Iphone 6 32gb" [level=2] [ref=f2e33]
      - separator [ref=f2e34]
      - heading "$790 *includes tax" [level=3] [ref=f2e35]
      - separator [ref=f2e36]
      - generic [ref=f2e37]:
        - list:
          - listitem
        - generic [ref=f2e39]:
          - strong [ref=f2e40]: Product description
          - paragraph [ref=f2e41]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
      - separator [ref=f2e42]
      - link "Add to cart" [active] [ref=f2e45] [cursor=pointer]:
        - /url: "#"
  - generic [ref=f2e47]:
    - generic [ref=f2e50]:
      - heading "About Us" [level=4] [ref=f2e51]
      - paragraph [ref=f2e52]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f2e55]:
      - heading "Get in Touch" [level=4] [ref=f2e56]
      - paragraph [ref=f2e57]: "Address: 2390 El Camino Real"
      - paragraph [ref=f2e58]: "Phone: +440 123456"
      - paragraph [ref=f2e59]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f2e63]
  - contentinfo [ref=f2e65]:
    - paragraph [ref=f2e66]: Copyright © Product Store
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import { LoginPage } from '../pages/LoginPage'
  3  | import { PurchasePage } from '../pages/PurchasePage'
  4  | import data from '../Utils/Logincredential.json'
  5  | 
  6  | 
  7  | 
  8  | test('Adding product to the cart',async({page})=>{
  9  | 
  10 |     //LOGIN
  11 |     const validusername=data.validusername
  12 |     const validpassword=data.validpassword
  13 |     const loginPage=new LoginPage(page)
  14 |     await loginPage.naviagteApplication()
  15 |     await loginPage.loginApplication(validusername,validpassword)
  16 |     
  17 | 
  18 |     //SELECT ANY PRODUCT AND ADD TO CART
  19 |     const purchasePage=new PurchasePage(page)
  20 |     await purchasePage.clickProduct()
  21 |     await purchasePage.clickAddToCarts()
  22 | 
  23 |     //POPUP Handling
  24 |     page.on('dialog',async dialog=>{
  25 |         expect(dialog.message()).toBe('Product added.')
  26 |         await dialog.accept()
  27 |         const clickOk=page.locator('.col-sm-12 col-md-6 col-lg-6')
  28 |         await clickOk.click()
  29 | 
  30 | 
  31 |     })
  32 | 
> 33 |  test('Select product under phone and Monitr',async({page})=>{
     |      ^ Error: Playwright Test did not expect test() to be called here.
  34 |      //LOGIN
  35 |     const validusername=data.validusername
  36 |     const validpassword=data.validpassword
  37 |     const loginPage=new LoginPage(page)
  38 |     await loginPage.naviagteApplication()
  39 |     await loginPage.loginApplication(validusername,validpassword)
  40 |     
  41 | 
  42 |     //SELECT PHONE PRODUCT AND MONITOR THEN  ADD TO CART
  43 |     const purchasePage=new PurchasePage(page)
  44 |     await purchasePage.clickCategoryPhone()
  45 |     await purchasePage.SelectAnyPhone()
  46 |     await purchasePage.clickAddToCarts()
  47 |     
  48 |     //POPUP Handling
  49 |     page.on('dialog',async dialog=>{
  50 |         expect(dialog.message()).toBe('Product added.')
  51 |         await dialog.accept()
  52 |         const clickOk=page.locator('.col-sm-12 col-md-6 col-lg-6')
  53 |         await clickOk.click()
  54 | 
  55 | 
  56 |     })
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 |    
  63 | 
  64 | 
  65 |     })
  66 | 
  67 |  })   
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
```