//How does javascript execute code? + call stack

/*Global Execution Context (GEC) 
It is created when the script is run.
*/

/*
Function Execution Context (FEC)
It is created when a function is called.

*/

/*
Eval Execution Context (EEC)
It is created when eval() is called.
*/


/* What happens when a js file is run?
JsFile ----> Phase 1: Memory Creation Phase 
       ----> Phase 2: Execution Phase
*/


//Let's use this example to understand the execution context
let val1 = 10;
let val2 = 50;

function addTwoNumbers(num1, num2){
    let total = num1 + num2;
    return total;
}

let result1 = addTwoNumbers(val1, val2);
let result2 = addTwoNumbers(10, 20);


/*
Step 1: Global Execution Context (GEC) is created.


Step 2: Memory Creation Phase: 
        
        - //Line 25: val1 = undefined, 
          //Line 26: val2 = undefined, 
          //Line 28: addTwoNumbers = function(definition),
          //Line 33: result1 = undefined, 
          //Line 34: result2 = undefined



Step 3: Execution Phase:
        - //Line 25: val1 = 10, 
          //Line 26: val2 = 50,
        
        - //Line 34: addTwoNumbers(val1, val2) is called. 
                            new variable environment is created.
                            new execution thread is created.
                            //This sandbox is called as Execution Context. It will be created for every function call.
                            //This sandbox has two phases: Memory Creation Phase and Execution Phase.
                                    - Memory Creation Phase: 
                                            - All the variables are allocated memory and initialized with undefined.
                                            - val1 = undefined, 
                                              val2 = undefined, 
                                              total = undefined
                                    - Execution Phase:
                                            - The code is executed line by line.
                                            - num1 = 10, 
                                              num2 = 50, 
                                              total = 60
                                            - return total; //it will return the value of total to the global execution context.
                                            - result1 = 60
          // This willbe deleted after the execution of the function.
          Result1 = 60
          

        - //Line 35: addTwoNumbers(10, 20) is called.
                            new variable environment is created.
                            new execution thread is created.
                            //This sandbox is called as Execution Context. It will be created for every function call.
                            //This sandbox has two phases: Memory Creation Phase and Execution Phase.
                                            - Memory Creation Phase: 
                                                    - All the variables are allocated memory and initialized with undefined.
                                                    - num1 = undefined, 
                                                      num2 = undefined, 
                                                      total = undefined
                                            - Execution Phase:
                                                    - The code is executed line by line.
                                                    - num1 = 10, 
                                                      num2 = 20, 
                                                      total = 30
                                                    - return total; //it will return the value of total to the global execution context.
                                                    - result2 = 30
                // This willbe deleted after the execution of the function.
                Result2 = 30
*/            



/*
Call Stack:
It is a stack of execution contexts.
It is used to keep track of the execution context.
It is a LIFO (Last In First Out) data structure.


//Example:

|     Three                            |   
|     Two                              |       
|     One()                            |   
|     Global Execution Context         |   
||||||||||||||||||||||||||||||||||||||||


*/





















//From ChatGPT:\
// Understanding JavaScript Execution Context and Call Stack

/* 
Execution Context (EC):
1. Global Execution Context (GEC): 
   - Created when the script starts running.
   - There is only one GEC per script.

2. Function Execution Context (FEC): 
   - Created whenever a function is invoked.
   - A new FEC is created for each function call.

3. Eval Execution Context (EEC): 
   - Created when eval() is executed (rarely used).
*/

// Phases of Execution Context:
/*
1. Memory Creation Phase (Hoisting):
   - Memory is allocated for variables and functions.
   - Variables are initialized with undefined.
   - Function declarations are stored entirely.

2. Execution Phase:
   - Code is executed line by line.
   - Variables are assigned actual values.
   - Expressions and function calls are evaluated.
*/

// Example:
//let val1 = 10; // Global variable
//let val2 = 50; // Global variable

function addTwoNumbers(num1, num2) {
  // FEC: Memory Creation Phase -> num1 = undefined, num2 = undefined, total = undefined
  let total = num1 + num2; // Execution Phase: num1 and num2 assigned, total is calculated
  return total; // Returns value to the calling context
}

// GEC: Execution Phase
//let result1 = addTwoNumbers(val1, val2); // Function call -> Creates a new FEC
//let result2 = addTwoNumbers(10, 20); // Function call -> Creates another FEC

// Call Stack Explanation:
/*
Call Stack is a LIFO (Last In, First Out) data structure used to manage execution contexts.

1. The Global Execution Context (GEC) is pushed onto the stack first.
2. Each function call pushes a new Function Execution Context (FEC) onto the stack.
3. When a function completes execution, its FEC is popped off the stack.

Example Visualization:
|     addTwoNumbers(10, 20)       |   
|     addTwoNumbers(val1, val2)   |       
|     Global Execution Context    |   
||||||||||||||||||||||||||||||||||||||||||
*/

// Step-by-Step Execution:
/*
Step 1: Global Execution Context (GEC) is created.

Step 2: Memory Creation Phase:
  - val1 = undefined
  - val2 = undefined
  - addTwoNumbers = function(definition)
  - result1 = undefined
  - result2 = undefined

Step 3: Execution Phase:
  - val1 = 10
  - val2 = 50
  - result1 = addTwoNumbers(val1, val2) // Calls function, creates FEC
      - num1 = 10, num2 = 50
      - total = 60
      - Return value is assigned to result1 (result1 = 60)
  - result2 = addTwoNumbers(10, 20) // Calls function, creates FEC
      - num1 = 10, num2 = 20
      - total = 30
      - Return value is assigned to result2 (result2 = 30)
*/

// Output Results
console.log(result1); // 60
console.log(result2); // 30

