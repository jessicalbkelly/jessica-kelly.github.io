/**
 * FUNCTIONS
 * 0. Definition: A function is a set of statements that:
 *             - takes some sort of input 
 *             - performs a task or calculates a value
 *             - produces some sort of output
 * 1. Key Point 1: The two phases of using functions
 *      First we must declare a function. A function definition (also called a function declaration or function statement) consists of the function keyword, followed by:
 *             - The name of the function.
 *             - A list of parameters to the function, enclosed in parentheses and separated by commas.
 *             - The statements that define the function, including some sort of return statement, enclosed in curly braces, { }.
 *      Next we can execute or (two other words for calling a function) by?
 * 2. Key Point 2: Syntax for a named function
 *      function name(parameter1, parameter2) {
 *          (what you would like the function to do)
 *          return (what you like the function to output)
 *      };
 * 3. Key Point 3: How to assign a function to a variable
 *      You can assign a function to a variable just as you would a value.
 * 4. Key Point 4: Inputs and outputs of functions
 *      Functions can optionally take inputs and optionally return a single value. 
 *      We specify inputs with the parameters we set in parenthesis next to a function's name (i.e. function functionName(parameter1, parameter2))
 *      We specify outputs of a function with a return statement within the function.
 * 5. Key Point 5: Scope
 *      Functions can see and modify variables in parent or global scopes.
 *      The inverse is not true.
 * 6. Key Point 6: Closures
 *      Functions form closures around the data they house.
 *      If an object is returned from a function and is held in memory somwhere (referenced), that closure stays alive and
 *      data can continue to exist in these closures.
 */

// Illustration of Key Point 1: Definition //
function multiply(x, y) {
	return x * y;
};

console.log(multiply(5, 2)); // logs 10 to the console

// Illustration of Key Point 2: Two phases of using a function //
function goodDog(name) { //declares the function
    if (name === "Gumbo") {
      console.log(name + " is a good dog!")
    } else {
      console.log(name + " isn't Gumbo but is still a good dog!")
    }
  }
  
  goodDog("Gumbo"); //calls the function; prints "Gumbo is a good dog!" to the console

// Illustration of Key Point 3: Syntax for a named function //
var phrase = goodDog("Gumbo")

console.log(phrase) // prints "Gumbo is a good dog!" to the console

// Illustration of Key Point 4: Inputs and outputs of functions //
function goodDog(name) {
    if (name === "Gumbo") {
      console.log(name + " is a good dog!")
    } else {
      console.log(name + " isn't Gumbo but is still a good dog!")
    }
  } // in this example, name is the function's input, and one of two string phrases is the output

// Illustration of Key Point 5: Scope //

var w = 5;

function multiply(x, y) {
    var z = 0;
	z = x * y;
    console.log(z);
};

console.log(z + w); //returns "ReferenceError: z is not defined" because z can only be accessed within the function multiply and not outside of it/globally

let a = 4;
function myFunction() {
  return a * a;
}

console.log(myFunction()); // logs 16 to the console

function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable

// Illustration of Key Point 6: Closures //
function greeting(message) {
    return function(name2){
         return message + ' ' + name2;
    }
 }
 let sayHi = greeting('Hi');
 let sayHello = greeting('Hello');
 
 console.log(sayHi('Jessica')); // logs Hi Jessica
 console.log(sayHello('Jessica')); // logs Hello Jessica

//The sayHi() and sayHello() are closures. They share the same function body but store different scopes.
//In the sayHi() closure, the message is Hi, while in the sayHello() closure the message is Hello.

//source: https://www.javascripttutorial.net/javascript-closure/#:~:text=In%20JavaScript%2C%20a%20closure%20is,the%20lexical%20scoping%20works%20first.