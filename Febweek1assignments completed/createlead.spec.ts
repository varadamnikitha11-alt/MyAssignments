
import test, { expect } from '@playwright/test'

test("create lead", async({page})=>{
await page.goto(" http://leaftaps.com/opentaps/control/main")
await page.getByRole('textbox', {name:'USERNAME'}).fill('Demosalesmanager')
await page.getByLabel("Password").fill('crmsfa')
await page.getByRole('button', {name:'Login'}).click()

await page.getByRole('link', {name:'CRM/SFA'}).click()
await page.getByRole('link', {name:'Leads'}).first().click()
await page.getByRole('link', {name:'Create Lead'}).click()
await page.locator("//input[@id='createLeadForm_companyName']").fill('TestLeaf')
await page.locator("//input[@id='createLeadForm_firstName']").fill('Test')
await page.locator("//input[@id='createLeadForm_lastName']").fill('Leaf')
await page.locator("//input[@id='createLeadForm_personalTitle']").fill('mrs')
await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill('Qa lead')
await page.locator("//input[@id='createLeadForm_annualRevenue']").fill('30000')
await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill('974296667')
await page.getByRole('button', {name:'Create Lead'}).first().click()





//await page.getByRole('textbox', {name:'companyName'}).fill('TestLeaf')
//await page.getByRole('textbox', {name:'First name'}).fill('Test')
})


