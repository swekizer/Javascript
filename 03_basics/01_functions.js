console.log("S");
console.log("W");
console.log("E");
console.log("K");
console.log("I");
console.log("T");

function saymyname(){
    console.log("S");
    console.log("W");
    console.log("E");
    console.log("K");
    console.log("I");
    console.log("T");
}

saymyname();

function addTwoNumbers(number1, number2){ //number1 and number2 are parameters
    console.log(number1 + number2);
}


addTwoNumbers(3, 4); //here the numbers we entered are called arguments
addTwoNumbers(3, "4");
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

const result = addTwoNumbers(3,5)
console.log("Result:", result);


function addto(number1, number2){
    let result = number1 + number2
    console.log("Swekit");
    return result
    //console.log("Hitesh")
    //Anything written after return will not be implemneted

    // Another way to return is 
    // return number1 + number2
}

const ans = addto(3,5)
console.log("ans:", ans);





function loginUserMessage(username){
    if(username === undefined){                    //if(!username) can be used
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("swekit"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())


function loginUser(username = "sam"){
    if(username === undefined){                    //if(!username) can be used
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUser("swekit"))
console.log(loginUser());







//Rest operator (...)
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 500, 400, 20000));

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice2(200, 400, 500, 2000));

const user = {
    username: "swekit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username: "swekit",
    price: 199
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));








