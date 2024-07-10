//! Are the Numbers Equal ?
// Create a function that returns `true` when num1 is equal to num2; otherwise return false. 
//* Examples
// isSameNum(4, 8) ➞ false

// isSameNum(2, 2) ➞  true

// isSameNum(2, "2") ➞ false

//* Notes
// Don't forget to return the result. 


function isSameNum(inputFirstNumber , inputSecondNumber) {
    // Checking Data type
    if(typeof inputFirstNumber === "number" && typeof inputSecondNumber === "number") {

        //Checking both number are equal or not !!!! 
        if(inputFirstNumber === inputSecondNumber) { 
            return true;

        }else {
            return false; //! We have to handle also when both number are not equal other wise it give undefined output 
        }
    } else {
        return false;
    }
};

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2,"2"));