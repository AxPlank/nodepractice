/*
백준 2292: 벌집
https://www.acmicpc.net/problem/2292
*/

const fs = require('fs');

let N = parseInt(fs.readFileSync("../inputt.txt").toString().trim());

let cnt = 1;
let room = 1;

while (N > room) { // 계차수열 구현. 한 바퀴 돌때마다, 한 바퀴를 돌기 위해 이동해야 하는 칸 수는 6칸씩 증가할 것
    room += 6 * cnt;
    cnt++;
}

console.log(cnt);