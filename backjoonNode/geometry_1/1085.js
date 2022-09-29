/**
 * 백준 1085: 직사각형에서 탈출
 * https://www.acmicpc.net/problem/1085
*/

const fs = require('fs');
const [x, y, w, h] = fs.readFileSync('../inputt.txt').toString().trim().split(' ').map(Number);

const MinDistance = Math.min(x, y, w - x, h - y);
console.log(MinDistance);