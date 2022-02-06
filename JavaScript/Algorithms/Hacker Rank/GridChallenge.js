/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here

    // Define variables required for the method 
    var tempArray;
    var tempPreviousArray;
    var index=0;
    var index2=0;
    var answer='YES';

    // Looping through the array to sort each set of letters and verify with the previous array
    while((index < grid.length) && (answer != 'NO')) {
        if(index==0){ // Base Case
            // Just sort the letters, don't compare
            tempPreviousArray = Array.from(grid[index]);
            tempPreviousArray.sort(); // Sorting from a to z
        }else{  // Sort the actual letters and compare with the previous one
            tempArray = Array.from(grid[index]);
            tempArray.sort(); // Sorting from a to z 

            // Comparing the arrays using the charCode a = 97 and z = 122, so previous value should be <= to the next value
            while((index2 < tempArray.length) && (answer != 'NO')){
                if( ((tempArray[index2]).charCodeAt(0)) >= ((tempPreviousArray[index2]).charCodeAt(0)) ){
                    index2++;
                }else{ 
                    answer='NO';
                }
            }

            if(answer != 'NO'){ 
                index2=0;
                tempPreviousArray = tempArray;
            }
        }
        index++;
    }

    // Return response
    return answer;
}

function main() {
    var grid =  ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'];
    // grid = ['abc','ade','efg']; // Test #1
    // grid = ['abc','bcd','egz']; // Test #2
    // grid = ['abc','abc','abc']; // Test #3
    // grid = ['egz','abc','acd']; // Test #4
    grid = ['abc','bcd','ccc']; // Test #5

    const result = gridChallenge(grid);

    console.log(result);

}

main();