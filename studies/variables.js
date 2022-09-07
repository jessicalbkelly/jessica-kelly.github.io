/**
 * VARIABLES
 * 0. Definition:
 *      Variables are containers for storing data.
 * 1. Key Point 1: Declaration and Assignment
 *      Variables can be declared in three different ways:
 *          a. by using var, as in var myVariable;
 *          b. by using let, as in let myVariable;
 *          c. by using const, as in const myVariable;
 *      Once declared, variables can be assigned, or given, a value typically by using the equals sign, as in myVariable = 5;
 *      A variable can be declared and assigned at the same time, which is called initialization. Initialization looks like this: var myVariable = 5;
 *      You cannot re-declare a variable declared with let or const.  You can re-declare a variable declared with var like this: myVariable = 3;
 * 2. Key Point 2: var, let, const
 *      var:
 *          Always declare JavaScript variables with var,let, or const.
 *          The var keyword is used in all JavaScript code from 1995 to 2015.
 *          The let and const keywords were added to JavaScript in 2015.
 *          If you want your code to run in older browser, you must use var.
 *      let and const:
 *          As a general rule, declare variables with const.
 *          If you think the value of the variable can change, use let.
 *          let and const are block scoped whereas var is global/function scoped. 
 * 3. Key Point 3: Hoisting
 *      Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function).
 *      In JavaScript, a variable can be declared after it has been used.
 *      JavaScript only hoists declarations, not initializations.
 *      To avoid bugs, always declare all variables at the beginning of every scope.
 *      Keyword var is hoisted, but let and const do not allow hoisting.
 */

// Illustration of Key Point 1: Declaration and Assignment //
// Explanation
var myVariable; // declares the variable myVariable
myVariable = 5; // assigns a value to myVariable
myVariable = 3; // re-assignas a value to myVariable
console.log(myVariable); // prints 3 to the console

// Illustration of Key Point 2: var, let, const //
// Explanation
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total); // The two variables price1 and price2 are declared with the const keyword. These are constant values and cannot be changed. The variable total is declared with the let keyword, which is a value that can be changed.

let greeting = "say Hi";
if (true) {
    let greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi" -- with let, even if the same variable is defined in different scopes, there will be no error.

const greeting = "say Hi";
const greeting = "say Hello instead";// with this, there will be an error because const can't be redefined

// Illustration of Key Point 3: Hoisting //
// Explanation
a = 5;
console.log(a);
var a; // prints 5 to the console despite the declaration statement coming at the end


//sources: https://www.w3schools.com/js/js_variables.asp; https://www.w3schools.com/js/js_hoisting.asp;