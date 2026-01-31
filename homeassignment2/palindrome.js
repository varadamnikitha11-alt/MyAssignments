

function ispalindrome(a)
{
    let reverse1= a.split("").reverse().join("")

    return reverse1 ===a
}
console.log(ispalindrome("madam"))
console.log(ispalindrome("leaf"))