/**
 * 백준 2477: 참외밭
 * https://www.acmicpc.net/problem/2477
*/

const fs = require('fs');
const [[K], ...input] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e = e.split(' ').map(Number);
    });

for (let i = 0; i < 6; i++) {
    if (input.at(i)[0] === input.at(i-2)[0] && input.at(i-1)[0] === input.at(i-3)[0]) {
        let area = input.at(i-4)[1] * input.at(i-5)[1] - input.at(i-2)[1] * input.at(i-1)[1];
        console.log(area * K);
        break
    }
}