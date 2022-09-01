/*
백준 25304번: 영수증
https://www.acmicpc.net/problem/25304
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let sum = 0;
for (let i = 2; i < 2 + input[1][0]; i++) {
    sum += input[i][0] * input[i][1];
}

sum == input[0][0]? console.log("Yes"): console.log("No");