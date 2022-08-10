/**
 * OPERATORS
 * 0. Definition: Operators are special symbols used to perform operations on operands (values and variables). In other words, operators process data and return new data.
 * 1. Key Point 1: Assignment Operators
        * Assignment Operators assign values to variables. You can read them like this:
            * A += B is the same as A = A + B
        * Types:
            * Addition: +=
            * Subtraction: -=
            * Multiplication: *=
            * Remainder: %=
            * Exponential: **=
 * 2. Key Point 2: Arithmetic Operators
        * Arithmetic Operators take numerical values (either literals or variables) as their operands and return a single numerical value
        * Types:
            * plus: +
            * minus: -
            * multiply: *
            * divide: /
            * remainder: %
            * exponent: **
 * 3. Key Point 3: Comparison Operators
        * Comparison Operators are used in logical statements to determine equality or difference between variables or values, returning a boolean value.
        * Types:
            * greater than: >
            * greater than or equal to: >=
            * less than: <
            * less than or equal to: <=
            * strict is equal to: ===
            * strict is not equal to: !==
 * 4. Key Point 4: Logical Operators
        * Logical Operators allow you to compare variables and do something based on the result of that comparison.
        * Types:
            * Not: !
            * And: &&
            * Or: ||
 * 5. Key Point 5: Unary Operators (!, typeOf, -)
        * Unary Operators conduct an operation with only one operand. This operand comes either before or after the operator.  Incrementing operators are a type of unary operator.
        * Types:
            * Unary plus (+): Tries to convert the operand into a number
            * Unary negation (-): Tries to convert the operand into a number and negates after
            * Increment (++): Adds one to its operand
            * Decrement (--): Decrements by one from its operand
            * Logical NOT (!): Converts to boolean value then negates it
            * Bitwise NOT (~): Inverts all the bits in the operand and returns a number
            * typeof: Returns a string which is the type of the operand
            * delete: Deletes specific index of an array or specific property of an object
            * void: Discards a return value of an expression.
 * 6. Key Point 6: Ternary Operators (a?b:c)
        * Ternary Operators evaluate a condition and execute a block of code based on the condition. A ternary operator can be used to replace an if..else statement in certain situations.
        * Syntax:
            * condition ? expression1 : expression2
                * The ternary operator evaluates the test condition.
                * If the condition is true, expression1 is executed.
                * If the condition is false, expression2 is executed.
 * 7. Key Point 7: Incrementing Operators
        * Incrementing Operators add or subtract 1 to/from their operands. These are a type of unary operator.
            * If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
            * If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
        * Types:
            * Incrementing: ++
            * Decrementing: -- 
 */

// Illustration of Key Point 1: Assignment Operators //
A -= B // returns the value of A as A - B
A *= B // returns the value of A as A * B
A %= B // returns the value of A as the remainder when A is divided by B

// Illustration of Key Point 2: Arithmetic Operators //  
10 + 5 // returns 15
5 ** 2 // returns 25, or the same as 5*5
16 % 4 // returns 0

// Illustration of Key Point 3: Comparison Operators //
5 > 2 // returns  true
5 < 2 // returns false
5  !== 2 // returns true

// Illustration of Key Point 4: Logical Operators //
var a = 3;
var b = -2;
console.log(a > 0 || b > 0); // expected output: true, because a is greater than 0

// Illustration of Key Point 5: Unary Operators //
var variableExample = 1;
delete variableExample;          // returns false
console.log(variableExample);    // returns 1

// Illustration of Key Point 6: Ternary Operators//
// ternary operator to check the eligibility to vote
let age = 15;
let result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result); 
// output: You are not eligible to vote yet.

// Illustration of Key Point 7: Incrementing Operators //
//Postfix:
var x = 3;
var y = x++; // now, y = 3 and x = 4
//Prefix:
var a = 2;
var b = ++a; // now, a = 3 and b = 3
