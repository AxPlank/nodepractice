/*
백준 9020: 골드바흐의 추측
https://www.acmicpc.net/problem/9020
*/

const fs = require('fs');
const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

let T = input[0];
let casee = input.slice(1, input.length);
let output = new String();

for (let i = 0; i < T; i++) {
    for (let j = Math.floor(casee[i]/2); j > 1; j--) {
        if (isPrime(j) && isPrime(casee[i]-j)) {
            output += `${j} ${casee[i]-j}` + '\n';
            break;
        }
    }
}

console.log(output);

function isPrime(n) {
    for (let i = 2; i < Math.floor(Math.sqrt(n)+1); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}