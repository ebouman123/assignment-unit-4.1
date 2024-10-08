console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name +'!';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Name!"', helloName('Gordon'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log('Test - should return the sum of the two numbers', addNumbers(1, 3))

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log('Test - should multiply all 3 numbers', multiplyThree(3, 5, 10))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test - should return true', isPositive(10))
console.log('Test - should return false', isPositive(0))
console.log('Test - should return false', isPositive(-10))

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length - 1 >= 0){
    return array[array.length - 1];
  }
  else {
    return undefined;
  }
}

console.log('Test - should return last item in array', getLast([1, 2, 3, 4]))
console.log('Test - should return undefined', getLast([]))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
      return true;
    }
  }
  if (array[array.length] != value){
    return false;
  }
}

console.log('Test - should return true', find(3, [1, 2, 3, 4]))
console.log('Test - should return false', find(20, [1, 2, 3, 4]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string[0] === letter){
    return true;
  }
  else{
    return false;
  }
}

console.log('Test - should return true', isFirstLetter('C', 'CAT'))
console.log('Test - should return false', isFirstLetter('X', 'CAT'))

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i of array){
    sum = sum + i;
  }
  return sum;
}
console.log('Test - should return sum of all numbers in array', sumAll([1, 2, 3, 4]))

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let positiveArray = [];
  for (let i of array){
    if (i > 0){
      positiveArray.push(i);
    }
  }
  return positiveArray;
}

console.log('Test - should return positive numbers in a new array', allPositive([1, 2, 3, -1, -2, -3]))
console.log('Test - should return an empty array', allPositive([-1, -2, -3]))


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!



//Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


function keyboardMistakes(str){
  let correctedString = ""
  for (let i of str){
    if (i == 4){
      correctedString = correctedString + `A`;
    }
    else if (i == 5){
      correctedString = correctedString + `S`;
    }
    else if (i == 0){
      correctedString = correctedString + `O`;
    }
    else if (i == 1){
      correctedString = correctedString + `I`;
    }
    else{
      correctedString = correctedString + i;
    }
  }
  return correctedString;
}

console.log(keyboardMistakes("MUB45H1R"))


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
