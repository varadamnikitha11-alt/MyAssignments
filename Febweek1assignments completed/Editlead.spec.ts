
import test, { expect } from '@playwright/test'

test("create lead", async({page})=>{
await page.goto(" http://leaftaps.com/opentaps/control/main")
await page.getByRole('textbox', {name:'USERNAME'}).fill('Demosalesmanager')
await page.getByLabel("Password").fill('crmsfa')
await page.getByRole('button', {name:'Login'}).click()

await page.getByRole('link', {name:'CRM/SFA'}).click()
await page.getByRole('link', {name:'Leads'}).first().click()
await page.getByRole('link', {name:'Create Lead'}).click()
await page.locator("//label[text()='Company Name:']").fill('google4');
await page.locator("//input[@name='firstName']").nth(1).fill('Nikitha6');
await page.locator("//input[@name='lastName']").nth(1).fill('Varadam4');
await page.locator("//button[text()='Create Lead']").click();
await page.locator("//a[text()='Find Leads']").click()
await page.locator("//label[text()='First name:']").nth(2).fill('Nikitha6');
await page.waitForTimeout(3000)

await page.locator("//button[text()='Find Leads']").click();

await page.waitForTimeout(3000)
await page.locator("//a[text()='Nikitha6']").click();
await page.locator("//a[text()='Edit']").click();
await page.locator("//input[@id='updateLeadForm_companyName']").fill('HCL')
await page.locator("//input[@value='Update']").click()








})


