
function palindromeIndex(s) {
    // Write your code here
    let tempArray=[];
    let tempWord='';
    let indexFound=-1;
    // Check if the word is already a palindrome
    if (isPalindrome(s)) {
        return -1;
    } else {
        // Loop through the String s 
        let index = 0;
        while ((index<s.length) && (indexFound==-1)) {
            tempArray = Array.from(s);
            tempArray.splice(index,1);
            tempWord = tempArray.join('');
            if(isPalindrome(tempWord)){
                indexFound=index;
            }else{
                index++;
            }
        }
        return indexFound;
    }
}

function isPalindrome(s) {
    let array = Array.from(s);
    array = array.reverse();
    let reversedS = array.join('');
    if (reversedS == s) {
        return true;
    } else {
        return false;
    }

}


function main() {
        s='bobu';

        const result = palindromeIndex(s);

        console.log(result);
}

main();
