// Strings in javascript

// Strings are used to store text. Strings must be enclosed in quotes. You can use single or double quotes:
let name = "John";
let name2 = 'Doe';

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let text = "He's called 'John'";
let text2 = 'He\'s called "John"';


const namePerson = "John";
const age = 30;

// Concatenation
console.log( "My name id" + namePerson + "my age is" + age);


// Template literals
console.log(`${namePerson} is ${age} years old`);


const gameName = new String("PUBG");
console.log(gameName);


// String methods
console.log("String methods");
console.log(namePerson.length);
console.log(namePerson.toUpperCase());
console.log(namePerson.toLowerCase());
console.log(namePerson[0]);
console.log(namePerson.indexOf("J"));
console.log(namePerson.lastIndexOf("n"));
console.log(namePerson.charAt(2));
console.log(namePerson.endsWith("n"));
console.log(namePerson.includes("J"));
console.log(namePerson.substring(0, 2));
console.log(namePerson.slice(0, 2));
console.log(namePerson.split(""));
console.log(namePerson.replace("J", "K"));
console.log(namePerson.trim());

// Escape characters
console.log("Hello\nWorld");
console.log("Hello\tWorld");
console.log("Hello\\World");
console.log("Hello\"World");

// String interpolation
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

// String concatenation
let c = "Hello";
let d = "World";
console.log(c + " " + d);




