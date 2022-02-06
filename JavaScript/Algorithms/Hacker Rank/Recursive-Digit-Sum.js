/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {

    // Write your code here
    
    /* NORMAL VERSION */
    let superDigit = 0;
    let counterFound = 0;

    while (counterFound<2) {
        superDigit = (Array.from(n)).reduce(sumOfElements, 0);
        n = String(superDigit);
        if (superDigit < 10) {
            if(counterFound==0){
                counterFound+=1;
                superDigit *= k; // Need to multiplicate the superdigit by K
                n = String(superDigit);
            }else{
                counterFound+=1;
            }
            
        }
    }

    /* RECURSIVE VERSION */
    // SuperDigit of Initial value
    //  let superDigit = calculateSuperDigit(String(n),0,0);

    // SuperDigit * k
    // superDigit = calculateSuperDigit(String(superDigit*k),0,0);

    return superDigit;
}

function sumOfElements(total, element) {
    return total + Number(element);
}


function calculateSuperDigit(value, index, total) {
    if (value.length == 1) {
        return Number(value);
    } else {
        if (index == value.length) {
            return calculateSuperDigit(String(total), 0, 0);
        } else {
            total += Number((value.charAt(index)));
            index++;
            return calculateSuperDigit(value, index, total);
        }
    }
}


function main() {
    n='9875';
    k = 4;
    
    const result = superDigit(n, k);

    console.log(result);
}


main();