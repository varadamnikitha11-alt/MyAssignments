let browser = "chrome";
function checkbrowserversion(callback)
{
console.log("browser version")

setTimeout(()=>{callback(browser) 

},2000)
}

function displaybrowserversion(version)
{
console.log("browser version is:", version)
}
checkbrowserversion(displaybrowserversion)


