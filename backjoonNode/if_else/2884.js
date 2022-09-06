/*
백준 2884번: 알람 시계
https://www.acmicpc.net/problem/2884
*/

const fs = require("fs");
const [H, M] = fs.readFileSync("../inputt.txt").toString().trim().split(' ').map(Number);

if (M >= 45) { // 00시 45분 ~ 00시 59분
    console.log(...[H, M - 45]);
}
if (M < 45) { // 나머지
    H === 0? console.log(...[23, M + 15]):console.log(...[H - 1, M + 15]);
}