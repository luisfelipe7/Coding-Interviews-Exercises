/*
 * Author: Felipe Castro
 * File: Basic01.js
 * Information: File with multiple basic types,operators,arrays and functions of Javascript
 * How to run this file: Just use -> node Basic01.js or include the js file on a html/jsp file to use it
*/




// NOTE: JS = JavaScript

console.log('===== Printing Messages ===== \n');
console.log('Hello World!');
console.log('\n');





console.log('===== Declaring Variables ===== \n');
// In JavaScript the type is not required to define variables
var myString = "This is my string";
var myNumber = 7;
var myFloat = 7.5;
var myBoolean = true;
var myChar = 'a';
var myEmptyValue;
// Printing the values
console.log('String: ' + myString + ' Number: ' + myNumber + ' Float: ' + myFloat + ' Boolean: ' + myBoolean);
console.log('The value of a not defined variable is ' + myEmptyValue);
// I can set new values to my variables without having to declare a new variable
myString = 9;
console.log('The new value of my variable called myString is ' + myFloat);
// How to identify the type of a variable in JS if we are not using types
// We can use typeof to do that
// Here I am defining a simple function to do that
function identifyTypeOfVariables(myVar) {
    return typeof myVar;
}
// Using the previously defined function
console.log('The type of the variable called myFloat is ' + identifyTypeOfVariables(myFloat));
console.log('The type of the variable called myString is ' + identifyTypeOfVariables(myString));
console.log('The type of the variable called myNumber is ' + identifyTypeOfVariables(myNumber));
console.log('The type of the variable called myChar is ' + identifyTypeOfVariables(myChar));
console.log('The type of a undefined variable is ' + identifyTypeOfVariables(myEmptyValue));
// Also, we can use let to define variables but they have different scopes/initialization
// Same format
let number1 = 4;
var number2 = 4;
console.log('The value of number1 is ' + number1);
console.log('The value of number2 is ' + number2);
/*
    TYPEOF EXAMPLES
typeof "John"                 // Returns string
typeof 3.14                   // Returns number
typeof NaN                    // Returns number
typeof false                  // Returns boolean
typeof [1, 2, 3, 4]           // Returns object
typeof {name:'John', age:34}  // Returns object
typeof new Date()             // Returns object
typeof function () {}         // Returns function
typeof myCar                  // Returns undefined (if myCar is not declared)
typeof null                   // Returns object
*/
console.log('\n');





console.log('===== Operators ===== \n');
// In JS we have multiple operators and we can use them we the different variables types
var myNumberO1 = 10;
var myNumberO2 = 2;
var myNumberO3 = 3;
var myNumberO4;
var myStringO1 = 'I am an string';
var myString02 = 'I am an string2';
console.log('Using the operators available in JS');
console.log('Using + with two numbers: ' + myNumberO1 + myNumberO2); // This will concat the two numbers
console.log('Using + with two numbers and one parenthesis: ' + (myNumberO1 + myNumberO2)); // This will sum the two numbers
console.log('Using / with two numbers: ' + myNumberO1 / myNumberO2);
console.log('Using % with two numbers: ' + myNumberO1 % myNumberO2);
console.log('Using + with a number an an string: ' + myNumberO1 + myStringO1);
console.log('Using + with a two strings: ' + myString02 + myStringO1);
console.log('Values of myNumberO3: ' + myNumberO3 + ' and myNumberO4: ' + myNumberO4);
console.log('Doing myNumberO4=++myNumberO3');
myNumberO4 = ++myNumberO3;
console.log('Values of myNumberO3: ' + myNumberO3 + ' and myNumberO4: ' + myNumberO4);
console.log('Doing myNumberO4=myNumberO3++');
myNumberO4 = myNumberO3++;
console.log('Values of myNumberO3: ' + myNumberO3 + ' and myNumberO4: ' + myNumberO4);
console.log('\n');





console.log('===== Strings Methods in JavaScript ===== \n');
// String Methods in JavaScript
// 1. Defining the String
var myStringS1 = 'Hello World, I am back!';
console.log('My original string: ' + myStringS1);

// 2. Using the methods 
// slice method
console.log('Applying the slice method: ' + myStringS1.slice(6, 11));
// upper method
console.log('Applying the upper method: ' + myStringS1.toUpperCase());
// trim method
console.log('Applying the trim method: ' + myStringS1.trim());
// replace method
console.log('Applying the replace method: ' + myStringS1.replace('Hello', 'Goodbye'));
// indexOf method
console.log('Applying the indexof method: ' + myStringS1.indexOf('World'));
// search method
console.log('Applying the search method: ' + myStringS1.search('am'));
// startsWith method
console.log('Applying the startsWith method: ' + myStringS1.startsWith('Hello'));


