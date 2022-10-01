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
let room = [];

for (let i = 0; i < T; i++) {
    room.push(getRoom(caseArr[i]));
}

console.log(room.join('\n'));

function getRoom(arr) {
    const [H, W, N] = arr;
    
    let room = N % H === 0? // 꼭대기 층 여부 확인
        H * 100 + N / H: // 꼭대기 층이면, 나머지가 0이므로, 건물 층 수 * 100 + 몫이 방의 번호가 됨
        (N % H) * 100 + Math.floor(N / H) + 1; // 아니라면, 건물 층 수로 나눈 나머지 * 100 + 몫이 방 번호
    
    return room;
}