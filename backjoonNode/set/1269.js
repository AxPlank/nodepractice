/**
 * 백준 1269: 대칭 차집합
 * https://www.acmicpc.net/problem/1269
*/

const fs = require('fs');
const [[nA, nB], A, B] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx === 0) {
            return e.split(' ').map(Number);
        } else {
            return new Set(e.split(' ').map(Number));
        }
    });

const a = [...A].filter((e) => {
    return !B.has(e);
}).length;
const b = [...B].filter((e) => {
    return !A.has(e);
}).length;

console.log(a + b);