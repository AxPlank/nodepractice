/*
백준 3003번: 킹, 퀸, 룩, 비숍, 나이트, 폰
https://www.acmicpc.net/problem/3003
*/

const fs = require("fs");
const arr = fs.readFileSync("../inputt.txt").toString().split(' '); // 특정 파일의 내용을 읽어와 진행

standard = [1, 1, 2, 2, 2, 8];

for (i = 0; i < 6; i++) {
    standard[i] = standard[i] - Number(arr[i]);
}

console.log(standard.join(' '));