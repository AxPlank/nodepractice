/**
 * 백준 2609: 최대공약수와 최소공배수
 * https://www.acmicpc.net/problem/2609
*/

const fs = require('fs');
const [N1, N2] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);
let Output = [];

getGCDAndLCM(Math.max(N1, N2), Math.min(N1, N2));

console.log(Output.join('\n'));

function getGCDAndLCM(n1, n2) {
    let GCD, LCM;

    while (n2 > 0) {
        [n1, n2] = [n2, n1 % n2];
    }

    GCD = n1;
    Output.push(GCD);

    LCM = parseInt(N1 * N2 / GCD);
    Output.push(LCM);
}