/**
 * 백준 10870: 팩토리얼
 * https://www.acmicpc.net/problem/10870
*/

const fs = require('fs');
const N = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

const output = gerFact(N);

console.log(output);

function gerFact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return gerFact(n - 1) * n;
}