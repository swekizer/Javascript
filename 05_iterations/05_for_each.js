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