/*
백준 1978: 소수 찾기
https://www.acmicpc.net/problem/1978
*/

const fs = require('fs');

const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

// Sol 1 - loop
let cnt = 0;
for (let i = 0; i < input[0]; i++) {
    if (isPrime(input[1][i])) {
        cnt++;
    }
}

console.log(cnt);

function isPrime(n) { // 소수 판단 함수
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

// Sol 2 - Sieve of Eratosthenes
const Nums = input[1];
const MaxNum = Math.max(...Nums);
let NumsArr = Array(MaxNum+1).fill(true);
let cnt = 0;

isPrime();

for (let el of Nums) {
    if (NumsArr[el]) {
        cnt++;
    }
}

console.log(cnt);

function isPrime() { // 에라토스테네스의 체 구현 함수
    const SqrtMax = Math.floor(Math.sqrt(MaxNum)) + 1;

    for (let i = 0; i <= SqrtMax; i++) {
        if (i < 2) {
            NumsArr[i] = false;
            continue;
        }

        if (i % 2 !== 0 || i === 2) {
            for (let j = i * 2; j <= MaxNum; j += i) {
                if (NumsArr[j]) {
                    NumsArr[j] = false;
                }
            }
        }
    }
}