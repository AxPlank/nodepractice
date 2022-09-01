/*
백준 11022번: A+B - 8
https://www.acmicpc.net/problem/11022
*/

// Sol 1
const fs = require('fs');
var input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

var output = String();
for (var i = 1; i < 1 + input[0][0]; i++) {
    output += `Case #${i}: ${input[i][0]} + ${input[i][1]} = ${input[i][0] + input[i][1]}\n`;
}

console.log(output);

// Sol2
const fs = require('fs');
var input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

var output = String();
for (var i = 1; i < 1 + input[0][0]; i++) {
    console.log(`Case #${i}: ${input[i][0]} + ${input[i][1]} = ${input[i][0] + input[i][1]}`);
}