/*
백준 1110: 더하기 사이클
https://www.acmicpc.net/problem/1110
*/

const fs = require('fs');
let input = Number(fs.readFileSync("../inputt.txt").toString().trim());

/*
num: 사이클 도중 input와 값이 같은지 비교하기 위해 사용
sumNum: num의 각 자리의 수들을 합하여 만든 값
i: 사이클 횟수
*/
let [num, sumNum, i] = [Number(input), 0, 0];

while (true) {
    i++;

    sumNum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sumNum % 10;

    if (num === input) { // input과 num이 같다면 사이클이 종료되어야 하므로, i를 출력 후 반복문 종료
        console.log(i);
        break;
    }
}

// at(): array의 인덱스에 대해 좀 더 편리한 접근을 할 수 있게 해줌. 파이썬의 단일 인덱스 접근과 유사한 방식