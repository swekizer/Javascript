const score = 400
console.log(score)

const balance = new Number(1000)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 100.45
console.log(otherNumber.toPrecision(2))


const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))







// Math.round() - Rounds a number to the nearest integer
console.log(Math.round(score / 2.5))

// Math.floor() - Rounds a number down to the nearest integer
console.log(Math.floor(score / 2.5))

// Math.ceil() - Rounds a number up to the nearest integer
console.log(Math.ceil(score / 2.5))

// Math.min() - Returns the smallest of zero or more numbers
console.log(Math.min(1, 2, 3, 4, 5))

// Math.max() - Returns the largest of zero or more numbers
console.log(Math.max(1, 2, 3, 4, 5))

// Math.random() - Returns a pseudo-random number between 0 and 1
console.log(Math.random())



// Random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1)

// Random number between 0 and 100
console.log(Math.floor(Math.random() * 100))

//Absolute value
console.log(Math.abs(-100))

//Square root
console.log(Math.sqrt(100))

//Power 
console.log(Math.pow(2, 3))

//Trigonometry
console.log(Math.sin(0))

//Logarithm
console.log(Math.log(10))

//Exponential
console.log(Math.exp(1))

//Infinity
console.log(Math.POSITIVE_INFINITY)

//Not a number
console.log(Math.NaN)

//Negative Infinity
console.log(Math.NEGATIVE_INFINITY)



console.log(Math.random())
console.log((Math.random()*10)+1 )
console.log(Math.floor(Math.random()*10)+1 )

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)