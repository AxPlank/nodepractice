/*
백준 2480번: 주사위 세개
https://www.acmicpc.net/problem/2480
*/

const fs = require("fs");
const [a, b, c] = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map(Number).sort();

if (a === b && b === c) {
    console.log(a * 1000 + 10000);
} else if (a === b || b === c) {
    console.log(b * 100 + 1000);
} else {
    console.log(c * 100);
}