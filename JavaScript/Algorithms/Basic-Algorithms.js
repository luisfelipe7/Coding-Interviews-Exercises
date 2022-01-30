console.log('\n ++++++++++++++++++ Basic Algorithms ++++++++++++++++++ \n');
// --- My Variables
var myVariable = 0;
var myVariable2 = 0;


// --- My Functions

console.log('\n =========== Is Even? ===========');
// - Function 
function isEven(numberToCheck) {
    // Checking is the number %2 is 0, if it is the number is even
    return ((numberToCheck % 2) == 0);
}
function isEvenTest(numberToCheck) {
    console.log('-- numberToCheck = ' + numberToCheck);
    isEven(numberToCheck) ? console.log('numberToCheck is even ') : console.log('numberToCheck is not even ');
}
// - Test Cases
console.log('-- Test Cases -- \n');
myVariable = 2;
isEvenTest(myVariable);
myVariable = 48;
isEvenTest(myVariable);
myVariable = 33;
isEvenTest(myVariable);
myVariable = 15;
isEvenTest(myVariable);


console.log('\n =========== Is Prime? ===========');
// - Function 
// counter always starts at 1
function isPrime(numberToCheck, counter) {
    if (numberToCheck <= 1) { // Case #1 Prime numbers are greater than 1
        return false;
    } else {
        if (numberToCheck == counter) { // Case #2 If the Number to Check is Equal to the Counter, the Number is Prime
            return true;
        } else {
            if ((numberToCheck % counter == 0) && (counter != 1)) { // Case #3 If the Number to Check % Different Number is 0, the Number is not Prime
                return false;
            } else {
                return isPrime(numberToCheck, ++counter); // Continue checking and increasing the counter
            }
        }
    }
}
function isPrimeTest(numberToCheck) {
    console.log('-- numberToCheck = ' + numberToCheck);
    isPrime(numberToCheck, 1) ? console.log('numberToCheck is prime ') : console.log('numberToCheck is not prime ');
}
// - Test Cases
console.log('-- Test Cases -- \n');
myVariable = 0;
isPrimeTest(myVariable);
myVariable = 1;
isPrimeTest(myVariable);
myVariable = 2;
isPrimeTest(myVariable);
myVariable = 3;
isPrimeTest(myVariable);
myVariable = 10;
isPrimeTest(myVariable);
myVariable = 11;
isPrimeTest(myVariable);
myVariable = 53;
isPrimeTest(myVariable);
myVariable = 51;
isPrimeTest(myVariable);
myVariable = 97;
isPrimeTest(myVariable);
myVariable = 75;
isPrimeTest(myVariable);


console.log('\n =========== Fibonnaci Succesion ==========='); // Fibonnaci Succesion Explanation/Calculator Online: https://es.numberempire.com/fibonaccinumbers.php
// - Function 
function fibonacciSuccesion(numberToCheck){
    if(numberToCheck <=1){ // Case #1 If the value is 0 or 1 the value is the same number
        return numberToCheck;
    }else{
        return fibonacciSuccesion(numberToCheck-1)+fibonacciSuccesion(numberToCheck-2);
    }
}
function fibonacciSuccesionTest(numberToCheck){
    console.log('-- The fibonnaci succesion of = ' + numberToCheck+' is '+fibonacciSuccesion(numberToCheck));
}
// - Test Cases
console.log('-- Test Cases -- \n');
myVariable = 0;
fibonacciSuccesionTest(myVariable);
myVariable = 1;
fibonacciSuccesionTest(myVariable);
myVariable = 2;
fibonacciSuccesionTest(myVariable);
myVariable = 3;
fibonacciSuccesionTest(myVariable);
myVariable = 5;
fibonacciSuccesionTest(myVariable);
myVariable = 13;
fibonacciSuccesionTest(myVariable);
myVariable = 21;
fibonacciSuccesionTest(myVariable);


console.log('\n =========== Friend Numbers ==========='); // https://es.wikipedia.org/wiki/N%C3%BAmeros_amigos#:~:text=Dos%20n%C3%BAmeros%20amigos%20son%20dos,n%2C%20sin%20incluir%20a%20n.
// Function
// Additional Method to get sum of divisors
function sumOfDivisors(numberToCheck,counter,sumOfValues){
    if(numberToCheck <=1){ // Case #1 NumberToCheck is 0 or 1
        return numberToCheck;
    }else{
        if(numberToCheck == counter ){ // Case #2 NumberToCheck is Equal to the counter so we need to stop there
            return sumOfValues;
        }else{ 
            if(numberToCheck % counter == 0){  // Case #3 Checking if the number is divisible by the counter
                sumOfValues+=counter;
            }
            return sumOfDivisors(numberToCheck,++counter,sumOfValues);
        }
    }
}
function sumOfDivisorsTest(numberToCheck){
    console.log('-- The Sum of Divisor of = ' + numberToCheck+' is '+sumOfDivisors(numberToCheck,1,0));
}
function friendNumbers(numberToCheck1, numberToCheck2) {
    if((sumOfDivisors(numberToCheck1,1,0) == numberToCheck2) && (sumOfDivisors(numberToCheck2,1,0) == numberToCheck1)){
        return true;
    }else{
        return false;
    }
}
function friendNumbersTest(numberToCheck1,numberToCheck2){
    (friendNumbers(numberToCheck1, numberToCheck2)) ? console.log('The numbers '+numberToCheck1+' and '+numberToCheck2+' are friends ') : console.log('The numbers '+numberToCheck1+' and '+numberToCheck2+' are not friends ');
}
// - Test Cases
// First Testing sumOfDivisors
console.log('-- Test Cases for SumOfDivisors -- \n');
myVariable = 0;
sumOfDivisorsTest(myVariable);
myVariable = 4;
sumOfDivisorsTest(myVariable);
myVariable = 13;
sumOfDivisorsTest(myVariable);
myVariable = 7;
sumOfDivisorsTest(myVariable);
myVariable = 284;
sumOfDivisorsTest(myVariable);
myVariable = 220;
sumOfDivisorsTest(myVariable);
// Now testing friendNumbers
console.log('\n -- Test Cases for FriendNumbers -- \n');
myVariable = 220;
myVariable2 = 284;
friendNumbersTest(myVariable,myVariable2);
myVariable = 1184;
myVariable2 = 1210;
friendNumbersTest(myVariable,myVariable2);
myVariable = 17;
myVariable2 = 296;
friendNumbersTest(myVariable,myVariable2);
myVariable = 18;
myVariable2 = 416;
friendNumbersTest(myVariable,myVariable2);
myVariable = 220;
myVariable2 = 284;
friendNumbersTest(myVariable,myVariable2);


