/*
백준 2753번: 윤년
https://www.acmicpc.net/problem/2753
*/

const fs = require("fs");
const year = Number(fs.readFileSync("../inputt.txt").toString().trim()); // 특정 파일의 내용을 읽어와 진행

let multiple_4 = year % 4;
let multiple_100 = year % 100;
let multiple_400 = year % 400;

if ((multiple_4 == 0 && multiple_100 != 0) || multiple_400 == 0) {
    console.log(1);
} else {
    console.log(0);
}