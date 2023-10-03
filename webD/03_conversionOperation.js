let score = 20;
let a = null;
let age = "20abc";
let num = Number(a);
let num2 = Number(age);

console.log(typeof(score));
console.table([typeof score, typeof age, typeof num, typeof a]);
console.log(num); // NaN => Not a Number
console.log(num2);

// "20" => 20
// "20abc" => NaN
// true => 1; false => 0