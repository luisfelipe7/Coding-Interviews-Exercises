
function lonelyinteger(a) {
    // Write your code here

    // Sorting my array to search easier the unique number
    var sortedArray = a.sort(function (a, b) {
        return a - b;
    })

    // Defining variables
    let valueFound = false; // Control if the unique value was found
    let index = 0; // Control index of array
    let value = 0; // Control value 
    let lastIndexFound = 0; // Control position of the las value found

    // Looping until the value is found
    while (!valueFound) {
        value = a[index];
        lastIndexFound = a.lastIndexOf(value);
        if (index == lastIndexFound) {
            valueFound = true;
        } else {
            index = lastIndexFound + 1;
        }
    }

    // Returning the value
    return value;
}

function main() {
    const a = [1,2,3,4,3,2,1];

    const result = lonelyinteger(a);

    console.log(result);
}

main();