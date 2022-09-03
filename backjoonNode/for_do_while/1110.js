/*
백준 1110: 더하기 사이클
https://www.acmicpc.net/problem/1110
*/

const fs = require('fs');
let input = Number(fs.readFileSync("../inputt.txt").toString().trim());

let [num, sumNum, i] = [Number(input), 0, 0];

while (true) {
    i++;

    sumNum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sumNum % 10;

    if (num === input) {
        console.log(i);
        break;
    }
}

// at(): array의 인덱스에 대해 좀 더 편리한 접근을 할 수 있게 해줌