//for

const array = new Array(1,2,3,4,5);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}


for(let i=0; i<= 10; i++){
    console.log(i);
    if(i >= 5){
        break;
    }
}


for(let i=0; i<= 10; i++){
    for(let j=0; j<= 10; j++){
        console.log(i, j);
    }
}

for(let i=0; i <= 10; i++){
    for(let j=0; j<= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArray1 = ["flash", "arrow", "superman", "batman", "wonderwoman"];
for (let index = 0; index < myArray1.length; index++) {
    const element = myArray1[index];
    console.log(element);
}



//break and continue
let myArray2 = ["flash", "arrow", "superman", "batman", "wonderwoman"];
for (let index = 0; index < myArray2.length; index++) {
    const element = myArray2[index];
    if(element === "superman"){
        break;
    }
    console.log(element);
}

let myArray3 = ["flash", "arrow", "superman", "batman", "wonderwoman"];
for (let index = 0; index < myArray3.length; index++) {
    const element = myArray3[index];
    if(element === "superman"){
        continue;
    }
    console.log(element);
}