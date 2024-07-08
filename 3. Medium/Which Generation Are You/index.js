//! Which Generation Are You ? 
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".


//* Examples
// generation(2, "f") ➞ "granddaughter"

// generation(-3, "m") ➞ "great grandfather"

// generation(1, "f") ➞ "daughter"  

const generation = (inputNumber , inputGender) => {
    //? Family Tree for Male 
    const familyTreeForMale = new Map(); 
    familyTreeForMale.set(0,"Me");
    familyTreeForMale.set(1,"Son");
    familyTreeForMale.set(2, "Grand-Son");
    familyTreeForMale.set(3, "Great Grand-Son");
    familyTreeForMale.set(-1,"Father");
    familyTreeForMale.set(-2, "Grand Father");
    familyTreeForMale.set(-3,"Great Grand Father");
    //? Family Tree for Female
    const familyTreeForFemale = new Map();
    familyTreeForFemale.set(0, "Me");
    familyTreeForFemale.set(1,"Daughter");
    familyTreeForFemale.set(2,"Grand- daughter");
    familyTreeForFemale.set(3,"Great Grand-daughter");
    familyTreeForFemale.set(-1,"Father");
    familyTreeForFemale.set(-2,"Grand Father");
    familyTreeForFemale.set(-3,"Great Grand Father"); 

    if(inputGender === "m" || inputGender === "M") {
        return familyTreeForMale.get(inputNumber);
       
    }else {
        return familyTreeForFemale.get(inputNumber);
    }

}; 

console.log(generation(2,"f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));