/**
 * STRING MANIPULATION
 * 0. Definition: We can manipulate (process and alter) strings (groups of characters) by using operators and string-specific methods.
 * 1. Key Point 1: With operators
 *      One way we can join strings is with the + arithmetic operator.
 *      Other operators typically associated with mathematical expressions can be used with strings.
 *      
 * 2. Key Point 2: With string methods
 *      Another way to join strings is by using the concat() method.
 *      Other methods designed specifically to manipulate strings include:
 *          indexOf() - finds the index of the first occurence of a character or string in a given string
 *          toCharArray() - forms a new character array from a string
 *          charAt() - gets the character at a specific index
 *          replace() - replaces all occurences of a given character/string from given string
 *          substring() - gets part of a string from a given string
 *          split() - splits a string up at a given point
 *          compareTo() - compares to strings
 *          strip() - gets ride of whitespace in a given string
 *          valueOf() - returns string representation of a passed argument
 *          length - finds the length of a string
 *          
 *      
 */

// Illustration of Key Point 1 //
var myMessage = 'hello '
var myMessage2 = 'world'
console.log(myMessage + myMessage2) // prints "hello world" to the console

// Illustration of Key Point 2 //
var myString = "Hello";
console.log(myString.concat(" World"));// prints "Hello World" to the console

var myString2 = "Jessica";
console.log(myString2.split("")); //prints [ 'J', 'e', 's', 's', 'i', 'c', 'a'] to the console
console.log(myString2.length) //prints 7 to the console
