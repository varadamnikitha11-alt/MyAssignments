import test, { expect } from '@playwright/test'

test("dropdown", async({page})=>{
    await page.goto('https://leafground.com/select.xhtml')
    await page.selectOption(".ui-selectonemenu",{value:'Playwright'})
    const dropdown = page.locator('select.ui-selectonemenu');

  // Get all options inside the dropdown
  const options = await dropdown.locator('option').allTextContents();
  console.log('Dropdown options:');
  for (let i = 0; i < options.length; i++) {
    const text = options[i].trim()
    console.log(text)
    
  }
console.log('Total options:', options.length);
await page.locator("//label[text()='Select Country']").click()
await page.locator("//li[@data-label='India']").click()
//await page.getByRole('option',{Name:'India'}).click()
await page.locator("//label[text()='Select City']").click()
await page.locator("//li[@data-label='Bengaluru']").click()
await page.getByRole('button',{name:'Show Options', exact:true}).click()
await page.locator("//li[@data-item-value='PostMan']").click()
await page.waitForTimeout(2000)
await page.getByRole('button',{name:'Show Options', exact:true}).first().click()
await page.locator("//li[@data-item-value='AWS']").click()
await page.waitForTimeout(2000)
await page.getByRole('button',{name:'Show Options', exact:true}).click()
await page.locator("//li[@data-item-value='JMeter']").click()
await page.locator("//label[text()='Select Language']").click()
await page.locator("//li[@data-label='Telugu']").click()

let langauge = await dropdown.locator('option').allTextContents()
console.log('language Dropdown options:')
for(let j=0;j<langauge.length;j++)
{
const text1 = langauge[j].trim()
    console.log(text1)
}
await page.locator("//label[text()='Select Values']").click()
await page.locator("//li[@data-label='రెండు']").click()

})

