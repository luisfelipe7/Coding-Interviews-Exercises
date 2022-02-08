function processData(input) {
    //Enter your code here

    // Defining the required variables

    // Separating the input in lines
    var lines = input.split('\n');
    var queue = [];
    var x = null;
    var line;
    var action;
    var tempOutput;

    // Ignoring the quantity of queries
    for (var i = 1; i < lines.length; i++) {
        //Looping through the lines
        line = lines[i];
        action = line[0];

        switch (action) {
            case '1':
                // Enqueue element x into the end of the queue
                x = ((line.split(' '))[1]);
                queue.push(x);
                break;
            case '2':
                // Dequeue the element at the front of the queue
                queue.shift();
                break;
            case '3':
                // Printing the element in front of the queue
                console.log(queue[0]);
                break;
            default:
                // Not valid action entered, doing nothing.
                console.log('Not valid');
                break;
        }

    }
}