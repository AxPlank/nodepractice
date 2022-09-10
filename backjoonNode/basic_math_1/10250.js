/*
백준 10250: ACM 호텔
https://www.acmicpc.net/problem/10250
*/

const fs = require('fs');

const input = fs.readFileSync("../inputt.txt").toString().trim().split('\r\n')
    .map((e) => {
        return e.split(' ').map(Number);
    });

const T = input[0];
const caseArr = input.slice(1, input.length);
let room = String();

for (let i = 0; i < T; i++) {
    room += getRoom(caseArr[i]) + '\n';
}

console.log(room);

function getRoom(arr) {
    const [H, W, N] = arr;
    
    let room = N % H === 0?
        H * 100 + N / H:
        (N % H) * 100 + Math.floor(N / H) + 1;
    
    return room;
}