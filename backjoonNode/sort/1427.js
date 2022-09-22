/**
 * 백준 1427: 소트인사이드
 * https://www.acmicpc.net/problem/1427
*/

const fs = require('fs');
const N = fs.readFileSync("../inputt.txt").toString().trim().split('').map(Number)
    .sort((a, b) => {
        return b - a;
    });

console.log(N.join(''));