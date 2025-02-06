const userEmail = "s@swekit.ai";

if(userEmail) {
  console.log("Got user email");
}
else{
    console.log("No user email");
}


//Falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values

//true, 1, -1, BigInt 1n, " ", [], {}, function(){}, new Date(), Infinity, -Infinity

const myUser = []

if(myUser){
    console.log("User is available")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coalescing Operator (??): null and undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1);


//Ternary Operator

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");


