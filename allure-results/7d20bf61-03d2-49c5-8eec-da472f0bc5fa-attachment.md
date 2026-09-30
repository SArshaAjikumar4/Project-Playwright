# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchasePage.spec.js >> Purchase a Monitor
- Location: tests\PurchasePage.spec.js:52:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//a[text()=\'Apple monitor 24\']')
Expected: "Apple monitor 24"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//a[text()=\'Apple monitor 24\']') with timeout 5000ms
  - waiting for locator('//a[text()=\'Apple monitor 24\']')

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome arsha123":
        - /url: "#"
    - listitem
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  2   | export class PurchasePage{
  3   |     constructor(page){
  4   |         this.page=page
  5   |          this.clickAddToCart=page.locator("//a[text()='Add to cart']")
  6   | 
  7   |         this.clickCategoryPhone=page.locator("//a[text()='Phones']")
  8   |         this.selectPhone=page.locator("//a[text()='Samsung galaxy s6']")
  9   |         this.clickCart=page.locator("//a[text()='Cart']")
  10  |         this.clickPlaceOrder=page.locator("//button[text()='Place Order']")
  11  |         this.nameField=page.locator('#name')
  12  |         this.countryField=page.locator('#country')
  13  |         this.cityField=page.locator('#city')
  14  |         this.creditcardField=page.locator('#card')
  15  |         this.monthField=page.locator('#month')
  16  |         this.yearField=page.locator('#year')
  17  |         this.clickPurchase=page.locator("//button[text()='Purchase']")
  18  |         this.clickOk=page.locator("//button[text()='OK']")
  19  |         this.clickCategoryMonitor=page.locator("//a[text()='Monitors']")
  20  |         this.selectMonitor=page.locator("//a[text()='Apple monitor 24']")
  21  |         this.clickOk=page.locator("//button[text()='OK']")
  22  | 
  23  | 
  24  |         
  25  | 
  26  |     }
  27  | 
  28  |     
  29  |     
  30  | 
  31  |    /*async verifyingApplication(){
  32  |         await expect(this.page).toHaveURL('https://www.demoblaze.com/')
  33  | 
  34  |     }*/
  35  | 
  36  | 
  37  |     async clickAddToCarts(){
  38  |         await this.clickAddToCart.click()
  39  |     }
  40  |     
  41  | 
  42  |     async selectAnyPhone(){
  43  |         await this.clickCategoryPhone.click()
  44  |         await this.selectPhone.click()
  45  |     }
  46  | 
  47  |     async popupHandling(){
  48  |         this.page.once('dialog',async dialog=>{
  49  |         expect(dialog.message()).toBe('Product added.')
  50  |         await dialog.accept()
  51  | 
  52  |         await this.clickOk.click()
  53  | 
  54  |     })
  55  |     }
  56  | 
  57  |     async navigateToCart(){
  58  |         await this.clickCart.click()
  59  |     }
  60  | 
  61  |     async placeOrder(){
  62  |         await this.clickPlaceOrder.click()
  63  |     }
  64  | 
  65  |     async detailsAdding(name,country,city,credirtcard,month,year){
  66  |         await this.nameField.fill(name)
  67  |         await this.countryField.fill(country)
  68  |         await this.cityField.fill(city)
  69  |         await this.creditcardField.fill(credirtcard)
  70  |         await this.monthField.fill(month)
  71  |         await this.yearField.fill(year)
  72  |     }
  73  | 
  74  | 
  75  |     async Purchase(){
  76  |         await this.clickPurchase.click()
  77  |         await this.clickOk.click()
  78  | 
  79  |     }
  80  | 
  81  |     async selectAnyMonitor(){
  82  |         await this.clickCategoryMonitor.click()
  83  |         await this.selectMonitor.click()
  84  |     }
  85  | 
  86  |     async verifyPurchaseForm(){
  87  |     await expect(this.nameField).toBeAttached()
  88  |     await expect(this.countryField).toBeAttached()
  89  |     await expect(this.cityField).toBeAttached()
  90  |     await expect(this.creditcardField).toBeAttached()
  91  |     await expect(this.monthField).toBeAttached()
  92  |     await expect(this.yearField).toBeAttached()
  93  |     await expect(this.clickPurchase).toBeAttached()
  94  |     await expect(this.clickPurchase).toHaveText('Purchase')
  95  |     }
  96  | 
  97  |     async verifyPhoneSelected(){
  98  |     await expect(this.selectPhone).toHaveText('Samsung galaxy s6')
  99  |     }
  100 | 
  101 |     async verifyMonitorSelected(){
> 102 |     await expect(this.selectMonitor).toHaveText('Apple monitor 24')
      |                                      ^ Error: expect(locator).toHaveText(expected) failed
  103 |     }
  104 | 
  105 | 
  106 | 
  107 | }
```