const name = "krishna"
const repoCount = 50
// console.log("my name is " + name + " and my repo count is " + repoCount)

// const name = new String('krishna')
// console.log(name[0])                 // to access each element by its index
// console.log(name.length)            // String length

// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('r'))

const newName = name.substring(0,4)
// console.log(newName)

const anotherName = name.slice(-6,4)     // we cant give negative index in slice for subString of a array
// console.log(anotherName)

const newString = "     krishna     "
// console.log(newString.trim())

const url = "https://krishna.com/krishna%20Bairwa"
// console.log(url.replace('%20', '--'))
// console.log(name.replace('sh', '--'))

// console.log(url.includes("krishna"))

console.log(name.split('-'))
console.log(name.__proto__)