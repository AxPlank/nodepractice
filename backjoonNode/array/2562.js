/*
백준 2562: 최댓값
https://www.acmicpc.net/problem/2562
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n').map(Number);

let maxNum = Math.max(...input);

for (let i = 0; i < input.length; i++) {
    if (input[i] == maxNum) {
        console.log(maxNum);
        console.log(i+1);
        break;
    }
}