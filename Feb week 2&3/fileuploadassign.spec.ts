import test from '@playwright/test'
test ("file upload", async({page})=>{


await page.goto("https://the-internet.herokuapp.com/upload")
await page.locator("//*[@id='file-upload']").setInputFiles("Data/PW-W4-Alert-Frame.pdf")
await page.waitForTimeout(3000)


})

test ("file uplaod by event listener", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload")

    //create promise
    const upload = page.waitForEvent('filechooser')
    //action
await page.locator("//*[@id='file-upload']").click()
    
    //resolve promsie
    const uploadfile= await upload
    await uploadfile.setFiles("Data/PW-W4-Alert-Frame.pdf")
    await page.waitForTimeout(3000)
}
)

test ("file download", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download")

    //create a promise

    const download = page.waitForEvent('download')
    //action()
    await page.getByRole("link", {name:'Playwright.png'}).click()
    //resolve promise

    const downloadfile=await download
    await downloadfile.saveAs("C:/Users/varad/Downloads/file.pdf")
  






})