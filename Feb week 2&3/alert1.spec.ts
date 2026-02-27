import test from '@playwright/test'
test.only("alert by page once", async ({ page }) => {

  page.once('dialog', async (dialog) => {
    const typeOfAlert = dialog.type();
    console.log(typeOfAlert);

    const msg = dialog.message();
    console.log(msg);
    await dialog.accept();
  });

  await page.goto("https://www.leafground.com/alert.xhtml");
  await page.locator("//span[text()='Show']").first().click();
  await page.waitForTimeout(2000);
  await page.locator("//span[text()='Show']").nth(1).click();
  await page.waitForTimeout(2000);
});