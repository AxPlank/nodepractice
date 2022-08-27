/*
백준 9498번: 시험 성적
https://www.acmicpc.net/problem/9498
*/

const fs = require("fs");
const score = Number(fs.readFileSync("../inputt.txt").toString().trim()); // 특정 파일의 내용을 읽어와 진행

if (90 <= score && score <= 100) {
    console.log('A');
} else if (80 <= score && score <= 89) {
    console.log('B');
} else if (70 <= score && score <= 79) {
    console.log('C');
} else if (60 <= score && score <= 69) {
    console.log('D');
} else {
    console.log('F');
}