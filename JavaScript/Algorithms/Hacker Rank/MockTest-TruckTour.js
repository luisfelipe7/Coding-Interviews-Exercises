/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */


// Created a class to make easier solve the circular queue
class MyCircularQueue {
    // Variables
    elements = []; // Control the elements
    capacity = null; // Quantity of elements
    tail = 0; // Control the tail
    head = 0; // Control the head
    actual = 0; // Control the actual pointer
    tank = 0; // Control the tank of the "car"
    foundMinIndex = false; // Control if we found the minimum index
    minIndex = -1; // Control the minimum index

    // Constructor with the basic values and initializing values
    constructor(elements, capacity) {
        this.elements = elements;
        this.capacity = capacity;
        this.tank = 0;
        this.foundMinIndex = false;
        this.minIndex = -1;
        this.actual = -1;
    }

    // Set the head
    setHead() {
        if (this.actual == -1) { // If it is the first time setting the head
            this.head = 0;
            this.tail = (this.capacity - 1);
        } else { // More than the first time setting the head
            this.head += 1;
            this.tail = this.head - 1;
        }
    }

    // Getter for the minimum index
    getMinIndex() {
        return this.minIndex;
    }

    // Start searching the minimun index
    startCheckingMinIndex() {

        // If the array is just having one element
        if (this.capacity != 1) {
            // Setting the initial head
            this.setHead();

            // Checking with each head/tail until found the value or the head is greater than the size
            while ((this.head < this.capacity) && (this.foundMinIndex == false)) {
                // Capturing the values 
                var petrol = (this.elements[this.head])[0];
                var distance = (this.elements[this.head])[1];
                // Setting the difference
                var difference = petrol - distance;
                // Actual pointing to head
                this.actual = this.head;

                // If the value is negative we can't start with that value
                if (difference >= 0) {
                    this.minIndex = this.head;
                    var counter = 1;
                    var failed = false;
                    this.tank = 0;
                    this.tank += difference;

                    // Checking with the head defined the values until fails or reach the end
                    while ((counter < this.capacity) && (failed == false)) {
                        // If actual is at the end of the array
                        if ((this.actual + 1) == (this.capacity)) {
                            petrol = (this.elements[0])[0];
                            distance = (this.elements[0])[1];
                            difference = petrol - distance;
                            this.actual = 0;
                        } else {
                            // If is not at the end just capture the value and increase the actual
                            petrol = (this.elements[this.actual + 1])[0];
                            distance = (this.elements[this.actual + 1])[1];
                            difference = petrol - distance;
                            this.actual += 1;
                        }

                        // If the difference is negative it fails
                        if ((difference + this.tank) < 0) {
                            failed = true;
                            // If head is at the end there is no path or way to complete the circle
                            if (this.head == this.capacity - 1) {
                                this.foundMinIndex = true;
                                this.minIndex = -1;
                            } else {
                                // If head is not at the end we can move to the next head and set the new tail
                                this.head = this.actual + 1;
                                this.tail = this.head - 1;
                            }
                        } else {
                            // If the difference is positive we can keep checking
                            this.tank += difference;
                            counter++;
                            // If the counter reach the capacity it means all the values were checked sucessfully
                            if (counter == this.capacity) {
                                this.foundMinIndex = true;
                            }
                        }
                    }
                } else {
                    // Setting the next head
                    this.setHead();
                }
            }
        } else {
            // Only one element on the array so just checking the first element
            var petrol = (this.elements[0])[0];
            var distance = (this.elements[0])[1];
            var difference = petrol - distance;

            if (difference >= 0) {
                this.minIndex = 0;
            }
        }
    }
}

function truckTour(petrolpumps) {
    // Write your code here

    // Creating instance of class to calculate the value easier
    var myCircleQueue = new MyCircularQueue(petrolpumps, petrolpumps.length);
    // Calling the method in charge of calculating the minimum value
    myCircleQueue.startCheckingMinIndex();

    // The minimum value is set on the variable called minIndex so we just return the variable
    return myCircleQueue.getMinIndex();
}



function main() {
    let petrolpumps = [[1, 5], [10, 3], [3, 4]];
    // petrolpumps = [[6,5],[7,6],[4,7],[10,8],[6,6],[5,4]];
    // petrolpumps = [[1, 1], [0, 0], [9, 1]];
    // petrolpumps = [[4, 6]];

    const result = truckTour(petrolpumps);

    console.log(result);

}

main();
