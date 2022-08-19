/**
 * LOOPS
 * 0. Definition: Loops perform repeated tasks based on a condition. 
 *          Conditions typically return true or false. 
 *          A loop will continue running until the defined condition returns false.
 * 1. Key Point 1: While Loop
 *      Use: while loops starts by evaluating condition. 
 *      If condition evaluates to true, the code in the code block gets executed. 
 *      If condition evaluates to false, the code in the code block is not executed and the loop ends.
 *      Syntax:
 *              while (condition) {
 *              // statement
 *              }
 * 2. Key Point 2: For loop
 *      Use: for loops are used typically with arrays to run code a set number of times
 *      Syntax: 
 *              for (initialization; condition; finalExpression) {
 *              // code
 *              }
 * 3. Key Point 3: For-in loop
 *      Use: For-in loops are used to loop over objects
 *      Syntax: 
 *              for (property in object) {
 *              // code
 *              }
 * 4. Key Point 4: Looping any number of times, forward counting up, backward counting down to 0
 *      See examples below.
 * 5. Key Point 5: Looping over an array forwards and backwards
 *      See examples below.
 * 6. Key Point 6: Looping over an object
 *      See example below.
 */

// Illustration of Key Point 1: While loop //
var i = 1;
while (i < 4) {
  console.log(i);
  i++;
}

// Logs this to the console:
// 1
// 2
// 3

// Illustration of Key Point 2: For loop //
for (var i = 0; i < 4; i++) {
    console.log(i);
  }
  // Logs this to the console:
  // 0
  // 1
  // 2
  // 3

// Illustration of Key Point 3: For-in loop //
var dogs = {
    a: "Rex",
    b: "Yeats",
    c: "Gumbo"
  };
  
  for (var key in dogs) {
    console.log(key + ": " + dogs[key]);
  }
  
   // Logs this to the console:
  // a: Rex
  // b: Yeats
  // c: Gumbo

// Illustration of Key Point 4: Looping any number of times, forward counting up, backward counting down to 0 //
// Looping any number of times
var i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

// Logs this to the console; change "5" to loop more or fewer times
// 1
// 2
// 3
// 4

// Forward counting up
for (var j = 0; j <= 5; j++) {
    console.log(j);
  }

//logs this to the console:
//1
//2
//3
//4
//5

// Backward counting down to 0
for (var j = 5; j >= 0; j--) {
    console.log(j);
  }

//logs this to the console:
//5
//4
//3
//2
//1


// Illustration of Key Point 5: Looping over an array forwards and backwards //
// looping over an array forwards
var myArray = ["dogs", "cats", "ducks"];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }

//logs this to the console:
//dogs
//cats
//ducks

// looping over an array backwards
var myArray = ["dogs", "cats", "ducks"];

for (var j = myArray.length; j >= 0; j--) {
    console.log(myArray[j]);
  }

//logs this to the console:
//ducks
//cats
//dogs

// Illustration of Key Point 6: Looping over an object //
var sports = {
    Favorite: "Swimming",
    SecondFav: "Running",
    ThirdFav: "Cycling"
  };
  
  for (var key in sports) {
    console.log(key + ": " + sports[key]);
  }

  // Logs this to the console:
  // Favorite: Swimming
  // SecondFav: Running
  // ThirdFav: Cycling

//source: https://www.javascripttutorial.net/javascript-closure/#:~:text=In%20JavaScript%2C%20a%20closure%20is,the%20lexical%20scoping%20works%20first.