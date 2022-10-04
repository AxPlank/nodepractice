/**
 * 백준 3036: 링
 * https://www.acmicpc.net/problem/3036
*/

const fs = require('fs');
const [[N], Ns] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let Output = [];

for (i = 1; i < N; i++) {
    let LCM = getLCM(Math.max(Ns[0], Ns[i]), Math.min(Ns[0], Ns[i]));
    Output.push(`${parseInt(LCM/Ns[i])}/${parseInt(LCM/Ns[0])}`);
}

console.log(Output.join('\n'));

function getLCM(n1, n2) {
    let LCM = n1 * n2;

    while (n2 > 0) {
        [n1, n2] = [n2, n1 % n2];
    }

    LCM = parseInt(LCM / n1);
    return LCM;
}