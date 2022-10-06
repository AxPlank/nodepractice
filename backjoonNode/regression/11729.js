/**
 * 백준 11729: 하노이 탑 이동 순서
 * https://www.acmicpc.net/problem/11729
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync("../inputt.txt").toString().trim());
let Output = [];

console.log(Math.pow(2, N) - 1);
Hanoi(N, 1, 3);
console.log(Output.join('\n'));

function Hanoi(N, out, inn) {
    if (N === 1) {
        Output.push(`${out} ${inn}`);
        return;
    }

    Hanoi(N-1, out, 6-inn-out);
    Output.push(`${out} ${inn}`);
    Hanoi(N-1, 6-out-inn, inn);
}