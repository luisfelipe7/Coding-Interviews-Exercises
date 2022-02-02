/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here

    // Calculate Left Diagonal
    var leftDiagonal = calculateLeftDiagonal(arr);
    // Calculate Right Diagonal
    var rigthDiagonal = calculateRigthDiagonal(arr);

    // Return the difference
    if(leftDiagonal>rigthDiagonal){
        return leftDiagonal - rigthDiagonal;
    }else{
        return rigthDiagonal - leftDiagonal;
    }

}

function calculateLeftDiagonal(arr) {
    let index = 0;
    let leftDiagonal = 0;
    while (index < arr[0].length) {
        leftDiagonal += arr[index][index];
        ++index;
    }
    return leftDiagonal;
}

function calculateRigthDiagonal(arr) {
    let rowIndex = 0;
    let columnIndex = (arr[0].length) - 1;
    let rigthDiagonal = 0;
    while (rowIndex < arr[0].length) {
        rigthDiagonal += arr[rowIndex][columnIndex];
        ++rowIndex;
        --columnIndex;
    }
    return rigthDiagonal;
}

function main() {
    var arr= [[1,2,3],[4,5,6],[9,8,9]];

    const result = diagonalDifference(arr);

    console.log(result);
}

main();
