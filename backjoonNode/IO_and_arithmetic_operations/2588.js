/*
백준 2588번: 곱셈
https://www.acmicpc.net/problem/2588
*/

const fs = require("fs");
let [A, B] = fs.readFileSync("../inputt.txt").toString().trim().split('\n');

A = Number(A);
let B_num = B.split('').map((e) => {
    return A * Number(e);
});

for (i = 2; i > -1; i--) {
    console.log(B_num[i]);
}

console.log(A * Number(B));