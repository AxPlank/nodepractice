/**
 * 백준 11651: 좌표 정렬하기 2
 * https://www.acmicpc.net/problem/11651
*/

const fs = require('fs');
const [N, ...points] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

const output = points.sort((a, b) => {
    if (a[1] > b[1]) {
        return 1;
    } else if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return -1
    }
}).map((e) => {
    return e.join(' ');
}).join('\n');

console.log(output);