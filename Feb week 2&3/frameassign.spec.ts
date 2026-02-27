import test, { expect } from '@playwright/test'

test("frame handling", async ({ page }) => {

    
    await page.goto("https://leafground.com/frame.xhtml")
     await page.frame({url:'https://leafground.com/default.xhtml'})?.locator("//button[@id='Click']").click()
     await page.getByText("Hurray! You Clicked Me.").first().isVisible()
     const numberofframes = page.frames()
     console.log(numberofframes.length)
     const frame2 = page.frameLocator("(//iframe)[3]").frameLocator('#frame2').locator("#Click")
     frame2.click()
    await page.waitForTimeout(2000)
    const frame2_text = await frame2.innerText()
    expect(frame2_text).toBe('Hurray! You Clicked Me.')

    
    //await expect(frametext.getByText("Hurray! You Clicked Me.")).toBeVisible()





    
});

//await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()