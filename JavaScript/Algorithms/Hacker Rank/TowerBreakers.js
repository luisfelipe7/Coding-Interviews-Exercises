
/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */
function towerBreakers(n, m) {
    // N Quantity of Towers
    // M Size of each Tower

    // Control/Define the winner
    let winner = 0;
    let result = 0;
    if (n == 1) { // If number of towers is 1, the winner is always P1
        winner = 1;
    } else {
        if (m == 1) { // If size of towers is 1, the winner is always P2 
            winner = 2;
        } else {
            // If the number of towers is even P2 always wins
            if (isEven(n)) {
                winner = 2;
            } else {
                winner = 1;
            }
        }
    }

    return winner;
}

// Check if a number is even
function isEven(result) {
    if (result % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function main() {
    let n = 1;
    let m = 4;
    const result = towerBreakers(n, m);

    console.log(result);
}

main();