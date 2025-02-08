//for of

//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}


const greeting = "Hello World!"
for(const greet of greeting){
    console.log(`Each letter is : ${greet}`);
}



//Map

const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

const map2 = new Map()
map2.set("IND", "India")
map2.set("USA", "United States")
map2.set("UK", "United Kingdom")

console.log(map);
console.log(map2);

for(const [key, value] of map2){
    console.log(key, ':-', value);
    
}



const myObject = {
    'game1' : 'RDR2',
    'game2' : 'GTA5',
    'game3' : 'FIFA'
}

//this will not work
//for in loop is used for objects
for(const game of myObject){
    console.log(key, ':-', value);   
}