console.log('\n');






console.log('===== Booleans ===== \n');
// == converts the variable values to the same type before performing comparison. This is called type coercion.
// === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
// '!=: Converts values if variables are different types before checking for inequality'
// '!==: Checks both type and value for the two variables being compared'
var myBooleanC1 = false;
var myBooleanC2 = true;
var myBooleanC3 = true;
var myNumberC1 = 1;
var myNumberC2 = 1;
var myStringC1 = '1';
var myStringC2 = 'true';
console.log('Checking if false==true : ' + (myBooleanC1 == myBooleanC2));
console.log('Checking if false===true : ' + (myBooleanC1 === myBooleanC2));
console.log('Checking if true==true : ' + (myBooleanC2 == myBooleanC3));
console.log('Checking if true===true : ' + (myBooleanC2 === myBooleanC3));
console.log('Checking if true=="true" : ' + (myBooleanC2 == myStringC2));
console.log('Checking if true==="true" : ' + (myBooleanC2 === myStringC2));
console.log('Checking if 1=="1" : ' + (myNumberC1 == myStringC1));
console.log('Checking if 1!="1" : ' + (myNumberC1 != myStringC1));
console.log('Checking if 1==1 : ' + (myNumberC1 == myNumberC2));
console.log('Checking if 1===1 : ' + (myNumberC1 === myNumberC2));
console.log('Checking if 1!==1 : ' + (myNumberC1 !== myNumberC2));
console.log('\n');



console.log('===== Conditionals ===== \n');
// We have if, if else and if then else 
if (4 < 5) {
    console.log('4 is smaller than 5');
}
if (4 > 5) {
    console.log('4 is greater than 5');
} else if (4 < 5) {
    console.log('4 is smaller than 5');
}
var myNumberB1 = 10;
var myNumberB2 = 10;
if (myNumberB1 > myNumberB2) {
    console.log('myNumberB1 is equal to myNumberB2');
} else if (myNumberB1 < myNumberB2) {
    console.log('myNumberB1 is equalt to myNumberB2');
} else {
    if (myNumberB1 == myNumberB2) {
        console.log('myNumberB1 and myNumberB2 are equal');
    }
}
// Also we can use the ternary operator to compare the numbers
('Hello1' == 'Hello2') ? console.log('Hello1 is equal to Hello2') : console.log('Hello1 is not equal to Hello2');
console.log('\n');




console.log('===== Switch Statements ===== \n');
console.log('We can use switch statements with letters: ');
var myOptionS1 = 'C';
switch (myOptionS1) {
    case 'A':
        console.log('Thanks for entering the option A');
        break;
    case 'B':
        console.log('Thanks for entering the option B');
        break;
    case 'C':
        console.log('Thanks for entering the option C');
        break;
    default:
        console.log('The option entered is not valid');
        break;
}
console.log('We can use switch statements with numbers: ');
var myOptionS2 = 2;
switch (myOptionS2) {
    case 1:
        console.log('Thanks for entering the option 1');
        break;
    case 2:
        console.log('Thanks for entering the option 2');
        break;
    default:
        console.log('The option entered is not valid');
        break;
}
console.log('\n');




console.log('===== Loops ===== \n');
console.log('While');
var myNumberL1 = 0;
while (myNumberL1 < 4) { // First checks the condition
    // Then performs the operation
    console.log('Printing the value of myNumberL1: ' + myNumberL1);
    myNumberL1 += 1; // Increasing the value of the variable to avoid the loop never ending
}
console.log('Do While');
var myNumberL2 = 0;
do {
    // First performs the operation
    console.log('Printing the value of myNumberL2: ' + myNumberL2);
    myNumberL2 += 1; // Increasing the value of the variable to avoid the loop never ending
} while (myNumberL2 < 2); // Then checks the condition
console.log('For');
// Perform the operation n times
for (var i = 0; i < 4; i++) {
    console.log('Printing the value of i ' + i);
}
console.log('\n');




