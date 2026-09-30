# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchasePage.spec.js >> Purchase a Phone
- Location: tests\PurchasePage.spec.js:12:6

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - dialog [active] [ref=f3e2]:
    - document [ref=f3e3]:
      - generic [ref=f3e4]:
        - generic [ref=f3e5]:
          - heading "Place order" [level=5] [ref=f3e6]
          - button "Close" [ref=f3e7] [cursor=pointer]: ×
        - generic [ref=f3e9]:
          - generic [ref=f3e10]: "Total: 2270"
          - generic [ref=f3e11]:
            - generic [ref=f3e12]: "Name:"
            - 'textbox "Total: 2270 Name:" [ref=f3e13]': Arsha
          - generic [ref=f3e14]:
            - generic [ref=f3e15]: "Country:"
            - textbox "Country:" [ref=f3e16]: India
          - generic [ref=f3e17]:
            - generic [ref=f3e18]: "City:"
            - textbox "City:" [ref=f3e19]: Chengannur
          - generic [ref=f3e20]:
            - generic [ref=f3e21]: "Credit card:"
            - textbox "Credit card:" [ref=f3e22]: kotak
          - generic [ref=f3e23]:
            - generic [ref=f3e24]: "Month:"
            - textbox "Month:" [ref=f3e25]: March
          - generic [ref=f3e26]:
            - generic [ref=f3e27]: "Year:"
            - textbox "Year:" [ref=f3e28]: "2026"
        - generic [ref=f3e30]:
          - button "Close" [ref=f3e31]
          - button "Purchase" [ref=f3e32]
  - text:             
  - navigation [ref=f3e33]:
    - generic [ref=f3e34]:
      - link "PRODUCT STORE" [ref=f3e35] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e38]:
        - listitem [ref=f3e39]:
          - link "Home (current)" [ref=f3e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e41]: (current)
        - listitem [ref=f3e42]:
          - link "Contact" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e44]:
          - link "About us" [ref=f3e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e46]:
          - link "Cart" [ref=f3e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e48]:
          - link "Log out" [ref=f3e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e50]:
          - link "Welcome arsha123" [ref=f3e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e53]:
    - generic [ref=f3e54]:
      - heading "Products" [level=2] [ref=f3e55]
      - table [ref=f3e57]:
        - rowgroup [ref=f3e58]:
          - row [ref=f3e59]:
            - columnheader "Pic" [ref=f3e60]
            - columnheader "Title" [ref=f3e61]
            - columnheader "Price" [ref=f3e62]
            - columnheader "x" [ref=f3e63]
        - rowgroup [ref=f3e64]:
          - row [ref=f3e65]:
            - cell [ref=f3e66]
            - cell "Apple monitor 24" [ref=f3e68]
            - cell "400" [ref=f3e69]
            - cell [ref=f3e70]:
              - link "Delete" [ref=f3e71] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e72]:
            - cell [ref=f3e73]
            - cell "Iphone 6 32gb" [ref=f3e75]
            - cell "790" [ref=f3e76]
            - cell [ref=f3e77]:
              - link "Delete" [ref=f3e78] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e79]:
            - cell [ref=f3e80]
            - cell "Samsung galaxy s6" [ref=f3e82]
            - cell "360" [ref=f3e83]
            - cell [ref=f3e84]:
              - link "Delete" [ref=f3e85] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e86]:
            - cell [ref=f3e87]
            - cell "Samsung galaxy s6" [ref=f3e89]
            - cell "360" [ref=f3e90]
            - cell [ref=f3e91]:
              - link "Delete" [ref=f3e92] [cursor=pointer]:
                - /url: "#"
          - row [ref=f3e93]:
            - cell [ref=f3e94]
            - cell "Samsung galaxy s6" [ref=f3e96]
            - cell "360" [ref=f3e97]
            - cell [ref=f3e98]:
              - link "Delete" [ref=f3e99] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e100]:
      - heading "Total" [level=2] [ref=f3e101]
      - heading "2270" [level=3] [ref=f3e104]
      - button "Place Order" [ref=f3e105]
  - generic [ref=f3e107]:
    - generic [ref=f3e110]:
      - heading "About Us" [level=4] [ref=f3e111]
      - paragraph [ref=f3e112]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e115]:
      - heading "Get in Touch" [level=4] [ref=f3e116]
      - paragraph [ref=f3e117]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e118]: "Phone: +440 123456"
      - paragraph [ref=f3e119]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e123]
  - contentinfo [ref=f3e125]:
    - paragraph [ref=f3e126]: Copyright © Product Store
  - generic [ref=f3e129]:
    - heading "Thank you for your purchase!" [level=2] [ref=f3e135]
    - paragraph [ref=f3e136]: "Id: 3429887Amount: 2270 USDCard Number: kotakName: ArshaDate: 20/8/2026"
    - button "OK" [ref=f3e139]
```