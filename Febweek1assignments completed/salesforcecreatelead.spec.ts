import test, { expect } from '@playwright/test'

test("create lead in salesforce", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com" )
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.getByRole('button',{name:'Log In'}).click()
    await page.getByText("App Launcher").click()
    await page.getByRole('button',{name:'View All Applications'}).click()
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Search apps or items...").click()
    await page.getByPlaceholder("Search apps or items...").fill('individuals')
    await page.locator("//mark[text()='Individuals']").first().click()
    await page.getByRole('button',{name:'New'}).click()
    await page.getByPlaceholder("Last Name").fill('varadam')
    await page.getByRole('button',{name:'Save', exact: true}).click()
}
)

    