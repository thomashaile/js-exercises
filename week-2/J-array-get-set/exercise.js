/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  var first = arr[0];
  return first; // complete this statement
}

function last(arr) {
  var length = arr.length - 1;
  return arr[length]; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/
