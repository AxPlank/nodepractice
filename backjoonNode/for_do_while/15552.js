/*
백준 15552번: 빠른 A+B
https://www.acmicpc.net/problem/15552
*/

// Sol 1
const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let output = String();
for (let i = 1; i < 1 + input[0][0]; i++) {
    output += `${input[i][0] + input[i][1]}\n`; // 합 계산 후, 출력문에 저장
}

console.log(output);