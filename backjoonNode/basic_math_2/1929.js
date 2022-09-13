/*
백준 1929: 소수 구하기
https://www.acmicpc.net/problem/1929
*/

const fs = require('fs');

const [M, N] = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map(Number);

let arr = new Array(N+1).fill(true);
arr[0] = arr[1] = false;
let output = new Array();

for (let i = 2; i < arr.length; i++) {
    if (i === 2 || i % 2 !== 0) {
        for (let j = i * 2; j < N+1; j += i) {
            arr[j] = false;
        }
    }
}

for (let i = M; i < N + 1; i++) {
    if (arr[i]) {
        output.push(i);
    }
}

console.log(output.join('\n'));