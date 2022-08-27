/*
백준 10430번: 나머지
https://www.acmicpc.net/problem/10430
*/

const fs = require("fs");
const [A, B, C] = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map((e) => {return Number(e);});

const ret1 = (A + B) % C;
const ret2 = ((A%C) + (B%C)) % C;
const ret3 = (A * B) % C;
const ret4 = ((A%C) * (B%C)) % C;

console.log(ret1);
console.log(ret2);
console.log(ret3);
console.log(ret4);