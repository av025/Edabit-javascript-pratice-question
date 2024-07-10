//! Football Points 
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

//  - wins get 3 points
//  - draws get 1 point
//  - losses get 0 points

//* Examples
// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0


//* Notes
// Inputs will be numbers greater than or equal to 0. 

const footballPoints = function (totalWins , totalDraws , totalLoss) {
    if(totalWins >= 0 && totalDraws >= 0 && totalDraws >=0) {
        const totalPoints = totalWins * 3 + totalDraws * 1 + totalLoss * 0;
        return totalPoints;
    }else {
        return `Inputs will be numbers greator than or equal to 0`
    }
};

console.log(footballPoints(3,4,2));
console.log(footballPoints(5,0,2));
console.log(footballPoints(0,0,1));