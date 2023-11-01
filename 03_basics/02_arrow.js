const user = {
username: "krishna",
price: "999",

welcomeMassege: function(){
console.log(this.username +" welcome to website")
 console.log(this)
  }
} 
// user.welcomeMassege()
// console.log(this)
// user.username = "sam"
// console.log(this)

// function chai(){
   // username: "krishna"
   // console.log(this)
// }

// const chai = function(){
   // username: "krishna"
   // console.log(this.username)
   // }

// const chai = () => {
// username: "krishna"
// console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {      // basic arrow function
    // return num1+num2
// }

// const addTwo = (num1, num2) =>  num1+num2

const returnUserName = (username) => ({username: "krishna"})    // to return object, parenthesis is must

console.log(returnUserName())