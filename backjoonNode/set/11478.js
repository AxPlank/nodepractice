/**
 * 백준 11478: 서로 다른 부분 문자열의 개수
 * https://www.acmicpc.net/problem/11478
*/

const fs = require('fs');
const Str = fs.readFileSync('../inputt.txt').toString().trim();

const StrLen = Str.length
let Output = new Set();

// Sol 1 - slice()
for (let i = 0; i < StrLen; i++) {
    for (let j = i + 1; j < StrLen + 1; j++) {
        Output.add(Str.slice(i, j));
    }
}

console.log([...Output].length);

// Sol 2 - substring()
for (let i = 0; i < StrLen; i++) {
    for (let j = i + 1; j < StrLen + 1; j++) {
        Output.add(Str.substring(i, j));
    }
}

console.log([...Output].length);