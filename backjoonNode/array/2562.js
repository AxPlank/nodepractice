/*
백준 2562: 최댓값
https://www.acmicpc.net/problem/2562
*/

const fs = require('fs');
let input = fs.readFileSync("../inputt.txt").toString().trim().split('\n').map(Number);

let maxNum = Math.max(...input);

// Sol 1: 반복문 이용
for (let i = 0; i < input.length; i++) {
    if (input[i] == maxNum) {
        console.log(maxNum);
        console.log(i+1);
        break;
    }
}

// Sol 2: indexOf() 이용
let getMax = Math.max(...input);
console.log(getMax);
console.log(input.indexOf(getMax) + 1);

/*
indexOf(value): array/string 에서 value가 제일 처음 위치한 인덱스를 반환
lastIndexOf(Value): array/string에서 value가 위치한 제일 마지막 인덱스를 반환
*/