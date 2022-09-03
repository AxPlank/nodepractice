/*
백준 10952번: A+B - 5
https://www.acmicpc.net/problem/10952
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let output = String();
for (let i = 0; i < input.length; i++) {
    if (input[i][0] === 0 && input[i][0] === input[i][1]) {
        break;
    }
    output += `${input[i][0] + input[i][1]}\n`;
}

console.log(output);