/*
백준 2739번: 구구단
https://www.acmicpc.net/problem/2739
*/

const fs = require('fs');
let N = Number(fs.readFileSync("../inputt.txt").toString());

for (let i = 1; i < 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
}