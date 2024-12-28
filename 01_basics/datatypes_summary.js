// Primitive

//7 types: String, Number, Boolean, Null. Undefined, Symobl, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let name

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)


const bigNumber = 12345678900987654323456789n 
console.log(bigNumber)

// Reference type or Non Primitive

// 2 types: Object, Function, Arrays

const hero = ["Superman", "Batman", "Spiderman"]

let heroObj = {  
    name: "Superman",
    power: "Fly"
}


function greet(){
    console.log("Hello")
}


console.log(typeof hero)

//url for ecma script: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
//ECMA Script is a standard for JavaScript
//Url: https://www.ecma-international.org/publications/standards/Ecma-262.htm


//hello

// ******************Stack and Heap****************** //

// Stack:
// - Primitive types are stored in the stack

// Heap:
// - Reference types are stored in the heap

// Stack:
// - Stores function calls
// - Stores variables
// - Stores reference to functions
// - Stores reference to variables

// Heap:
// - Stores objects
// - Stores arrays
// - Stores functions


let name1 = "swekit"

let name2 = name1
name1 = "rudra"

console.log(name1)
console.log(name2)


