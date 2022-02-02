

function obtainMedian(arr){

    let sortedArray = arr.sort(function(a,b){
    return a-b;
    });

    let mediamPosition = Math.trunc(sortedArray.length/2);

    console.log(sortedArray[mediamPosition]);

}


function main(){
    let arr=[11,10,8,7,6,5,4,3,2,1,9];

    obtainMedian(arr);
}

main();