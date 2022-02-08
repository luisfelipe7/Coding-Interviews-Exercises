function processData(input) {
    //Enter your code here

    // Defining the required variables
    var arrayOfOperations = input.split('\n');
    // Quantity of operations
    var quantityOfOperations = arrayOfOperations[0];
    // Actual position
    var actualPosition = 1;
    // Array with the letters
    var sArray = [];
    // Temp variables for the while loop
    var operation;
    var parameter;
    var tempArray;
    // Stack to save the status of the array
    var history = [[]];

    // Moving through all the operations
    while (actualPosition <= quantityOfOperations) {
        // Capturing the operation
        operation = arrayOfOperations[actualPosition];
        
        switch (operation[0]) {
            case '1':
                // Append element at the end of the array
                parameter = (operation.split(' '))[1];
                tempArray = Array.from(parameter);                
                sArray.push(...tempArray);                
                history.push(sArray.slice(0));
                break;
            case '2':
                // Remove parameter elements at the end of the array
                parameter = (operation.split(' '))[1];
                sArray.splice((sArray.length - 1) - (Number(parameter) - 1), sArray.length);
                history.push(sArray.slice(0));
                break;
            case '3':
                // Print element on parameter position
                parameter = Number((operation.split(' '))[1]) - 1;
                console.log(sArray[parameter]);
                break;
            case '4':
                // Undo the previous 1 or 2 performed action
                history.pop();
                sArray = (history[history.length - 1]).slice(0);
                break;
            default:
                // Not valid operation
                break;
        }
        actualPosition++;
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
