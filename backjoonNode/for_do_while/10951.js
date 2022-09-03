/*
백준 10951: A+B - 4
https://www.acmicpc.net/problem/10952
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim.split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

for (let i = 0; i < input.length; i++) {
    console.log(input[i][0] + input[i][1]);
}