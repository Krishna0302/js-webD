// object 

const mySym = Symbol("key1")
const user = {
    name: "krishna",
    [mySym]: "myKey",
    age: 21,
    email: "krishna@gmail.com",
    location: "bhopal"
}
// console.log(user["email"])
// console.log(user.email)
// console.log(user["mySym"])
user.email = "bairwa@gmail.com"
// Object.freeze(user)   // changes will not reflect

user.greeting = function(){
    console.log("hello JS user")
}
user.greeting2 = function(){
    console.log('hello JS user, ${this.name}');
}
console.log(user.greeting2())