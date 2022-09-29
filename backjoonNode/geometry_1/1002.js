/**
 * 백준 1002: 터렛
 * https://www.acmicpc.net/problem/1002
*/

const fs = require('fs');
const [[T], ...Cases] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let x1, y1, r1, x2, y2, r2;
let d;
let Output = [];

for (let i = 0; i < T; i++) {
    [x1, y1, r1, x2, y2, r2] = Cases[i];
    d = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));

    if (d === 0 && r1 === r2) {
        Output.push(-1);
    } else if (d === Math.abs(r1 - r2) || d === r1 + r2) {
        Output.push(1);
    } else if (d > Math.abs(r1 - r2) && d < r1 + r2) {
        Output.push(2);
    } else {
        Output.push(0);
    }
}

console.log(Output.join('\n'));