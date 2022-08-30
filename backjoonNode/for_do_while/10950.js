/*
백준 2739번: 구구단
https://www.acmicpc.net/problem/2739
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

for (let i = 1; i < input[0][0] + 1; i++) {
    console.log(input[i][0] + input[i][1]);
}