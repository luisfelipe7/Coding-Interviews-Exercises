function minimumBribes(q) {
    // Write your code here

    // Defining the required variables
    var totalOfBribes = 0;
    var failuresFound = 0;
    var index = 0;
    var tempBribe = 0;
    var tempValue = 0;
    var tempArray=[];


    // Number of Bribes = Equal to quantity of numbers that are lower than the number that we are checking
    while ((index < q.length) && (failuresFound == 0)) {
        if (q[index] == (index + 1)) {
            index++;
        } else {
            if ((index + 1) != q.length) {
                tempValue = q[index];
                tempArray = q.slice(index + 1, q.length);
                // Calling the method to count the quantity of values that are smaller than the number
                tempBribe = tempArray.reduce(getParentQuantityOfSmallerValues(tempValue), 0);
                if (tempBribe > 2) {
                    failuresFound++;
                } else {
                    totalOfBribes += tempBribe;
                }
            }
            index++;
        }
    }

    // Printing message
    if (failuresFound == 0) {
        console.log(totalOfBribes);
    } else {
        console.log('Too chaotic');
    }
}

function minimumBribes3(q) {
    let num = 0
    let chaotic = false
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - i > 3) chaotic = true
        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) num++
        }
    }
    if (chaotic) console.log("Too chaotic")
    else console.log(num)
}



// Parent function (getParentQuantityOfSmallerValues)
// To call the function : array.reduce(getParentQuantityOfSmallerValues(7),0);
// The function calculate how many values are smaller than the value send via parameter
function getParentQuantityOfSmallerValues(valueToCheck) {
    // Child function (geQuantityOfSmallerValues)
    function geQuantityOfSmallerValues(total, currentValue) {
        if (currentValue < valueToCheck) {
            total += 1;
        }
        return total;
    }

    return geQuantityOfSmallerValues;
}


function main() {
    var q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // OK
    q = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 12, 11, 15, 13, 14]; // 15-2 12-1 8-2 OK
    q = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 15, 12, 13, 14]; // 15-2 12-1 15-3 X
    q = [1, 2, 5, 3, 7, 8, 6, 4]; // 5-2 7-2 8-2 6-1 OK

    minimumBribes(q);
}

main();