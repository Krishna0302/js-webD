// primitive

const id = Symbol("123")
const anotherId = Symbol("123")        // Symbol dataType
console.log(id===anotherId)

// Non-primitive

const fruits = ["mango", "banana", "papaya", "gavava"]       // Array dataType
console.log(fruits)

let data = {
    name : "krishna",               // Object dataType
    age: 20
}
console.log(data)

let myFunc = function(){
    console.log("hello world")
}

console.log(typeof id)