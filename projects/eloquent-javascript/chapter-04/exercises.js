////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let helper = [];
  if (start === end) {
    helper = [];
  }
    else if (step === undefined) {
      for (var i = start; i <= end; i++) {
      helper.push(i);
      }}
  else if (step >= 0) {
      for (var j = start; j <= end; j += step){
      helper.push(j);
    }
  };
return helper;
};



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var myVar = 0;
for (var i = 0; i <= array.length - 1; i++) {
myVar += array[i]
  
  
}
return myVar};

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, revArray = []) {
    //base
    if (array.length === 0){
      return revArray;
    };
    //recursion
    revArray.push(array[array.length - 1]) 
      return reverseArray(array.slice(0, array.length - 1), revArray);
    };

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let helper = [];
    for (var i = array.length - 1; i >= 0; i--){
        helper.push(array[i]);
    };
    for (var j = 0; j <= array.length - 1; j++){
    array[j] = helper[j]
    }
  return array;
  };

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { //demonstrate
let rest = null;
for (let i = array.length - 1; i >= 0; i--){
  rest = { value: array[i], rest: rest};
}
return rest;
}

//invoke arrayToList([10, 20, 30])
//rest = null
//iterating through input array backwards
  //2
    //rest = {value: 30, rest: null}
  //1
    //rest = {value: 20, rest: {value: 30, rest: null}}
  //0
    //rest = {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
  //return
    //{value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) { 
  //base
  if(list.rest === null){
output.push(list.value);
return output;
  }

  //recursion
  //access value property and push into output array
  output.push(list.value);
return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


     function prepend(value, list) {
      let newList = {};
      newList.value = value;
      newList.rest = list;
      return newList;
      
     };


     ///value that was passed in/,
///assign rest property list that was passed in as object
// { value: /whatever was passed in to function/, 
//rest: /assign the object that was passed in/ }

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
if(n === 0){
  return list.value;
    } else if (n < 0) {
      return undefined;
    }
    
  
    //recursion
    return nth(list.rest, n - 1)
};
  




//nth, which takes a list and a number and returns the element 
//at the given position in the list (with zero referring to the first element) 
//or undefined when there is no such element.

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) { //demonstrate
// determine if x and y are both not objects
if (typeof x !== "object" && typeof y !== "object"){
  return x === y;
}

//determine if either x or y is not an object
if (typeof x !== "object" || typeof y !== "object"){
  return false;

}

//create array of keys for x
let xKeys = Object.keys(x);
//create array of keys for y
let yKeys = Object.keys(y);

//determine if the the length of the arrays is not equal
if (xKeys.length !== yKeys.length){
  return false;
}

//iterate through one of the arrays of keys
for (let i = 0; i < xKeys.length; i++){
  if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
return false;
  }
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
