//IIFE - Immediately Invoked Function Expression


function chai() {
  console.log("DB CONNECTED");
}
chai();


//IIFE
(function chai() {
  console.log("DB CONNECTED");
})();



//IIFE with arrow function
((name) => {
  console.log(`DB CONNECTED ${name}`);
})("John");


//IIFE with function expression
const iife = function () {
  console.log("DB CONNECTED");
};
iife();


