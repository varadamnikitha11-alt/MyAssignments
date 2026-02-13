import test from '@playwright/test'
test ("booking ticket", async ({page})=>{
await page.goto("https://www.pvrcinemas.com/")
 //await page.locator('.cities-show').click()
//await page.locator("//Span[@class='p-dropdown-label p-inputtext p-placeholder']").first().click()
await page.getByPlaceholder("Search for city").fill('benga')
//await page.getByText("Bengaluru").click()
await page.getByRole('option',{name:'Bengaluru'}).click()
//await page.locator("//Span[@class='filter-pvr-active']").click()
await page.locator("//Span[text()='Cinema']").click()
await page.locator("//Span[text()='Select Cinema']").click()
//await page.getByRole("button", {name:'Select Cinema'}).click()
await page.locator("//span[text()='INOX Mantri Square, Malleshwaram Bengaluru']").click()
//await page.getByRole("button",{name:'Select Date'}).click()
await page.waitForTimeout(3000)
await page.locator("//span[text()='Sun']").click()
await page.locator("//span[text()='SEETHA PAYANAM']").nth(1).click()
await page.locator("//span[contains(text(),'07:25 PM')]").click();
//await page.locator("//span[text()='07:25 PM']").click()
await page.getByRole("button", {name:'submit'}).click()
await page.getByRole("button", {name:'Accept'}).click()
await page.waitForTimeout(3000)
await page.locator("//span[@id ='CR.CLASSIC ROWS|L:17']").click()
await page.getByRole("button", {name:'Proceed'}).click()

await page.getByRole("button", {name:'Skip & Proceed'}).click()
const total= await page.locator("//div[@class='all-grand']").innerText()
console.log("Booking amount:",total)
const title= await page.title()
console.log("page title:", title)








})