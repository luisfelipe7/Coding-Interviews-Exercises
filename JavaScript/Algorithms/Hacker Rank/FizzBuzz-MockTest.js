/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here

    // Create a counter to conrol the loop
    var counter = 1;
    // Loop while counter <= n
    while (counter <= n) {
        // Perform the conditions and printing
        switch (true) {
            case ((counter % 3 == 0) && (counter % 5 == 0)): // Multiple of 3 and 5
                console.log('FizzBuzz');
                break;
            case ((counter % 3 == 0)): // Multiple of 3
                console.log('Fizz');
                break;
            case ((counter % 5 == 0)): // Multiple of 5 
                console.log('Buzz');
                break;
            default: // Not multiple of 3 and 5
                console.log(counter);
                break;
        }
        // Print the conditions
        ++counter;
    }
}

function main() {
    const n = 15;

    fizzBuzz(n);
}

main();