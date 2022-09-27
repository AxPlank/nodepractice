/**
 * 백준 2231: 분해합
 * https://www.acmicpc.net/problem/2231
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync('../inputt.txt').toString().trim());
let sum;

for (let i = 0; i < N; i++) {
    sum = i + i.toString().split('').map(Number)
        .reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
    
    if (sum === N) {
        console.log(i);
        process.exit();
    }
}

console.log(0);