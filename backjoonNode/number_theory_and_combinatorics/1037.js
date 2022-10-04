/**
 * 백준 1037: 약수
 * https://www.acmicpc.net/problem/1037
*/

const fs = require('fs');
const [[n], Factors] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number).sort((a, b) => a - b);
    });

// Sol 1 - sort()
console.log(Factors[0] * Factors[n-1]);

// Sol 2 - Math.min(), Math.max()
console.log(Math.max(...Factors) * Math.min(...Factors));