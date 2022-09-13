/*
백준 1978: 소수 찾기
https://www.acmicpc.net/problem/1978
*/

const fs = require('fs');

const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let cnt = 0;

for (let i = 0; i < input[0]; i++) {
    if (isPrime(input[1][i])) {
        cnt++;
    }
}

console.log(cnt);

function isPrime(n) {
    if (n === 1) {
        return false;
    }

    for (let i = 2; i < Math.floor(n/2) + 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}