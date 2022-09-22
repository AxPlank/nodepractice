/**
 * 백준 11650: 좌표 정렬하기
 * https://www.acmicpc.net/problem/11650
*/

const fs = require('fs');
const [N, ...points] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

const output = points.sort((a, b) => {
    if (a[0] > b[0]) {
        return 1;
    } else if (a[0] === b[0]) {
        return a[1] - b[1];
    } else {
        return -1
    }
}).map((e) => {
    return e.join(' ');
}).join('\n');

console.log(output);