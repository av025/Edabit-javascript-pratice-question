//! Find the Smallest and Biggest Numbers

const minMax = (givenArray) => {
  //* If only one element in our Array
  if (givenArray.length === 1) {
    return [givenArray[0], givenArray[0]];
  }

  // Minimum element
  const minimumElement = Math.min(...givenArray);
  // Maximum element
  const maximumElement = Math.max(...givenArray);
  //Create new element
  const minMaxElementArray = [];
  // Push minimum element in an minMaxElementArray
  minMaxElementArray.push(minimumElement);
  // Push maximum element in an minMaxElementArray
  minMaxElementArray.push(maximumElement);
  return minMaxElementArray;
};

console.log(minMax([2, 69, 78]));
console.log(minMax([1]))
console.log(minMax([22]))
