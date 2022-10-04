/**
 * 백준 1934: 최소공배수
 * https://www.acmicpc.net/problem/1934
*/

const fs = require('fs');
const [[T], ...cases] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let Output = [];

for (let arr of cases) {
    getGCDAndLCM(Math.max(...arr), Math.min(...arr));
}

console.log(Output.join('\n'));

function getGCDAndLCM(n1, n2) {
    let [GCD, LCM] = [0, n1 * n2];

    while (n2 > 0) {
        [n1, n2] = [n2, n1 % n2];
    }

    GCD = n1;
    LCM = parseInt(LCM / GCD);
    Output.push(LCM);
}