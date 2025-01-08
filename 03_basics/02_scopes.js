let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

var d = 50;

if(true){
    let d = 10;
    const e = 30;
    var s = 40;
}

console.log(d); // 50 // var is function scoped let and const are block scoped
//console.log(e); // ReferenceError: e is not defined
//console.log(s); // ReferenceError: s is not defined


for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i); // 10

//How scope works in for loop
const array = [1,2,3,4,5]
for(let i=0; i< array.length; i++){
    const element = array[i];
}


function one(){
    const username = "swekit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // ReferenceError: website is not defined
    two()
}
one()


if(true){
    const username = "swekit"
    if(username === "swekit"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website); // ReferenceError: website is not defined
}
//console.log(username); // ReferenceError: username is not defined




// ++++++++++++++++++++ interesting ++++++++++++++++++++

// Hoisting

// Hoisting is a concept in JavaScript where variable and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared in the code.
//In first example function is hoisted and in second example variable is hoisted
// 

console.log(addone(5)); // 6
function addone(num){
    return num + 1;
}

//console.log(addone(5)); // ReferenceError: Cannot access 'addone' before initialization
console.log(addtwo(5)); // ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(5)); // 7
