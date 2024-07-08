//! Pair Management
// Given two arguments, return an array which contains these two arguments.

//* Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215] 

//* Solving question with rest parameter and spread operator
// function makePair(...inputValues) {
//     const pairArray = [...inputValues];
//     return pairArray;
// };


//* Second Method here we use Array.from( ) Method of Array
function makePair(...inputValues) {
    const pairArray = Array.from(inputValues);
    return pairArray;
}
console.log(makePair(1,2));
console.log(makePair(51, 21));
console.log(makePair(512124,215));