/*
백준 2775: 부녀회장이 될테야
https://www.acmicpc.net/problem/2775
*/


// Sol 1: 함수 제작
const fs = require('fs');

const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

const T = input[0];
const casee = input.slice(1, input.length);
let k, n, people;
let output = new Array(T).fill(0);

for (let i = 0; i < T; i++) {
    [k, n] = [casee[i*2], casee[i*2+1]];
    people = getComb(k, n);

    output.push(people);
}

function getComb(k, n) {
    let [comb_n, comb_r] = [n+k, k+1]

    return getFact(comb_n) / (getFact(comb_r) * getFact(comb_n-comb_r));
}

function getFact(n) {
    if (n === 1 || n === 0) {
        return 1;
    }

    return getFact(n-1) * n;
}

console.log(output.join('\n'));

/* 반례 관련 질문올림 (https://www.acmicpc.net/board/view/99824)
*/