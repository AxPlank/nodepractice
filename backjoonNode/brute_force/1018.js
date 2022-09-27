/**
 * 백준 1018: 체스판
 * https://www.acmicpc.net/problem/1018
*/

const fs = require('fs');
const [[x, y], ...board] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx === 0) {
            return e.split(' ').map(Number);
        } else {
            return e;
        }
    });
let CntW, CntB;
let CntMin = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < x - 7; i++) {
    for (let j = 0; j < y - 7; j++) {
        CntW = CntB = 0;

        for (let k = i; k < i + 8; k++) {
            for (let l = j; l < j + 8; l++) {
                check(k, l);
            }
        }

        CntMin = Math.min(CntB, CntW, CntMin);
    }
}

console.log(CntMin);

function check(k, l) {
    if ((k + l) % 2 === 0) {
        if (board[k][l] !== 'W') {
            CntW++;
        }

        if (board[k][l] !== 'B') {
            CntB++;
        }
    } else {
        if (board[k][l] !== 'B') {
            CntW++;
        }

        if (board[k][l] !== 'W') {
            CntB++;
        }
    }
}