# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchasePage.spec.js >> Select product under phone
- Location: tests\PurchasePage.spec.js:12:6

# Error details

```
TypeError: purchasePage.clickAddToCarts is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
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
      - heading "Samsung galaxy s6" [level=2] [ref=f2e33]
      - separator [ref=f2e34]
      - heading "$360 *includes tax" [level=3] [ref=f2e35]
      - separator [ref=f2e36]
      - generic [ref=f2e37]:
        - list:
          - listitem
        - generic [ref=f2e39]:
          - strong [ref=f2e40]: Product description
          - paragraph [ref=f2e41]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
      - separator [ref=f2e42]
      - link "Add to cart" [ref=f2e45] [cursor=pointer]:
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
  4  | import { AddToCartPage } from '../pages/AddToCartPage'
  5  | import data from '../Utils/Logincredential.json'
  6  | import Detailsdata from '../Utils/Detailscredential.json'
  7  | 
  8  | 
  9  | 
  10 | 
  11 | 
  12 |  test('Select product under phone',async({page})=>{
  13 | 
  14 |      //LOGIN
  15 |     const validusername=data.validusername
  16 |     const validpassword=data.validpassword
  17 |     const loginPage=new LoginPage(page)
  18 |     await loginPage.naviagteApplication()
  19 |     await loginPage.loginApplication(validusername,validpassword)
  20 |     
  21 | 
  22 |     //SELECT PHONE PRODUCT AND ADD TO CART And Purchase it
  23 |     const purchasePage=new PurchasePage(page)
  24 |    
  25 |     await purchasePage.selectAnyPhone()
> 26 |     await purchasePage.clickAddToCarts()
     |                        ^ TypeError: purchasePage.clickAddToCarts is not a function
  27 | 
  28 |     //POPUP Handling
  29 |     page.on('dialog',async dialog=>{
  30 |         expect(dialog.message()).toBe('Product added.')
  31 |         await dialog.accept()
  32 |         const clickOk=page.locator('.col-sm-12 col-md-6 col-lg-6')
  33 |         await clickOk.click()
  34 |     //Adding details
  35 | 
  36 |         const name=Detailsdata.name
  37 |         const country=Detailsdata.country
  38 |         const city=Detailsdata.city
  39 |         const credirtcard=Detailsdata.creditcard
  40 |         const month=Detailsdata.month
  41 |         const year=Detailsdata.year
  42 |         await purchasePage.navigateToCart()
  43 |         await purchasePage.detailsAdding(name,country,city,credirtcard,month,year)
  44 |     
  45 | 
  46 | 
  47 |     })
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 |    
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
```