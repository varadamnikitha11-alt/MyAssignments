//example 1

let a="Test leaf institute"
{
    console.log(a.split(" "))//Split the string into an array of words.
    console.log(a.substring(10,19))//Find the last word in the string
    console.log(a.length)

    

}
//Example 2
let b =" Amazon servcies "
console.log(b.split(" "))
console.log(b.trim()) // Trim teh string
console.log(b.trimStart())// remove space at start
console.log(b.trimEnd())//remove sapce at end
let splitvalue = b.split(" ")
for(let i=0;i<splitvalue.length;i++)
{
    console.log(splitvalue[i]) // splitting string in to words

}


let c = "Test leaf"
let lastword = c.substring(5,9)// find last word of string
console.log(lastword)
console.log(lastword.length)
//Example 3:

function isanagram(a, b)
{


  let str1=  a.replace(/\s+/g, "").toLowerCase()
  str1 = str1.split("").sort().join("")
    let str2= b.replace(/\s+/g, "").toLowerCase()
    str2 = str2.split("").sort().join("")
    return str1===str2
}
    console.log(isanagram("testleaf", "leaftest"))
    console.log(isanagram("hello", "world"))


