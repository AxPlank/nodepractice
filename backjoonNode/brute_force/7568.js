/**
 * 백준 7568: 덩치
 * https://www.acmicpc.net/problem/7568
*/

const fs = require('fs');
const [[N], ...people] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });
let output = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i != j) {
            if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
                output[i]++;
            }
        }
    }
}

console.log(output.join(' '));