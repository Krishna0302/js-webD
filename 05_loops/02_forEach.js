// const conding = ["java", "python", "cpp", "ruby", "js"]

// const values = coding.forEach((item) => {
//     return item;
// })
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num>4)   // will return only

const newNums = myNums.filter( (num) => num>4)
console.log(newNums)

// const newNums = myNums.filter( (num) => {
//     return num>4
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books = [
    {title: "bookOne", genre: "History", publish: "1987", edition: "2004"},
    {title: "bookTwo", genre: "Comedy", publish: "1980", edition: "2007"},
    {title: "bookThree", genre: "Mystory", publish: "2000", edition: "2005"},
    {title: "bookFour", genre: "Crime", publish: "1960", edition: "2003"},
    {title: "bookFive", genre: "History", publish: "2001", edition: "2011"},
    {title: "bookSix", genre: "Drame", publish: "1970", edition: "2006"},
    {title: "bookSeven", genre: "History", publish: "2005", edition: "2015"}
]

var userBooks = books.filter( (bk) => bk.genre==='History')
userBooks = books.filter( (bk) => bk.publish>=1990 && bk.genre === "History")

// console.log(userBooks)