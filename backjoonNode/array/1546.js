/*
백준 1546: 평균
https://www.acmicpc.net/problem/1546
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

let maxScore = Math.max(...input[1]);
let table = input[1].map((e) => {
    return e / maxScore * 100;
});

let sumScore = table.reduce((accumulator, current) => accumulator + current, 0);

console.log(sumScore / table.length);