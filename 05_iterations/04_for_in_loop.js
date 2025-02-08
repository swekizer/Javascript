//for in loop is used to iterate over the properties of an object or the elements of an array.


const myObj = {
    name: 'John',
    age: 25,
    city: 'New York'
}

for(const key in myObj){
    console.log(key, myObj[key]);
}


const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'C#']

for(const index in programmingLanguages){
    console.log(index, programmingLanguages[index]);
}

