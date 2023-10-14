// const tinderUser = new Object()      // singleton object
const tinderUser = {}     // Non singleton object
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "krishna"
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

// const newUser = {
//     email: "krishna@gmail.com",
//     fullName: {
//         userFullName: {
//             firstName: "krishna",
//             lastName: "bairwa"
//         }
//     }
// }
// console.log(newUser.fullName.userFullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const arr = [
    {
        name: "krishna",
        id: "k@gmail.com"
    },
    {

    }
]

// console.log(Object.keys(tinderUser))    // imp
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
      courseName: "js",
      price: "999",
      courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course   //Destucturing
// console.log(instructor)

//API   will be treated ad JSON
// {
//    "name": "krishna",
//    "id" : "k@gmail.com",
// }
[
    {},
    {}
]
