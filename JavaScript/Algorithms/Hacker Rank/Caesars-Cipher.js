/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s, k) {
    // Write your code here

    // s = Unencrypted string
    // k = Number of times to rotate the alphabet

    // Define required variables
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Important to keep the original alphabet
    let encryptedArray = [];
    // Creating arrays with the strings
    let alphabetArray = Array.from(alphabet);
    let alphabetRotated = new Array(alphabetArray.length); // Empty Array

    // Rotate the first letter of the alphabet (a) k times
    let newAPosition = calculateNewPositon(0, k, 0);

    // Then fill the array from left to right with the other elements to create the rotated array
    alphabetRotated = fillArrayStartingFromPosition(alphabetArray, newAPosition);

    // Create encrypted string
    encryptedArray = createEncryptedArray(alphabetArray, alphabetRotated, s);

    // Return encrypted string
    return encryptedArray.join('');
}

// Create Encrypted 
function createEncryptedArray(alphabetArray, alphabetRotated, s) {
    let sLowerLetters = s.toLowerCase();
    let newArray = new Array(s.length);
    let tempPosition = 0;

    for (let index = 0; index < s.length; index++) {
        tempPosition = alphabetArray.indexOf(sLowerLetters[index]);
        if (tempPosition != -1) {
            // Checking if we need to enter an upper case letter
            if ((alphabetArray[tempPosition].toUpperCase()) == s[index]) {
                // Upper Case Found
                newArray[index] = alphabetRotated[tempPosition].toUpperCase();
            } else {
                // Lower Case 
                newArray[index] = alphabetRotated[tempPosition];
            }
        } else {
            newArray[index] = s[index];
        }
    }

    return newArray;
}

// Fill Array with the elements starting from the new position
function fillArrayStartingFromPosition(array, newAPosition) {
    let alphabetRotated = new Array(array.length);
    let position = newAPosition;

    for (let counter = 0; counter <= 25; counter++) {
        alphabetRotated[position] = array[counter];
        if ((position + 1) == 26) {
            position = 0;
        } else {
            position++;
        }
    }

    return alphabetRotated;

}

// Recursive algorithm in charge of calling the method until index=k (counter=numberOfTimeToRotate)
function calculateNewPositon(position, k, index) {
    if (index == k) { // Stop when counter is equal to k
        return position;
    } else {
        if ((position - 1) == -1) {
            position = 25; // Max position on the array of the alphabet
            index += 1;
        } else {
            position -= 1;
            index += 1;
        }
        return calculateNewPositon(position, k, index);
    }
}

function main() {
    s = "middle-Outz"; // Unencrypted string
    k = 2; // Number of times to rotate the alphabet

    const result = caesarCipher(s, k);

    console.log(result);

}