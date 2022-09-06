/*
백준 11654: 아스키 코드
https://www.acmicpc.net/problem/11654
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim();

console.log(input.charCodeAt(0));