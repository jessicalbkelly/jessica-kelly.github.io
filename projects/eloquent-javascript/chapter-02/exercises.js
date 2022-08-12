
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  function triangles(number) {
    var str = "#";
    for (var i = 1; i <= number; i++) {
      console.log(str.repeat(i));
    }
  
  }
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    for (var i = 1; i <= 15; i++) {
        var x = i % 3;
         if(i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
         else if(i % 3 === 0) {
          console.log("fizz");
            }
         else if(i % 5 === 0) {
          console.log("buzz");
        } else {
         console.log(i)
       }
    }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  var myVariable = "";
  for (var i = 0; i < (number); i++) {
    if (i % 2 !== 0) {
      for (var k = 0; k < number; k++) {
        myVariable += "#";
        k++;
        if (k < number) {
          myVariable += " ";
        }
      }
      myVariable += "\n";
    } else {
      for (var j = 0; j < number; j++) {
        myVariable += " ";
        j++;
        if (j < number) {
          myVariable += "#";
        } 
  }
  myVariable += "\n";
}
}
console.log(myVariable);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
