const score = 20
// console.log(score)

const balance = new Number(100.25)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(4))

const num = 123.465
// console.log(num.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ************************************__MATHS__******************************************
console.log(Math)   
// console.log(Math.abs(-5))           // gives positive value

// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2))         // gives upper value
// console.log(Math.floor(4.9))        // gives lower value

// console.log(Math.min(4,7,2,9))
// console.log(Math.max(5,8,3,7))

console.log(Math.random())    // always gives value between 0 and 1
console.log(Math.random()*10 + 1)
console.log((Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+ min)
