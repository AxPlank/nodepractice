/*
백준 1330번: 두 수 비교하기
https://www.acmicpc.net/problem/1330
*/

const fs = require("fs");
const [A, B] = fs.readFileSync("../inputt.txt").toString().split(' ')
    .map((e) => {return Number(e);}); // 특정 파일의 내용을 읽어와 진행

if (A > B) {
    console.log('>');
} else if (A == B) {
    console.log('==');
} else {
    console.log('<');
}