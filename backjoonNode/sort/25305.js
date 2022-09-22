/**
 * 백준 25305: 커트라인
 * https://www.acmicpc.net/problem/25305
*/

const fs = require('fs');
const [[N, k], scores] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });


console.log(scores.sort((a, b) => {
    return b - a;
})[k-1]);