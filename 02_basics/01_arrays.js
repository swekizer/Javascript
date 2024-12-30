// Array

// Array is a collection of elements. It can store multiple values in a single variable.

// Array literal
const myArr = [1, 2, 3, 4, 5];

// Array constructor
const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr);

// Accessing elements
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);

// Modifying elements
myArr[0] = 6;
console.log(myArr);

// Array methods
console.log(myArr.length);
console.log(myArr.toString());
console.log(myArr.join("-"));
console.log(myArr.pop());
console.log(myArr.push(5));// Add elements to the end of the array

console.log("Shift: ");
myArr.shift(); // Remove the first element of the array
console.log(myArr);


console.log("Unshift: ");
myArr.unshift(1); // Add elements to the beginning of the array
console.log(myArr);

// Adding elements
console.log("Adding elements: ");
myArr[5] = 6;
console.log(myArr);

// Deleting elements
console.log("Deleting elements: ");
delete myArr[5];
console.log(myArr);

// Splicing elements
console.log("Splicing elements: "); // The first parameter specifies the position where new elements should be added (spliced in). The second parameter specifies how many elements should be removed. The rest of the parameters specify the new elements to be added.
const array = [1, 2, 3, 4, 5];
const splicedArray = array.splice(1, 2, 'a', 'b'); // [2, 3]
console.log(splicedArray); // Output: [2, 3]
console.log(array); // Output: [1, 'a', 'b', 4, 5] (original array is modified)

// Concatenating arrays
console.log("Concatenating arrays: ");
const myArr3 = myArr.concat(myArr2);
console.log(myArr3);

// Slicing arrays
console.log("Slicing arrays: "); // The first parameter specifies the position where the new array should start. The second parameter specifies the position where the new array should end (not included).
const myArr4 = myArr3.slice(2, 4);
console.log(myArr4);

const slicedArray = array.slice(1, 3); // [2, 3]
console.log(slicedArray); // Output: [2, 3]
console.log(array); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

// Sorting arrays
console.log("Sorting arrays: ");
console.log(myArr3.sort());
console.log(myArr3.reverse());

// Searching arrays
console.log("Searching arrays: ");
console.log(myArr3.indexOf(3));
console.log(myArr3.lastIndexOf(3));
console.log(myArr3.includes(3));

// Iterating arrays
console.log("Iterating arrays: ");
myArr3.forEach((element) => {
  console.log(element);
});

for (let i = 0; i < myArr3.length; i++) {
    console.log(myArr3[i]);
    }

// Array methods
console.log(myArr3.map((element) => element * 2));
console.log(myArr3.filter((element) => element > 2));
console.log(myArr3.reduce((total, element) => total + element));
console.log(myArr3.every((element) => element > 2));
console.log(myArr3.some((element) => element > 2));
console.log(myArr3.find((element) => element > 2));
console.log(myArr3.findIndex((element) => element > 2));
console.log(myArr3.fill(0, 2, 4));
console.log(myArr3.copyWithin(2, 0, 2));
console.log(myArr3.includes(3));
console.log(myArr3.keys());
console.log(myArr3.values());
console.log(myArr3.entries());
console.log(myArr3.flat());
console.log(myArr3.flatMap((element) => element * 2));
console.log(myArr3.toString());
console.log(myArr3.toLocaleString());
console.log(myArr3.join("-"));
console.log(myArr3.pop());
console.log(myArr3.push(5));
console.log(myArr3.shift());
console.log(myArr3.unshift(1));

// Multidimensional arrays
const myArr5 = [[1, 2], [3, 4], [5, 6]];
console.log(myArr5);
console.log(myArr5[0][0]);
console.log(myArr5[0][1]);
console.log(myArr5[1][0]);
console.log(myArr5[1][1]);
console.log(myArr5[2][0]);
console.log(myArr5[2][1]);


