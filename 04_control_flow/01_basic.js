// if statements
// if(2!=3){
//     console.log("executed")
// }

// ==, ===, !==, >, <, =>, =<, !=
const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log("user power: "+ power)
// }

const balance = 10000
if(balance > 5000) console.log("agreed"), console.log("test");  // implicit scope

// Nullish Coalescing Operator (??): null undefined
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1)

// Ternary operator
condition ? true : false