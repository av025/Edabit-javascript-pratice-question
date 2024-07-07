//! Matchstick Houses

// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

//* Examples
// matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436

//* Notes
// - Step 0 returns 0 matchsticks.
// - The input (step) will always be a non-negative integer.
// - Think of the input (step) as the total number of houses that have been connected together. 

function matchHouses(inputMatchSticks) {
    if(inputMatchSticks === 0) {
        return 0;
    }else if(inputMatchSticks === 1) {
        return inputMatchSticks * 6;
    } else if(inputMatchSticks > 1) {
        return (inputMatchSticks * 6) - (inputMatchSticks - 1);
    }
};

console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));