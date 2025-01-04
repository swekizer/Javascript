//Singleton
//Object.create



//Object literals

const mySym = Symbol('secret');

const JsUser ={
    name: 'John',
    "full name": 'John Doe',
    age: 30,
    location: 'USA',
    [mySym]: 'This is a secret',
    email: "john@email.com",
    isLoggedin: false,
    
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]); //comsole.log(JsUser.full name); /Not allowed in this case 

console.log(JsUser[mySym]); 


//Overwrite
JsUser.isLoggedin = true;
JsUser.age = 31;
JsUser.location = 'UK';

//Freeze
JsUser.email = "swekit@chatgpt.com"
//Object.freeze(JsUser);
JsUser.email = "swekit@google.com";
console.log(JsUser); 



JsUser.greeting = function(){
    console.log(`Hello JS User`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello ${this.name} ${this.age}`);
}

console.log(JsUser.greeting2);
console.log(JsUser.greeting2());






