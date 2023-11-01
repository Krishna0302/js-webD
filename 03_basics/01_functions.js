function myName(){
    console.log("k")
    console.log("r")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("n")
    console.log("a")
}
 //myName()

// function add(num1, num2){
//     console.log(num1+num2)
// }
// add(2,2)

// function add(num1, num2){
    // const ans = num1+num2
    // return ans
    // return num1+num2
// }
// add(4,5)
// const result = add(3,5)
// console.log(result)

function userNameLoggedIn(username){
    if(username === undefined){
        console.log("please enter a correct username")
        return 
    }
    return  username + " just logged in"
}

// console.log(userNameLoggedIn("krishna"))
// console.log(userNameLoggedIn())

 function calculateCartPrice(val1, val2, ...num){           // it will skip first 2 values
     return num
 }
// function calculateCartPrice(...num){            // rest operator
    // return num
 // }
 console.log(calculateCartPrice(200, 400 ,599))

const user = {
    userName: "krishna",
    price: "299"
}
function handleObject(anyObject){
    console.log("UserName is "+ anyObject.userName + " and price is " + anyObject.price)
}
// handleObject({
//    userName: "krishna",
//    price: "299"
// })

const arr = [200, 399, 157, 583]
function returnSecondValue(myArr){
    console.log(myArr[1])
}
// returnSecondValue(arr)
returnSecondValue([200, 399, 157, 583])