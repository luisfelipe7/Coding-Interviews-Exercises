

function palindromeIndex(s) {

    // Write your code here
    var arrayS = Array.from(s);
    var arraySReversed = (Array.from(s)).reverse();
    var indexFound = -1;
    var quantityOfFailures = 0;
    var index = 0;

    while ((index < arrayS.length) && (quantityOfFailures <= 0)) {
        if (arrayS[index] != arraySReversed[index]) {
            var tempValue = (((arrayS.length) - 1) - index);
            var copyArray;
            var copyRArray;
            
            // Checking the options 

            // TempValue == Index
            if (tempValue == index) {
                copyArray = arrayS.slice(0);
                copyRArray = arraySReversed.slice(0);
                copyArray.splice(index, 1);
                copyRArray.splice(index, 1);

                if ((copyArray.join('')) == (copyRArray.join(''))) {
                    indexFound = index;
                }

            } else {
                copyArray = arrayS.slice(0);
                copyRArray = arraySReversed.slice(0);
                copyArray.splice(index, 1);
                copyRArray.splice(tempValue, 1);

                if ((copyArray.join('')) == (copyRArray.join(''))) {
                    indexFound = index;
                } else {
                    copyArray = arrayS.slice(0);
                    copyRArray = arraySReversed.slice(0);
                    copyArray.splice(tempValue, 1);
                    copyRArray.splice(index, 1);
                    
                    if ((copyArray.join('')) == (copyRArray.join(''))) {
                        indexFound = tempValue;
                    }
                }
            }
            quantityOfFailures++;
        } else {
            index++;
        }
    }

    return indexFound;
}



function main() {
    s = 'hanfnah';

    const result = palindromeIndex(s);

    console.log(result);
}

main();
