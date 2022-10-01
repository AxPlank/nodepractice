/*
백준 1193: 분수찾기
https://www.acmicpc.net/problem/1193
*/

const fs = require('fs');

let X = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

let line = 1;

while (X > line) {
    X -= line;
    line++;
}

if (line % 2 === 0){ // 짝수 번째 줄은 분자 증가, 분모 감소
    console.log(`${X}/${line+1-X}`);
} else { // 홀수 번째 줄은 분자 감소, 분모 증가
    console.log(`${line+1-X}/${X}`);
}