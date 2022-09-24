/**
 * 백준 25501: 재귀의 귀재
 * https://www.acmicpc.net/problem/25501
*/

const fs = require('fs');
const [N, ...words] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n');

let output = [];
for (let i = 0; i < parseInt(N); i++) {
    isPalindrome(words[i]);
}

console.log(output.join('\n'));

function isPalindrome(word) {
    return recursion(word, 1);
}

function recursion(word, cnt) {
    if (word.length <= 1) {
        return output.push(`1 ${cnt}`);
    }

    if (word[0] === word[word.length-1]) {
        recursion(word.substring(1, word.length-1), cnt+1);
    } else {
        return output.push(`0 ${cnt}`);
    }
}