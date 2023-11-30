// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    // console.log("Each character is "+ greet)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
// console.log(map)

for (const [key, value] of map) {
    // console.log(key + "-:" + value);
    // console.log(value)
}
 // for in  (for objects)

 const myObject = {
    'Game1': "GTA",
    'Game2': "NFS"
 }

 for(const key in myObject){
    // console.log(key)
    // console.log(myObject[key])
 }

 const programming = ["java", "cpp", "python", "JS"]
 for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
 }

 // for in will not work for map 

 // for each (will use it more)

 const conding = ["java", "python", "cpp", "ruby", "js"]
// conding.forEach( function (val) {
//     console.log(val)
// })

// conding.forEach( (val) => {
//     console.log(val)
// })

function printMe (item){
   console.log(item)
}

conding.forEach(printMe)   // function ko execute nhi krana, bs reference dena hai