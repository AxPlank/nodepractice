/**
 * 백준 1181: 단어 정렬
 * https://www.acmicpc.net/problem/1181
*/

const fs = require('fs');
const [N, ...points] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n');
console.log(points);

const output = new Set(points.sort((a, b) => {
    if (a.length > b.length) {
        return 1;
    } else if (a.length === b.length) {
        if (a > b) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return -1
    }
}));

console.log(Array(...output).join('\n'));