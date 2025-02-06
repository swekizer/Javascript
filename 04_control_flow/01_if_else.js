// if

//if(condition) {
    // code block
//}
//condition is a boolean expression that evaluates to true or false

//Example
if(2 ==2){
    console.log("2 is equal to 2")
}

//If the condition is true, the code block will be executed
//If the condition is false, the code block will be skipped

const isLogged = true;
if(isLogged){
    console.log("User is logged in")
}

// <, >, <=, >=, ==, ===, !=, !==

const temperature = 30;

if(temperature > 30){
    console.log("It is hot")
}

if(temperature < 30){
    console.log("It is cold")
}

if(temperature >= 30){
    console.log("It is very hot")
}

if(temperature <= 30){
    console.log("It is very cold")
}

if(temperature == 30){
    console.log("It is 30 degrees")
}

if(temperature === "30"){
    console.log("It is 30 degrees okay")
}
//If the condition is false, the code block will be skipped


const age = 18;

if(age > 18){
    console.log("You are not 18")
}else{
    console.log("You are child")
}




const score = 200;

if(score > 200){
    console.log("You have passed")
}else if(score === 200){
    console.log("You have just passed")
}else{
    console.log("You have failed")
}


const userTime = 20;
if(userTime){
    const fly = "Fly to the moon";
    console.log(`Username is present with ${fly}`);
}

console.log(fly);



//Implicit Scope
const balance = 1000;
if(balance > 1000) console.log("You are rich"), console.log("You are wealthy");


if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 1000){
    console.log("less than 1000");
} else {
    console.log("You are rich");
}




const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(userLoggedIn && debitCard){
    console.log("You can make a purchase")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User is logged in")
}

