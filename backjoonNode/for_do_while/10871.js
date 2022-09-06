/*
백준 10871번: X보다 작은 수
https://www.acmicpc.net/problem/10871
*/
// Solve
const fs = require('fs');
var input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

// Sol 1
var output = Array();
var X = input[0][1];
for (var i = 0; i < input[0][0]; i++) {
    if (input[1][i] < X) {
        output.push(input[1][i]);
    }
}

console.log(...output);

// So1 2
var output = String();
var X = input[0][1];
for (var i = 0; i < input[0][0]; i++) {
    if (input[1][i] < X) {
        output += input[1][i] + ' ';
    }
}

console.log(output);