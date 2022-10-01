/*
백준 1316: 그룹 단어 체커
https://www.acmicpc.net/problem/1316
*/

const fs = require('fs');

let input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n');

const T = parseInt(input[0]);
let cnt = 0;

for (let i = 1; i < T+1; i++) {
    if (isGW(input[i])) {
        cnt++;
    }
}

console.log(cnt);

function isGW(word) { // 연속성 판별 함수
    let lenn = word.length;

    // i번 째 인덱스 이전까지 등장했던 값들에 대해, 연속적으로 등장하지 않는 것이 확인되면 false 리턴
    for (let i = 0; i < lenn-2; i++) {
        if (word[i] !== word[i+1] && word.slice(i+2, lenn).includes(word[i])) {
            return false;
        }
    }

    return true;
}