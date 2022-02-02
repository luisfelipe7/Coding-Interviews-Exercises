/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {

    // Write your code here

    // Instead of rotating the columns/rows the plan is to calculate which one is the highest value
    // between the options that we have

    // Defining required variables
    var rows = matrix.length;
    var columns = matrix[0].length - 1;
    var total = 0;
    var element = 0;
    var element2 = 0;
    var element3 = 0;
    var element4 = 0;

    // Checking cases -> Matrix[2*n][2*n]

    // #1 Case n=1 -> 2*1 = 2
    if (columns == 2) {
        element = matrix[rowIndex][columnIndex]; // Initial
        element2 = matrix[rowIndex][columns - columnIndex - 1]; //  (Right)
        element3 = matrix[columns - rowIndex - 1][columnIndex]; // (Down)
        element4 = matrix[columns - rowIndex - 1][columns - columnIndex - 1]; //  (Down-Right)
        // Calculating the max between the elements
        total += Math.max((Math.max(element, element2)), (Math.max(element3, element4)));
    } else {

        // #2 Any other case n>1 -> 2*2 = 4 for example
        for (var rowIndex = 0; rowIndex < (rows / 2); rowIndex++) {
            for (var columnIndex = 0; columnIndex < (rows / 2); columnIndex++) {
                element = matrix[rowIndex][columnIndex]; // Initial
                element2 = matrix[rowIndex][columns - columnIndex]; //  (Right)
                element3 = matrix[columns - rowIndex][columnIndex]; // (Down)
                element4 = matrix[columns - rowIndex][columns - columnIndex]; //  (Down-Right)
                // Calculating the max between the elements
                total += Math.max((Math.max(element, element2)), (Math.max(element3, element4)));
            }
        }
    }

    // Value with the total
    return total;
}


function main() {
    let matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
    // matrix=[[1,2],[3,4]]; 
    // matrix=[[4,180],[140,110]];
    // matrix=[[107,54,128,15],[12,75,110,138],[100,96,34,85],[75,15,28,112]];

    const result = flippingMatrix(matrix);

    console.log(result);
}

main();

