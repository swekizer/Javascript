//while (condition) {
    // code block to be executed
//}

let index = 0;
while(index <= 10){
    console.log(index);
    index++;
}


let drinks = ["water", "tea", "coffee", "juice", "soda"];

let i= 0;

while(i < drinks.length){
    console.log(drinks[i]);
    i++;    
}


//do while

let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while(score <= 10);

//So the difference between while and do while is that do while will always execute the code block at least once, even if the condition is false.
//As you can see condition is false but still it will execute the code block once.
let cup = 11;
do {
    console.log(`Cup number is ${cup}`);
    cup++;
} while(cup <= 10);
