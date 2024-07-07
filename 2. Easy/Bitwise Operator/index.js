//! Bitwise Operator 
// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111

// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
// bitwiseAND(6, 23) ➞ 00000110

// bitwiseOR(6, 23) ➞ 00010111

// bitwiseXOR(6, 23) ➞ 00010001

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

//* Examples
// bitwiseAND(7, 12) ➞ 4

// bitwiseOR(7, 12) ➞ 15

// bitwiseXOR(7, 12) ➞ 11

// Notes
//! JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number. 


const bitWiseAND = (firstDecimalValue, secondDecimalValue) => { 
    const bitwiseAndOperation = firstDecimalValue & secondDecimalValue;
    return bitwiseAndOperation;


}

const bitWiseOR = (firstDecimalValue , secondDecimalValue) => {
    const bitwiseOrOperation = firstDecimalValue | secondDecimalValue;
    return bitwiseOrOperation;
}

const bitWiseXOR = (firstDecimalValue , secondDecimalValue) => {
    const bitwiseXorOperation = firstDecimalValue ^ secondDecimalValue;
    return bitwiseXorOperation;
}


console.log(bitWiseAND(7,12)); //* Output was 4 
console.log(bitWiseOR(7,12)); //* Output was 15 
console.log(bitWiseXOR(7,12)) //* Output was 11 
