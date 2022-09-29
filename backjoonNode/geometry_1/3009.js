/**
 * 백준 3009: 네 번째 점
 * https://www.acmicpc.net/problem/3009
*/

const fs = require('fs');
let XPoint = [];
let YPoint = [];
const input = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        e = e.split(' ').map(Number);
        XPoint.push(e[0]);
        YPoint.push(e[1]);
    });

for (let x of XPoint) {
    for (let y of YPoint) {
        if (XPoint.filter((e) => e === x).length === 1) {
            if (YPoint.filter((e) => e === y).length === 1) {
                console.log(`${x} ${y}`);
                break;
            }
        }
    }
}