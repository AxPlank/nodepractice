/**
 * 백준 1010: 다리 놓기
 * https://www.acmicpc.net/problem/1010
*/

const fs = require('fs');
const [T, ...cases] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let Output = [];

for (let i = 0; i < T; i++) {
    Output.push(getComb(cases[i][1], cases[i][0]));
}

console.log(Output.join('\n'));

function getComb(N, M) {
    const [NFact, MFact, NMFact] = [getFact(N), getFact(M), getFact(N-M)];

    return Math.round(NFact / MFact / NMFact);
}

function getFact(n) {
    if (n <= 1) {
        return 1;
    } else {
        return getFact(n-1) * n;
    }
}