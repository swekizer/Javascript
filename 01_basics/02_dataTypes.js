"Use strict"; //treat all JS code as newer version

// alert("Hello World"); // pop up message we are using node.js so this will not work 

console.log(3+3); console.log("Hello World"); // multiple statements in a single line // not recommended





// Data Types in JavaScript

let name = "Swekit"; // String
let age = 25; // Number
let isMale = true; // Boolean
let isFemale = false; // Boolean

let isStudent = null; // Null
let isUndefined; // Undefined
let isNotANumber = NaN; // Not a Number
let isSymbol = Symbol("Swekit"); // Symbol // unique value

let isInfinity = Infinity; // Infinity
let isNegativeInfinity = -Infinity; // -Infinity


let isBigInt = 1234567890123456789012345678901234567890n; // BigInt


let isArray = new Array(1,2,3,4,5); // Array
let isDate = new Date(); // Date


console.log(typeof name);
console.log(typeof age);
console.log(typeof null); // object // Interview Question
console.log(typeof isUndefined);

