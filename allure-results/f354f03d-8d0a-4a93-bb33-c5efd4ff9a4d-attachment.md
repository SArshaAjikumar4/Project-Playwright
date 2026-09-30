# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchasePage.spec.js >> Select product under phone
- Location: tests\PurchasePage.spec.js:12:6

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Samsung galaxy s6\']') resolved to 2 elements:
    1) <a class="hrefch" href="prod.html?idp_=1">Samsung galaxy s6</a> aka getByRole('link', { name: 'Samsung galaxy s6' }).first()
    2) <a class="hrefch" href="prod.html?idp_=1">Samsung galaxy s6</a> aka getByRole('link', { name: 'Samsung galaxy s6' }).nth(1)

Call log:
  - waiting for locator('//a[text()=\'Samsung galaxy s6\']')

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - text:             
  - navigation [ref=f1e2]:
    - link "PRODUCT STORE" [ref=f1e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f1e6]:
      - listitem [ref=f1e7]:
        - link "Home (current)" [ref=f1e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f1e9]: (current)
      - listitem [ref=f1e10]:
        - link "Contact" [ref=f1e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e12]:
        - link "About us" [ref=f1e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e14]:
        - link "Cart" [ref=f1e15] [cursor=pointer]:
          - /url: cart.html
      - listitem
      - listitem [ref=f1e16]:
        - link "Log out" [ref=f1e17] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f1e18]:
        - link "Welcome arsha123" [ref=f1e19] [cursor=pointer]:
          - /url: "#"
      - listitem
    - generic [ref=f1e21]:
      - list [ref=f1e22]:
        - listitem [ref=f1e23] [cursor=pointer]
        - listitem [ref=f1e24] [cursor=pointer]
        - listitem [ref=f1e25] [cursor=pointer]
      - img "First slide" [ref=f1e28]
      - button "Previous" [ref=f1e29] [cursor=pointer]
      - button "Next" [ref=f1e32] [cursor=pointer]
  - generic [ref=f1e36]:
    - generic [ref=f1e38]:
      - link "CATEGORIES" [ref=f1e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [active] [ref=f1e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f1e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=f1e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=f1e43]:
      - generic [ref=f1e44]:
        - generic [ref=f1e46]:
          - link [ref=f1e47] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f1e48]:
            - heading [level=4] [ref=f1e49]:
              - link "Samsung galaxy s6" [ref=f1e50] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f1e51]
            - paragraph [ref=f1e52]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f1e54]:
          - link [ref=f1e55] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f1e56]:
            - heading [level=4] [ref=f1e57]:
              - link "Nokia lumia 1520" [ref=f1e58] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f1e59]
            - paragraph [ref=f1e60]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f1e62]:
          - link [ref=f1e63] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f1e64]:
            - heading [level=4] [ref=f1e65]:
              - link "Nexus 6" [ref=f1e66] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f1e67]
            - paragraph [ref=f1e68]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f1e70]:
          - link [ref=f1e71] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f1e72]:
            - heading [level=4] [ref=f1e73]:
              - link "Samsung galaxy s7" [ref=f1e74] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f1e75]
            - paragraph [ref=f1e76]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f1e78]:
          - link [ref=f1e79] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f1e80]:
            - heading [level=4] [ref=f1e81]:
              - link "Iphone 6 32gb" [ref=f1e82] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f1e83]
            - paragraph [ref=f1e84]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f1e86]:
          - link [ref=f1e87] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f1e88]:
            - heading [level=4] [ref=f1e89]:
              - link "Sony xperia z5" [ref=f1e90] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f1e91]
            - paragraph [ref=f1e92]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f1e94]:
          - link [ref=f1e95] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f1e96]:
            - heading [level=4] [ref=f1e97]:
              - link "HTC One M9" [ref=f1e98] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f1e99]
            - paragraph [ref=f1e100]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=f1e102]:
          - link [ref=f1e103] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=f1e104]:
            - heading [level=4] [ref=f1e105]:
              - link "Samsung galaxy s6" [ref=f1e106] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=f1e107]
            - paragraph [ref=f1e108]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=f1e110]:
          - link [ref=f1e111] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=f1e112]:
            - heading [level=4] [ref=f1e113]:
              - link "Nokia lumia 1520" [ref=f1e114] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=f1e115]
            - paragraph [ref=f1e116]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=f1e118]:
          - link [ref=f1e119] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=f1e120]:
            - heading [level=4] [ref=f1e121]:
              - link "Nexus 6" [ref=f1e122] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=f1e123]
            - paragraph [ref=f1e124]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=f1e126]:
          - link [ref=f1e127] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=f1e128]:
            - heading [level=4] [ref=f1e129]:
              - link "Samsung galaxy s7" [ref=f1e130] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=f1e131]
            - paragraph [ref=f1e132]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=f1e134]:
          - link [ref=f1e135] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=f1e136]:
            - heading [level=4] [ref=f1e137]:
              - link "Iphone 6 32gb" [ref=f1e138] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=f1e139]
            - paragraph [ref=f1e140]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=f1e142]:
          - link [ref=f1e143] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=f1e144]:
            - heading [level=4] [ref=f1e145]:
              - link "Sony xperia z5" [ref=f1e146] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=f1e147]
            - paragraph [ref=f1e148]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=f1e150]:
          - link [ref=f1e151] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=f1e152]:
            - heading [level=4] [ref=f1e153]:
              - link "HTC One M9" [ref=f1e154] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=f1e155]
            - paragraph [ref=f1e156]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=f1e158]:
          - link [ref=f1e159] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=f1e160]:
            - heading [level=4] [ref=f1e161]:
              - link "Sony vaio i5" [ref=f1e162] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=f1e163]
            - paragraph [ref=f1e164]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=f1e166]:
          - link [ref=f1e167] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=f1e168]:
            - heading [level=4] [ref=f1e169]:
              - link "Sony vaio i7" [ref=f1e170] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=f1e171]
            - paragraph [ref=f1e172]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=f1e174]:
        - listitem [ref=f1e175]:
          - button "Previous" [ref=f1e176]
        - listitem [ref=f1e177]:
          - button "Next" [ref=f1e178] [cursor=pointer]
  - generic [ref=f1e180]:
    - generic [ref=f1e183]:
      - heading "About Us" [level=4] [ref=f1e184]
      - paragraph [ref=f1e185]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f1e188]:
      - heading "Get in Touch" [level=4] [ref=f1e189]
      - paragraph [ref=f1e190]: "Address: 2390 El Camino Real"
      - paragraph [ref=f1e191]: "Phone: +440 123456"
      - paragraph [ref=f1e192]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f1e196]
  - contentinfo [ref=f1e198]:
    - paragraph [ref=f1e199]: Copyright © Product Store
