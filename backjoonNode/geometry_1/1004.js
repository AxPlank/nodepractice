/**
 * 백준 1004: 어린 왕자
 * https://www.acmicpc.net/problem/1004
*/

const fs = require('fs');
const [[T], ...input] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

const StartEnd = input.filter((e) => {
    return e.length === 4;
});
const PlanetData = input.filter((e) => {
    return e.length === 3;
});
let PlanetCnt = [];

for (let i of input) {
    if (i.length === 1) {
        PlanetCnt.push(i[0]);
    }
}

let Output = [];
let start;

for (let i = 0; i < T; i++) {
    start = PlanetCnt.slice(0, i).reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);

    getPassCnt(start, PlanetCnt[i], i);
}

console.log(Output.join('\n'));

function getPassCnt(start, last, idx) {
    const [x1, y1, x2, y2] = StartEnd[idx];
    let cx, cy, r;
    let d1, d2;
    let cnt = 0;

    for (let i = start; i < start + last; i++) {
        [cx, cy, r] = PlanetData[i];
        d1 = Math.sqrt(Math.pow(x1-cx, 2) + Math.pow(y1-cy, 2));
        d2 = Math.sqrt(Math.pow(x2-cx, 2) + Math.pow(y2-cy, 2));

        if ((d1 > r && d2 < r) || (d1 < r && d2 > r)) {
            cnt++;
        }
    }

    Output.push(cnt);
} 