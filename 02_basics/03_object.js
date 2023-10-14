// object literal

const mySym = Symbol("key1")
const user = {
    name: "krishna",
    [mySym]: "myKey",
    age:"21",
    email: "krishna@gmail.com",
    location: "bhopal"
}
// console.log(user.email)
// console.log(user["email"])
// console.log(user["age"])
// console.log(user[mySym])
// console.log(typeof user[mySym])
Object.freeze(user)                    // changes will not reflect
user.email = "bairwa@gmail.com"
console.log(user["email"])

// user.greeting = function(){
//     console.log("hello JS user")
// }
// user.greeting2 = function(){
//     console.log('hello JS user, ${this.name}');
// }

const greeting = function(){
    console.log("hello user")
}
console.log(greeting())