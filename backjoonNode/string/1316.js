/*
백준 1316: 그룹 단어 체커
https://www.acmicpc.net/problem/1316
*/

const fs = require('fs');

let input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n');

const T = parseInt(input[0]);
let cnt = 0;
function isGW(word) {
    let lenn = word.length;

    for (let i = 0; i < lenn-1; i++) {
        if (word[i] !== word[i+1] && word.slice(i+1, lenn).includes(word[i])) {
            return false;
        }
    }

    return true;
}

for (let i = 1; i < T+1; i++) {
    if (isGW(input[i])) {
        cnt++;
    }
}

console.log(cnt);