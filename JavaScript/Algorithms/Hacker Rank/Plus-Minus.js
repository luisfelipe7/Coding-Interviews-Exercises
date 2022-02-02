/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    // Creating three counters to save the positive,negative and zero elements
    var positiveElements = 0;
    var negativeElements = 0;
    var zeroElements = 0;

    // Verifying and increasing the counters
    arr.forEach(function (number, index) {
        if (number == 0) { // Case #1 Number equal to zero
            zeroElements += 1;
        } else if (number > 0) { // Case #2 Number positive
            positiveElements += 1;
        } else if (number < 0) { // Case #3 Number negative
            negativeElements += 1;
        }
    });

    // Setting the proportions
    positiveElements = (positiveElements / arr.length).toFixed(6);
    negativeElements = (negativeElements / arr.length).toFixed(6);
    zeroElements = (zeroElements / arr.length).toFixed(6);

    // Printing the lines with the proportions
    console.log(positiveElements);
    console.log(negativeElements);
    console.log(zeroElements);
}

function main() {
    const arr = [-4, 3, -9, 0, 4, 1];

    plusMinus(arr);
}


main();