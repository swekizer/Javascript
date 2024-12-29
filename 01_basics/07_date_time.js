let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toTimeString());

console.log(myDate.toLocaleString());

console.log(myDate.getFullYear());

console.log(myDate.getMonth());

console.log(myDate.getDate());

console.log(myDate.getDay());

console.log(myDate.getHours());

console.log(myDate.getMinutes());

console.log(myDate.getSeconds());

console.log(myDate.getMilliseconds());

console.log(myDate.getTime());

console.log(typeof myDate);

//let myCreatedDate = new Date(2021,9,1);
let myCreatedDate = new Date(2021,9,1, 5,3);

console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());



let newDate1 = new Date("2023-09-01"); 
console.log(newDate1.toLocaleString());

let newDate2 = new Date("01/09/2023");
console.log(newDate2.toLocaleString());
console.log(newDate2.getTime());



let myTimestamp = Date.now();
console.log(myTimestamp);







let newDate3 = new Date();
console.log(newDate3);