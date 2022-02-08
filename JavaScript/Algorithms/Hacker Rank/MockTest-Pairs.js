/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */
function pairs(k, arr) {
    // Write your code here

    // K is the value to compare
    // Arr is the array with the values

    // Required variables
    var actual = 0;
    var tempValue = 0;
    var valueToSearch = 0;
    var quantityOfPairs = 0;

    // First of all sorting the array ascendent
    arr.sort(asc);

    // Then finding the values with this formula: element - value = k;
    // So, value is value= element-k
    while (actual < arr.length) {
        tempValue = arr[actual];
        valueToSearch = tempValue - k;

        if (valueToSearch > 0) {
            if (recursiveBinarySearch(arr, valueToSearch, 0, arr.length - 1)) {
                quantityOfPairs += 1;
            }
        }
        actual++;
    }

    return quantityOfPairs;
}

function recursiveBinarySearch(arr, x, start, end) {
    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveBinarySearch(arr, x, start, mid - 1);
    else
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveBinarySearch(arr, x, mid + 1, end);
}

function iterativeBinarySearch(arr, x) {

    let start = 0, end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True
        if (arr[mid] === x) return true;

        // Else look in left or right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
}



function asc(a, b) {
    return a - b;
}


function main() {
    let arr = [1, 5, 3, 4, 2];
    let k = 2;

    const result = pairs(k, arr);

    console.log(result);

}

main();
