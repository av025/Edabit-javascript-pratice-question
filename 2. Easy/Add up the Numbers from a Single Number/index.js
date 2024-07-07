//! Add up the Numbers from a Single Number

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//* Examples
// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

//* Notes
// Expect any positive number between 1 and 1000.

function addUp(givenNumber) {
    if(givenNumber > 0 && givenNumber <= 1000) {
        let totalValue = 0;
        
        for(let indexNumber = 1; indexNumber <= givenNumber; indexNumber++) {
            totalValue = totalValue + indexNumber;
        }

        return totalValue;
    }else {
        return `Please input number between 1 to 1000`
    }

};

console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))