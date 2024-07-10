//! Fix the Expression
// Fix the code in the Code tab so the function returns true if and only if x is equal to 7. 

//* Examples
// isSeven(4) ➞ false
// isSeven(9) ➞ false
// isSeven(7) ➞ true 

//? Given Code 
// function isSeven(x) {
// 	return x="7"?false:true:false; //* In this Syntax was wrong and logic too!!!! 
// } 


function isSeven(x) {
	console.log( x === 7 ?true:false);
};

isSeven(4);
isSeven(9);
isSeven(7);

//! Now Code was Fix......