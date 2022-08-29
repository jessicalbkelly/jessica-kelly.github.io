// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const object = require('underbar/object');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *  
 * cd ..  all the way back to your workspace
 *
 *    npm start --prefix ./jessica-kelly.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.

use reduce, pluck, filter, map

*/

var maleCount = function(array) {
 //invoke _.filter to return an array of only the male customers
 var males = _.filter(array, function(customer) {
    return customer.gender === "male";
 //return the length of that array
});
return males.length;
};

var femaleCount = function(array) {
//invoke _.filter to return an array of only the male customers
var females = _.filter(array, function(customer) {
    return customer.gender === "female";
 //return the length of that array
});
return females.length;
};

var oldestCustomer = function(array) {
var oldest = _.reduce(array, function(accumulator, current) { 
// accumulator = {name: X, age X}
//current = ''
//need to figure out if current > accumulator
if (current.age > accumulator.age) {
    return current;
}
return accumulator;
});
return oldest.name;
};

//invoke oldestCustomer
//invoke reduce
//result = {name: Bob ...}
//for loop starting at 1 index of array
//1
//result = fun((...), ())

// ### 3: `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`

var youngestCustomer = function(array) {
// ### 4: `youngestCustomer`
//  - **Objective**: Find the youngest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
var youngest = _.reduce(array, function(previous, current) { 
    if (current.age < previous.age) {
        return current;
    }
    return previous;
    });
    return youngest.name;
    };

var averageBalance = function(array) {
// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:
var balances = _.map(array, function(customer){
    var stringNum = customer.balance.replace(/[$,]/g,"")
     stringNum = parseFloat(stringNum);
     console.log(stringNum);
     return stringNum;
     });
         //iterate through array of balances to get a sum 
         //divide that sum by the length
         var counter = 0;
         for (var i = 0; i < balances.length; i++) {
                 counter += balances[i];
             }
             var average = counter / balances.length;
             return average;
 };


var firstLetterCount = function(array, letter) {
// ### 6: `firstLetterCount`
//  - **Objective**: Find how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:
var first = _.filter(array, function(customer) {
    return customer.name[0].toLowerCase() === letter.toLowerCase();
});
return first.length;
};


var friendFirstLetterCount = function(array, customer, letter) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            var friendFirst = _.filter(array[i].friends, function(friendName) {
                return friendName.name[0].toLowerCase() === letter.toLowerCase();
                });
                }                 
    }
    return friendFirst.length;
};

// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


var friendsCount = function(array, name) {
// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:
    var customersNames = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                customersNames.push(array[i].name);
            }
        }
    }
    return customersNames;
}

var topThreeTags = function(array) {
// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:
var pushArray = [];

for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].tags.length; j++)
    pushArray.push(array[i].tags[j]);
}

const count = {};

for (const element of pushArray) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
var entries = Object.entries(count);  //returns array of arrays

//now sort this array by the number at each item's 1 index

entries.sort(function(a, b){ //a is current value, b is next value in array
    return b[1] - a[1];
})
console.log(entries);

var newVar = [];
newVar.push(entries[0][0]);
newVar.push(entries[1][0]);
newVar.push(entries[2][0]);
return newVar;
}



// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`
var genderCount = function(array) {
var myObj = _.reduce(array, function(accumulator, current) {

    if (accumulator[current.gender]) {
        accumulator[current.gender] = accumulator[current.gender] + 1;
        return accumulator;
    } else {
        accumulator[current.gender] = 1;
        return accumulator;
    } 
}, {});
return myObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
