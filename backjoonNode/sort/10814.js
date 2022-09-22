/**
 * 백준 10814: 나이순 정렬
 * https://www.acmicpc.net/problem/10814
*/

const fs = require('fs');
const [N, ...members] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ');
    });

const output = members.sort((a, b) => {
    if (parseInt(a[0]) >= parseInt(b[0])) {
        return 1;
    } else {
        return -1;
    }
}).map((e) => {
    return e.join(' ');
}).join('\n');

console.log(output);