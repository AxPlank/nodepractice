/*
백준 3052: 나머지
https://www.acmicpc.net/problem/3052
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n').map(Number);

let arr = Array();

for (let i = 0; i < input.length; i++) {
    if (!arr.includes(input[i] % 42)) {
        arr.push(input[i] % 42);
    }
}

console.log(arr.length);