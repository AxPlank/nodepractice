/*
백준 2869: 달팽이는 올라가고 싶다
https://www.acmicpc.net/problem/2869
*/

const fs = require('fs');

let [A, B, V] = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map(Number);

let days = Math.ceil(V - B / A - B);
console.log(days);