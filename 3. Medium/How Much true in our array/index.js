//! How Much is True ?

// Create a function which returns the number of true values there are in an array.

//* Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

//* Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrue = (givenBooleanArray) => {
 if(givenBooleanArray.length === 0) {
    return 0;
 }
  let countOfTrue = 0;

  for(let indexNumber = 0; indexNumber < givenBooleanArray.length; indexNumber++) {
    countOfTrue = countOfTrue + Boolean(givenBooleanArray[indexNumber]);
  }

  return countOfTrue;

};

console.log(countTrue([true , false , false , true]));

