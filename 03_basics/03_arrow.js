const user = {
  username: "John",
  price: 100,

  welcomeMessage: function () {
    console.log(`Welcome ${this.username} to the website`);
    console.log(this); // this refers to the current context
}

}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);


//global object is window in browser
//global object is global in node


function chai() {
  let username = "John";
  console.log(this);
}

chai();


const player = () => {
    let username = "John";
    console.log(this);
}

player();


//arrow function
//Why arrow function? 
//1. It is more concise
//2. It is more readable
//3. It is more flexible

//Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4));


//Implicit return
const multTwo = (num1, num2) => num1 * num2;
console.log(multTwo(3, 4));



//Undefined return
const three = () => { username: "John" };
console.log(three());


const myArray = [2, 5, 3, 7, 8];

myArray.forEach(function (item) {
  console.log(item);
});

