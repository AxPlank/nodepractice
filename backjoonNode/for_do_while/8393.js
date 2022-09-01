/*
백준 8393번: 합
https://www.acmicpc.net/problem/8393
*/

const fs = require('fs');
let input = Number(fs.readFileSync("../inputt.txt").toString());

let sum = 0;
for (let i = 1; i <= input; i++) {
    sum += i;
}

console.log(sum);