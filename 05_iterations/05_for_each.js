//for each loop
//

const animals = ["tiger", "lion", "elephant", "monkey", "giraffe"];

animals.forEach( function (element) {
    console.log(element);
})

//arrow

animals.forEach( (element) => {
    console.log(element);
})


function printme(element){
    console.log(element);    
}


animals.forEach(printme);




//Objects in array

const students = [
    {name: "John", age: 25},
    {name: "Sam", age: 23},
    {name: "Tom", age: 21},
    {name: "Jerry", age: 20}
]

students.forEach( (item) => {
    console.log(item.name, item.age);
})




const companies = ["apple", "microsoft", "google", "facebook"];

const values = companies.forEach( (company) => {
    console.log(company);
    return company
})


//filter

const myNums = [1,2,3,4,5,6,7,8,9,10];

const print = myNums.filter( (num) => num > 4 );
console.log(print);

//another way to use filter
const answer = myNums.filter( (num1) => {
    return num1 > 6
})
console.log(answer);


const wholesale = []
myNums.forEach( (num2) => {
    if(num2 > 5){
        wholesale.push(num2)
    }
});
console.log(wholesale); 
