/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here
    
    // Way to Solve is with this : Last Bracket to Open first Bracket to Close
    // So this a LIFO = Stack
    
    // Required variables
    var myOpenBStack=[]; // My stack of open brackets
    var openBrackets=['{','(','[']; // My array of open brackets
    var actual =0; // Actual position that we are checking on s
    var failed=false; // Boolean to stop checking if we found an bad bracket
    var tempValue=''; // Save temporal values
    
    // If we found a close bracket and we need their open equivalent we can use this
    var matchingBrackets={
        '}':'{',
        ')':'(',
        ']':'['
    }
    
    // Looping through the elements until we reach the end or found a bracket not matching
    while((actual< s.length)&&(failed==false)){
        // Checking if it is an open bracket
        if(openBrackets.includes(s[actual])){
            // If it is we just need to insert the open bracket on the stack at the end
            myOpenBStack.push(s[actual]);
        }else{
            // We are having a closing bracket, so we need to capture the value and get the equivalent
            tempValue = s[actual];
            tempValue = matchingBrackets[tempValue];
            
            // If the open is not equivalent to the last that we have on the array
            if(tempValue != myOpenBStack[myOpenBStack.length-1]){
                // Failed because we are closing another bracket
                failed =true;
            }else{
                // Passed, so we just need to remove the last open bracket on the stack
                myOpenBStack.pop();   
            }
        }
        // Increasing actual to continue looping
        actual++;
        
    }

    // If the stack is empty and the algorithm did not find issues all is good
    if((myOpenBStack.length==0)&&(failed==false)){
        return 'YES';
    }else{
        return 'NO';
    }
}