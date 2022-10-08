/**
 * 백준 1676: 팩토리얼 0의 개수
 * https://www.acmicpc.net/problem/1676
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync('../inputt.txt').toString().trim());

let Nfact = String(getFact(N));
let i = -1;

while (Nfact.at(i) === '0') {
    i--;
}

console.log(Math.abs(i+1));

function getFact(n) {
    if (n <= 1) {
        return BigInt(1);
    } else {
        return getFact(n-1) * BigInt(n);
    }
}