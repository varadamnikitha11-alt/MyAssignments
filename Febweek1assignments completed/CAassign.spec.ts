import test,{expect} from '@playwright/test'
test("using css", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com" )
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByText("App Launcher").click()
    await page.getByRole('button',{name:'View All Applications'}).click()
    await page.waitForTimeout(3000) 
     await page.getByPlaceholder('Search apps or items...').click()
     await page.getByPlaceholder('Search apps or items...').fill('Opportunities')
     await page.waitForTimeout(3000)
    await page.locator("//mark[text()='Opportunities']").first().click()
     await page.waitForTimeout(3000)
     await page.getByRole('button',{name:'New'}).click()
    await page.getByRole('textbox',{name:'Close Date'}).fill('07/02/2026')
     await page.getByRole('textbox', { name: 'Opportunity Name' }).waitFor();
     await page.getByRole('textbox',{name:'Opportunity Name'}).fill('Saahas3')
     await page.waitForTimeout(2000)
     await page.locator("//button[@aria-label='Stage']").click()
     await page.locator("[data-value= 'Needs Analysis']").click()
     await page.getByPlaceholder("Search Accounts...").click()
     await page.getByRole('option',{name:'SystemLeaf',exact:true}).click()     
await page.locator("//button[@name='SaveEdit']").click()
   await expect(page.getByRole('link', { name: 'Saahas3', exact: true })
).toBeVisible();
          
}
)


