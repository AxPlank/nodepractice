/*
백준 8958: OX퀴즈
https://www.acmicpc.net/problem/8958
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n');

T = Number(input[0]);
for (let i = 1; i < T + 1; i++) {
    let score = 0;
    let sumScore = 0;

    for (let j = 0; j < input[i].length; j++) {
        input[i][j] === 'O'? score++: score = 0 ;
        sumScore += score;
    }

    console.log(sumScore);
}