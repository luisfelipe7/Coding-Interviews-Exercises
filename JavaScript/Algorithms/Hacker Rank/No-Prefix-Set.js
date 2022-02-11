'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/* Data Structure : Tree  */
class Node {
    data;
    left;
    right;
    isRoot;

    constructor(word, isRoot) {
        this.data = word[0];
        this.left = null;
        this.right = null;
        this.isRoot = isRoot;
        if (this.isRoot == true) {
            this.createTree(word);
        }
    }

    isLeaf() {
        if ((this.left == null) && (this.right == null)) {
            return true;
        } else {
            return false;
        }
    }

    createTree(word) {
        if (word.length > 1) {
            var actualPos = 1;
            var actualNode = this;
            this.insertRecursive(actualPos, actualNode, word);
        }
    }

    insertRecursive(actualPos, actualNode, word) {
        if (actualPos >= word.length) {
            // Do Nothing ends
        } else {
            var letter = word[actualPos];
            var tempNewNode = new Node(letter, false);
            if (actualNode.data.charCodeAt() <= tempNewNode.data.charCodeAt()) {
                actualNode.right = tempNewNode;
            } else {
                actualNode.left = tempNewNode;
            }
            actualNode = tempNewNode;
            this.insertRecursive(actualPos + 1, actualNode, word);
        }
    }

    isPrefix(root, actualPosition, word) {
        if (root.isLeaf()) {
            if (root.data == word[actualPosition]) {
                return word;
            } else {
                return "";
            }
        } else {
            if (root.data != word[actualPosition]) {
                return "";
            }

            if (root.left != null) {
                root = root.left;
            } else {
                root = root.right;
            }

            return this.isPrefix(root, actualPosition + 1, word);
        }
    }
}

/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function getResult(actualPosition, words, found, result) {
    if (found == true) {
        console.log('BAD SET');
        console.log(result);
    } else {
        if ((actualPosition >= words.length) || (words.length == 1)) {
            console.log('GOOD SET');
        } else {
            var word = words[actualPosition];
            var rootNode = new Node(word, true);
            var value = getResult3(0, rootNode, word, actualPosition, words);
            if (value != "") {
                getResult(actualPosition + 1, words, true, value);
            } else {
                getResult(actualPosition + 1, words, false, "");
            }
        }
    }
}

function getResult3(actualPosition, rootNode, originalWord, rootPosition, words) {
    if (actualPosition >= rootPosition) {
        return "";
    } else {
        var tempValue = words[actualPosition];
        var result2 = "";
        if (originalWord.length <= tempValue.length) {
            result2 = (rootNode.isPrefix(rootNode, 0, tempValue));
        }
        var result3 = "";
        var tempNode;
        if (tempValue.length <= tempValue.length) {
            if (result2 == "") {
                tempNode = new Node(tempValue, true);
                result3 = (tempNode.isPrefix(tempNode, 0, originalWord));
            }
        }
        var maxPosition = Math.max(actualPosition, rootPosition);

        if ((result2 != "") || (result3 != "")) {
            if (maxPosition == rootPosition) {
                return originalWord;
            } else {
                return tempValue;
            }
        }
        return getResult3(actualPosition + 1, rootNode, originalWord, rootPosition, words);
    }
}

function noPrefix(words) {
    // Write your code here
    getResult(0, words, false, "");
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < n; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    noPrefix(words);
}