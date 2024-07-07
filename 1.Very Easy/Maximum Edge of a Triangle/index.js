//! Maximum Edge of a Triangle

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

//*Examples
// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10

//* Notes
// 1. (side1 + side2) - 1 = maximum range of third edge.
// 2. The side lengths of the triangle are positive integers.
// 3. Don't forget to return the result. 


//! Here we have to understand that the sum of two sides are greater than the third side of our triangle than it will create triangle 

const nextEdge = (firstEdge , secondEdge) => {
    const thirdEdge = firstEdge + secondEdge - 1;
    return thirdEdge;
} 

console.log(nextEdge(8 , 10));

//* Complete