```

# Test source

```ts
  1  | import { expect } from '@playwright/test'
  2  | export class PurchasePage{
  3  |     constructor(page){
  4  |         this.page=page
  5  |          this.clickAddToCart=page.locator("//a[text()='Add to cart']")
  6  | 
  7  |         this.clickCategoryPhone=page.locator("//a[text()='Phones']")
  8  |         this.selectPhone=page.locator("//a[text()='Samsung galaxy s6']")
  9  |         this.clickCart=page.locator("//a[text()='Cart']")
  10 |         this.clickPlaceOrder=page.locator("//button[text()='Place Order']")
  11 |         this.nameField=page.locator('#name')
  12 |         this.countryField=page.locator('#country')
  13 |         this.cityField=page.locator('#city')
  14 |         this.creditcardField=page.locator('#card')
  15 |         this.monthField=page.locator('#month')
  16 |         this.yearField=page.locator('#year')
  17 |         this.clickPurchase=page.locator("//button[text()='Purchase']")
  18 |         this.clickOk=page.locator("//button[text()='OK']")
  19 | 
  20 |         
  21 | 
  22 |     }
  23 | 
  24 |     
  25 |     
  26 | 
  27 |    /*async verifyingApplication(){
  28 |         await expect(this.page).toHaveURL('https://www.demoblaze.com/')
  29 | 
  30 |     }*/
  31 | 
  32 | 
  33 |     async clickAddToCarts(){
  34 |         await this.clickAddToCart.click()
  35 |     }
  36 |     
  37 | 
  38 |     async selectAnyPhone(){
  39 |         await this.clickCategoryPhone.click()
> 40 |         await this.selectPhone.click()
     |                                ^ Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Samsung galaxy s6\']') resolved to 2 elements:
  41 |     }
  42 | 
  43 |     async navigateToCart(){
  44 |         await this.clickCart.click()
  45 |     }
  46 | 
  47 |     async placeOrder(){
  48 |         await this.clickPlaceOrder.click()
  49 |     }
  50 | 
  51 |     async detailsAdding(name,country,city,credirtcard,month,year){
  52 |         await this.nameField.fill(name)
  53 |         await this.countryField.fill(country)
  54 |         await this.cityField.fill(city)
  55 |         await this.creditcardField.fill(credirtcard)
  56 |         await this.monthField.fill(month)
  57 |         await this.yearField.fill(year)
  58 |     }
  59 | 
  60 | 
  61 |     async Purchase(){
  62 |         await this.clickPurchase.click()
  63 |         await this.clickOk.click()
  64 | 
  65 |     }
  66 | 
  67 | 
  68 | 
  69 | }
```