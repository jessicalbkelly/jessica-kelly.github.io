/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, string) {
    var test;
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === string) {
            test = array[i];
            return test;
        } else {
            test = null;
        }
    }
    return test;
}

console.log(search(animals, "dog"));

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = replacement;
        }
        return animals[i];
        
}
}

console.log(replace(animals, "Rex", {dog: true}))
 
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            animals[i] = {};
        }
        return animals[i];
}
}

console.log(remove(animals, "Jerome"))

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    var animalExists = false; //boolean flag variable
    for (var i = 0; i < animals.length; i++) {
        //determine if current item's name matches input animal name; if true reassign animalExists to true
        
        
        }
        else if (animal.name.length > 0) && (animal.species > 0) && (animalExists = false) {
    animals.push(animal);
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
