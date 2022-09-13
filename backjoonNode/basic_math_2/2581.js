/*
백준 2581: 소수
https://www.acmicpc.net/problem/2581
*/

const fs = require('fs');

const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

// Sol 1 - 반복문 이용
let [summ, cntMin, minPrime] = [0, 0, 0];

for (let i = input[0]; i < input[1] + 1; i++) {
    if (i === 1) {
        continue;
    }

    if (i !== 2 && i % 2 === 0) {
        continue;
    }

    if (isPrime(i)) {
        summ += i;
        
        if (cntMin === 0) {
            minPrime = i;
            cntMin++;
        }
    }
}

if (summ === 0) {
    console.log(-1);
} else {
    console.log(`${summ}\n${minPrime}`);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Sol 2 - 에라토스테네스의 체 이용
[summ, minPrime] = [0, 0];
let cnt = 0;
let arr = new Array(input[1] + 1).fill(true);

arr[0] = arr[1] = false;
for (let i = 2; i < Math.floor(Math.sqrt(input[1])) + 1; i++) {
    for (let j = i * 2; j < input[1] + 1; j += i) {
        arr[j] = false;
    }
}

for (let i = input[0]; i < arr.length; i++) {
    if (arr[i]) {
        if (cnt === 0) {
            minPrime = i;
            cnt++;
        }
        summ += i;
    }
}

if (summ === 0) {
    console.log(-1);
} else {
    console.log(summ);
    console.log(minPrime);
}