import test,{expect} from '@playwright/test'
test ("decathlon", async ({page})=>{
await page.goto("https://www.decathlon.in/")
await expect (page).toHaveURL("https://www.decathlon.in/")
await page.getByText("Search for").first().click()
const search = page.getByRole('textbox')

await expect(search).toBeEnabled()
await search.fill('shoes')
await search.press('Enter')
const title= await page.title()
console.log("page title:", title)
await expect (page).toHaveTitle('Search | shoes')
await page.locator("//span[text()='Running (71)	']").click()
await page.locator("//span[text()='Men (40)	']").click()
await page.locator("//span[text()='Uk 10.5 - eu 45 (2)	']").click()
await page.locator("//span[text()='Most Relevant']").click()
await page.locator("//a[text()='Price: Low to High']").click()
await page.waitForTimeout(3000)
await page.getByAltText("Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Blue").first().click()
await page.locator("//div[text()='UK 10.5 - EU 45']").click()
await page.getByRole('button',{name:'addToCart'}).click()
await page.locator("//p[text()='Cart']").click()
let total = await page.locator("//div[@class = 'flex justify-between mb-2']//p").nth(1).innerText()
console.log("ordertotal:", total)


















})