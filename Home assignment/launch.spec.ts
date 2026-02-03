import { test, chromium, webkit} from '@playwright/test'
import { channel } from 'diagnostics_channel'

test ("load urls in 2 browsers",async()=>{
    const edgebrowser = await chromium.launch({channel:'msedge', headless:false})
    const safaribrowser = await webkit.launch({ headless:false})
    const edgecontext = await edgebrowser.newContext()
    const edgepage = await edgecontext.newPage()
    await edgepage.goto("https://www.redbus.in/")
    console.log("edge page title:",await edgepage.title())
    console.log("edge page URL:",edgepage.url())
    //Safari browser
    const safaricontext = await safaribrowser.newContext()
    const safaripage = await safaricontext.newPage()
     await safaripage.goto("https://www.flipkart.com/")
     console.log("safari page title:",await safaripage.title())
     console.log("safari page URL:",safaripage.url())
     await edgebrowser.close()
     await safaribrowser.close()



})