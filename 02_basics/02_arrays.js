const marvelHeros = ["ironMan", "thor", "spiderMan"]
const dc = ["superMan", "flash", "batMan"]
const hh = ["ShaktiMan", "hero"]
// marvelHeros.push(dc)
// console.log(marvelHeros)
// console.log(marvelHeros[2][1])

// const allHeros = marvelHeros.concat(dc)   // can merge only two arrays
// console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dc, ...hh]    // can merge more than two arrays
// console.log(allNewHeros)

const arr = [1, 2, 3, [5, 6, 7], [7, 8, [0, 1, 2]]]
// console.log(arr)
// const arr1 = arr.flat(Infinity)
// console.log(arr.flat(Infinity))

console.log(Array.isArray("krishna"))
console.log(Array.from("krishna"))
console.log(Array.from({name: "krishna"}))   // imp for interviews, we will have to tell compiler which one to make Array (key or value).
