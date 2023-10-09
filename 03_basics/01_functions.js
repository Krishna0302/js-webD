function myName(){
    console.log("k")
    console.log("r")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("n")
    console.log("a")
}
// myName()

// function add(num1, num2){
//     console.log(num1+num2)
// }
// add(2,2)

function add(num1, num2){
    // const ans = num1+num2
    // return ans
    return num1+num2
}
add(4,5)
// const result = add(3,5)
// console.log(result)

function userNameLoggedIn(username){
    if(username === undefined){
        console.log("please enter a correct username")
        return 
    }
    return  username + " just logged in"
}

console.log(userNameLoggedIn("krishna"))
console.log(userNameLoggedIn())
