//! Find Number of Digits in Number

// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

//* Examples
// num_of_digits(1000) ➞ 4

// num_of_digits(12) ➞ 2

// num_of_digits(1305981031) ➞ 10

// num_of_digits(0) ➞ 1


//* Notes
// Try to solve this challenge without using strings!


function numOfDigits(givenDigits) {
    let convertNumberIntoStrings = String(givenDigits);
   
    const digitsInOurNumber = convertNumberIntoStrings.split("");
   return digitsInOurNumber.length;
} 

console.log(numOfDigits(1000));
console.log(numOfDigits(600000));
console.log(numOfDigits(12));
console.log(numOfDigits(1305981031));
console.log(numOfDigits(0));