/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function countingSort(arr) {
    // Write your code here
    
    // Creating the new frequency array of the 100 size
    var frequencyArray = new Array(100);
    // Filling the array of Zeros
    frequencyArray.fill(0);
    // Then completing the array based on the count
    var index=0;
    while(index<arr.length){
        frequencyArray[arr[index]]+=1;
        ++index;
    }
    // Returning the array
    return frequencyArray;
}

function main() {
    let arr= new Array(100);
    arr.fill(0);
    arr.forEach(function(value,index){ 
        arr[index]= Math.floor(Math.random() * 100) + 1;
    });
    console.log('Arr: '+arr);

    const result = countingSort(arr);

    console.log('Result: '+result);

}

main();