/**
 * CONTROL FLOW
 * 0. Definition: A computer typically reads code from top to bottom and right to left. That flow can be interupted by loops, functions, and conditionals.
 * 1. Key Point 1: If/Else-if/Else statement
 *      We can use conditional statements to test whether something meets a set of criteria.
 *      An if statement specifies a block of Javascript code to be executed if a condition is true. 
 *      If that if statement is false, we can use else if statements to specify a block of code to be executed if other conditions are true.
 *      If the if and else if statements are all false, we use an else statement to specify a block of code to be executed since the other condition in the function are false. 
 * 2. Key Point 4: Switch
 *      A switch statement is another way of testing whether certain conditions are true or false.
 *      A switch statement works like this:
 *          The switch expression is evaluated once.
 *          The value of the expression is compared with the values of each case.
 *          If there is a match, the associated block of code is executed.
 *          If there is no match, the default code block is executed.
 */

// Illustration of Key Point 1: If/Else-if/Else Statement //
function sampleFunction(number, testNumber) {
    if (number > testNumber) {
        console.log(number + " is greater than " + testNumber);
    } else if (number === testNumber) {
        console.log(number + " equals " + testNumber);
    } else {
        console.log(number + " is less than " + testNumber);
    }
    }

    sampleFunction(5, 10); // prints "5 is less than 10" to the console

// Illustration of Key Point 2: Switch statements //
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  
  console.log(day); // prints Wednesday to the console on Wednesday, August 10, 2022

  //sources: https://www.w3schools.com/js/js_switch.asp
