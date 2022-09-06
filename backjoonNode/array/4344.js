/*
백준 4344: 평균은 넘겠지
https://www.acmicpc.net/problem/4344
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

T = Number(input[0]);
let avg;
let cnt;

for (let i = 1; i < input.length; i++) {
    avg = (input[i].reduce((accumulator, current) => accumulator + current, 0) - input[i][0]) / input[i][0];
    cnt = 0

    for (let j = 1; j < input[i].length; j++) {
        if (input[i][j] > avg) {
            cnt++;
        }
    }

    console.log(`${(100 * cnt / input[i][0]).toFixed(3)}%`);
}