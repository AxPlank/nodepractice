/*
백준 11720: 숫자의 합
https://www.acmicpc.net/problem/11720
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n');

let sum = 0;
for (let i = 0; i < input[0]; i++) {
    sum += parseInt(input[1][i]);
}

console.log(sum);