// ULAM Conjecture https://isytems.blogspot.com/2017/11/conjetura-de-ulam-codigo-fuente-java.html
console.log('\n =========== ULAM Conjecture ===========');
// Function
function ulamConjecture(valueToStart){
    if(valueToStart <=1){
        return '';
    }else if((valueToStart % 2) == 0){
        return valueToStart/2+' '+ulamConjecture(valueToStart/2);
    }else{
        return (((valueToStart)*3)+1)+' '+ulamConjecture((((valueToStart)*3)+1));
    }
}
function ulamConjectureTest(valueToStart){
    console.log('The ULAM conjecture of '+valueToStart+' is: '+valueToStart+' '+ulamConjecture(valueToStart));
}
// Test Cases
console.log('-- Test Cases -- \n');
myVariable = 0;
ulamConjectureTest(myVariable);
myVariable = 1;
ulamConjectureTest(myVariable);
myVariable = 4;
ulamConjectureTest(myVariable);
myVariable = 26;
ulamConjectureTest(myVariable);
myVariable = 10;
ulamConjectureTest(myVariable);



// Armstrong Number  https://en.wikipedia.org/wiki/Narcissistic_number
console.log('\n =========== Armstrong Number ==========='); 
// Function
function isArmstrongNumber(numberToCheck){
    // Check quantity of digits
    var quantityOfDigits = String(numberToCheck).length;
    // Separate each digit, elevate them to the quantity of digits and finally
    
    /*
    * Using String Version
    *
    var numberString = String(numberToCheck); // Transforming the number to loop through digits
    var total=0; // Creating a variable to save the total
    for(char of numberString){ // Looping to the letters of the word, in this case our number
        total+=Math.pow(Number(char),quantityOfDigits);
    } 
     */

    // Mathematical version
    var copyNumber = numberToCheck;
    var total = 0;

    while(copyNumber !=0){
        total += Math.pow((copyNumber%10),quantityOfDigits);
        copyNumber = Math.trunc(copyNumber/ 10); // In Javascript the decimals are conserved so we required to use trunc to remove the decimals
    }

    // Check if total is equal to the number
    if(total == numberToCheck){
        return true;
    }else{
        return false;
    }
}
function isArmstrongNumberTest(numberToCheck){
    isArmstrongNumber(numberToCheck) ? console.log('The number '+numberToCheck+' is an Armstrong Number') : console.log('The number '+numberToCheck+' is not an Armstrong Number')
}
// Test Cases
console.log('-- Test Cases -- \n');
myVariable = 12;
isArmstrongNumberTest(myVariable);
myVariable = 24;
isArmstrongNumberTest(myVariable);
myVariable = 1634;
isArmstrongNumberTest(myVariable);
myVariable = 153;
isArmstrongNumberTest(myVariable);
myVariable = 27;
isArmstrongNumberTest(myVariable);



// Palindrome https://en.wikipedia.org/wiki/Palindrome
console.log('\n =========== Palindrome ===========');
// Function
function isPalindrome(text){
    // Transform the text to array
    var textArray = Array.from(text);
    // Reverse the array
    textArray = textArray.reverse();
    // Transform the array to text again
    textArray = textArray.join('');
    // Verify if the text inverted is equal to the normal text
    if((textArray.toLowerCase()).replaceAll(' ','') == (text.toLowerCase()).replaceAll(' ','')){
        return true;
    }else{
        return false;
    }
}
// Test
function isPalindromeTest(text){
    isPalindrome(text) ? console.log('The text '+text+' is palindrome') : console.log('The text '+text+' is not palindrome')
}
// Test Cases
console.log('-- Test Cases -- \n');
myVariable = 'Ana';
isPalindromeTest(myVariable);
myVariable = 'cat';
isPalindromeTest(myVariable);
myVariable = 'Taco Cat';
isPalindromeTest(myVariable);
myVariable = 'Never odd or even';
isPalindromeTest(myVariable);
myVariable = 'Never odd and even';
isPalindromeTest(myVariable);