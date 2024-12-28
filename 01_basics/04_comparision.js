console.log(2 == 2); // true
console.log(2 > 2); // false
console.log(2 < 2); // false
console.log(2 >= 2); // true
console.log(2 <= 2); // true
console.log(2 != 2); // false
console.log(2 !== 2); // false
console.log(2 === 2); // true


console.log("2" > 1); // true
console.log("2" < 1); // false



console.log(null == 0); // false
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true

//why?
// The reson is that an equality check == and comparisons > < >= <= work differently.
// An equality check converts null to a number, so it becomes 0. That's why (null == 0) is false. 
// On the other hand, comparisons convert null to a number too, but the result is not consistent among them.    
// The most notable thing is that a comparison always returns false when null is compared to a number.
// For example, (null > 0) is false, as well as (null == 0).
// The only exception is the comparison >=, which returns true when null is compared to 0.
// That's a special rule for the case of null only.
// So, the correct way to check if a variable is null is to use the strict equality check
// === or !==, which do not perform type conversion.


console.log("2" === 2); // false
console.log("2" == 2); // true


console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false




