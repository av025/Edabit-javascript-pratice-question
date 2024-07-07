//!  Derivation of a Function :- 
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

//* Examples
// derivative(1, 4) ➞ 1
// derivative(3, -2) ➞ 12
// derivative(4, -3) ➞ -108


//* Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.

function derivative(b,m) { 
    //! The formula of derivative of function was fx = x^b = b(x^b-1)
      let powerOfB = b - 1;
     let result = b * m**powerOfB;
      return result;

} 

console.log(derivative(1,4));
console.log(derivative(3,-2));
console.log(derivative(4,-3));