console.log('===== Arrays ===== \n');
console.log('Simple Array of Numbers: ');
console.log('Option #1 to define the Array: ');
var myArrayA1 = [
    1, 2, 3, 4, 5
]
console.log('Option #2 to define the Array of 4 elements: ');
var myArrayA2 = [];
myArrayA2[0] = 1;
myArrayA2[1] = 2;
myArrayA2[2] = 3;
myArrayA2[3] = 4;
console.log('Printing both arrays');
console.log("Option #1 Using For Array: ");
for (var y = 0; y < myArrayA1.length; y++) { // Using the length of the array to loop through the elements of the array
    console.log('myArrayA1[' + y + '] = ' + myArrayA1[y]);
}
console.log("Option #2 Using For Each: ");
myArrayA2.forEach(function (number, index) {
    console.log('myArrayA2[' + index + '] = ' + number);
});
// Main methods in the arrays
var myArrayA3 = [3];
// Printing array using let
console.log('Initial Array: ');
for (let number of myArrayA3) {
    console.log('Way #1 - myArrayA3 = ' + number);
}
for (let index in myArrayA3) {
    console.log('Way #2 - myArrayA3 = ' + myArrayA3[index]);
}

console.log('Initial Length: ' + myArrayA3.length);
// push(element) -> Add element at the end of the array
myArrayA3.push(4);
myArrayA3.push(5);
// pop() -> Remove element at the end of the array
myArrayA3.pop(); // This will remove the 5
// unshift(element) -> Add element at the beginning of the array
myArrayA3.unshift(3);
myArrayA3.unshift(2)
// shift() -> Remove element at the beginning of the array
myArrayA3.shift(); // This will remove the 2
// indexOf(element) -> Position of the element on the array
console.log("Position of element 4 on the array: " + myArrayA3.indexOf(4));
console.log("Position of element 5 not present on the array: " + myArrayA3.indexOf(5));
console.log('Array after applying the methods: ');
for (let number of myArrayA3) {
    console.log('myArrayA3 = ' + number);
}
// splice(position,quantityOfElementsToRemove) -> Starting the position indicated it will delete the quantity of elements indicated
myArrayA3.splice(1, 2);
console.log('Array after applying the splice(1,2): ');
for (let number of myArrayA3) {
    console.log('myArrayA3 = ' + number);
}
console.log('Final Length: ' + myArrayA3.length);
// sort() -> Sort Array
var myArrayA4 = [67, 89, 23, 98, 68, 1, 0, 34];
console.log("Array Unsorted: " + myArrayA4.toString());
myArrayA4.sort(function (a, b) {
    return b - a;  // Descending order
});
console.log("Array Sorted Descending: " + myArrayA4.toString());
// Prototype functions
Array.prototype.sumFive = function () {
    for (var i = 0; i < this.length; i++) {
        this[i] += 5;
    }
};
// Applying the function to the array sorted
myArrayA4.sumFive();
console.log("Array Sorted After Applying Sum Five: " + myArrayA4.toString());
console.log('\n');



console.log('===== Functions in JavaScript ===== \n');
// Defining a function using the keyword function
function sumTwoNumbers(number1, number2) {
    return number1 + number2;
}
function minusTwo(number3) {
    number3 = number3 + 2;
    console.log('Value of number inside the method ' + number3);
}
// Calling the functions
console.log('The sum of 4 and 2 is: ' + sumTwoNumbers(4, 2));
var numberToModify = 4;
console.log('Original Number ' + numberToModify);
minusTwo(numberToModify);
console.log('Value of number outside and after calling the method: ' + numberToModify); // It will show the original value
function numberToModifyWithoutParameter() {
    numberToModify = 10;
}
console.log('Value of number outside and after calling the method without parameter: ' + numberToModify); // It will show the original value
// Self-Invoking functions, in the next function the variable counter will keep private for just the method itself
const increaseCounter = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();
increaseCounter();
increaseCounter();
var counter=increaseCounter();
console.log('The value of the counter is '+counter);
console.log('\n');






console.log('===== Useful Methods/Definitions in JavaScript ===== \n');
console.log('Transform string to array');
var myStringU1 = "ABCDEFGH";
var myArrayU1 = Array.from(myStringU1);
console.log('New Array from string: ' + myArrayU1.toString());
console.log('Transform array to string');
var myStringU2 = myArrayU1.join('-');
console.log('Array translated into string again but separating each value with - : ' + myStringU2);
console.log('Defining a constant');
/*
The const keyword was introduced in ES6 (2015).
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
*/
const PI = 3.14159226;
console.log('\n');



console.log('===== Capturing Data ===== \n');
// We can capture data in JS like in any other language
// Since we are using NodeJS we will need to install prompt with: npm install prompt -- save, then follow these steps:
// 1.Import:
var prompt = require('prompt');
// 2. Start the prompt
prompt.start();
// 3. Capture the data
prompt.get(['status', 'age'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  Status: ' + result.status);
    console.log('  Age: ' + result.age);
});
console.log('\n');