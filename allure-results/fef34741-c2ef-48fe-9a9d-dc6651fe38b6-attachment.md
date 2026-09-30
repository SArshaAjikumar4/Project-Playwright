# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCartPage.spec.js >> Add a product to Cart
- Location: tests\AddToCartPage.spec.js:8:5

# Error details

```
ReferenceError: page is not defined
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
  1  | import { expect } from '@playwright/test'
  2  | export class AddToCartPage{
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.clickAnyPoduct=page.locator("//a[text()='Iphone 6 32gb']")
  6  |         this.clickAddToCart=page.locator("//a[text()='Add to cart']")
  7  |         this.clickOk=page.locator("//button[text()='OK']")
  8  |         
  9  |     }
  10 | 
  11 |      async clickProduct(){
  12 |         await this.clickAnyPoduct.click()
  13 |     }
  14 | 
  15 |     async clickAddToCarts(){
  16 |         await this.clickAddToCart.click()
  17 |     }
  18 | 
  19 |     async popupHandling(){
> 20 |         page.once('dialog',async dialog=>{
     |         ^ ReferenceError: page is not defined
  21 |         expect(dialog.message()).toBe('Product added.')
  22 |         await dialog.accept()
  23 | 
  24 |         await this.clickOk.click()
  25 | 
  26 |     })
  27 |     }
  28 | }
```