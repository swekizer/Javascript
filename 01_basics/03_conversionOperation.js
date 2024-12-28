let score = "33"

console.log(typeof score); 


let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33




// "33" -> 33
// "33abc" -> NaN
// true -> 1 false -> 0
// null -> 0



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn); // true


let someNumber = 454
let stringNumber = String(someNumber)
console.log(stringNumber); // "454"
console.log(typeof stringNumber); // string



// ***************  Conversion Operations  *************** //

let value = 3
let negValue = -value
console.log(negValue); // -3


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2); // 0




let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2


console.log("1" + 2)
console.log(1 + "2")

console.log("1" + 2 + 2)
console.log(1 + 1 + "2")


console.log(+true)
console.log(+false)

console.log(+"")


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameScore = 0
gameScore ++ //Post Increment
console.log(gameScore); // 1
++gameScore //Pre Increment
console.log(gameScore); // 2

//What is the difference between Post Increment and Pre Increment?
// Post Increment: First use the value and then increment
// Pre Increment: First increment the value and then use it