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

if (line % 2 === 0){
    console.log(`${X}/${line+1-X}`);
} else {
    console.log(`${line+1-X}/${X}`);
}