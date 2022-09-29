/*
백준 11720: 숫자의 합
https://www.acmicpc.net/problem/11720
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n');

// Sol 1 - loop
let sum = 0;
for (let i = 0; i < input[0]; i++) {
    sum += parseInt(input[1][i]);
}

console.log(sum);

// Sol 2 - reduce()
const Output = input[1].split('').map(Number)
    .reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);

console.log(Output);