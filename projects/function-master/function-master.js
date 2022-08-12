//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const { slice } = require("lodash");

function objectValues(object) {
    var array = [];
    for (var key in object) {
        array.push(object[key]);
    }
    return array;
} 

//
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var array = [];
    var string = "";
    for (var key in object) {
        array.push(key)
        string = array.join(" ");  
    }
return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    var string = "";
    for (var key in object) {
        if (typeof(object[key]) === "string") {
            array.push(object[key]);
            string = array.join(" ");
        }
    }
        return string;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
     if (typeof(collection) === "string"){
        return "string";
    } else if (typeof(collection) === "number") {
    return "number";
    } else if (typeof(collection) === "function") {
    return "function";
    } else if (typeof(collection) === "boolean") {
    return "boolean";
    } else if (collection === null) {
        return "null";
    } else if (Array.isArray(collection) === true) {
        return "array";
    } else if (typeof(collection) === "object") {
        return "object"
}
}


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var split = string.split(" ");
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].substr(1);
    var splitJoin = split.join(" ");
    }
    return splitJoin;
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var NewMessage = "Welcome " + (object.name.charAt(0).toUpperCase() + object.name.slice(1)) + "!";
    return NewMessage;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return sentence = (object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " + object.species.charAt(0).toUpperCase()) + object.species.slice(1);
}

//Should take an object with a name an a species and return '<Name> is a <Species
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    var array;
    for (var key in object) {
        if (object.noises.length > 0) {
            array = object.noises;
          return array.join(" ");
    }
  
}
  return "there are no noises";
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}
//Should take a name and an object and add the 
//name to the object's friends array then return the object

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    for (var key in object) {
        if (object[key].includes(name)) {
            return true;
        } 
    }
  return false;
}

////Should take a name and an object and return true if <name> is a 
//friend of <object> and false otherwise
//(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var possiblePpl = [];
    var friendsArr = [];
    var totalFriends = [];
    var nonFriends = [];
    //pull out all possible people
      for (var i = 0; i < array.length; i++) {
        possiblePpl.push(array[i].name);}
    //find the friends of the person named in the function call
    //push those friends to a friends array
      for (var j = 0; j < array.length; j++) {
        if (array[j].name === name) {
          for (var l = 0; l < array.length; l++) {
        friendsArr.push(array[j].friends[l]);}}}
    //if a name in the possible people array does not match a value in the friends array, push that to nonFriends array 
      for (var k = 0; k < possiblePpl.length; k++) {
        if (friendsArr.includes(possiblePpl[k]) !== true && possiblePpl[k] !== name) {
          nonFriends.push(possiblePpl[k]);}
      }
    return nonFriends;
      }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === key) {
                delete object[key];
                delete key;
            }
        }
    }
return object;
}

//Should take an object and an array of strings. Should remove
// any properties on <object> that are listed in <array>"
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
    }
}
return newArray;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}