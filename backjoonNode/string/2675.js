/*
백준 2675: 문자열 반복
https://www.acmicpc.net/problem/2675
*/
function getWord(n, word) {
    return word.split('').map((e) => {
        return e.repeat(n);
    }).join('');
}

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ');
    });

const T = parseInt(input[0]);
let output = String();
for (let i = 1; i < T+1; i++) {
    output += getWord(parseInt(input[i][0]), input[i][1]) + '\n';
}

console.log(output);