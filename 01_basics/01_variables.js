const accountId = 12345
let accountEmail = "swekit@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad" // not recommended to use this way as it will be treated as a global variable.
let accountState; // undefined



// accountId = 2 // not allowed as it is a constant variable and can't be changed once assigned a value to it.

accountEmail = "skp@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// or //
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
    Prefer not to use var keyword as it is not block scoped and can be accessed outside the block.
*/ 