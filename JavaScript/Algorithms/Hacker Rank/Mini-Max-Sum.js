/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here

    // Sort the Array Descendent (Highest to Lowest)
    let arraySortedDesc = arr.sort(function (a, b) {
        return b - a;
    });

    // Minimum Sum is Element on 1 Position to the Length -1
    // Maximum Sum is Element on 0 Position to the Length -2
    let minimumSum = 0;
    let maximumSum = 0;
    for (index in arraySortedDesc) {
        if ((arraySortedDesc.length - 1) == index) {
            minimumSum += arraySortedDesc[index];
        } else if (index == 0) {
            maximumSum += arraySortedDesc[index];
        } else {
            maximumSum += arraySortedDesc[index];
            minimumSum += arraySortedDesc[index];
        }
    }

    // Print the values
    console.log(minimumSum + ' ' + maximumSum);


}

function main() {

    const arr = [1, 2, 3, 4, 5];

    miniMaxSum(arr);
}

main();