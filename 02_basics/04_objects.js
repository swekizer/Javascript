//Singleton
const tinderUser = new Object();
console.log(tinderUser);

//Object literals
const tinderUser2 = {}
console.log(tinderUser2);


//Adding properties to an object
tinderUser.id = "123abc"
tinderUser.name = "Swekit"
tinderUser.isLoggedIn = false

console.log(tinderUser);


//Nested objects
const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Swekit",
            lastname: "ChatGPT"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


//Object merging
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj5 = {obj1, obj2, obj3} //Not recommended as it will not merge the objects but will create a new object with the properties of the objects.
console.log(obj5);

const obj4 = {...obj1, ...obj2, ...obj3} //Recommended as it will merge the objects and create a new object with the properties of the objects.
console.log(obj4);


//Object.assign
const obj6 = {1: "a", 2: "b"}
const obj7 = {2: "a", 3: "b"}
const obj8 = Object.assign({}, obj6, obj7) 
console.log(obj8);
const obj9 = {...obj6, ...obj7}
console.log(obj9);



const users = [
    {
        id: 1,
        email: "swekit@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {

    },
    {

    },
    {

    },
]

console.log(users[0].email);
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));




