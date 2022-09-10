/*
백준 2775: 부녀회장이 될테야
https://www.acmicpc.net/problem/2775
*/

const fs = require('fs');

const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n').map(Number);

const T = input[1];
let output = new String();
