/*
백준 2292: 벌집
https://www.acmicpc.net/problem/2292
*/

const fs = require('fs');

let X = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

let cnt = 1;
let room = 1;

while (N > room) {
    room += 6 * cnt;
    cnt++;
}

console.log(cnt);