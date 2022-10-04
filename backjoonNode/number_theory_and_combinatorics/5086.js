/**
 * 백준 5086: 배수와 약수
 * https://www.acmicpc.net/problem/5086
*/

const fs = require('fs');
const input = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let Output = [];
let i = 0;

while (input[i][0] !== 0 && input[i][1] !== 0) {
    let [N1, N2] = input[i];

    if (N2 % N1 === 0) {
        Output.push('factor');
    } else if (N1 % N2 === 0) {
        Output.push('multiple');
    } else {
        Output.push('neither');
    }

    i++;
}

console.log(Output.join('\n'));