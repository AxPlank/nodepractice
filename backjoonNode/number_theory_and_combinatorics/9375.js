/**
 * 백준 9375: 패션왕 신혜빈
 * https://www.acmicpc.net/problem/9375
*/

const fs = require('fs');
let WearData = [];
let StartEnd = [];
const [T, ...arr] = fs.readFileSync('../inputt.txt').toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx > 0) {
            e = e.split(' ');
            
            if (e.length === 2) {
                WearData.push(e);
            } else {
                StartEnd.push(parseInt(e[0]));
            }
        } else {
            return parseInt(e);
        }
    });

let Output = [];

for (let i = 0; i < T; i++) {
    let Start = StartEnd.slice(0, i).reduce((previous, current) => previous + current, 0);
    getCnt(Start, Start + StartEnd[i]);
}

console.log(Output.join('\n'));

function getCnt(start, end) {
    let obj = {};

    for (let i = start; i < end; i++) {
        if (obj[WearData[i][1]]) {
            obj[WearData[i][1]]++;
        } else {
            obj[WearData[i][1]] = 2;
        }
    }
    
    let Cnt = Object.values(obj).reduce((previous, current) => previous * current, 1) - 1;

    Output.push(Cnt);
}