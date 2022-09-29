/*
백준 2675: 문자열 반복
https://www.acmicpc.net/problem/2675
*/

const fs = require('fs');
let [T, ...cases] = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e, idx) => {
        if (idx === 0) {
            return parseInt(e);
        } else {
            return e.split(' ').map((e, idx) => {
                if (idx === 0) {
                    return parseInt(e);
                } else {
                    return e;
                }
            });
        }
    });
let Output = [];

for (let i = 0; i < T; i++) {
    Output.push(getWord(cases[i][0], cases[i][1]));
}

console.log(Output.join('\n'));

/**
 * 각 문자열 반복시켜 리턴시키는 함수
 */
function getWord(n, word) {
    return word.split('').map((e) => {
        return e.repeat(n);
    }).join('');
}