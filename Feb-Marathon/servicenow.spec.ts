import test, { expect } from '@playwright/test'
test ("iphone order palcement", async({page})=>{

await page.goto("https://dev363522.service-now.com/")

await page.getByRole('textbox',{name:'user name'}).fill('admin')
await page.getByRole('textbox',{name:'password'}).fill('mf=3hp^0UJMZ')
await page.getByRole('button',{name:'Log in'}).click()
await expect(page).toHaveTitle(/ServiceNow/);

await page.getByRole("menuitem", {name:'ALL'}).click()
await page.getByText("Service Catalog").click()
await page.frameLocator('#gsft_main')?.getByRole("link", {name:'Mobiles',exact: true}).click()
await page.frameLocator('#gsft_main')?.getByText("Apple iPhone 13 Pro",).nth(1).click()
await page.frameLocator('#gsft_main')?.locator("//label[(text()='Yes')]").click()
await page.frameLocator('#gsft_main')?.locator("//input[@class = 'cat_item_option sc-content-pad form-control']").fill('99')
await page.frameLocator('#gsft_main')?.getByRole("combobox",{name: 'Mandatory - must be'}).selectOption({value: 'unlimited'})
await page.frameLocator('#gsft_main')?.locator("//label[(text()='Sierra Blue')]").click()
await page.frameLocator('#gsft_main')?.locator("//label[(text()='128 GB')]").click()
await page.frameLocator('#gsft_main')?.getByRole("button",{name: 'Order Now'}).click()


await expect(page.frameLocator('#gsft_main')?.locator("//span[contains(text(),'Thank you')]")).toBeVisible()



  

await page.screenshot({path:'C:/Users/varad/Downloads/fullpage.png'})

})