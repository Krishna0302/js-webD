const date = new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleTimeString())
// console.log(typeof date)

// const createdDate = new Date("2023-01-20")
// const createdDate = new Date(2023, 0, 20, 5, 6)
const createdDate = new Date("01-14-2023")
// console.log(createdDate.toDateString())
console.log(createdDate.toLocaleString())

const timeStamp = Date.now()    // gives value in miliseconds
console.log(timeStamp)
console.log(createdDate.getTime())
console.log(Math.floor(Date.now()/1000))    // gives value in second

let newDate = new Date()
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "short"
})
console.log(newDate)