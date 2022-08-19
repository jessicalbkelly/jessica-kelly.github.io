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
// ### 3: `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
var oldest = _.filter(array, function(customer) {
    return Math.max(null, customer.age);
});
return oldest.name;
};


var youngestCustomer = function() {
// ### 4: `youngestCustomer`
//  - **Objective**: Find the youngest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
    
}

var averageBalance = function(array) {
// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:
var balance = function(array) {
    var bal = _.filter(array, function(customer) {
       return customer.balance >= 0;
        }); 
        const sum = bal.reduce((partialSum, a) => partialSum + a, 0);
        var avg = sum/bal.length;
}
   return avg;
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
            var friendFirst = _.filter(array, function(customer) {
                for (var key in friends){
                return array[i].friends.name[0].toLowerCase() === letter.toLowerCase();
                }});
                
                }           
                
    }
    return friendFirst.length;
};

// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


var friendsCount = function() {
// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:
    
}

var topThreeTags = function(array) {
// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:

}

var genderCount = function(array) {
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
 
 var myObj = _.filter(array, seed, function(customer) {
    let firstVar = customer.gender === "male";
    let secondVar = customer.gender === "female";
    let thirdVar = customer.gender === "non-binary";
    let object = {};
    object.firstVar = "male";
    object.secondVar = "female";
    object.thirdVar = "non-binary";
});
return object;
};

// _.reduce = function(array, func, seed) {
//     let result;
//              if (seed !== undefined) {
//                 result = seed;
//                 for (let i = 0; i < array.length; i++) {
//                     result = func(result, array[i], i, array);
//                 }
//             } else {
//                 result = array[0];
//                 for (let i = 1; i < array.length; i++) {
//                 result = func(result, array[i], i, array);
//     }
// }
             
// return result;
// }
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
