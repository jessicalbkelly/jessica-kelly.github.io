/**
 * DATA TYPES
 * 0. Definition: 
 *      Variables can hold different types of data, or data types. The type of data a variable holds dictates how that variable can be manipulated or used.
 * 1. Key Point 1: Numbers, Strings, Booleans
 *      Numbers, of which there is only one kind in Javascript, can be written with or without decimals.
 *      A string is a series of characters. Strings are written with either single or double quotes.
 *      Booleans only have two values -- either true or false.
 * 2. Key Point 2: Arrays, Objects, Functions
 *      Arrays are written with square brackets with commas separating each item within the array.  Arrays are indexed, with the first value corresponding to the 0 index.
 *      Objects are written with curly braces.  Object properties are written in key: value pairs separated by commas.
 *      Functions are a block of code designed to perform a particular task. A function is executed when it is invoked or called.
 * 3. Key Point 3: undefined, null, NaN
 *      In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
 *      Null denotes a null value, or a special value which represents “nothing”, “empty” or “value unknown.”
 *      NaN, or "not a number," represents a computational error. It is a result of an incorrect or an undefined mathematical operation
 * 4. Key Point 4: Infinity and -Infinity
 *      Infinity is a number that represents positive infinity.
 *      -Infinity represents negative infinity. 
 *      A number reaches Infinity when it exceeds the upper limit for a number: 1.797693134862315E+308.
 *      A number reaches -Infinity when it exceeds the lower limit for a number: -1.797693134862316E+308.
 * 5. Key Point 5: The difference between primitive/simple and complex data types
 *      Objects are considered complex data types because they are used to store collections of data and more complex entities.
 *      All other types are called “primitive” because their values can contain only a single thing.
 * 6. Key Point 6: Primitive Values are passed to a function by copy, while complex values are passed by reference. What does this mean and how are they different?
 *      Primitive values are atomic pieces of data while reference values are objects that might consist of multiple values.
 *      When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.
 *      Static data is the data whose size is fixed at compile time. Static data includes:
 *          Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)
 *          Reference values that refer to objects.
 *      Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.
 *      Unlike the stack, JavaScript stores objects (and functions) on the heap. 
 *          The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. 
 *          Instead, it’ll allocate more space as needed.
 *      A reference value allows you to add, change, or delete properties at any time.
 */

// Illustration of Key Point 1: Numbers, Strings, Booleans //
let x = 5;      // x is assigned a number data type
let y = 5;
let z = 6;
let a = "A";    // a is assigned a string data type
(x == y)        // Returns true, a boolean
(x == z)        // Returns false, also a boolean

// Illustration of Key Point 2: Arrays, Objects, Functions //
var myArray = ["dogs", 2, true];     // an array is initialized
var myObject = {dogs: 2, cats: 3, mice: 1};     //an object is initialized
function myFunction(){
    return myArray;
}       // a function is defined

// Illustration of Key Point 3: undefined, null, NaN //
console.log(undefined * 2); // prints NaN to the console

// Illustration of Key Point 4: Infinity and -Infinity //
let x = -1.797693134862316E+308;
let y = x * 1.001;
console.log(y); // prints -Infinity to the console

let x = 1.797693134862315E+308;
let y = x * 1.001;
console.log(y); // prints Infinity to the console

// Illustration of Key Point 5: The difference between primitive/simple and complex data types //
var myNewObject = {Cats: 3; Dogs: true; Behaviors: "Good"}; //objects are complex because they can contain various data types
var x = 4; // simple data types, like numbers, only contain themselves!

//sources: https://javascript.info/types; https://www.w3schools.com/jsref/jsref_infinity.asp; https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/