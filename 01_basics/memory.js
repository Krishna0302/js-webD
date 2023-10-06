let user = "krishna"
let user2 = user
// user2 = "Visna"
console.table([user, user2])

let userOne = {
    email : "user@google.com",
    upiId : "user@ybl"
}

let userTwo = userOne
userTwo.email = "krishna@gmail.com"
console.log(userOne)
console.log(userTwo)